import { useEffect, useState } from 'react'
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
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-sand-50/85 backdrop-blur-xl border-b border-ink-100'
          : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="container-prose flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Southshore Projects home">
          <img
            src={logoUrl}
            alt=""
            className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-sm"
          />
          <div className="leading-tight">
            <div className={`font-display text-lg md:text-xl tracking-tightest transition-colors duration-500
                            ${scrolled ? 'text-ink-900' : 'text-sand-50'}`}>
              Southshore
            </div>
            <div className={`text-[10px] md:text-[11px] uppercase tracking-widestplus transition-colors duration-500
                            ${scrolled ? 'text-ink-500' : 'text-sand-100/70'}`}>
              Design &amp; Construction
            </div>
          </div>
        </Link>

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

        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2 text-[13px] uppercase tracking-widestplus
                     font-medium pb-1 transition-colors duration-300
                     ${scrolled
                       ? 'text-ink-900 border-b border-ink-900 hover:text-brass-500 hover:border-brass-500'
                       : 'text-sand-50 border-b border-sand-50/60 hover:text-brass-400 hover:border-brass-400'
                     }`}
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>

        {/* burger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative w-10 h-10 grid place-items-center"
        >
          <span className={`block w-6 h-px transition-all duration-300 absolute
                            ${scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                            ${open ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`block w-6 h-px transition-all duration-300 absolute
                            ${scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                            ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-px transition-all duration-300 absolute
                            ${scrolled ? 'bg-ink-900' : 'bg-sand-50'}
                            ${open ? '-rotate-45' : 'translate-y-2'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-sand-50 transition-all duration-500
                    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="container-prose pt-12 pb-20 flex flex-col h-full">
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `font-display text-5xl sm:text-6xl tracking-tightest py-3 border-b border-ink-100
                   transition-colors duration-300
                   ${isActive ? 'text-ink-900' : 'text-ink-400 hover:text-ink-900'}`
                }
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <div className="eyebrow mb-2">Get in touch</div>
            <a href="tel:+4402077409165" className="block font-display text-2xl text-ink-900">
              +44 020 7740 9165
            </a>
            <a href="mailto:info@southshoreprojects.com" className="block text-ink-500 mt-1">
              info@southshoreprojects.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}