import Reveal from './Reveal.jsx'

/**
 * Inner-page header shown beneath the hero video section on subpages.
 * Provides a consistent sense of "you've arrived".
 */
export default function PageHeader({ eyebrow, title, intro, columnOne, columnTwo }) {
  return (
    <section className="bg-sand-50 py-24 md:py-32">
      <div className="container-prose grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          {eyebrow && (
            <Reveal>
              <div className="eyebrow mb-6">{eyebrow}</div>
            </Reveal>
          )}
          <Reveal delay={120}>
            <h2 className="display-1 text-[clamp(2.5rem,6vw,5.5rem)] text-ink-900">
              {title}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          {intro && (
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-ink-700 font-display font-light leading-snug tracking-tightest">
                {intro}
              </p>
            </Reveal>
          )}
          {(columnOne || columnTwo) && (
            <div className="mt-10 grid sm:grid-cols-2 gap-8 text-ink-500 leading-relaxed">
              {columnOne && <Reveal delay={300}><p>{columnOne}</p></Reveal>}
              {columnTwo && <Reveal delay={400}><p>{columnTwo}</p></Reveal>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
