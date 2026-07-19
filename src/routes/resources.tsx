import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Felix IMSI" },
      { name: "description", content: "AI insights, technology articles, whitepapers, guides and industry trends from Felix IMSI." },
      { property: "og:title", content: "Resources — Felix IMSI" },
      { property: "og:description", content: "Thinking, writing and research from our team." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const posts = [
  { cat: "AI Insights", t: "Building enterprise-ready LLM agents in 2026", d: "The architectural patterns that separate demos from production." },
  { cat: "Technology", t: "Beyond RPA: why AI-native automation wins", d: "Traditional RPA hits its ceiling. Agentic workflows raise it." },
  { cat: "Cloud", t: "The hidden cost of skipping a data platform", d: "Every AI initiative is a data initiative in disguise." },
  { cat: "Whitepaper", t: "Enterprise AI governance framework v2", d: "A practical framework for governing production AI systems." },
  { cat: "Guides", t: "Ship your first AI agent in 30 days", d: "A step-by-step guide for engineering leaders." },
  { cat: "Trends", t: "The 2026 state of AI in Indian manufacturing", d: "Our annual report on adoption, ROI and roadblocks." },
];

function ResourcesPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Insights &amp; research.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Original writing from our engineers, researchers and delivery leads.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Latest" title="Recent publications" />
        <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <StaggerItem key={p.t}>
              <article className="group h-full rounded-3xl border border-black/5 overflow-hidden hover:shadow-elegant hover:border-brand/30 transition-all">
                <div className="aspect-[16/9] bg-gradient-brand" />
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-brand font-medium">{p.cat}</span>
                  <h3 className="mt-3 font-display text-xl group-hover:text-brand transition-colors">{p.t}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.d}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
