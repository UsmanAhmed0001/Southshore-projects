import { useState, useCallback, useEffect } from 'react'
import HeroVideo from '../components/HeroVideo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import { galleryImages } from '../data/images.js'

export default function Gallery() {
  const [active, setActive] = useState(null) // index of opened image
  const total = galleryImages.length

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % total)),
    [total]
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + total) % total)),
    [total]
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  // Asymmetric grid pattern: row spans cycle to create rhythm
  const rowSpans = ['md:row-span-2', 'md:row-span-1', 'md:row-span-1',
                    'md:row-span-2', 'md:row-span-1', 'md:row-span-1',
                    'md:row-span-1', 'md:row-span-2', 'md:row-span-1',
                    'md:row-span-1', 'md:row-span-2']

  return (
    <>
      <HeroVideo
        eyebrow="Gallery"
        title={<>A look at <em className="italic font-normal text-brass-400">the work.</em></>}
        subtitle="A small selection of recent residential, commercial, and interior projects across London and the South of England."
        variant="compact"
      />

      <PageHeader
        eyebrow="Selected work"
        title="Photographs from across the studio."
        intro="Click any image to open. Use the arrows on your keyboard to move between them."
      />

      <section className="bg-sand-50 pb-32">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 8) * 70}
                className={`relative overflow-hidden bg-ink-100 group cursor-pointer ${rowSpans[i % rowSpans.length]}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="block w-full h-full text-left"
                  aria-label={`Open image: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/20 transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="inline-flex items-center gap-2 bg-sand-50 text-ink-900 px-3 py-1.5 text-[11px] uppercase tracking-widestplus font-medium">
                      View <span aria-hidden>↗</span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close() }}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-sand-50 text-3xl font-light w-12 h-12
                       grid place-items-center hover:text-brass-400 transition-colors"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            className="absolute left-3 md:left-10 top-1/2 -translate-y-1/2 text-sand-50 text-2xl
                       w-12 h-12 grid place-items-center border border-sand-50/30 hover:border-sand-50
                       hover:bg-sand-50 hover:text-ink-950 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            className="absolute right-3 md:right-10 top-1/2 -translate-y-1/2 text-sand-50 text-2xl
                       w-12 h-12 grid place-items-center border border-sand-50/30 hover:border-sand-50
                       hover:bg-sand-50 hover:text-ink-950 transition-all duration-300"
          >
            →
          </button>

          <figure
            className="max-w-7xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <figcaption className="mt-5 flex items-center gap-4 text-sand-100/70 text-sm">
              <span className="font-mono text-xs">{String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
              <span className="h-px w-10 bg-sand-100/30" />
              <span>{galleryImages[active].alt}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
