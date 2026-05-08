import HeroVideo from '../components/HeroVideo.jsx'
import Reveal from '../components/Reveal.jsx'

/**
 * Structural scaffold for the Modern Slavery Statement page.
 *
 * Modern Slavery statements are required disclosures under the Modern Slavery
 * Act 2015 and must reflect your business's actual policies and supply-chain
 * arrangements. Paste the current statement text from the live site (or your
 * uncle's most up-to-date approved version) into the `sections` array below.
 *
 * Pull the up-to-date version from:
 *   https://southshoreprojects.com/modern-slavery-statement
 */

const sections = [
  {
    number: '1',
    heading: 'Policy Statement',
    items: [
      { num: '1.1', body: 'Paste the 1.1 paragraph here.' },
      { num: '1.2', body: 'Paste the 1.2 paragraph here.' },
      { num: '1.3', body: 'Paste the 1.3 paragraph here.' },
      { num: '1.4', body: 'Paste the 1.4 paragraph here.' },
      { num: '1.5', body: 'Paste the 1.5 paragraph here (this typically references the financial year).' }
    ]
  },
  {
    number: '2',
    heading: 'Responsibility for this Policy',
    items: [
      { num: '2.1', body: 'Paste the 2.1 paragraph here.' },
      { num: '2.2', body: 'Paste the 2.2 paragraph here.' },
      { num: '2.3', body: 'Paste the 2.3 paragraph here.' },
      { num: '2.4', body: 'Paste the 2.4 paragraph here.' }
    ]
  },
  {
    number: '3',
    heading: 'Compliance with the Policy',
    items: [
      { num: '3.1', body: 'Paste the 3.1 paragraph here.' },
      { num: '3.2', body: 'Paste the 3.2 paragraph here.' },
      { num: '3.3', body: 'Paste the 3.3 paragraph here.' },
      { num: '3.4', body: 'Paste the 3.4 paragraph here.' },
      { num: '3.5', body: 'Paste the 3.5 paragraph here.' },
      { num: '3.6', body: 'Paste the 3.6 paragraph here.' },
      { num: '3.7', body: 'Paste the 3.7 paragraph here.' }
    ]
  },
  {
    number: '4',
    heading: 'Communication and Awareness of the Policy',
    items: [
      { num: '4.1', body: 'Paste the 4.1 paragraph here.' },
      { num: '4.2', body: 'Paste the 4.2 paragraph here.' }
    ]
  },
  {
    number: '5',
    heading: 'Breaches of the Policy',
    items: [
      { num: '5.1', body: 'Paste the 5.1 paragraph here.' },
      { num: '5.2', body: 'Paste the 5.2 paragraph here.' }
    ]
  }
]

export default function ModernSlavery() {
  return (
    <>
      <HeroVideo
        eyebrow="Statement"
        title={<>Modern Slavery <em className="italic font-normal text-brass-400">Statement.</em></>}
        subtitle="Our commitment to acting ethically across our business and our supply chain, in line with the Modern Slavery Act 2015."
        variant="compact"
      />

      <section className="bg-sand-50 py-24 md:py-32">
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sticky meta column */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="eyebrow mb-3">Document</div>
                </Reveal>
                <Reveal delay={80}>
                  <div className="font-display text-2xl tracking-tightest text-ink-900 leading-tight">
                    Modern Slavery Statement
                  </div>
                </Reveal>
                <Reveal delay={140}>
                  <nav className="mt-6 pt-6 border-t border-ink-200 space-y-2">
                    {sections.map((s) => (
                      <a
                        key={s.number}
                        href={`#section-${s.number}`}
                        className="block text-sm text-ink-500 hover:text-ink-900 transition-colors"
                      >
                        <span className="font-mono text-xs text-brass-500 mr-2">{s.number}.</span>
                        {s.heading}
                      </a>
                    ))}
                  </nav>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-8 pt-6 border-t border-ink-200 text-sm text-ink-500 space-y-2">
                    <div><span className="text-ink-900">Authority:</span> Modern Slavery Act 2015</div>
                    <div><span className="text-ink-900">Review:</span> Annually</div>
                  </div>
                </Reveal>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 lg:col-start-5">
              {sections.map((s, i) => (
                <Reveal key={s.number} delay={i * 60}>
                  <section id={`section-${s.number}`} className="mb-16 scroll-mt-32">
                    <div className="flex items-baseline gap-4 mb-8">
                      <span className="font-mono text-sm text-brass-500">{String(s.number).padStart(2, '0')}</span>
                      <h2 className="font-display text-3xl md:text-4xl tracking-tightest text-ink-900 leading-tight">
                        {s.heading}
                      </h2>
                    </div>
                    <div className="space-y-5">
                      {s.items.map((item) => (
                        <div key={item.num} className="grid grid-cols-12 gap-4">
                          <span className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-400 mt-1.5">
                            {item.num}
                          </span>
                          <p className="col-span-10 sm:col-span-11 text-ink-700 leading-relaxed">
                            {item.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
