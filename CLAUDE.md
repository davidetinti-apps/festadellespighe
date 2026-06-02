@AGENTS.md

# Festa delle Spighe — Codebase Guide

## Project Overview

Static marketing website for the annual **Festa delle Spighe** parish festival in Villafontana (Italy). The 44th edition runs June 19–21, 2026. No backend, no database — all content is hardcoded in components.

**Live URL**: festadellespighe.parrocchia-villafontana.it

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 + custom theme |
| Fonts | Google Fonts: Playfair Display, Inter, Dancing Script |
| Images | Next.js `<Image>` with Unsplash remote patterns |
| Deployment | Docker → GitHub Container Registry → self-hosted server |

> **IMPORTANT**: Next.js 16 has breaking API changes. Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.

---

## Development Commands

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Serve production build
npm run lint     # ESLint
```

No test suite exists. There is no `.env` file — the app has no secrets or runtime config.

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: sets fonts, renders Header + Footer
│   ├── page.tsx            # Home page: hero, program, info, photo strip
│   ├── globals.css         # Tailwind import + custom theme tokens + animations
│   ├── menu/
│   │   └── page.tsx        # Food stands and menu items
│   └── storico/
│       └── page.tsx        # Historical posters gallery
└── components/
    ├── Header.tsx          # Sticky nav with mobile hamburger (client component)
    ├── Footer.tsx          # Social links + developer credits
    ├── ScrollAnimations.tsx # IntersectionObserver scroll-trigger (client component)
    └── StoricoGallery.tsx  # Poster grid with lightbox (client component)

public/
├── hero-wheat.jpg          # Hero background image
├── locandine/              # Historical poster PNGs: 2014–2019, 2022–2026
├── strip_1.png … strip_6.png  # Photo strip gallery images
└── *.svg                   # Icons (Next.js defaults, not currently used in UI)
```

---

## Routing

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Home: hero, event program, info cards, photo strip |
| `/menu` | `src/app/menu/page.tsx` | Food stand menus with category sections |
| `/storico` | `src/app/storico/page.tsx` + `StoricoGallery.tsx` | Historical poster gallery with lightbox |

All pages are Server Components by default. Client components are marked with `"use client"` and live in `src/components/`.

---

## Styling Conventions

### Tailwind CSS 4

This project uses **Tailwind CSS v4** — the config is in `globals.css` via `@theme inline`, not `tailwind.config.js`. Custom tokens are available as Tailwind utilities:

```css
/* Theme tokens defined in src/app/globals.css */
--color-primary: #5c7a3a        /* olive green */
--color-primary-dark: #3d5a2e
--color-primary-light: #7a9e55
--color-secondary: #c45a3c      /* terracotta */
--color-accent: #d4a030         /* gold */
--color-warm: #fef9f2           /* page background */
--color-warm-dark: #f5ece0
--color-cream: #fdf4e8
--color-text: #2b2420           /* dark brown */
--color-text-light: #6b5e55
```

Use these as `bg-primary`, `text-secondary`, `border-accent`, etc.

### Typography

- `font-display` → Playfair Display (headings — h1, h2, h3 inherit this automatically)
- `font-sans` → Inter (body text default)
- `font-script` → Dancing Script (decorative, e.g., footer tagline)

---

## Animation System

### CSS Keyframe Animations (defined in `globals.css`)

| Class | Keyframe | Duration |
|---|---|---|
| `animate-fade-in-up` | opacity + translateY(24px→0) | 0.7s |
| `animate-fade-in` | opacity 0→1 | 0.6s |
| `animate-scale-in` | opacity + scale(0.9→1) | 0.6s |
| `animate-slide-in-left` | opacity + translateX(-30px→0) | 0.6s |
| `animate-slide-in-right` | opacity + translateX(30px→0) | 0.6s |
| `animate-float` | translateY(-8px↔0) | 3s infinite |

Stagger delays: `.delay-100` through `.delay-800` (applied as Tailwind utility classes).

### Scroll-triggered Animations

Add `scroll-animate` class to any element. `ScrollAnimations.tsx` uses IntersectionObserver to add `is-visible` when 10% of the element enters the viewport (with a –40px bottom margin). Use `globals.css` to define the visible state:

```css
.scroll-animate { opacity: 0; transform: translateY(20px); transition: ...; }
.scroll-animate.is-visible { opacity: 1; transform: none; }
```

`<ScrollAnimations />` must be rendered inside the layout (it already is in `layout.tsx`).

---

## Component Conventions

- Server Components by default; add `"use client"` only when using browser APIs, hooks, or event handlers.
- Props are typed inline with TypeScript interfaces, not in separate files.
- No global state management — components are self-contained.
- Images use Next.js `<Image>` with explicit `width`/`height` or `fill` + `sizes`.
- All user-visible text is in Italian.

---

## Adding Content

### New page
Create `src/app/<route>/page.tsx` as a Server Component. Add a nav link in `Header.tsx`.

### New poster year
Add the PNG to `public/locandine/<year>.png` and add the year to the `years` array in `StoricoGallery.tsx`.

### New menu category
Add to the `menuData` array in `src/app/menu/page.tsx` following the `MenuCategory` / `MenuItem` interface already defined there.

---

## Deployment

Production build uses Docker standalone output (`output: "standalone"` in `next.config.ts`). CI/CD via GitHub Actions:

1. Build & push Docker image to GitHub Container Registry (`ghcr.io`)
2. SSH into production server, pull image, restart via `docker compose`

Relevant GitHub secrets: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`, `GHCR_USERNAME`, `GHCR_TOKEN`
Optional variables: `APP_PORT` (default 3000), `DEPLOY_DIR`

To build locally:
```bash
docker build -t festadellespighe .
docker run -p 3000:3000 festadellespighe
```
