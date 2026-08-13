# Felix IMSI — Workforce Solutions Website

A premium, corporate multi-page site positioning Felix IMSI Private Limited as a trusted workforce solutions, staffing, HR outsourcing, and compliance partner. Built with TanStack Start, Tailwind v4, shadcn, and GSAP for professional motion.

## Brand & Design System

Update `src/styles.css` tokens to the Felix IMSI palette:
- `--primary`: #B30000 (Primary Red)
- `--secondary`: #D90404 (Secondary Red)
- `--accent`: #E63946
- Deep Red #7A0000 for hover/emphasis
- Background #FFFFFF, muted #F7F7F7, foreground #222222
- Sharpen radius (0.375rem) for a corporate feel
- Typography: Inter (body) + Manrope or Playfair-adjacent serif (headings) — loaded via `<link>` in `__root.tsx`. Final pair confirmed in build.
- Generous whitespace, thin borders, subtle shadows, glass-morphism on sticky nav.

## Routes (each with unique head() meta)

```
src/routes/
  __root.tsx           → global shell: sticky nav (transparent→glass), footer, fonts, meta
  index.tsx            → Home
  about.tsx            → About Us
  services.tsx         → Services
  industries.tsx       → Industries
  clients.tsx          → Clients
  careers.tsx          → Careers
  compliance.tsx       → Compliance
  process.tsx          → Recruitment Process
  gallery.tsx          → Gallery
  contact.tsx          → Contact
```

Nav order matches the brief (Home, About, Services, Industries, Clients, Careers, Compliance, Gallery, Contact); Recruitment Process linked from Home + Services.

## Home Page Sections

1. **Hero** — animated industrial skyline (SVG grid + connection lines + floating workforce icons), headline "Building Strong Workforces. Powering Successful Businesses.", 3 CTAs (Hire Workforce, Request Consultation, View Services).
2. About Felix IMSI (5+ years, mission snapshot)
3. Workforce Solutions grid (top 6 services)
4. Industries We Serve (icon grid, 13 industries)
5. Why Choose Felix IMSI (8 pillars)
6. Recruitment Process (8-step timeline w/ GSAP scroll reveal)
7. Featured Workforce Categories (interactive cards, 10 categories)
8. Compliance Management snapshot
9. Client Testimonials (carousel)
10. Trusted Clients (Foxconn, Motherson, Mobase, Wowtek, DS Connectors, New Century Sofa — text logo tiles)
11. Business Statistics (animated counters: candidates deployed, clients, industries, years, success/retention rate)
12. Gallery Preview (masonry, links to /gallery)
13. FAQs (accordion)
14. Contact CTA band
15. Footer (red theme, quick links, services, contact, newsletter, socials, hours)

## Services Page

Grouped premium cards for the 7 service families from the brief (Contract/Temporary, Permanent Recruitment, Industrial Manpower, Administrative Staffing, Technical Staffing, Payroll Management, HR Outsourcing, Compliance Services) — each with sub-service chips exactly matching the brief list.

## Industries Page

13 industries as cards with tailored blurbs and role examples per industry.

## Clients Page

Corporate clients grid, long-term partnership narrative, case-study cards, testimonials.

## About Page

Overview, journey, vision, mission, core values, leadership placeholders, milestones, future goals.

## Compliance Page

Dedicated deep dive: PF, ESI, Professional Tax, Contract Labour Act, Minimum Wages, Records, Government Compliance, Labour Law Updates, Audit Support, Documentation. Trust-focused copy (no unverifiable certification claims).

## Recruitment Process Page

Interactive vertical timeline (GSAP ScrollTrigger) for the 8 steps.

## Careers Page

Current openings placeholder list, benefits, culture, training, growth, resume upload form (front-end only; wired to a mailto or a simple form — no backend added unless requested).

## Gallery Page

Filterable masonry grid using generated placeholder imagery (office, recruitment drives, industrial deployments, training, events).

## Contact Page

Business enquiry / Hire manpower / Quotation / Consultation tabs (single unified form, front-end only), embedded Google Maps iframe, WhatsApp float button, office address block.

## Special Premium Sections (reused across pages)

- Marquee band of service keywords
- Interactive industry map (India SVG w/ hoverable regions — static illustrative)
- Animated stat counters
- Workforce category interactive cards

## Animation System (GSAP + Motion for React)

Install `gsap`. Use ScrollTrigger for section reveals, counter tweens, timeline animations, marquee, parallax hero grid. Keep motion restrained and corporate — no gaming/flashy effects. Use `<ClientOnly>`-safe patterns (dynamic import GSAP inside `useEffect`).

## Imagery

Generate hero background, industrial imagery, gallery photos, and workforce category illustrations via imagegen; store under `src/assets/`. No stock-photo placeholders.

## Head Metadata / SEO

- `__root.tsx`: site-wide defaults (title template, description, og/twitter, no og:image at root).
- Each route: unique title, description, og:title, og:description; og:image only on leaf pages where a hero image exists.
- Semantic HTML, single H1 per page, alt text on all imagery.

## Out of Scope (for this plan)

- Backend/CMS, authentication, live job board, real form submissions — forms are front-end only. Add later if requested (would enable Lovable Cloud).
- Real client logos (rendered as styled name tiles unless assets provided).

## Technical Notes

- All colors go through semantic tokens in `src/styles.css` — no hardcoded hex in components.
- Fonts loaded via `<link>` in `__root.tsx` (never `@import` in CSS).
- File-based routes; each `createFileRoute` path matches filename.
- Reusable components in `src/components/site/` (Nav, Footer, SectionHeading, StatCounter, Marquee, ProcessTimeline, ServiceCard, IndustryCard, TestimonialCarousel, ClientLogos, FAQ, CTASection).
