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

- **Content lives in `src/data/`**, not in components: `site.ts` (name, pitch, `openToWork`, `resumeUrl`, socials), `projects.ts` (projects plus case-study fields), `experience.ts`, `skills.ts` (icons from `public/images/tech-stack-icons/`), `gallery.ts`. Edit these to change site content.
- **Root layout (`src/app/layout.tsx`)** renders `SiteNav` + `<main id="main">` + `Footer` for every page, so pages must not render their own `<main>`. It also holds the next/font setup, the inline theme script, Google Tag Manager, and JSON-LD generated from `site.ts` and `gallery.ts`.
- **Home (`src/app/page.tsx`)** stacks `components/sections/`: `Hero`, `SelectedWork` (`#work`), `Skills`, `Experience` (`#experience`), `AboutTeaser` (`#about`), `Contact` (`#contact`). Nav links in `layout/SiteNav.tsx` use `/#id` anchors, so keep ids in sync.
- **Case studies:** `src/app/projects/[slug]/page.tsx` is statically generated from `projects.ts` (`dynamicParams = false`). Adding a project to the array adds its page, home card, and sitemap entry. Project copy and stacks were verified against the live sites. Screenshots live in `public/images/projects/`.
- **Code challenges:** `src/data/challenges.ts` lists them; `/challenges` is the index and the home page has a `Challenges` section (`#challenges`). Each challenge is custom, so there is no dynamic route. Either build it as a Next route at `src/app/challenges/<slug>/page.tsx`, or as a **standalone page** (plain HTML/CSS/JS, no portfolio chrome) in `public/challenges/<slug>/` with `href` set in `challenges.ts` and a `rewrites()` entry in `next.config.ts` (Next does not serve a folder's `index.html` itself). Standalone pages must use absolute asset URLs (`/challenges/<slug>/...`) because they are served without a trailing slash. `gamer-sign-up` is the standalone example. It has a **theme switcher**: a theme is one `[data-theme]` block in `themes.css` plus one entry in `themes.js` (colors there; effects, backdrop, transition and decorative copy in the registry entry). To add one, copy the template at the bottom of `themes.css`, add the entry, then run `npm run check:themes` (contrast check for every theme). Effects are switched on by the `fx` list, never by CSS inside a theme block. Preview any theme with `?theme=<id>`. Note: `next start` caches the public file list, so restart it after adding new files. A challenge can later move to its own site by changing `href`.
- **`/gallery` is intentionally hidden:** it's personal, so it's not in the nav or sitemap and has `robots: noindex`. Don't link to it.
- **Contact form** uses EmailJS (`@emailjs/browser`). `sections/Contact.tsx` calls `emailjs.sendForm` with the service/template/public-key IDs in `site.emailjs` (public by design). The EmailJS template reads the field names `name`, `email`, `message`, so keep them in sync. A hidden `bot-field` honeypot short-circuits to a fake success. Works locally and in production.
- **Theming:** colors are CSS variables in `src/app/globals.css` (`:root` and `.dark`), exposed to Tailwind via `@theme inline` as `background`, `foreground`, `surface`, `muted`, `primary`, `primary-ink`, `accent`, `sun`, `lilac`, `line`, `hover` (e.g. `bg-surface`, `text-muted`, `border-line`). `dark:` variants work via `@custom-variant`. An inline script in `layout.tsx` sets the `dark` class before paint; `ThemeContext` only syncs with it. Tailwind v4 is configured entirely in CSS; there is no `tailwind.config.js`.
- **Contrast:** `primary` (coral) is too light for text on the light background. Use `text-primary-ink` for coral text, and `text-[#1a1423]` on `bg-primary`/`bg-sun`/`bg-lilac` fills, which stay light in both themes.
- **Motion:** wrap content in `components/motion/Reveal.tsx` (`as="li"` inside lists) for scroll-in animation. `Providers.tsx` sets `MotionConfig reducedMotion="user"`, and `globals.css` disables CSS animations under `prefers-reduced-motion`. The skills marquee becomes a static wrapped list in that mode.
- **SEO:** `src/app/sitemap.ts` and `robots.ts` are generated from the data files. Per-page `metadata` exports set titles (layout template: `%s | Emma Nagano`).

## Conventions

- Path alias: `@/*` → `src/*` (data imports use `@/data/...`).
- Plain `<img>` tags are used on purpose: ESLint's `@next/next/no-img-element` is off, and `next.config.ts` sets `images.unoptimized`.
- Visual language: 2px `border-foreground` outlines, hard offset shadows (`shadow-[6px_6px_0_var(--foreground)]`), slight rotations, Bricolage Grotesque (`font-display`) for headings, Geist Mono (`font-mono`) for labels and tags.
- Indent with tabs.
