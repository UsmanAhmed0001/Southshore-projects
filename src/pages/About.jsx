import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageMarquee from '../components/ImageMarquee.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryImages } from '../data/images.js'

const principles = [
  {
    title: 'Expertise & experience',
    body: 'Our team brings together architects, engineers, and tradespeople with serious time on site. We have seen what works, what does not, and what looks good only in a renderer.'
  },
  {
    title: 'A complete offer',
    body: 'Architecture, structural engineering, interior design, construction, and project management — handled in-house. One team carrying your project from sketch to handover.'
  },
  {
    title: 'Quality and precision',
    body: 'Specifications are written for the building, not the budget cell. We choose materials on merit and check workmanship at the level of the joint, not the room.'
  },
  {
    title: 'Delivered on time',
    body: 'A real programme, reviewed weekly, with the people who can actually move it. We stay ahead of decisions instead of running behind them.'
  },
  {
    title: 'Sensible innovation',
    body: 'Fabric-first design, considered MEP, low-disruption build sequences, and digital tools that earn their place. Innovation without theatre.'
  },
  {
    title: 'Open communication',
    body: 'Weekly updates, clear minutes, and a single point of contact who knows your project inside out. You will never have to chase us for an answer.'
  },
  {
    title: 'Fair pricing',
    body: 'Open-book on bigger schemes, fixed-price where it makes sense, and never a hidden margin in the corners of a contract. Honest numbers, every time.'
  }
]

export default function About() {
  return (
    <>
      <HeroVideo
        eyebrow="About"
        title={<>Quietly. <em className="italic font-normal text-brass-400">Properly.</em><br/>For the long term.</>}
        subtitle="The story behind Southshore Projects — and the ideas that shape every job we take on."
        variant="compact"
      />

      <PageHeader
        eyebrow="Introduction"
        title="A studio, a builder, and a single point of accountability."
        intro="Southshore Projects exists because clients kept asking the same question: who actually owns this? Architects pointed at engineers, engineers pointed at contractors, contractors pointed back at the architects. We do all of it, under one roof — and we own the answer."
        columnOne="From day one we set out to be a small, deeply experienced practice rather than a faceless contractor. Every job runs through a director. Every site has a manager who knows the drawings the way the design team does."
        columnTwo="The result is a studio that designs as a builder thinks, and builds as a designer would draw. Fewer surprises. Fewer change orders. Better buildings, delivered to people who notice."
      />

      {/* Principles */}
      <section className="bg-sand-50 pb-28 md:pb-36">
        <div className="container-prose">
          <Reveal>
            <div className="eyebrow mb-10">What we believe</div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="py-8 md:py-10 border-t border-ink-200 group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-brass-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tightest text-ink-900 leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-ink-500 leading-relaxed md:pl-10">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ImageMarquee images={galleryImages.slice(2, 9)} />

      {/* Pull-quote */}
      <section className="py-28 md:py-36 bg-ink-950 text-sand-50 grain">
        <div className="container-prose">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tightest leading-tight max-w-5xl">
              <span className="text-brass-400">“</span>
              We are paid for the building you can see. We earn it in the thousand small
              decisions you cannot — the ones that mean the building still works ten years
              from now.
              <span className="text-brass-400">”</span>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 eyebrow text-sand-100/60">— Southshore Projects</div>
          </Reveal>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-sand-50 py-24">
        <div className="container-prose flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-ink-200 pt-16">
          <div>
            <div className="eyebrow mb-4">Next</div>
            <h3 className="display-1 text-[clamp(2rem,4vw,3.5rem)] text-ink-900">
              See what we do.
            </h3>
          </div>
          <Link to="/services" className="btn-primary">
            Explore services <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
