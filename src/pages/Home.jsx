import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import ImageMarquee from '../components/ImageMarquee.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryImages } from '../data/images.js'
import { services } from '../data/services.js'

const pillars = [
  {
    n: '01',
    title: 'Expertise that comes from the trade',
    body: 'A team of architects, engineers, designers, and site managers who have actually built things — and know how to make decisions that survive contact with the building itself.'
  },
  {
    n: '02',
    title: 'One team, end to end',
    body: 'Architecture, structural engineering, interiors, construction, and project management under a single roof. Fewer hand-offs, fewer surprises, one number to call.'
  },
  {
    n: '03',
    title: 'Quality, in the details',
    body: 'Specifications written for the building, not for the spreadsheet. Materials chosen on merit. Workmanship checked at the level of the joint, not the room.'
  },
  {
    n: '04',
    title: 'On programme, on cost',
    body: 'Programmes that account for the real world and a cost plan you can actually rely on. We track both weekly, and tell you the truth about both.'
  },
  {
    n: '05',
    title: 'Sustainable thinking, not slogans',
    body: 'Sensible specification, fabric-first decisions, and a long view on the running cost of a building. We design for the next 50 years, not just handover day.'
  },
  {
    n: '06',
    title: 'Transparent, all the way',
    body: 'Weekly updates, open-book pricing on bigger jobs, and direct access to the people doing the work. No ceremony. No surprises in month four.'
  }
]

export default function Home() {
  // Split images into two rows for two marquees moving in opposite directions
  const rowA = galleryImages.slice(0, 6)
  const rowB = galleryImages.slice(4)

  return (
    <>
      <HeroVideo
        eyebrow="Southshore Projects"
        title={<>Building<br/>your dreams<br/><span className="text-brass-400 italic font-normal">into reality.</span></>}
        subtitle="A London-based design and construction practice working across architecture, engineering, interiors, and build."
      />

      {/* Intro band */}
      <section className="relative py-28 md:py-36 bg-sand-50">
        <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow mb-6">Who we are</div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900">
                A practice for clients who care about the details.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-4">
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-ink-700 font-display font-light leading-snug tracking-tightest">
                Southshore Projects is a design and construction studio based in Wimbledon. We
                work with private clients, developers, and businesses across London — turning
                considered briefs into well-made buildings.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-xl">
                Our work is quiet, but it is precise. We bring architecture, engineering, and
                construction into one conversation, so the design you sign off on is the design
                that gets built — properly, on time, and at the agreed price.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Explore our services <span aria-hidden>→</span>
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Start a conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* First marquee */}
      <section className="py-10">
        <ImageMarquee images={rowA} />
      </section>

      {/* Pillars / "why us" */}
      <section className="py-28 md:py-36 bg-sand-100/60 grain">
        <div className="container-prose">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow mb-6">Why Southshore</div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900">
                  Six reasons clients return — and recommend us to their friends.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <Reveal delay={200}>
                <p className="text-lg text-ink-500 leading-relaxed">
                  We are not the cheapest builder, and we are not the loudest studio. What we
                  are is reliable, considered, and deeply attentive to the people we work for.
                  Most of our work comes from past clients introducing us to the next one.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-200/60">
            {pillars.map((p, i) => (
              <Reveal
                key={p.n}
                delay={i * 80}
                className="bg-sand-50 p-8 md:p-10 group hover:bg-ink-950 hover:text-sand-50 transition-colors duration-700"
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-mono text-xs text-brass-500">— {p.n}</span>
                  <span className="h-px flex-1 bg-current opacity-20" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tightest mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-ink-500 group-hover:text-sand-100/70 transition-colors duration-700 leading-relaxed">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-28 md:py-36 bg-sand-50">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <Reveal><div className="eyebrow mb-6">Services</div></Reveal>
              <Reveal delay={120}>
                <h2 className="display-1 text-[clamp(2.25rem,5vw,4.5rem)] text-ink-900 max-w-2xl">
                  Everything you need, in one practice.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link to="/services" className="link-underline text-sm uppercase tracking-widestplus font-medium">
                View all services →
              </Link>
            </Reveal>
          </div>

          <ul className="border-t border-ink-200">
            {services.slice(0, 6).map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 50}>
                <Link
                  to="/services"
                  className="group grid grid-cols-12 gap-4 items-center py-7 md:py-9 border-b border-ink-200
                             hover:bg-ink-950 hover:text-sand-50 px-2 md:px-4 transition-colors duration-500"
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-brass-500">{s.number}</span>
                  <span className="col-span-10 md:col-span-5 font-display text-2xl md:text-4xl tracking-tightest leading-none">
                    {s.title}
                  </span>
                  <span className="hidden md:block col-span-5 text-ink-500 group-hover:text-sand-100/80 transition-colors duration-500">
                    {s.summary}
                  </span>
                  <span className="col-span-12 md:col-span-1 text-right opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" aria-hidden>
                    ↗
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Reverse marquee */}
      <section className="py-10">
        <ImageMarquee images={rowB} reverse />
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-ink-950 text-sand-50 grain">
        <div className="container-prose grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Reveal><div className="eyebrow text-sand-100/60 mb-6">Get in touch</div></Reveal>
            <Reveal delay={120}>
              <h2 className="display-1 text-[clamp(2.5rem,8vw,7rem)]">
                Got a project in mind? <span className="text-brass-400 italic font-normal">Tell us about it.</span>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-8 max-w-xl text-sand-100/70 text-lg leading-relaxed">
                A short conversation is the fastest way to find out whether we are the right
                practice for you. No fee for the first meeting, and no hard sell at the end of it.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <Reveal delay={300}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-sand-50 text-ink-950 px-8 py-5 text-sm
                           font-medium tracking-wide uppercase transition-all duration-500
                           hover:bg-brass-400"
              >
                Start a project <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal delay={380}>
              <a href="tel:+4402077409165" className="font-display text-2xl text-sand-100/90 hover:text-brass-400 transition-colors">
                +44 020 7740 9165
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
