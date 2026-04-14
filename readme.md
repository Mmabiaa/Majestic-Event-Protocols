# Majestic Events & Protocols

Poised, prepared, and purpose driven.

This repository is the marketing site for Majestic Events & Protocols: event coordination, planning, protocol, ushering, and hosting. It is implemented as a static-first single-page application with a warm gold-and-neutral visual language.

Live site: [majestic-event-protocols.vercel.app](https://majestic-event-protocols.vercel.app/)

---

## What’s in the repo

| Path | Role |
|------|------|
| `ui/` | Full front-end: Vite app, routes, components, assets, Tailwind theme |
| `vercel.json` | Vercel build (`npm` in `ui/`), SPA rewrites to `index.html`, output `ui/dist` |

The UI is a client-rendered React app; there is no Next.js server in this project. Content is composed from reusable sections so layout and copy can evolve without entangling unrelated pages.

---

## Tech stack

- **Runtime:** React 19, TypeScript  
- **Build:** Vite 7  
- **Routing:** TanStack Router (file-based routes under `ui/src/routes/`)  
- **Styling:** Tailwind CSS v4 (`ui/src/styles.css`), custom tokens (`gold`, `gold-light`, `warm`, etc.)  
- **Components:** shadcn-style primitives in `ui/src/components/ui/` (Radix-based), Lucide for icons  
- **Motion:** Lightweight CSS keyframes (e.g. fade-in-up), not a separate animation library  
- **Hosting:** Vercel (install and build scoped to `ui/` per `vercel.json`)

---

## Local development

From the repository root:

```bash
cd ui
npm install
npm run dev
```

Production bundle:

```bash
cd ui
npm run build
npm run preview   # optional: serve dist locally
```

Lint:

```bash
cd ui
npm run lint
```

---

## Project structure (high level)

```
ui/src/
├── routes/              # TanStack file routes — thin entrypoints
├── components/
│   ├── shared/          # Navbar, footer, floating WhatsApp CTA
│   ├── pages/<page>/    # Page-specific sections (hero, lists, forms, etc.)
│   └── ui/              # Shared design-system primitives
├── assets/              # Images used in pages
├── styles.css           # Theme tokens, fonts, keyframes
└── main.tsx / router.tsx
```

Routes stay small; each screen’s markup lives under `components/pages/` so changes stay localized.

---

## Design notes

- **Typography:** Playfair Display (headings), Montserrat (body)—loaded in `ui/index.css`.  
- **Palette:** Warm off-white background, deep brown-tinted foreground, gold accents and dividers, warm section bands—implemented as OKLCH CSS variables in `ui/src/styles.css`.  
- **Experience:** Full-width imagery on hero sections, rounded cards, subtle hover transitions, fixed WhatsApp entry point, responsive navigation with a mobile sheet-style menu pattern.

---

## Site features

- **Home:** Hero, about summary, services preview grid, “why choose us,” call-to-action with phone and WhatsApp.  
- **Services:** Full-width hero and alternating image/text blocks per service.  
- **Events:** Category chips, responsive gallery, full-screen lightbox on image tap.  
- **Contact:** Phone and social links, client-side contact form with a thank-you state (no backend wired in this repo).  
- **Global:** Sticky-style navbar, footer with quick links, 404 view from the root route.

---

## Deployment

Pushes that build on Vercel use the root `vercel.json`: install and build run inside `ui/`, with SPA fallback so client routes resolve correctly in production.
