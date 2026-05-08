# Southshore Projects — Website

A faithful, modernised rebuild of [southshoreprojects.com](https://southshoreprojects.com)
in **Vite + React + React Router + Tailwind CSS**.

Same pages, same navigation, same hero video, same gallery — refined typography,
animations, and code structure for an easier life maintaining it going forward.

---

## Stack

- **Vite** — dev server and build tool
- **React 18** + **React Router v6** — multi-page client-side routing
- **Tailwind CSS** — styling, with a custom design token set in `tailwind.config.js`
- **Framer Motion** — listed as a dep for future use; current animations are CSS-only and IntersectionObserver-based for performance
- **Google Fonts** — Fraunces (display) + Inter Tight (body)

No backend is included; the contact form **POSTs to `/api/contact`** which you can wire up exactly the same way you did for Kreston Estates (Nodemailer + Hostinger SMTP).

---

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

To build for production:

```bash
npm run build
npm run preview   # to preview the build locally
```

---

## Project structure

```
southshore-projects/
├── public/
├── src/
│   ├── main.jsx            # Entry point
│   ├── App.jsx             # Routes
│   ├── index.css           # Tailwind + custom CSS (grain, marquee, reveals)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── HeroVideo.jsx   # Cinematic video hero (used on every page)
│   │   ├── ImageMarquee.jsx
│   │   ├── PageHeader.jsx
│   │   ├── Reveal.jsx      # IntersectionObserver scroll-fade wrapper
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx     # Lightbox with keyboard nav
│   │   ├── Projects.jsx    # "Coming soon" — same as the live site
│   │   ├── Contact.jsx     # Form + Google Maps embed
│   │   ├── EqualOpportunity.jsx   # Scaffold — paste in current policy text
│   │   └── ModernSlavery.jsx      # Scaffold — paste in current statement text
│   └── data/
│       ├── images.js       # Cloudinary image + video URLs
│       └── services.js     # Service entries
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Things you may want to swap before going live

### 1. Replace the marketing copy with your uncle's preferred wording

All marketing copy on Home, About, and Services has been **written from scratch** to capture the spirit of the original site without verbatim reuse. If your uncle wants the exact wording from the live site, copy it across into:

- `src/pages/Home.jsx` — `pillars` array, hero subtitle, intro band, CTA copy
- `src/pages/About.jsx` — `principles` array, `PageHeader` props, pull-quote
- `src/pages/Services.jsx` — `PageHeader` props
- `src/data/services.js` — `summary` field on each service

### 2. Paste the policy texts

The two policy pages (`EqualOpportunity.jsx`, `ModernSlavery.jsx`) ship as **structural scaffolds with placeholder text**. Open each file and paste your uncle's current approved policy wording into the `sections` array — the layout, typography, numbering, and sticky table of contents will all flow automatically from the data.

The original text is publicly readable at:
- https://southshoreprojects.com/equal-opportunity-policy
- https://southshoreprojects.com/modern-slavery-statement

### 3. Wire up the contact form

In `src/pages/Contact.jsx`, the `onSubmit` handler POSTs to `/api/contact`. Drop in an Express endpoint with Nodemailer the same way you did for Kreston:

```js
// server/contact.js (sketch)
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})
// ...
```

### 4. Host your own assets (optional)

The video and gallery images currently load from Cloudinary
(`res.cloudinary.com/dpnza2tuy/...`) — that's your uncle's existing CDN and the
URLs will keep working. If you want to serve them from your own host, swap the
URLs in `src/data/images.js`.

### 5. Logo

The favicon and navbar logo currently link to `https://southshoreprojects.com/southshore_blue_icon.jpeg`.
Drop a copy of `southshore_blue_icon.jpeg` into `/public` and update the `logoUrl`
constant in `src/data/images.js` if you'd rather host it locally.

---

## Deploying to Hostinger (same setup as Kreston Estates)

This is a **static SPA** at heart — `npm run build` outputs a static `dist/` folder.

**Option A — pure static hosting:**
Upload the contents of `dist/` to the Hostinger `public_html` directory and add this `.htaccess` so SPA routing works:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Option B — Node.js application (if you want the contact form on the same server):**
Use the Hostinger Node.js app manager, point the entry to a small Express server that serves `dist/` as static and handles `/api/contact`. This is the same shape as the Kreston deployment.

---

## Design notes

A few decisions made on the rebuild:

- **Every page keeps the hero video** — exactly like the original, but with overlaid title, eyebrow, and subtitle for context.
- **Two sliding image marquees** on the home page replace the original's static gallery sections, in opposite directions, with edge fades.
- **Gallery has a proper lightbox** with keyboard nav (← → Esc) and 1-of-N counter — a small but common UX upgrade.
- **Asymmetric grid pattern** on the gallery cycles row spans for visual rhythm.
- **Sticky table of contents** on the Modern Slavery page makes the long document much easier to navigate.
- **Editorial typography**: Fraunces serif for display, Inter Tight for body, brass accent on key italic phrases.
- **All animations are progressive** — the site works without JS; animations enhance rather than gate content.

---

## Browser support

Modern evergreen browsers. Uses `100svh` for the hero video (avoids the iOS Safari URL-bar bounce).

---

Built for the careful client.
