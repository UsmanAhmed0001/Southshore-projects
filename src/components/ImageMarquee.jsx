/**
 * Infinite, seamless image marquee.
 * Pass an array of {src, alt} objects. Set `reverse` to flip direction.
 */
export default function ImageMarquee({ images, reverse = false, height = 'h-72 md:h-96' }) {
  // Duplicate the list for the seamless loop (CSS animates -50%)
  const loop = [...images, ...images]
  return (
    <div className="relative overflow-hidden grain">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-sand-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-sand-50 to-transparent z-10" />

      <div
        className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {loop.map((img, idx) => (
          <figure
            key={`${img.src}-${idx}`}
            className={`relative ${height} aspect-[4/5] mr-4 md:mr-6 flex-shrink-0 overflow-hidden bg-ink-100`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
