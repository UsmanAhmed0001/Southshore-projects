import HeroVideo from '../components/HeroVideo.jsx'
import Reveal from '../components/Reveal.jsx'

/**
 * Structural scaffold for the Equal Opportunity Policy page.
 *
 * The original site uses a legally-worded HR policy. Because policy wording
 * is specific to your business and changes over time, paste your uncle's
 * current policy text into the `sections` array below. Each section will
 * render with consistent typography and rhythm.
 *
 * Pull the up-to-date version from:
 *   https://southshoreprojects.com/equal-opportunity-policy
 */

const sections = [
  {
    heading: 'Commitment to Equal Opportunities',
    body: [
      // ⤵ Replace these placeholder paragraphs with the policy text from the live site.
      'Paste the first paragraph of your uncle\'s policy here.',
      'Paste any additional paragraphs here. Each item in this array becomes one paragraph on the page.'
    ],
    list: null
  },
  {
    heading: null,
    body: [
      'Optional intro to the legislative list. Paste here if needed.'
    ],
    list: [
      'Item one of the policy list (paste from the live site).',
      'Item two.',
      'Item three.',
      'Item four.',
      'Item five.'
    ],
    listType: 'ordered'
  },
  {
    heading: 'Employment Practices',
    body: ['Paste the Employment Practices section here.']
  },
  {
    heading: 'Monitoring and Review Arrangements',
    body: ['Paste the Monitoring and Review section here.']
  },
  {
    heading: 'Grievance and Disciplinary Procedures',
    body: ['Paste the Grievance and Disciplinary section here.']
  },
  {
    heading: 'Training',
    body: ['Paste the Training section here.']
  },
  {
    heading: 'Rehabilitation of Offenders',
    body: ['Paste the Rehabilitation of Offenders section here.']
  },
  {
    heading: 'Equal Pay',
    body: [
      'Paste the first paragraph of the Equal Pay section here.',
      'Paste subsequent paragraphs as further entries.'
    ]
  }
]

export default function EqualOpportunity() {
  return (
    <>
      <HeroVideo
        eyebrow="Policy"
        title={<>Equal Opportunity <em className="italic font-normal text-brass-400">Policy.</em></>}
        subtitle="Our commitment to fair treatment, equal opportunity, and dignity at work."
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
                    Equal Opportunity Policy
                  </div>
                </Reveal>
                <Reveal delay={140}>
                  <div className="mt-6 pt-6 border-t border-ink-200 text-sm text-ink-500 space-y-2">
                    <div><span className="text-ink-900">Owner:</span> Board of Directors</div>
                    <div><span className="text-ink-900">Review:</span> Annually</div>
                    <div><span className="text-ink-900">Format:</span> Statement</div>
                  </div>
                </Reveal>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 lg:col-start-5 prose prose-lg max-w-none">
              {sections.map((s, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="mb-12">
                    {s.heading && (
                      <h2 className="font-display text-3xl md:text-4xl tracking-tightest text-ink-900 leading-tight mb-6">
                        {s.heading}
                      </h2>
                    )}
                    {s.body && s.body.map((p, j) => (
                      <p key={j} className="text-ink-700 leading-relaxed mb-5">{p}</p>
                    ))}
                    {s.list && s.listType === 'ordered' && (
                      <ol className="space-y-3 mt-4 list-none">
                        {s.list.map((li, k) => (
                          <li key={k} className="flex gap-4 text-ink-700 leading-relaxed">
                            <span className="font-mono text-xs text-brass-500 mt-1.5 flex-shrink-0">
                              {String(k + 1).padStart(2, '0')}
                            </span>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
