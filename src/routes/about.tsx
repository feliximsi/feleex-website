import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Target, Eye, Users, Sparkles, Globe2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Felix IMSI" },
      { name: "description", content: "Felix IMSI is a Chennai-based AI & technology innovation company evolved from a decade of enterprise workforce operations." },
      { property: "og:title", content: "About Felix IMSI" },
      { property: "og:description", content: "Our story, mission and transformation from workforce solutions to AI innovation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80">
            About us
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            An AI &amp; technology company shaped by a decade of enterprise operations.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Felix IMSI began as an integrated management services firm serving India's largest
            manufacturers. Today we are a next-generation technology partner — but the operational
            rigor that got us here is still in our DNA.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-14">
        <Reveal>
          <div className="rounded-3xl bg-surface-muted p-10">
            <Target className="size-8 text-brand" />
            <h2 className="mt-5 font-display text-3xl">Our Mission</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">
              To help enterprises unlock exponential value from AI and technology — building
              systems that are intelligent, secure and measurably impactful.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-gradient-brand text-white p-10 shadow-elegant">
            <Eye className="size-8" />
            <h2 className="mt-5 font-display text-3xl">Our Vision</h2>
            <p className="mt-3 text-white/85 leading-relaxed">
              To be the trusted AI innovation partner for enterprises transforming how they operate,
              serve customers and compete in a digital-first world.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface-muted py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Culture" title="What we believe." />
          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Rocket, t: "Ship velocity", d: "Small, senior teams. Weekly production releases. No committees." },
              { icon: Users, t: "Craftspeople", d: "We hire engineers who care about the details — because outcomes live there." },
              { icon: Sparkles, t: "AI-native", d: "Every product decision is asked: could an AI system do this better?" },
              { icon: Globe2, t: "Global mindset", d: "Built in Chennai, deployed for enterprises across the world." },
              { icon: Target, t: "Outcome obsessed", d: "We measure success in the metrics that move your business." },
              { icon: Eye, t: "Transparent", d: "One shared workspace. One shared roadmap. No black boxes." },
            ].map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="rounded-2xl bg-white p-6 border border-black/5 h-full">
                  <Icon className="size-6 text-brand" />
                  <h3 className="mt-4 font-display text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Leadership" title="Led by operators who've built at scale." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { n: "Karthik Raja", r: "Managing Director", b: "Two decades of enterprise operations and technology transformation experience." },
            { n: "Engineering Leadership", r: "AI & Software", b: "Senior engineers from product companies and enterprise consultancies." },
            { n: "Delivery Leadership", r: "Programs & Ops", b: "Certified program managers with global delivery expertise." },
          ].map((p) => (
            <Reveal key={p.n}>
              <div className="rounded-2xl border border-black/5 p-8">
                <div className="h-16 w-16 rounded-full bg-gradient-brand grid place-items-center text-white font-display text-2xl">
                  {p.n.charAt(0)}
                </div>
                <h3 className="mt-5 font-display text-xl">{p.n}</h3>
                <div className="text-sm text-brand font-medium">{p.r}</div>
                <p className="mt-3 text-sm text-ink-muted">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
