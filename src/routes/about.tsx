import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, Compass } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { PageHero } from "@/components/site/layout";
import { Section, SectionHeading, Eyebrow } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { stats } from "@/components/site/content";
import { Counter } from "@/components/site/counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Felix IMSI — Our Story, Vision & Leadership" },
      {
        name: "description",
        content:
          "Discover Felix IMSI Private Limited — five years of workforce solutions, staffing, HR outsourcing and compliance expertise for industries across India.",
      },
      { property: "og:title", content: "About Felix IMSI" },
      { property: "og:description", content: "Our story, vision, mission and leadership." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Felix IMSI"
        title={<>Your trusted workforce solutions partner.</>}
        description="Felix IMSI Private Limited helps businesses across India build reliable, compliant, high-performing teams — from factory-floor workers to executive leadership."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Felix IMSI leadership team in meeting"
                loading="lazy"
                width={1400}
                height={900}
                className="rounded-sm w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 rounded-sm">
                <div className="text-4xl font-display font-black">5+</div>
                <div className="text-xs uppercase tracking-wider mt-1">Years of Trust</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6">
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Built on discipline, delivered with care.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Felix IMSI was founded to close a simple gap: businesses were tired of unreliable
              manpower agencies. We built a workforce services company that treats staffing as a
              serious, long-term partnership — not a transaction.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we serve manufacturing, automotive, electronics, logistics and other core
              sectors — delivering skilled and unskilled workforce, HR outsourcing, payroll and
              statutory compliance from a single accountable partner.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Target,
              label: "Our Mission",
              text: "Provide reliable, compliant workforce solutions that let our clients focus on growth — not on hiring headaches.",
            },
            {
              icon: Eye,
              label: "Our Vision",
              text: "To be India's most trusted workforce solutions and staffing partner across every major industry.",
            },
            {
              icon: Compass,
              label: "Our Approach",
              text: "Understand each operation deeply, deploy the right people fast, and stay involved after joining.",
            },
          ].map((b) => (
            <Reveal key={b.label}>
              <div className="rounded-sm bg-background border border-border p-8 h-full">
                <b.icon className="h-6 w-6 text-primary" />
                <div className="mt-5 text-xs uppercase tracking-[0.18em] font-semibold text-primary">
                  {b.label}
                </div>
                <p className="mt-2 text-foreground text-lg font-display font-semibold leading-snug">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind every deployment"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Integrity", "Transparent dealings with clients, candidates, and authorities."],
            ["Reliability", "Commitments met — on quality, on time, every time."],
            ["Compliance", "Statutory discipline built into every process."],
            ["Partnership", "Long-term relationships over short-term wins."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="border-t-2 border-primary pt-5">
                <Heart className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display font-bold text-lg">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Our Journey" title="Milestones that shaped us" />
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-10">
            {[
              ["2020", "Company founded", "Felix IMSI incorporated with a clear focus on industrial workforce services."],
              ["2021", "First manufacturing clients", "Deployed skilled and unskilled workforce across auto-component plants."],
              ["2022", "Compliance practice", "Built in-house statutory compliance and payroll operations."],
              ["2023", "Pan-industry expansion", "Grew into electronics, logistics, warehousing and hospitality."],
              ["2024", "Enterprise partnerships", "Long-term staffing contracts with marquee industrial groups."],
              ["2025", "Scaled operations", "25,000+ candidates deployed, 150+ active clients across India."],
            ].map(([year, title, desc], i) => (
              <Reveal key={year} delay={i * 60}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`hidden md:block ${i % 2 ? "md:col-start-2" : ""}`}>
                    <div className="rounded-sm border border-border bg-background p-6">
                      <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                        {year}
                      </div>
                      <div className="mt-2 font-display font-bold text-lg">{title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-3 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2" />
                  <div className="md:hidden pl-10">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                      {year}
                    </div>
                    <div className="mt-1 font-display font-bold">{title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
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
      </Section>

      <Section className="bg-brand-deep text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
              Partner with Felix IMSI for your next workforce mandate.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
