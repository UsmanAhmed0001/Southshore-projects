import { useEffect, useRef, useState } from 'react'
import { heroVideo } from '../data/images.js'

/**
 * Cinematic hero video block with overlaid title.
 * Used on every page (matching the original site's pattern).
 */
export default function HeroVideo({
  title,
  eyebrow,
  subtitle,
  variant = 'tall' // 'tall' | 'compact'
}) {
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setLoaded(true)
    v.addEventListener('canplay', onCanPlay)
    // try to play (mobile autoplay needs muted+playsinline)
    v.play().catch(() => {})
    return () => v.removeEventListener('canplay', onCanPlay)
  }, [])

  const heightClass = variant === 'compact'
    ? 'h-[60vh] min-h-[480px]'
    : 'h-[100svh] min-h-[640px]'

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-ink-950`}>
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Layered atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Top frame: small cap line */}
      <div className="absolute top-28 md:top-32 inset-x-0">
        <div className="container-prose flex items-center gap-3">
          <span className="h-px w-10 bg-sand-100/40" />
          <span className="text-[11px] uppercase tracking-widestplus text-sand-100/70">
            Wimbledon · London · Est. for the careful client
          </span>
        </div>
      </div>

      {/* Center text */}
      <div className="relative z-10 h-full container-prose flex flex-col justify-end pb-20 md:pb-28">
        {eyebrow && (
          <div className="eyebrow text-sand-100/70 mb-5 animate-fade-up" style={{ animationDelay: '120ms' }}>
            {eyebrow}
          </div>
        )}
        <h1
          className="display-1 text-sand-50 text-[clamp(2.5rem,9vw,8.5rem)] max-w-5xl animate-fade-up"
          style={{ animationDelay: '220ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-xl text-sand-100/85 text-lg md:text-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '420ms' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      {variant === 'tall' && (
        <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 z-10 flex items-center gap-3
                        animate-fade-up"
             style={{ animationDelay: '700ms' }}>
          <span className="text-[11px] uppercase tracking-widestplus text-sand-100/70">
            Scroll
          </span>
          <span className="block h-12 w-px bg-gradient-to-b from-sand-100/0 via-sand-100/60 to-sand-100/0" />
        </div>
      )}
    </section>
  )
}
