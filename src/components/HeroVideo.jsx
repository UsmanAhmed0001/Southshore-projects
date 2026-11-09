import { useEffect, useRef, useState } from 'react'
import { heroVideo, heroPoster } from '../data/images.js'

/**
 * Cinematic hero video block with overlaid title.
 * Used on every page.
 */
export default function HeroVideo({
  title,
  eyebrow,
  subtitle,
  variant = 'tall' // 'tall' | 'compact'
}) {
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  // Only play the video on larger screens; phones get the still image (saves several MB)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const big = window.matchMedia('(min-width: 768px)').matches
    const saveData = navigator.connection && navigator.connection.saveData
    if (big && !saveData) {
      // start loading the video only after the page has finished loading
      const start = () => setShowVideo(true)
      if (document.readyState === 'complete') start()
      else window.addEventListener('load', start, { once: true })
    }
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Safari only autoplays if the video is definitely muted
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    // Only fade the video in once it's actually playing; otherwise the poster stays
    const onPlaying = () => setLoaded(true)
    v.addEventListener('playing', onPlaying)
    v.play().catch(() => {})
    return () => v.removeEventListener('playing', onPlaying)
  }, [showVideo])

  // min-height lets the hero grow if the title needs more room than the screen allows
  const heightClass = variant === 'compact'
    ? 'min-h-[60vh] md:min-h-[520px]'
    : 'min-h-[100svh]'

  return (
    <section className={`relative w-full ${heightClass} flex overflow-hidden bg-ink-950`}>
      <img
        src={heroPoster}
        alt=""
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {showVideo && <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="auto"
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>}

      {/* Layered atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/40 to-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Text — top padding keeps it clear of the fixed header on short screens */}
      <div className="relative z-10 w-full container-prose flex flex-col justify-end pt-32 md:pt-40 pb-20 md:pb-28">
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
        <div className="absolute bottom-8 right-6 md:right-10 lg:right-16 z-10 hidden md:flex items-center gap-3
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