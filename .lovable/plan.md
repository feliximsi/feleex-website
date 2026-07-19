
# Felix IMSI — AI & Technology Website

Reposition Felix IMSI as an AI-first technology company. Manpower stays as one small supporting vertical. Design language: IBM/Accenture/OpenAI corporate premium, using the exact brand red palette from the business card.

## Design System

- Palette (added as CSS tokens in `src/styles.css`, oklch conversions):
  - Primary Red `#B30000`, Secondary `#D90404`, Deep `#7A0000`, Accent `#E63946`
  - White `#FFFFFF`, Light Gray `#F8F8F8`, Dark `#111111`, Muted `#666666`
- Typography: Instrument Serif (display headlines, echoes the logo's "Felix" serif) + Inter (body), loaded via `<link>` in `__root.tsx`.
- Semantic tokens: `--brand`, `--brand-strong`, `--brand-deep`, `--brand-accent`, `--surface`, `--surface-muted`, gradients (`--gradient-brand`, `--gradient-hero`), shadows (`--shadow-elegant`, `--shadow-glow`).
- Motion: `framer-motion` for scroll reveals, parallax, marquee, floating particles, staggered text. Custom SVG neural-network hero.

## Routes (TanStack file-based, each with own `head()` for SEO)

```
/                    Home
/about               Company story + transformation timeline
/services            All service categories (premium cards)
/ai-solutions        Dedicated AI page
/solutions           Business/industry solutions overview
/industries          Industries served
/portfolio           Filterable project grid
/case-studies/$slug  Case study detail template + index at /case-studies
/tech-stack          Interactive stack display
/resources           Blog / insights hub
/careers             Careers + openings
/contact             Consultation + enquiry forms
/workforce           Legacy manpower vertical (small, linked from footer + about)
```

Root layout: sticky nav (transparent → glass on scroll), footer with red theme.

## Home Page Sections

1. Hero — animated neural-network SVG + floating particles, headline "Building Intelligent Digital Futures", 3 CTAs.
2. Trust marquee — Foxconn, Motherson, Mobile Electronics, DS Connectors, +others.
3. Technology overview strip (AI • Software • Cloud • Automation).
4. Services grid (8 cards with hover glow).
5. AI Innovation showcase (animated data streams + demo mock).
6. Featured projects (3 case-study teasers).
7. Industries served (icon grid).
8. Technology stack (animated logos).
9. Digital transformation timeline (manpower → AI).
10. Why Felix IMSI (stats + differentiators).
11. Process (5 steps, scroll-triggered).
12. Insights teaser (3 blog cards).
13. Contact CTA band.
14. Footer.

## Shared Components

`SiteHeader`, `SiteFooter`, `NeuralHero`, `Marquee`, `ServiceCard`, `SectionHeading`, `StatCounter`, `Timeline`, `ParticleField`, `RevealOnScroll`, `GlowCard`, `CTASection`.

## Content Pages

Each secondary route ships with real, well-written placeholder copy tailored to Felix IMSI (not lorem), premium layouts, scroll reveals, and unique hero treatments so no two pages feel identical. Portfolio uses static sample projects with filter chips. Case-study detail uses the dynamic template with structured sections (Challenge / Solution / Tech / Implementation / Results / ROI / Impact / Gallery).

Contact page: consultation form, project estimation form, WhatsApp button (`wa.me/919585978599`), email `rkrajaa@felixims.com`, address block, Google Maps embed for Perambur, Chennai.

Workforce page: single focused page for IT Staffing, Contract Staffing, Resource Augmentation, Compliance, Temp, Permanent Hiring — restrained styling to keep it a supporting vertical.

## Technical Notes

- Install: `framer-motion`, `lucide-react` (already present), `embla-carousel-react` if needed for marquee (else CSS keyframes).
- Update `__root.tsx`: real site-wide title/description/OG, font `<link>` tags, sticky `SiteHeader` + `SiteFooter` wrapping `<Outlet />`.
- Replace `src/routes/index.tsx` placeholder with home page.
- All colors via semantic tokens — zero hardcoded hex in components.
- Every route file defines its own `head()` with unique title/description/OG (no image, to let hosting inject preview).
- No backend needed for v1; contact forms show a success toast (Sonner already available). Lovable Cloud can be added later if the user wants form submissions persisted.

## Out of Scope (v1)

- Real CMS / dynamic blog data (static sample posts).
- Auth, database, form persistence.
- Live AI demos (visual mocks only).

Ready to build on approval.
