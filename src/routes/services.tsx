import { createFileRoute } from "@tanstack/react-router";
import {
  Brain, Bot, Sparkles, MessageSquare, Database, LineChart, Eye, Code2,
  Building2, Users2, Layers, Globe2, Smartphone, Cloud, Shield, Workflow,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Felix IMSI" },
      { name: "description", content: "AI, custom software, web, mobile, cloud and business automation services from Felix IMSI." },
      { property: "og:title", content: "Services — Felix IMSI" },
      { property: "og:description", content: "Full-stack technology services for the modern enterprise." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    items: [
      { icon: Bot, t: "AI Agents", d: "Autonomous agents for enterprise workflows." },
      { icon: Sparkles, t: "Generative AI", d: "Content, code and design generation systems." },
      { icon: Workflow, t: "AI Automation", d: "Intelligent process orchestration." },
      { icon: MessageSquare, t: "Chatbots", d: "Conversational AI on web, mobile, WhatsApp." },
      { icon: Brain, t: "LLM Integration", d: "OpenAI, Anthropic, Gemini, open-source models." },
      { icon: LineChart, t: "Predictive Analytics", d: "Forecasting, churn, anomaly detection." },
      { icon: Eye, t: "Computer Vision", d: "Inspection, OCR, video analytics." },
      { icon: Database, t: "Machine Learning", d: "Custom models tuned to your data." },
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    items: [
      { icon: Code2, t: "Custom Software", d: "Bespoke systems built for your workflows." },
      { icon: Building2, t: "ERP Systems", d: "Modern, modular ERPs — not monoliths." },
      { icon: Users2, t: "CRM Systems", d: "Sales, service and operations CRMs." },
      { icon: Layers, t: "Enterprise Applications", d: "Cross-departmental platforms at scale." },
      { icon: Globe2, t: "Business Platforms", d: "Multi-tenant SaaS platforms." },
    ],
  },
  {
    title: "Web Development",
    icon: Globe2,
    items: [
      { icon: Globe2, t: "Corporate Websites", d: "Editorial, marketing and brand sites." },
      { icon: Layers, t: "E-Commerce", d: "Shopify, Medusa and custom storefronts." },
      { icon: Building2, t: "Web Portals", d: "Customer, partner and vendor portals." },
      { icon: LineChart, t: "Admin Dashboards", d: "Ops, analytics and admin consoles." },
      { icon: Users2, t: "Customer Portals", d: "Self-service portals with SSO." },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: [
      { icon: Smartphone, t: "Android Apps", d: "Native Kotlin apps." },
      { icon: Smartphone, t: "iOS Apps", d: "Native Swift apps." },
      { icon: Smartphone, t: "Hybrid Apps", d: "Ionic, Capacitor, Flutter." },
      { icon: Smartphone, t: "Cross Platform", d: "React Native across iOS and Android." },
    ],
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    items: [
      { icon: Cloud, t: "Cloud Migration", d: "Lift-and-shift or full re-platform." },
      { icon: Layers, t: "Infrastructure", d: "IaC on AWS, Azure, GCP." },
      { icon: Workflow, t: "DevOps", d: "CI/CD, GitOps, release automation." },
      { icon: LineChart, t: "Monitoring", d: "Observability, tracing, alerting." },
      { icon: Shield, t: "Security", d: "IAM, secrets, compliance, audit." },
    ],
  },
  {
    title: "Business Automation",
    icon: Workflow,
    items: [
      { icon: Workflow, t: "Workflow Automation", d: "n8n, Zapier, custom orchestration." },
      { icon: Bot, t: "Process Automation", d: "RPA and business rules engines." },
      { icon: Sparkles, t: "AI Automation", d: "LLM-in-the-loop workflows." },
      { icon: Layers, t: "Integration Services", d: "APIs, iPaaS, ESB, EDI." },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80">
            Services
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Full-stack technology, delivered end-to-end.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            One partner for AI, software, web, mobile, cloud and automation. Deep bench.
            Enterprise standards. Startup speed.
          </p>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className={gi % 2 === 0 ? "container-x py-24" : "bg-surface-muted py-24"}>
          <div className={gi % 2 === 0 ? "" : "container-x"}>
            <SectionHeading eyebrow={`0${gi + 1}`} title={g.title} />
            <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map(({ icon: Icon, t, d }) => (
                <StaggerItem key={t}>
                  <div className="rounded-2xl bg-white border border-black/5 p-6 h-full hover:border-brand/40 hover:shadow-elegant transition-all">
                    <div className="grid place-items-center h-10 w-10 rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg text-ink">{t}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
