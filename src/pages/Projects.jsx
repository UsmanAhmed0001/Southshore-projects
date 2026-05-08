import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Projects() {
  return (
    <>
      <HeroVideo
        eyebrow="Projects"
        title={<>Coming <em className="italic font-normal text-brass-400">soon.</em></>}
        subtitle="A curated set of recent and ongoing projects is on its way. In the meantime, the gallery has a small selection."
        variant="compact"
      />

      <section className="py-32 md:py-40 bg-sand-50 grain">
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="font-mono text-xs text-brass-500">— PROJECTS</div>
              </Reveal>
            </div>
            <div className="lg:col-span-10 lg:col-start-3">
              <Reveal delay={120}>
                <h2 className="display-1 text-[clamp(3rem,12vw,12rem)] text-ink-900 leading-[0.9]">
                  We are <em className="italic font-normal text-brass-500">building</em><br />
                  the case studies.
                </h2>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-12 max-w-2xl text-xl text-ink-500 leading-relaxed">
                  Properly written project profiles, plans, and progress photography are being
                  prepared. While they are in production, we are happy to share recent work
                  privately on request — including drawings, costs, and references to past clients.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Request case studies <span aria-hidden>→</span>
                  </Link>
                  <Link to="/gallery" className="btn-ghost">
                    View the gallery
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Status board */}
          <div className="mt-32 grid md:grid-cols-3 gap-px bg-ink-200">
            {[
              { label: 'In design', value: '4 projects', detail: 'Residential & commercial schemes' },
              { label: 'On site',   value: '6 projects', detail: 'Across London & the South' },
              { label: 'In handover', value: '2 projects', detail: 'Completing this quarter' }
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 120} className="bg-sand-50 p-8 md:p-12">
                <div className="eyebrow mb-6">{s.label}</div>
                <div className="font-display text-4xl md:text-5xl tracking-tightest text-ink-900">
                  {s.value}
                </div>
                <div className="mt-3 text-ink-500">{s.detail}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
