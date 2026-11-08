import HeroVideo from '../components/HeroVideo.jsx'

const sections = [
  {
    heading: 'Who we are',
    body: [
      'This website is run by Southshore Projects Limited ("we", "us"). We are the controller of the personal information described in this policy.',
      'Head office: Highland House, 165–167 The Broadway, Wimbledon SW19 1NE. Email: info@southshoreprojects.com. Phone: +44 7802 342 616.',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'When you use our contact form we collect your name, email address, phone number (if you give it), the type of enquiry and your message.',
      'When you email or call us we keep the details you give us so that we can reply and, if you go ahead, deliver your project.',
      'We do not use the website to collect payment details, and we do not knowingly collect information from children.',
    ],
  },
  {
    heading: 'Why we use it',
    body: [
      'We use your information only to respond to your enquiry, to prepare quotes, and to carry out and manage any project you ask us to do.',
      'Our lawful bases under UK GDPR are our legitimate interest in responding to people who contact us, and taking steps at your request before entering into a contract (and performing that contract if you appoint us).',
      'We do not sell your information and we do not send you marketing emails.',
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      'We use a small number of trusted service providers to run the website and our email. They only process your information on our instructions:',
    ],
    list: [
      'Vercel — hosts this website and processes basic technical data such as your IP address.',
      'Resend — delivers contact form messages to our inbox (EU region).',
      'Microsoft (Outlook) — our business email provider.',
      'Cloudinary — serves some images and video on the site.',
      'Google Fonts — serves the fonts used on the site.',
      'Google Maps — only if you click "Show map" on our Contact page.',
    ],
    after: [
      'Some of these providers may process data outside the UK. Where they do, they use legal safeguards approved under UK data protection law, such as the UK International Data Transfer Addendum or the UK–US Data Bridge.',
      'We may also share information where the law requires it, or with professional advisers such as accountants and insurers.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'If your enquiry does not lead to a project, we delete your details within 2 years.',
      'If you become a client, we keep project and billing records for 6 years after the project ends, as required for tax and legal purposes.',
    ],
  },
  {
    heading: 'Cookies',
    body: [
      'This website does not set its own cookies and does not use analytics or advertising trackers.',
      'Google may set cookies if you choose to load the map on our Contact page. The map stays switched off until you click "Show map".',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You have the right to ask for a copy of your information, to have it corrected, to have it deleted, to restrict or object to how we use it, and to receive it in a portable format.',
      'To use any of these rights — including asking us to delete your data — email info@southshoreprojects.com. We will reply within one month.',
      'If you are unhappy with how we handle your information, you can complain to the Information Commissioner\u2019s Office (ICO) at ico.org.uk or on 0303 123 1113.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The latest version will always be on this page.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <HeroVideo
        eyebrow="Privacy"
        title={<>Privacy <em className="italic font-normal text-brass-400">Policy.</em></>}
        subtitle="How we collect, use and protect your personal information."
        variant="compact"
      />

      <section className="bg-sand-50 py-24 md:py-32">
        <div className="container-prose max-w-3xl">
          <p className="text-sm text-ink-500 mb-12">Last updated: 8 November 2026</p>

          {sections.map((s) => (
            <div key={s.heading} className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl tracking-tightest text-ink-900 leading-tight mb-5">
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="text-ink-700 leading-relaxed mb-4">{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-2 mb-4">
                  {s.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-ink-700 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brass-500 flex-shrink-0" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {s.after && s.after.map((p) => (
                <p key={p} className="text-ink-700 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}