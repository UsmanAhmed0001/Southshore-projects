import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Change this if the site moves to a different domain
export const SITE_URL = 'https://southshoreprojects.com'
const DEFAULT_IMAGE = `${SITE_URL}/gallery/site-01.jpg`

// Title (under ~60 characters) and description (under ~160) for each page
const pages = {
  '/': {
    title: 'Southshore Projects | Architects, Structural Engineers & Builders',
    description: 'Architects, structural engineers and builders in London, Northampton, Oxford, Brighton and Reading. Extensions, loft conversions, new builds and design & build.',
  },
  '/about': {
    title: 'About Us | Southshore Projects – Design & Construction',
    description: 'Southshore Projects brings architecture, structural engineering and construction under one roof, with one team accountable from first sketch to handover.',
  },
  '/services': {
    title: 'Architecture, Structural Engineering & Construction Services',
    description: 'Architecture, structural engineering, defect reports, interior design, construction, design & build, fit-out and project management across London and the South.',
  },
  '/gallery': {
    title: 'Project Gallery | Southshore Projects',
    description: 'Photos from Southshore Projects sites: steel frames, extensions, loft conversions, new floors, kitchens and bathrooms across London and the South East.',
  },
  '/projects': {
    title: 'Architectural, Structural & Construction Projects | Southshore',
    description: 'Selected architectural, structural and construction projects by Southshore Projects, from double storey extensions to new five-bedroom detached houses.',
  },
  '/contact': {
    title: 'Contact Southshore Projects | London, Oxford, Brighton, Reading',
    description: 'Call +44 7802 342 616 or email info@southshoreprojects.com. Offices in Wimbledon, Northampton, Oxford, Brighton and Reading. Open Monday to Saturday.',
  },
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const known = pages[path]
    const page = known || pages['/']
    const url = `${SITE_URL}${path === '/' ? '/' : path}`

    document.title = page.title
    setMeta('name', 'description', page.description)
    // Unknown URLs show the home page; tell Google not to index them as duplicates
    setMeta('name', 'robots', known ? 'index, follow, max-image-preview:large' : 'noindex, follow')
    setCanonical(known ? url : `${SITE_URL}/`)

    setMeta('property', 'og:title', page.title)
    setMeta('property', 'og:description', page.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', DEFAULT_IMAGE)
    setMeta('name', 'twitter:title', page.title)
    setMeta('name', 'twitter:description', page.description)
    setMeta('name', 'twitter:image', DEFAULT_IMAGE)
  }, [pathname])

  return null
}