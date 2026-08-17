export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, enquiry, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Southshore Website <onboarding@resend.dev>',
        to: ['info@southshoreprojects.com'],
        reply_to: email,
        subject: `New enquiry: ${enquiry || 'General'} — ${name}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || '—'}</p>
          <p><strong>Enquiry type:</strong> ${enquiry || '—'}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || '').replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!r.ok) {
      const detail = await r.text()
      console.error('Resend error:', detail)
      return res.status(502).json({ error: 'Email service failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}