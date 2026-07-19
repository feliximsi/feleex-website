import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Felix IMSI" },
      { name: "description", content: "Selected AI, web, mobile, software and enterprise automation projects delivered by Felix IMSI." },
      { property: "og:title", content: "Portfolio — Felix IMSI" },
      { property: "og:description", content: "AI and technology projects for enterprises." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const FILTERS = ["All", "AI", "Web", "Mobile", "Software", "Automation", "Enterprise", "SaaS"] as const;
type Filter = (typeof FILTERS)[number];

const projects: { slug: string; title: string; tag: Filter; client: string; blurb: string }[] = [
  { slug: "manufacturing-defect-vision", title: "Defect vision system for tier-1 auto supplier", tag: "AI", client: "Automotive", blurb: "Real-time computer vision on the production line reduced escapes by 42%." },
  { slug: "supplier-agent", title: "Autonomous supplier operations agent", tag: "AI", client: "Manufacturing", blurb: "LLM agent that reads POs, invoices and QC reports and takes action." },
  { slug: "b2b-portal", title: "B2B customer portal for electronics distributor", tag: "Web", client: "Distribution", blurb: "SSO-enabled portal with real-time inventory and quoting." },
  { slug: "field-ops-app", title: "Field-ops mobile app for logistics fleet", tag: "Mobile", client: "Logistics", blurb: "Offline-first React Native app for 2,400 drivers." },
  { slug: "erp-modernization", title: "Legacy ERP modernization", tag: "Software", client: "Manufacturing", blurb: "Re-platformed a 15-year ERP to a modern modular stack." },
  { slug: "invoice-automation", title: "Invoice processing automation", tag: "Automation", client: "Finance", blurb: "AI-driven OCR + rules engine processing 30k invoices/month." },
  { slug: "enterprise-datalake", title: "Enterprise data lake and BI platform", tag: "Enterprise", client: "Retail", blurb: "Unified analytics across 40+ sources." },
  { slug: "compliance-saas", title: "Compliance-as-a-service SaaS", tag: "SaaS", client: "HR Tech", blurb: "Multi-tenant SaaS serving 300+ enterprise customers." },
  { slug: "hospital-copilot", title: "Clinical documentation copilot", tag: "AI", client: "Healthcare", blurb: "Ambient AI scribe for outpatient consultations." },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Work we're proud of.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            A selection of AI, software and enterprise transformation projects — from concept
            through to production.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-gradient-brand text-white shadow-elegant"
                  : "border border-black/10 text-ink-muted hover:border-brand/40 hover:text-brand"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Reveal key={p.slug}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.slug }}
                className="group block h-full rounded-3xl border border-black/5 overflow-hidden hover:shadow-elegant hover:border-brand/30 transition-all"
              >
                <div className="aspect-[16/10] bg-gradient-brand relative">
                  <span className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                    {p.tag}
                  </span>
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="font-display text-white/80 text-sm">{p.client}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read case study <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
