import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import Reveal from '../components/Reveal.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DATA — grouped into three categories.
//
//  • architectural — real projects (add your uncle's details here)
//  • structural    — real projects (the two sample drawing packages)
//  • construction  — large-scale virtual projects. Drop AI-generated image URLs
//                    into the `cover` field once you have them (prompts are in
//                    the README section your assistant provided).
//
// Every card reads from this array — you never touch the layout below, only
// this data.
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: 'architectural', label: 'Architectural' },
  { id: 'structural',    label: 'Structural' },
  { id: 'construction',  label: 'Construction' },
]

const projects = {
  architectural: [
    {
      id: 'br2-9sl-loft',
      status: 'Planning Submitted',
      statusColor: 'bg-ink-200 text-ink-900',
      title: 'First Floor Rear Extension & Loft Conversion',
      location: 'Bromley, BR2 9SL',
      region: 'South London',
      year: '2024',
      services: ['Architecture', '3D Visualisation', 'Planning'],
      cover: 'https://res.cloudinary.com/dpnza2tuy/image/upload/v1722025505/south-pexels-heyho-06-min_uxqhuc.jpg',
      coverAlt: 'Residential extension with loft conversion — proposed 3D view',
      summary:
        'Combined first floor rear extension and full loft conversion for a two-storey terraced property. The scheme adds a 31m² loft bedroom, extends the first floor to the rear, and reconfigures the layout to create four bedrooms and a family bathroom. Full planning package delivered with 3D perspectives.',
      scope: [
        'Rear extension at first floor level — flat roof construction',
        'Full loft conversion — 31m² usable loft bedroom + bathroom',
        'Architectural planning drawings: plans, elevations, sections',
        '3D perspectives: 4 exterior views + 2 sectional cut-throughs',
        'Party Wall Act notices prepared',
      ],
      quote: 'Four bedrooms from two. No footprint change at ground level.',
    },
    // Add more architectural projects here …
  ],

  structural: [
    {
      id: 'south-hill-road',
      status: 'Building Regs Approved',
      statusColor: 'bg-brass-400 text-ink-950',
      title: 'Open-Plan Ground Floor Remodel',
      location: 'South Hill Road, Bromley BR2',
      region: 'South London',
      year: '2024',
      services: ['Structural Engineering', 'Building Regulations', 'Calculations'],
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
      quote: 'One opening. The whole ground floor transformed.',
    },
    // Add more structural projects here …
  ],

  construction: [
    {
      id: 'virtual-mixed-use',
      status: 'Concept',
      statusColor: 'bg-brass-400 text-ink-950',
      title: 'Mixed-Use Residential Development',
      location: 'Greater London',
      region: 'Concept Scheme',
      year: '2025',
      services: ['Construction', 'Design & Build', 'Project Management'],
      cover: '', // ← paste AI-generated image URL here
      coverAlt: 'Large-scale mixed-use residential development, contemporary architecture',
      summary:
        'A large-scale mixed-use development concept combining ground-floor commercial units with residential apartments above. Delivered as a full design-and-build package with integrated structural, MEP, and fit-out packages under a single contract.',
      scope: [
        'Multi-storey reinforced concrete frame',
        'Ground-floor commercial + residential above',
        'Full MEP coordination and delivery',
        'Landscaped communal courtyard',
        'BREEAM-targeted sustainable specification',
      ],
      quote: 'From bare site to handover — one team, one contract.',
    },
    {
      id: 'virtual-commercial',
      status: 'Concept',
      statusColor: 'bg-brass-400 text-ink-950',
      title: 'Commercial Office & Retail Block',
      location: 'South East England',
      region: 'Concept Scheme',
      year: '2025',
      services: ['Construction', 'Commercial Fit-Out', 'Project Management'],
      cover: '', // ← paste AI-generated image URL here
      coverAlt: 'Modern commercial office and retail building, glass facade',
      summary:
        'A contemporary commercial block delivering flexible office floorplates above ground-floor retail. Built to shell-and-core with category-A fit-out, completed on a phased programme to allow early tenant occupation.',
      scope: [
        'Steel-frame commercial building',
        'Shell-and-core + Category A fit-out',
        'Curtain-wall glazed facade',
        'Phased handover for early occupation',
        'Full external works and public realm',
      ],
      quote: 'Delivered on programme, floor by floor.',
    },
    // Add more construction projects here …
  ],
}

function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className="border border-ink-200 overflow-hidden group">
      {/* Cover image */}
      <div className="relative h-72 md:h-[440px] overflow-hidden bg-ink-900">
        {p.cover ? (
          <img
            src={p.cover}
            alt={p.coverAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60
                       transition-transform duration-[3000ms] group-hover:scale-105"
          />
        ) : (
          // Placeholder shown until an AI-generated image is added
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-800 to-ink-950">
            <div className="text-center px-6">
              <div className="font-mono text-[11px] uppercase tracking-widestplus text-sand-100/40 mb-2">
                Visual coming soon
              </div>
              <div className="font-display text-2xl text-sand-100/30 tracking-tightest">
                {p.title}
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

        <div className="absolute top-6 inset-x-6 md:top-8 md:inset-x-8 flex items-start justify-between">
          <span className={`inline-flex text-[10px] uppercase tracking-widestplus font-medium px-3 py-1.5 ${p.statusColor}`}>
            {p.status}
          </span>
          <span className="font-mono text-xs text-sand-100/60">{p.year}</span>
        </div>

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
          <div className="eyebrow text-sand-100/60 mb-1">{p.region}</div>
          <h3 className="font-display text-3xl md:text-5xl tracking-tightest text-sand-50 leading-tight max-w-3xl">
            {p.title}
          </h3>
        </div>
      </div>

      {/* Detail panel */}
      <div className="grid md:grid-cols-12 bg-sand-50 border-t border-ink-200">
        <div className="md:col-span-7 p-6 md:p-10 border-b md:border-b-0 md:border-r border-ink-200">
          <div className="eyebrow mb-4">Project summary</div>
          <p className="text-ink-700 leading-relaxed">{p.summary}</p>
          <div className="mt-8 pl-5 border-l-2 border-brass-400">
            <p className="font-display text-xl md:text-2xl tracking-tightest text-ink-900 italic">
              "{p.quote}"
            </p>
          </div>
        </div>

        <div className="md:col-span-5 p-6 md:p-10">
          <div className="flex items-center justify-between mb-5">
            <div className="eyebrow">Scope of works</div>
            <button
              onClick={() => setExpanded(v => !v)}
              className="text-[11px] uppercase tracking-widestplus text-ink-500
                         hover:text-ink-900 transition-colors duration-300 flex items-center gap-2"
            >
              {expanded ? 'Less' : 'All'}
              <span aria-hidden className={`transition-transform duration-300 inline-block ${expanded ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>
          <ul className="space-y-3">
            {(expanded ? p.scope : p.scope.slice(0, 4)).map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brass-400 flex-shrink-0" />
                {item}
              </li>
            ))}
            {!expanded && p.scope.length > 4 && (
              <li className="text-xs text-ink-400 pl-4">+{p.scope.length - 4} more items…</li>
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
  )
}

export default function Projects() {
  const [active, setActive] = useState('architectural')
  const list = projects[active] || []

  return (
    <>
      <HeroVideo
        eyebrow="Projects"
        title={<>Work that <em className="italic font-normal text-brass-400">speaks for itself.</em></>}
        subtitle="Architectural, structural, and construction projects across London and the South of England."
        variant="compact"
      />

      {/* Intro + tabs */}
      <section className="bg-sand-50 py-20 md:py-24">
        <div className="container-prose">
          <Reveal><div className="eyebrow mb-6">Our work</div></Reveal>
          <Reveal delay={100}>
            <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900 max-w-3xl">
              Three disciplines. One practice.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-2xl">
              Browse our work by discipline. Client names and addresses are withheld;
              full packages — including drawings, calculations, and references — are
              available on request.
            </p>
          </Reveal>

          {/* Category tabs */}
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-2 border-b border-ink-200">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`relative px-5 md:px-7 py-4 text-sm uppercase tracking-widestplus font-medium
                              transition-colors duration-300
                              ${active === cat.id ? 'text-ink-900' : 'text-ink-400 hover:text-ink-700'}`}
                >
                  {cat.label}
                  <span className="ml-2 text-[10px] font-mono align-super">
                    {projects[cat.id]?.length || 0}
                  </span>
                  {active === cat.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brass-500" />
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-sand-50 pb-16">
        <div className="container-prose space-y-6">
          {list.length > 0 ? (
            list.map((p) => (
              <Reveal key={p.id}>
                <ProjectCard p={p} />
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="border border-dashed border-ink-300 p-16 text-center">
                <div className="eyebrow mb-3">Coming soon</div>
                <p className="text-ink-500">Projects in this category are being prepared.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Status board */}
      <section className="bg-sand-100/60 grain py-20 md:py-24">
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

          <Reveal>
            <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8
                            border-t border-ink-200 pt-12">
              <p className="text-ink-500 max-w-xl leading-relaxed">
                Get in touch to request private access to our full portfolio,
                or to discuss a project of your own.
              </p>
              <Link to="/contact" className="btn-primary flex-shrink-0">
                Request portfolio <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}