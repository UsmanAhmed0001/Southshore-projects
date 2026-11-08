import { Link } from 'react-router-dom'
import { logoUrl } from '../data/images.js'

const offices = [
  { label: 'Head Office', lines: ['Highland House, 165–167', 'The Broadway,', 'Wimbledon SW19 1NE'] },
  { label: 'Northampton Office', lines: ['181 Arkwright Road,', 'Irchester,', 'Wellingborough NN29 7HG'] },
  { label: 'Oxford Office', lines: ['Oxford Business Park,', 'Garsington Rd,', 'Oxford OX4 2JZ'] },
  { label: 'Brighton Office', lines: ['Mocatta House,', 'Blackmore Ct,', 'Brighton and Hove BN1 4DU'] },
  { label: 'Reading Office', lines: ['Fountain House,', '2 Queens Walk,', 'Reading RG1 7QF'] },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-sand-100 mt-32 grain">
      <div className="container-prose pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3" aria-label="Southshore Projects home">
              <img src={logoUrl} alt="" className="h-12 w-12 object-cover rounded-sm" />
              <div className="leading-tight">
                <div className="font-display text-2xl tracking-tightest">Southshore</div>
                <div className="text-[10px] uppercase tracking-widestplus text-sand-100/60">
                  Design &amp; Construction
                </div>
              </div>
            </Link>

            <p className="mt-8 max-w-md text-sand-100/70 leading-relaxed">
              A design and construction practice working across the United Kingdom. We design,
              engineer, and build — quietly, properly, and on time.
            </p>

            <div className="mt-8">
              <a
                href="mailto:info@southshoreprojects.com"
                className="font-display text-xl md:text-2xl tracking-tightest hover:text-brass-400 transition-colors duration-500 break-all"
              >
                info@southshoreprojects.com
              </a>
            </div>

            <div className="mt-6 space-y-1">
              <a href="tel:+447802342616" className="block hover:text-brass-400 transition-colors">
                +44 7802 342 616
              </a>
              <a href="tel:+447591217629" className="block hover:text-brass-400 transition-colors text-sand-100/80">
                +44 7591 217629
              </a>
              <a href="tel:+4402077409165" className="block hover:text-brass-400 transition-colors text-sand-100/60">
                T: +44 020 7740 9165
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-sand-100/50 mb-5">Quick links</div>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brass-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brass-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/projects" className="hover:text-brass-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/services" className="hover:text-brass-400 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-brass-400 transition-colors">Gallery</Link></li>
              <li><Link to="/privacy" className="hover:text-brass-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-6">
            {offices.map((o) => (
              <div key={o.label}>
                <div className="eyebrow text-sand-100/50 mb-3">{o.label}</div>
                <address className="not-italic text-sand-100/80 leading-relaxed">
                  {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <div className="eyebrow text-sand-100/50 mb-5">Office Hours</div>
            <div className="text-sand-100/80 leading-relaxed">
              Monday — Saturday<br />
              9:00 AM – 6:00 PM
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-sand-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sand-100/50 text-sm">
            © {new Date().getFullYear()} Southshore Projects. All rights reserved.
          </p>
          <p className="text-sand-100/40 text-xs uppercase tracking-widestplus">
            Building &nbsp;·&nbsp; Designing &nbsp;·&nbsp; Delivering — All over United Kingdom
          </p>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden className="overflow-hidden -mt-4">
        <div className="font-display tracking-tightest text-[20vw] leading-none text-sand-100/[0.04]
                        text-center whitespace-nowrap select-none">
          Southshore
        </div>
      </div>
    </footer>
  )
}