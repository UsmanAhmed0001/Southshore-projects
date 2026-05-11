import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { services } from '../data/services.js'
import { galleryImages } from '../data/images.js'

export default function Services() {
  return (
    <>
      <HeroVideo
        eyebrow="Services"
        title={<>Eight ways<br/>we can <em className="italic font-normal text-brass-400">help.</em></>}
        subtitle="From a single design package to a fully integrated design-and-build, our services are designed to work on their own — or together."
        variant="compact"
      />

      <PageHeader
        eyebrow="What we offer"
        title="A complete in-house team."
        intro="We design, engineer, and construct. Most clients use several of our services together — but we are happy to slot into an existing team where that makes sense."
        columnOne="Smaller works are typically delivered on a fixed price; larger or more bespoke schemes run on an open-book basis with an agreed margin and target cost. You will know which model is right for your project before any work begins."
        columnTwo="Whichever route you take, you get a single point of contact, a clear programme, and weekly written reports. No mystery. No drama. Just a building, delivered."
      />

      {/* Services list */}
      <section className="pb-32 bg-sand-50">
        <div className="container-prose">
          <ul className="border-t border-ink-200">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 60}>
                <article
                  id={s.id}
                  className="grid grid-cols-12 gap-4 md:gap-8 items-start py-10 md:py-14 border-b border-ink-200
                             group transition-colors duration-500 hover:bg-sand-100/40 px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <div className="col-span-12 md:col-span-2">
                    <div className="font-mono text-xs text-brass-500 mb-2">{s.number}</div>
                    <div className="hidden md:block aspect-square w-full overflow-hidden bg-ink-100">
                      <img
                        src={galleryImages[i % galleryImages.length].src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-6">
                    <h3 className="font-display text-3xl md:text-5xl tracking-tightest text-ink-900 leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-ink-500 leading-relaxed max-w-xl">
                      {s.summary}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-3">
                    <div className="eyebrow mb-3 text-ink-500">Includes</div>
                    <ul className="space-y-2">
                      {s.keywords.map((k) => (
                        <li
                          key={k}
                          className="text-sm text-ink-700 flex items-center gap-2 before:content-[''] before:w-2 before:h-px before:bg-brass-500"
                        >
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-12 md:col-span-1 flex md:justify-end">
                    <Link
                      to="/contact"
                      aria-label={`Enquire about ${s.title}`}
                      className="w-12 h-12 grid place-items-center border border-ink-300 text-ink-500
                                 group-hover:bg-ink-950 group-hover:text-sand-50 group-hover:border-ink-950
                                 transition-all duration-500"
                    >
                      ↗
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Project types */}
      <section className="py-28 md:py-36 bg-sand-100/60 grain">
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <Reveal><div className="eyebrow mb-6">What we work on</div></Reveal>
              <Reveal delay={120}>
                <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900">
                  Common project types we handle every week.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              <Reveal delay={200}>
                <p className="text-lg text-ink-500 leading-relaxed">
                  Whether you need structural calculations for a beam, a full set of architectural
                  drawings, or someone to manage the whole build, these are the kinds of projects
                  that land on our desk most often. If yours is not listed, get in touch anyway.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink-200/60">
            {[
              { icon: '⬜', label: 'Wall Removals',         detail: 'Load-bearing and non-structural, with full calculations and drawings for building control.' },
              { icon: '🏠', label: 'Loft Conversions',      detail: 'Structural design for dormer, hip-to-gable, and mansard schemes across all property types.' },
              { icon: '📐', label: 'Extensions',            detail: 'Single and double-storey rear, side, and wrap-around extensions — design through to build.' },
              { icon: '🔄', label: 'Internal Alterations',  detail: 'Reconfiguring floor plates, opening up spaces, and creating new openings without compromising structure.' },
              { icon: '🧱', label: 'Retaining Walls',       detail: 'Design and construction of retaining structures for gardens, basements, and site boundaries.' },
              { icon: '🏗️', label: 'New Builds',            detail: 'Full design and construction service for residential and commercial new-build schemes.' },
              { icon: '🏢', label: 'Commercial Fit-Out',    detail: 'Office, retail, and hospitality interiors delivered with minimal disruption to trading.' },
              { icon: '🔧', label: 'Temporary Works',       detail: 'Propping, needling, and temporary support schemes designed and inspected to current standards.' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 60}
                className="bg-sand-50 p-6 md:p-8 group hover:bg-ink-950 hover:text-sand-50 transition-colors duration-700">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl md:text-2xl tracking-tightest text-ink-900 group-hover:text-sand-50 transition-colors duration-700 leading-tight mb-3">
                  {item.label}
                </h3>
                <p className="text-sm text-ink-500 group-hover:text-sand-100/70 transition-colors duration-700 leading-relaxed">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="py-28 md:py-36 bg-sand-50">
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal><div className="eyebrow mb-6">Where we work</div></Reveal>
              <Reveal delay={120}>
                <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900">
                  London, the Midlands, and everywhere in between.
                </h2>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-8 text-ink-500 leading-relaxed max-w-lg">
                  With our head office in Wimbledon and a branch office in Wellingborough, we cover
                  a wide corridor from central London through the South East to the East Midlands.
                  We also take on projects remotely and nationally where the scope suits it.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Link to="/contact" className="btn-primary mt-8 inline-flex">
                  Discuss your location <span aria-hidden>→</span>
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid sm:grid-cols-2 gap-px bg-ink-200/60">
                {[
                  {
                    region: 'London',
                    areas: ['Central London', 'South London', 'South West London', 'North London', 'East London', 'Greater London']
                  },
                  {
                    region: 'South East',
                    areas: ['Surrey', 'Kent', 'Sussex', 'Hampshire', 'Berkshire', 'Oxfordshire']
                  },
                  {
                    region: 'East Midlands',
                    areas: ['Northamptonshire', 'Leicestershire', 'Derbyshire', 'Nottinghamshire', 'Lincolnshire', 'Warwickshire']
                  },
                  {
                    region: 'Nationwide',
                    areas: ['Remote structural reviews', 'Drawing packages by post', 'On-site visits by arrangement', 'Digital project management', 'Video consultations']
                  }
                ].map((r, i) => (
                  <Reveal key={r.region} delay={i * 80}
                    className="bg-sand-50 p-6 md:p-8">
                    <div className="eyebrow mb-4">{r.region}</div>
                    <ul className="space-y-1.5">
                      {r.areas.map(a => (
                        <li key={a} className="text-sm text-ink-700 flex items-center gap-2
                                               before:content-[''] before:w-1.5 before:h-px before:bg-brass-500 before:flex-shrink-0">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>

              {/* Office summary strip */}
              <Reveal delay={200}>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="border border-ink-200 p-5">
                    <div className="eyebrow text-brass-500 mb-2">Head Office</div>
                    <div className="font-medium text-ink-900">Wimbledon, London</div>
                    <div className="text-sm text-ink-500 mt-1">SW19 1NE</div>
                  </div>
                  <div className="border border-ink-200 p-5">
                    <div className="eyebrow text-brass-500 mb-2">Branch Office</div>
                    <div className="font-medium text-ink-900">Irchester, Wellingborough</div>
                    <div className="text-sm text-ink-500 mt-1">NN29 7HG</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 text-sand-50 py-24 md:py-32 grain">
        <div className="container-prose flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div>
            <div className="eyebrow text-sand-100/60 mb-5">Not sure where to start?</div>
            <h2 className="display-1 text-[clamp(2.25rem,6vw,5rem)] max-w-3xl">
              Tell us about your project — we will tell you which of these you actually need.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-sand-50 text-ink-950 px-7 py-4 text-sm
                       font-medium tracking-wide uppercase transition-all duration-500
                       hover:bg-brass-400"
          >
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}