import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { logoUrl } from '../data/images.js'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // ─── Mobile menu rendered via React portal directly on <body> ───────────────
  // This completely bypasses the <header>'s stacking context, so the overlay
  // always sits above every page element (footer, sections, etc.)
  const mobileMenu = typeof document !== 'undefined' ? createPortal(
    <div
      aria-hidden={!open}
      className={`
        fixed inset-0 z-[200] bg-sand-50 flex flex-col lg:hidden
        transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Top bar mirrors the navbar height for a seamless transition */}
      <div className="flex items-center justify-between h-20 md:h-24 px-6 md:px-10
                      border-b border-ink-100 flex-shrink-0">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Southshore Projects home"
          onClick={() => setOpen(false)}
        >
          <img src={logoUrl} alt="" className="h-10 w-10 object-cover rounded-sm" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-tightest text-ink-900">Southshore</div>
            <div className="text-[10px] uppercase tracking-widestplus text-ink-500">
              Design &amp; Construction
            </div>
          </div>
        </Link>

        {/* Close ✕ */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="relative w-10 h-10 grid place-items-center"
        >
          <span className="block w-6 h-px bg-ink-900 rotate-45 absolute" />
          <span className="block w-6 h-px bg-ink-900 -rotate-45 absolute" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto px-6 md:px-10 pt-8 pb-4">
        {links.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block font-display text-5xl sm:text-6xl tracking-tightest py-3 border-b border-ink-100
               transition-colors duration-300
               ${isActive ? 'text-ink-900' : 'text-ink-400 hover:text-ink-900'}`
            }
            style={{
              opacity:    open ? 1 : 0,
              transform:  open ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 0.45s ${i * 55}ms ease, transform 0.45s ${i * 55}ms ease, color 0.3s`
            }}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      {/* Contact strip */}
      <div className="px-6 md:px-10 py-8 border-t border-ink-100 flex-shrink-0">
        <div className="eyebrow mb-3">Get in touch</div>
        <a
          href="tel:+447802342616"
          className="block font-display text-2xl text-ink-900 hover:text-brass-500 transition-colors"
        >
          +44 7802 342 616
        </a>
        <a
          href="tel:+447591217629"
          className="block font-display text-lg text-ink-700 mt-1 hover:text-brass-500 transition-colors"
        >
          +44 7591 217629
        </a>
        <a
          href="mailto:info@southshoreprojects.com"
          className="block text-ink-500 mt-1 hover:text-ink-900 transition-colors"
        >
          info@southshoreprojects.com
        </a>
      </div>
    </div>,
    document.body
  ) : null

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-sand-50/90 backdrop-blur-xl border-b border-ink-100'
            : 'bg-transparent border-b border-transparent'}`}
      >
        <div className="container-prose flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-10"
                aria-label="Southshore Projects home">
            <img
              src={logoUrl}
              alt=""
              className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-sm"
            />
            <div className="leading-tight">
              <div className={`font-display text-lg md:text-xl tracking-tightest transition-colors duration-500
                              ${open || scrolled ? 'text-ink-900' : 'text-sand-50'}`}>
                Southshore
              </div>
              <div className={`text-[10px] md:text-[11px] uppercase tracking-widestplus transition-colors duration-500
                              ${open || scrolled ? 'text-ink-500' : 'text-sand-100/70'}`}>
                Design &amp; Construction
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `link-underline text-[13px] uppercase tracking-widestplus font-medium transition-colors duration-300
                   ${scrolled
                     ? (isActive ? 'text-ink-900 active' : 'text-ink-500 hover:text-ink-900')
                     : (isActive ? 'text-sand-50 active' : 'text-sand-100/70 hover:text-sand-50')
                   }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden lg:inline-flex items-center gap-2 text-[13px] uppercase tracking-widestplus
                       font-medium pb-1 transition-colors duration-300
                       ${scrolled
                         ? 'text-ink-900 border-b border-ink-900 hover:text-brass-500 hover:border-brass-500'
                         : 'text-sand-50 border-b border-sand-50/60 hover:text-brass-400 hover:border-brass-400'
                       }`}
          >
            Start a project <span aria-hidden>→</span>
          </Link>

          {/* Burger */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-10 w-10 h-10 grid place-items-center"
          >
            <span className={`block w-6 h-px transition-all duration-300 absolute
                              ${open || scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                              ${open ? 'rotate-45' : '-translate-y-2'}`} />
            <span className={`block w-6 h-px transition-all duration-300 absolute
                              ${open || scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                              ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-px transition-all duration-300 absolute
                              ${open || scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                              ${open ? '-rotate-45' : 'translate-y-2'}`} />
          </button>
        </div>
      </header>

      {/* Portal mobile menu — rendered on <body>, z-[200], above everything */}
      {mobileMenu}
    </>
  )
}