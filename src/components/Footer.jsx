import { Link } from 'react-router-dom'
import { logoUrl } from '../data/images.js'

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-sand-100 mt-32 grain">
      <div className="container-prose pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-5">
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
              A London-based design and construction practice. We design, engineer, and build —
              quietly, properly, and on time.
            </p>

            <div className="mt-8">
              <a
                href="mailto:info@southshoreprojects.com"
                className="font-display text-2xl md:text-3xl tracking-tightest hover:text-brass-400 transition-colors duration-500"
              >
                info@southshoreprojects.com
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
              <li><Link to="/equal-opportunity-policy" className="hover:text-brass-400 transition-colors">Equal Opportunity</Link></li>
              <li><Link to="/modern-slavery-statement" className="hover:text-brass-400 transition-colors">Modern Slavery</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-3">
            <div className="eyebrow text-sand-100/50 mb-5">Head Office</div>
            <address className="not-italic text-sand-100/80 leading-relaxed">
              Highland House, 165–167<br />
              The Broadway,<br />
              Wimbledon SW19 1NE
            </address>
            <div className="mt-6">
              <div className="eyebrow text-sand-100/50 mb-3">Branch Office</div>
              <address className="not-italic text-sand-100/80 leading-relaxed">
                181 Arkwright Road,<br />
                Irchester,<br />
                Wellingborough NN29 7HG
              </address>
            </div>
            <div className="mt-5 space-y-1">
              <a href="tel:07802342616" className="block hover:text-brass-400 transition-colors">
                07802 342 616
              </a>
              <a href="tel:+4402077409165" className="block hover:text-brass-400 transition-colors text-sand-100/60">
                T: +44 020 7740 9165
              </a>
            </div>
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
            Building &nbsp;·&nbsp; Designing &nbsp;·&nbsp; Delivering — in London
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