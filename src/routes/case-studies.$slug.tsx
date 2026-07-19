import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  technology: string[];
  implementation: string[];
  results: { k: string; v: string }[];
  roi: string;
  impact: string;
};

const CASES: Record<string, CaseStudy> = {
  "manufacturing-defect-vision": {
    slug: "manufacturing-defect-vision",
    title: "Defect vision system for tier-1 auto supplier",
    client: "Automotive components manufacturer",
    challenge: "Manual QC was catching only 78% of surface defects on high-volume harness lines, leading to costly customer escapes and a growing backlog of rework.",
    solution: "A real-time computer vision system deployed on edge GPUs at every inspection station, integrated with the MES to trigger reject gates and log defect signatures.",
    technology: ["PyTorch", "NVIDIA Jetson", "OpenCV", "MQTT", "Grafana", "PostgreSQL"],
    implementation: [
      "6-week data collection sprint across 3 plants",
      "Custom YOLO model trained on 240k labeled images",
      "Edge deployment with OTA model updates",
      "MES integration via OPC-UA and MQTT",
      "Ops dashboard with real-time defect heatmaps",
    ],
    results: [
      { k: "42%", v: "Reduction in escapes" },
      { k: "3.1x", v: "Faster inspection" },
      { k: "$1.8M", v: "Annual savings" },
    ],
    roi: "Payback in 4.2 months. Ongoing savings compounding as the model retrains on new defect patterns.",
    impact: "Enabled the plant to bid on and win two new premium OEM contracts requiring zero-PPM commitments.",
  },
  "supplier-agent": {
    slug: "supplier-agent",
    title: "Autonomous supplier operations agent",
    client: "Global electronics manufacturer",
    challenge: "Procurement teams spent 60% of their time on repetitive PO reconciliation, invoice matching and QC report triage.",
    solution: "An LLM-powered agent that ingests supplier documents, cross-references ERP records and takes action — routing exceptions to humans only when needed.",
    technology: ["OpenAI GPT-4", "LangChain", "PostgreSQL + pgvector", "Node.js", "SAP integration"],
    implementation: [
      "Document intelligence pipeline with 99.2% extraction accuracy",
      "Tool-using agent orchestrating 14 enterprise APIs",
      "Human-in-the-loop UI for exception handling",
      "Full audit trail for compliance",
    ],
    results: [
      { k: "68%", v: "Time reclaimed" },
      { k: "94%", v: "Straight-through processing" },
      { k: "12x", v: "Faster reconciliation" },
    ],
    roi: "Freed 18 FTEs to focus on strategic sourcing within the first quarter.",
    impact: "Redefined the procurement operating model. Now the reference architecture for the company's global rollout.",
  },
};

// Generic fallback for other slugs so links from Portfolio always resolve.
function fallbackCase(slug: string): CaseStudy {
  return {
    slug,
    title: slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    client: "Enterprise client",
    challenge: "A legacy process was slowing the organization down and eroding customer experience.",
    solution: "Felix IMSI designed and shipped a modern AI-enabled platform integrated with existing enterprise systems.",
    technology: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
    implementation: [
      "Discovery and architecture design",
      "Iterative delivery in 2-week sprints",
      "Enterprise integrations and security review",
      "Production rollout and hypercare",
    ],
    results: [
      { k: "40%+", v: "Efficiency gain" },
      { k: "24/7", v: "Availability" },
      { k: "6 mo", v: "Payback" },
    ],
    roi: "Measurable payback within two quarters of go-live.",
    impact: "Set a new operating standard for the business unit.",
  };
}

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }): CaseStudy => {
    const cs = CASES[params.slug] ?? fallbackCase(params.slug);
    if (!cs) throw notFound();
    return cs;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Case study"} — Felix IMSI` },
      { name: "description", content: loaderData?.challenge ?? "Felix IMSI case study." },
      { property: "og:type", content: "article" },
      { property: "og:title", content: loaderData?.title ?? "Case study" },
      { property: "og:description", content: loaderData?.challenge ?? "" },
      { property: "og:url", content: `/case-studies/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/case-studies/${params.slug}` }],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const cs = Route.useLoaderData() as CaseStudy;
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.18em] text-brand-accent">{cs.client}</div>
          <h1 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05] max-w-4xl">{cs.title}</h1>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-3 gap-14">
        <div className="lg:col-span-2 space-y-14">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl">Challenge</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">{cs.challenge}</p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="font-display text-3xl">Solution</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">{cs.solution}</p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="font-display text-3xl">Implementation</h2>
              <ul className="mt-4 space-y-3">
                {cs.implementation.map((s) => (
                  <li key={s} className="flex gap-3 text-ink-muted">
                    <CheckCircle2 className="size-5 text-brand mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="font-display text-3xl">ROI</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">{cs.roi}</p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="font-display text-3xl">Client Impact</h2>
              <p className="mt-4 text-ink-muted leading-relaxed">{cs.impact}</p>
            </div>
          </Reveal>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-black/5 p-6">
            <h3 className="font-display text-lg">Technology</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.technology.map((t) => (
                <span key={t} className="rounded-full bg-brand/5 border border-brand/20 text-brand px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-elegant">
            <h3 className="font-display text-lg">Results</h3>
            <div className="mt-4 space-y-4">
              {cs.results.map((r) => (
                <div key={r.v}>
                  <div className="font-display text-3xl">{r.k}</div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <CTASection />
    </>
  );
}
