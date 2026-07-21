import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { Marquee } from "@/components/site/marquee";
import {
  serviceGroups,
  industries,
  workforceCategories,
  processSteps,
  whyChoose,
  trustedClients,
  stats,
  faqs,
} from "@/components/site/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felix IMSI — Trusted Workforce Solutions Partner in India" },
      {
        name: "description",
        content:
          "Reliable industrial manpower, contract & permanent staffing, HR outsourcing, payroll, and statutory compliance for businesses across India.",
      },
      { property: "og:title", content: "Felix IMSI — Trusted Workforce Solutions Partner in India" },
      {
        property: "og:description",
        content:
          "Reliable industrial manpower, staffing, HR outsourcing, payroll, and compliance for industries across India.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Marquee
        items={[
          "Industrial Staffing",
          "Contract Staffing",
          "Permanent Recruitment",
          "HR Outsourcing",
          "Payroll Management",
          "Compliance Management",
          "Executive Search",
          "Skilled Workforce",
        ]}
      />
      <Industries />
      <WhyChoose />
      <Process />
      <WorkforceCategoriesSection />
      <ComplianceSnapshot />
      <StatsBand />
      <Testimonials />
      <GalleryPreview />
      <FAQSection />
      <ContactCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 overflow-hidden isolate bg-brand-deep">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/95 via-brand-deep/85 to-brand/70 mix-blend-multiply" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-x relative z-10 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Your Trusted Workforce Solutions Partner
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.05]">
              Building Strong Workforces.
              <br />
              <span className="text-white/70">Powering Successful Businesses.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
              Providing reliable workforce solutions, staffing services, HR outsourcing, and
              statutory compliance support for industries across India.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90 transition-colors"
              >
                Hire Workforce
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 backdrop-blur-md transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/90 hover:text-white transition-colors"
              >
                View Services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
              {stats.slice(0, 4).map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-display font-bold text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-border bg-muted/60">
      <div className="container-x py-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by industry leaders
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {trustedClients.map((name) => (
            <span
              key={name}
              className="font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground/50 hover:text-foreground transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <Reveal className="lg:col-span-5">
          <Eyebrow>About Felix IMSI</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            More than a manpower supplier. A workforce partner.
          </h2>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-7">
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over five years, Felix IMSI Private Limited has helped businesses across India
            build reliable teams — from factory-floor operators to executive leadership. We combine
            deep industry knowledge with disciplined recruitment, transparent payroll, and
            end-to-end statutory compliance.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Our approach is simple: understand each client's operations, deploy the right people
            fast, and support them so businesses can focus on growth — not on hiring headaches.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              ["5+", "Years of Experience"],
              ["13", "Industries Served"],
              ["150+", "Active Clients"],
              ["96%", "Fulfilment Success"],
            ].map(([v, l]) => (
              <div key={l} className="border-l-2 border-primary pl-4">
                <div className="text-2xl font-display font-bold text-foreground">{v}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-deep"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section className="bg-muted/50">
      <SectionHeading
        eyebrow="Our Workforce Solutions"
        title="A complete staffing & compliance suite"
        description="Eight service families designed to cover every workforce need — from a single hire to a full production ramp-up."
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceGroups.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Link
              to="/services"
              className="group flex h-full flex-col rounded-sm border border-border bg-background p-7 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="grid h-12 w-12 place-items-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-display font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {s.summary}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Industries() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deployed across India's core sectors"
          description="From automotive assembly lines to warehousing hubs — Felix IMSI has staffed operations in every major industry vertical."
          className="mb-0"
        />
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-deep"
        >
          View all industries <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 40}>
            <div className="group rounded-sm border border-border bg-background p-6 hover:border-primary hover:bg-brand-deep hover:text-white transition-all">
              <ind.icon className="h-6 w-6 text-primary group-hover:text-white" />
              <div className="mt-4 font-display font-bold">{ind.name}</div>
              <div className="mt-1 text-xs text-muted-foreground group-hover:text-white/70">
                {ind.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WhyChoose() {
  return (
    <Section className="bg-muted/50">
      <SectionHeading
        eyebrow="Why Choose Felix IMSI"
        title="Eight reasons businesses trust us"
        description="Speed, compliance, and consistency — delivered by a team that understands what it takes to keep operations running."
        align="center"
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {whyChoose.map((w, i) => (
          <Reveal key={w.title} delay={i * 50}>
            <div>
              <w.icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display font-bold">{w.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Recruitment Process"
        title="A disciplined eight-step workflow"
        description="Every mandate follows the same rigorous process — so quality and timelines stay consistent whether we're hiring one engineer or two hundred workers."
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.title} delay={i * 70}>
            <div className="relative rounded-sm border border-border p-6 h-full">
              <div className="absolute top-4 right-5 font-display text-4xl font-black text-primary/10">
                {String(i + 1).padStart(2, "0")}
              </div>
              <step.icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display font-bold">{step.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WorkforceCategoriesSection() {
  return (
    <Section className="bg-brand-deep text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
            <span className="h-px w-6 bg-white/80" /> Featured Workforce Categories
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            The people behind India's production.
          </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            From production lines to back offices, our talent pool covers every role your operation
            depends on. Verified, skill-mapped, and deployment-ready.
          </p>
        </Reveal>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-2.5">
          {workforceCategories.map((c, i) => (
            <Reveal key={c} delay={i * 30}>
              <div className="group rounded-sm border border-white/15 bg-white/[0.03] p-5 hover:bg-white hover:text-brand-deep transition-colors">
                <div className="font-display font-bold text-sm">{c}</div>
                <div className="mt-2 text-[11px] uppercase tracking-wider text-white/50 group-hover:text-brand-deep/60">
                  Available Pan-India
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ComplianceSnapshot() {
  return (
    <Section>
      <div className="rounded-sm border border-border bg-gradient-to-br from-muted to-background p-8 md:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>Compliance Management</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Statutory compliance handled end-to-end.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              PF, ESI, Professional Tax, Labour Welfare Fund, Contract Labour Act, minimum wages
              and payroll compliance — all documented, audited, and delivered on time.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["PF", "ESI", "Professional Tax", "LWF", "CLRA", "Minimum Wages", "Audits", "Government Filings"].map(
                (c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-sm border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
            <div className="mt-7">
              <Link
                to="/compliance"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep"
              >
                Explore compliance services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm bg-brand-deep text-white p-8">
              <div className="text-6xl md:text-7xl font-display font-black leading-none">100%</div>
              <div className="mt-3 text-sm text-white/70">
                Statutory compliance record maintained across all deployed workforce.
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
                <div>
                  <div className="text-2xl font-display font-bold">
                    <Counter to={60} />+
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">
                    Monthly Filings
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold">
                    <Counter to={0} />
                    <span className="text-primary">✓</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">
                    Non-compliance Events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StatsBand() {
  return (
    <section className="border-y border-border bg-background">
      <div className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-black text-primary">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Felix IMSI ramped up 200+ line operators for our new plant in under three weeks. Their compliance handling took a real load off our HR team.",
      name: "Plant HR Head",
      role: "Automotive Manufacturing",
    },
    {
      quote:
        "Consistent quality of workforce, transparent payroll, and always available on call. They feel like an extension of our own team.",
      name: "Operations Director",
      role: "Electronics Assembly",
    },
    {
      quote:
        "We've worked with several agencies. Felix IMSI stands out for their attention to statutory documentation and speed of replacement.",
      name: "HR Business Partner",
      role: "Warehousing & Logistics",
    },
  ];
  return (
    <Section className="bg-muted/50">
      <SectionHeading
        eyebrow="Client Testimonials"
        title="What our clients say"
        align="center"
      />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <figure className="h-full flex flex-col rounded-sm border border-border bg-background p-8">
              <div className="text-primary text-4xl leading-none font-display">"</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GalleryPreview() {
  const imgs = [gallery1, gallery2, gallery3, gallery4];
  return (
    <Section>
      <div className="flex items-end justify-between mb-10">
        <SectionHeading eyebrow="Gallery" title="Inside Felix IMSI" className="mb-0" />
        <Link
          to="/gallery"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-deep"
        >
          View gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section className="bg-muted/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers, upfront."
            description="Common questions from businesses evaluating Felix IMSI as their workforce partner."
          />
        </div>
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
              Ready to build your workforce?
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Let's staff your operations — reliably, compliantly, at scale.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
            >
              Request Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
