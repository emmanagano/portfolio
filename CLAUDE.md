# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Emma Nagano (emmanagano.com), aimed at landing a frontend dev role. Next.js 16 App Router + React 18 + Tailwind CSS v4 + framer-motion + TypeScript. Fully static (no API routes or database). Deployed on Netlify (GitHub-connected). There is no test suite.

## Commands

- `npm run dev`: dev server with Turbopack at http://localhost:3000
- `npm run build`: production build (also the main type-check, since there is no separate `tsc` script). Every route should come out static (○/●).
- `npm run start`: serve the production build
- `npm run lint`: runs `eslint .` (flat config in `eslint.config.mjs`, which ignores `.next/`, `.netlify/`, `out/`)

## Architecture

- **Content lives in `src/data/`**, not in components: `site.ts` (name, pitch, `openToWork`, `resumeUrl`, socials), `home.ts` (all home-page copy), `projects.ts` (slugs and `liveUrl`s, used for the redirects), `gallery.ts`. Edit these to change site content.
- **Root layout (`src/app/layout.tsx`)** renders `SiteNav` + `<main id="main">` + `Footer` for every page, so pages must not render their own `<main>`. It also holds the next/font setup, the inline theme script, Google Tag Manager, and JSON-LD generated from `site.ts` and `gallery.ts`.
- **Home (`src/app/page.tsx`)** is the poster-editorial redesign, built from `components/home/`: `PosterHero` (stacked DESIGN./WRITE./CODE. with Emma's photo, a hairline trace of the hidden letters, a tick ruler and crosshairs), `WorkIndex` (`#work`, a red index list in Share Tech Mono; hovering a row shows one B&W screenshot), `ExperiencePath` (`#experience`, hover-reveal poster type plus the serif-italic résumé link), `PhotoWord` (`#about`, the word UMMMM filled with cycling B&W photos and a red offset shadow) and `ContactLetter` (`#contact`, red block; the period of SAY HI. is an OPEN TO ROLES badge that dives off once the section scrolls into view, rolls right and keeps spinning). Its content lives in `src/data/home.ts`. Nav links in `layout/SiteNav.tsx` use `/#id` anchors, so keep ids in sync. Design rules: the `minimal-editorial-taste` skill.
- **Case studies were retired:** home tiles link straight to each live site, and `next.config.ts` redirects `/projects/<slug>` to `liveUrl` (generated from `projects.ts`). Screenshots live in `public/images/projects/`.
- **Only three routes:** `/` (home), `/about` and the hidden `/gallery`. The code challenges and their pages were removed; `next.config.ts` redirects old `/challenges/*` links to `/`.
- **`/gallery` is intentionally hidden:** it's personal, so it's not in the nav or sitemap and has `robots: noindex`. Don't link to it.
- **Contact form** uses EmailJS (`@emailjs/browser`). `home/ContactLetter.tsx` calls `emailjs.sendForm` with the service/template/public-key IDs in `site.emailjs` (public by design). The EmailJS template reads the field names `name`, `email`, `message`, so keep them in sync. A hidden `bot-field` honeypot short-circuits to a fake success. Works locally and in production.
- **Theming:** the site is light-only (the inline script in `layout.tsx` clears any saved `dark` class). Palette tokens in `src/app/globals.css`: `paper`, `linen`, `nude`, `hairline`, `ghost`, `taupe`, `ink`, `red`, `oxblood` (e.g. `bg-linen`, `text-taupe`). The older names (`background`, `foreground`, `surface`, `muted`, `primary`, `primary-ink`, `accent`, `sun`, `lilac`, `line`, `hover`) are remapped onto that palette so /about and /gallery keep working. Tailwind v4 is configured entirely in CSS; there is no `tailwind.config.js`.
- **Contrast:** `primary` (coral) is too light for text on the light background. Use `text-primary-ink` for coral text, and `text-[#1a1423]` on `bg-primary`/`bg-sun`/`bg-lilac` fills, which stay light in both themes.
- **Motion:** wrap content in `components/motion/Reveal.tsx` (`as="li"` inside lists) for scroll-in animation. `Providers.tsx` sets `MotionConfig reducedMotion="user"`, and `globals.css` disables CSS animations under `prefers-reduced-motion`.
- **SEO:** `src/app/sitemap.ts` and `robots.ts` are generated from the data files. Per-page `metadata` exports set titles (layout template: `%s | Emma Nagano`).

## Conventions

- Path alias: `@/*` → `src/*` (data imports use `@/data/...`).
- Plain `<img>` tags are used on purpose: ESLint's `@next/next/no-img-element` is off, and `next.config.ts` sets `images.unoptimized`.
- Visual language (poster-editorial): Inter Tight (`font-sans`/`font-display`) at 900 for huge cropped poster type, 500 for tiny uppercase labels; Instrument Serif (`font-serif`) italic for CTAs ("The full résumé ↗", "Send it →"); Share Tech Mono (`font-mono-cyber`) only in the work section. One red only (`red`); `oxblood` is kept as a token but not used for visible text. Warm neutrals with red used only in a few big moments. Emma's photos are black-and-white copies in `public/images/emma-nagano/bw/` with her red glasses kept red.
- Indent with tabs.
