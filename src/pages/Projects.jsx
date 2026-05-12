import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import Reveal from '../components/Reveal.jsx'

// ─── Project data extracted from sample drawing packages ────────────────────
// Cover images use the site's existing Cloudinary assets.
// Swap src values for actual site photography when available.
const projects = [
  {
    id: 'south-hill-road',
    number: '01',
    status: 'Building Regs Approved',
    statusColor: 'bg-brass-400 text-ink-950',
    title: 'Open-Plan Ground Floor Remodel',
    location: 'South Hill Road, Bromley BR2',
    region: 'South London',
    year: '2024',
    services: ['Structural Engineering', 'Building Regulations', 'Structural Calculations'],
    cover: 'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025506/south-pexels-heyho-02-min_xhui4w.jpg',
    coverAlt: 'Open plan residential interior following wall removal',
    summary:
      'Load-bearing wall removal between the kitchen, dining, and lounge to create a continuous open-plan ground floor. Full structural package designed and submitted for building regulations approval, including steel beam sizing, pad footing foundations, and connection details.',
    scope: [
      'Load-bearing wall removal — ground floor',
      'Steel beam design: UC 203×203×60 & UC 203×203×71 (S355)',
      'Pad footing foundation design (1500×1500mm & 1500×1700mm)',
      'Ground floor beam plan & foundation plan',
      'Structural details: connections, fire protection, restraint straps',
      'Building regulations drawings (BREG-0001–0007)',
    ],
    drawingCount: 7,
    quote: 'One opening. The whole ground floor transformed.',
  },
  {
    id: 'bromley-br2-9sl',
    number: '02',
    status: 'Planning Submitted',
    statusColor: 'bg-ink-200 text-ink-900',
    title: 'First Floor Rear Extension & Loft Conversion',
    location: 'Bromley, BR2 9SL',
    region: 'South London',
    year: '2024',
    services: ['Architecture', 'Structural Engineering', '3D Visualisation', 'Planning'],
    cover: 'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-06-min_uxqhuc.jpg',
    coverAlt: 'Residential extension with loft conversion — proposed 3D view',
    summary:
      'Combined first floor rear extension and full loft conversion for a two-storey terraced property in Bromley. The scheme adds a 31m² loft bedroom, extends the first floor footprint to the rear, and reconfigures the layout to create four bedrooms and a family bathroom. Full planning and structural package delivered.',
    scope: [
      'Rear extension at first floor level — flat roof construction',
      'Full loft conversion — 31m² usable loft bedroom + bathroom',
      'Architectural planning drawings: plans, elevations, sections (A-000–A-008)',
      '3D perspectives: 4 exterior views + 2 sectional cut-throughs',
      'Structural plans: beam, joist, lintel, ridge beam & roof plans (A-0013–0016)',
      'Structural details: connections, fire protection, warm flat roof, stud wall specs',
      'Party Wall Act notices prepared',
    ],
    drawingCount: 19,
    quote: 'Four bedrooms from two. No footprint change at ground level.',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <HeroVideo
        eyebrow="Projects"
        title={<>Work that <em className="italic font-normal text-brass-400">speaks for itself.</em></>}
        subtitle="A selection of residential and structural projects across London and the South of England."
        variant="compact"
      />

      {/* Intro */}
      <section className="bg-sand-50 py-24 md:py-28">
        <div className="container-prose grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal><div className="eyebrow mb-6">Featured work</div></Reveal>
            <Reveal delay={120}>
              <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900">
                Two projects from the drawing board.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <Reveal delay={200}>
              <p className="text-lg text-ink-500 leading-relaxed">
                These are sample drawing packages showing the depth and quality of our
                structural and architectural work. Client names and addresses are withheld.
                Full packages — including calculations, specifications, and references — are
                available on request.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Request full packages <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-sand-50 pb-12">
        <div className="container-prose space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="border border-ink-200 overflow-hidden group">

                {/* Cover image */}
                <div className="relative h-72 md:h-[480px] overflow-hidden bg-ink-900">
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60
                               transition-transform duration-[3000ms] group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

                  {/* Top row */}
                  <div className="absolute top-6 inset-x-6 md:top-8 md:inset-x-8 flex items-start justify-between">
                    <span className={`inline-flex text-[10px] uppercase tracking-widestplus font-medium px-3 py-1.5 ${p.statusColor}`}>
                      {p.status}
                    </span>
                    <span className="font-mono text-xs text-sand-100/60">{p.year}</span>
                  </div>

                  {/* Bottom overlay text */}
                  <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.services.map(s => (
                        <span key={s}
                          className="text-[10px] uppercase tracking-widestplus text-sand-100/70
                                     border border-sand-100/30 px-2.5 py-1">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-end justify-between gap-4 flex-wrap">
                      <div>
                        <div className="eyebrow text-sand-100/60 mb-1">
                          {p.number} — {p.region}
                        </div>
                        <h3 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tightest
                                       text-sand-50 leading-tight max-w-3xl">
                          {p.title}
                        </h3>
                      </div>
                      <div className="text-sand-100/60 text-sm flex-shrink-0">
                        {p.drawingCount} drawings
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail panel */}
                <div className="grid md:grid-cols-12 gap-0 bg-sand-50 border-t border-ink-200">
                  {/* Left: summary */}
                  <div className="md:col-span-7 p-6 md:p-10 border-b md:border-b-0 md:border-r border-ink-200">
                    <div className="eyebrow mb-4">Project summary</div>
                    <p className="text-ink-700 leading-relaxed">{p.summary}</p>

                    {/* Quote */}
                    <div className="mt-8 pl-5 border-l-2 border-brass-400">
                      <p className="font-display text-xl md:text-2xl tracking-tightest text-ink-900 italic">
                        "{p.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Right: scope */}
                  <div className="md:col-span-5 p-6 md:p-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="eyebrow">Scope of works</div>
                      <button
                        onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                        className="text-[11px] uppercase tracking-widestplus text-ink-500
                                   hover:text-ink-900 transition-colors duration-300 flex items-center gap-2"
                      >
                        {expanded === p.id ? 'Less' : 'All'}
                        <span aria-hidden className={`transition-transform duration-300 inline-block ${expanded === p.id ? 'rotate-180' : ''}`}>↓</span>
                      </button>
                    </div>

                    <ul className="space-y-3">
                      {(expanded === p.id ? p.scope : p.scope.slice(0, 4)).map((item, j) => (
                        <li key={j}
                          className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brass-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                      {expanded !== p.id && p.scope.length > 4 && (
                        <li className="text-xs text-ink-400 pl-4">
                          +{p.scope.length - 4} more items…
                        </li>
                      )}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-ink-200 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widestplus text-ink-400 mb-1">Location</div>
                        <div className="text-sm text-ink-700 font-medium">{p.location}</div>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widestplus
                                   font-medium text-ink-900 border-b border-ink-900 pb-0.5
                                   hover:text-brass-500 hover:border-brass-500 transition-colors duration-300"
                      >
                        Enquire <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More coming note */}
      <section className="bg-sand-100/60 grain py-20 md:py-24">
        <div className="container-prose">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8
                            border-t border-ink-200 pt-16">
              <div>
                <div className="eyebrow mb-4">More on the way</div>
                <p className="text-ink-500 max-w-xl leading-relaxed">
                  Full project profiles — with site photography, drawings, and client
                  notes — are being prepared. Get in touch to request private access
                  to our full portfolio, or to discuss a similar project.
                </p>
              </div>
              <Link to="/contact" className="btn-primary flex-shrink-0">
                Request portfolio <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Status board */}
      <section className="bg-sand-50 pb-32">
        <div className="container-prose">
          <div className="grid md:grid-cols-3 gap-px bg-ink-200">
            {[
              { label: 'In design',   value: '1,032 projects', detail: 'Residential & commercial schemes' },
              { label: 'On site',     value: '235 projects',   detail: 'Across London & the UK' },
              { label: 'In handover', value: '79 projects',    detail: 'Completing this quarter' }
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