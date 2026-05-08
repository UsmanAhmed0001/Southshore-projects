import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-triggered reveal wrapper.
 * Adds the `in` class once the element first enters the viewport.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
