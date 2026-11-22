// api/contact.js — Vercel serverless function
// Sends contact-form submissions to info@southshoreprojects.com via Resend.
// Security: origin check, rate limiting, honeypot, input validation,
// length limits and HTML escaping (blocks XSS / header injection).

const ALLOWED_ORIGINS = [
  'https://southshoreprojects.com',
  'https://www.southshoreprojects.com',
]

// Best-effort rate limit: 5 messages per 10 minutes per IP (per server instance)
const hits = new Map()
const LIMIT = 5
const WINDOW = 10 * 60 * 1000

// Turn <, >, &, " and ' into safe text so nothing can run inside the email
const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// Single-line fields: strip line breaks, trim, cap length
const clean = (s, max) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default async function handler(req, res) {
  // Only POST allowed
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Only accept requests from the Southshore website itself
  const origin = req.headers.origin || ''
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  // Rate limiting
  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW)
  if (recent.length >= LIMIT) {
    return res.status(429).json({ error: 'Too many requests' })
  }
  hits.set(ip, [...recent, now])

  const b = req.body || {}

  // Honeypot: real visitors never fill this in — pretend success, send nothing
  if (b.website) {
    return res.status(200).json({ ok: true })
  }

  // Validate + sanitise
  const name = clean(b.name, 100)
  const email = clean(b.email, 200)
  const phone = clean(b.phone, 30)
  const enquiry = clean(b.enquiry, 60)
  const message = String(b.message ?? '').trim().slice(0, 5000)

  if (!name || !EMAIL_RE.test(email) || message.length < 5) {
    return res.status(400).json({ error: 'Please check your details' })
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Southshore Website <no-reply@southshoreprojects.com>',
        to: ['info@southshoreprojects.com'],
        reply_to: email,
        subject: `New enquiry: ${enquiry || 'General'} — ${name}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> ${esc(email)}</p>
          <p><strong>Phone:</strong> ${esc(phone) || '—'}</p>
          <p><strong>Enquiry type:</strong> ${esc(enquiry) || '—'}</p>
          <p><strong>Message:</strong></p>
          <p>${esc(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!r.ok) {
      console.error('Resend error:', r.status) // status only — no API details leaked
      return res.status(502).json({ error: 'Could not send' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Server error' })
  }
}