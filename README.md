# Carmel B. Coscos — Bookkeeping Portfolio

Static single-page portfolio for Carmel Balladares Coscos, QuickBooks Bookkeeper / Virtual Accounting Assistant.

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · GSAP (ScrollTrigger) · Framer Motion · Lucide / React Icons.
No backend, API calls, or environment variables.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives in [src/data/portfolio.ts](src/data/portfolio.ts): profile and contact details, about text and stats,
experience, skills, featured tools, and education. Components in `src/components/` only render that data.

- **Photo:** `public/images/carmel.webp` (+ `.jpg` fallback), cropped and compressed from the original headshot.
- **Resume:** the navbar "Resume", hero "Download Resume" and contact "View Resume" buttons link to the resume PDF
  on Google Drive (`resume` / `resumeDownload` in the data file). The Drive file must stay shared as "Anyone with the link".

## Deploying

`npm run build` outputs a static `dist/` folder that can be hosted on Netlify, Vercel, GitHub Pages, or any static host.
