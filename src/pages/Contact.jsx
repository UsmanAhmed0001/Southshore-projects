import { useState } from 'react'
import HeroVideo from '../components/HeroVideo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'

const enquiryTypes = [
  'New project enquiry',
  'Maintenance enquiry',
  'Product enquiry',
  'Supplier enquiry',
  'Career enquiry',
  'Collaboration'
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    message: ''
  })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    // POST /api/contact — wire this up to your backend
    // (Nodemailer / Hostinger SMTP, just like the Kreston site)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      }).catch(() => {})
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <>
      <HeroVideo
        eyebrow="Contact"
        title={<>We would love to <em className="italic font-normal text-brass-400">hear from you.</em></>}
        subtitle="Drop us a note, give us a call, or come and find us in Wimbledon."
        variant="compact"
      />

      <PageHeader
        eyebrow="Get in touch"
        title="A short conversation is the fastest way to start."
        intro="Tell us a little about your project — site, scale, timeline if you have one — and we will be back to you within one working day."
      />

      {/* Contact split */}
      <section className="bg-sand-50 pb-32">
        <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-6">Direct lines</div>
            </Reveal>
            <Reveal delay={100}>
              <a
                href="tel:07802342616"
                className="block font-display text-4xl md:text-5xl tracking-tightest text-ink-900 hover:text-brass-500 transition-colors duration-500"
              >
                07802 342 616
              </a>
            </Reveal>
            <Reveal delay={150}>
              <a
                href="tel:+447591217629"
                className="block mt-2 font-display text-2xl text-ink-700 hover:text-brass-500 transition-colors duration-500"
              >
                +44 7591 217629
              </a>
            </Reveal>
            <Reveal delay={180}>
              <a
                href="tel:+4402077409165"
                className="block mt-2 font-display text-xl text-ink-500 hover:text-brass-500 transition-colors duration-500"
              >
                T: +44 020 7740 9165
              </a>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="mailto:info@southshoreprojects.com"
                className="block mt-6 text-lg text-ink-900 link-underline w-fit"
              >
                info@southshoreprojects.com
              </a>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-12 pt-10 border-t border-ink-200">
                <div className="eyebrow mb-4">Office hours</div>
                <p className="text-ink-700 leading-relaxed">
                  Monday — Saturday<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 pt-10 border-t border-ink-200">
                <div className="eyebrow mb-2">Head Office</div>
                <address className="not-italic text-ink-700 leading-relaxed">
                  <strong className="text-ink-900 font-medium">Wimbledon, London</strong><br />
                  Highland House, 165–167<br />
                  The Broadway,<br />
                  Wimbledon SW19 1NE
                </address>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 pt-8 border-t border-ink-200">
                <div className="eyebrow mb-2">Branch Office</div>
                <address className="not-italic text-ink-700 leading-relaxed">
                  <strong className="text-ink-900 font-medium">Midlands</strong><br />
                  181 Arkwright Road,<br />
                  Irchester,<br />
                  Wellingborough NN29 7HG
                </address>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="bg-ink-950 text-sand-50 p-8 md:p-12 grain">
                {submitted ? (
                  <div className="py-10">
                    <div className="eyebrow text-brass-400 mb-6">Thank you</div>
                    <h3 className="font-display text-4xl md:text-5xl tracking-tightest leading-tight">
                      Your message is on its way.
                    </h3>
                    <p className="mt-6 text-sand-100/70 max-w-md leading-relaxed">
                      We will be in touch within one working day. If your question is urgent,
                      please give us a call — that is always the quickest route.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-7">
                    <div>
                      <div className="eyebrow text-sand-100/60 mb-3">Send us a message</div>
                      <h3 className="font-display text-3xl md:text-4xl tracking-tightest leading-tight mb-2">
                        Fill out the form and we will be in touch shortly.
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-7">
                      <label className="block">
                        <span className="text-[11px] uppercase tracking-widestplus text-sand-100/60">Name *</span>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={onChange}
                          className="input-base text-sand-50 placeholder:text-sand-100/30 border-sand-100/20 focus:border-sand-50"
                          placeholder="Your full name"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[11px] uppercase tracking-widestplus text-sand-100/60">Email *</span>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={onChange}
                          className="input-base text-sand-50 placeholder:text-sand-100/30 border-sand-100/20 focus:border-sand-50"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-[11px] uppercase tracking-widestplus text-sand-100/60">Phone</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        className="input-base text-sand-50 placeholder:text-sand-100/30 border-sand-100/20 focus:border-sand-50"
                        placeholder="Optional"
                      />
                    </label>

                    <label className="block">
                      <span className="text-[11px] uppercase tracking-widestplus text-sand-100/60">Select the enquiry *</span>
                      <select
                        name="enquiry"
                        required
                        value={form.enquiry}
                        onChange={onChange}
                        className="input-base text-sand-50 border-sand-100/20 focus:border-sand-50 bg-ink-950 appearance-none"
                        style={{
                          backgroundImage:
                            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 8%27%3E%3Cpath fill=%27%23fbf9f5%27 d=%27M6 8L0 0h12z%27/%3E%3C/svg%3E")',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.25rem center',
                          backgroundSize: '10px 6px',
                          paddingRight: '1.75rem'
                        }}
                      >
                        <option value="" disabled>Select…</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t} className="bg-ink-950">{t}</option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-[11px] uppercase tracking-widestplus text-sand-100/60">Message *</span>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={onChange}
                        className="input-base text-sand-50 placeholder:text-sand-100/30 border-sand-100/20 focus:border-sand-50 resize-none"
                        placeholder="Tell us about your project…"
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-sand-50 text-ink-950 px-7 py-4 text-sm
                                 font-medium tracking-wide uppercase transition-all duration-500
                                 hover:bg-brass-400"
                    >
                      Send <span aria-hidden>→</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-32 bg-sand-50">
        <div className="container-prose">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div>
                <div className="eyebrow mb-4">Visit</div>
                <h3 className="display-1 text-[clamp(2rem,4vw,3.5rem)] text-ink-900">
                  Highland House, Wimbledon.
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Highlands+House+165+The+Broadway+London+SW19+1NE"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm uppercase tracking-widestplus font-medium"
              >
                Open in Google Maps →
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-ink-200">
              <iframe
                title="Southshore Projects — Wimbledon office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1374728479873!2d-0.20074162350260846!3d51.41890127179331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608a5388b0b99%3A0x8af1ff383ef71104!2sHighlands%20House%20the%20Broadway%2C%20165%20The%20Broadway%2C%20London%20SW19%201NE%2C%20UK!5e0!3m2!1sen!2s!4v1719985013518!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}