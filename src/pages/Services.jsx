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
