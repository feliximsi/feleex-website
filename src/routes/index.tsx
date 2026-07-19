import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Brain, Code2, Cloud, Smartphone, Workflow, Building2,
  ShieldCheck, Sparkles, Bot, Database, LineChart, Cpu, Rocket,
  CheckCircle2, Layers, Globe2,
} from "lucide-react";
import { NeuralHero } from "@/components/site/NeuralHero";
import { Marquee } from "@/components/site/Marquee";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Felix IMSI — Building Intelligent Digital Futures" },
      {
        name: "description",
        content:
          "AI, software, cloud and automation for enterprises. Felix IMSI partners with businesses to design, build and scale intelligent digital products.",
      },
      { property: "og:title", content: "Felix IMSI — Building Intelligent Digital Futures" },
      { property: "og:description", content: "AI, software, cloud and automation for enterprises. Felix IMSI partners with businesses to design, build and scale intelligent digital products." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Brain, title: "Artificial Intelligence", desc: "AI agents, LLM integration, computer vision, predictive analytics.", to: "/ai-solutions" },
  { icon: Code2, title: "Software Development", desc: "Custom software, ERP, CRM, enterprise applications.", to: "/services" },
  { icon: Globe2, title: "Web Development", desc: "Corporate websites, portals, dashboards, e-commerce.", to: "/services" },
  { icon: Smartphone, title: "Mobile Applications", desc: "iOS, Android, cross-platform apps.", to: "/services" },
  { icon: Building2, title: "Enterprise Solutions", desc: "Business platforms that scale across teams and geographies.", to: "/solutions" },
  { icon: Cloud, title: "Cloud Services", desc: "Migration, DevOps, infrastructure, monitoring, security.", to: "/services" },
  { icon: Workflow, title: "Business Automation", desc: "RPA, workflow automation, AI-driven process orchestration.", to: "/services" },
  { icon: Sparkles, title: "Digital Transformation", desc: "End-to-end modernization for legacy enterprises.", to: "/solutions" },
];

const clients = ["Foxconn", "Motherson", "Mobile Electronics", "DS Connectors", "Sundaram", "TVS", "Ashok Leyland", "Hyundai", "Renault Nissan"];

const industries = [
  "Manufacturing", "Healthcare", "Finance", "Retail", "Education",
  "Logistics", "Construction", "Real Estate", "Hospitality", "HR Management",
];

const stack = [
  "React", "Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL",
  "OpenAI", "LangChain", "AWS", "Azure", "Docker", "Kubernetes",
];

const timeline = [
  { year: "Founded", title: "Workforce Solutions", desc: "Established as an integrated management services firm serving major manufacturers." },
  { year: "Growth", title: "Enterprise Manpower", desc: "Scaled to serve Foxconn, Motherson and other tier-one manufacturing giants." },
  { year: "Digital", title: "Technology Practice", desc: "Launched a dedicated software engineering practice for internal automation." },
  { year: "AI Era", title: "AI Innovation Company", desc: "Reborn as an AI-first partner delivering intelligent products at enterprise scale." },
];

const process = [
  { n: "01", t: "Discover", d: "Understand your business, data, systems and goals." },
  { n: "02", t: "Design", d: "Architect the AI + software solution end-to-end." },
  { n: "03", t: "Build", d: "Engineer with modern stacks, security and scalability baked in." },
  { n: "04", t: "Deploy", d: "Ship to production with cloud, DevOps and observability." },
  { n: "05", t: "Evolve", d: "Iterate with data, model retraining and continuous delivery." },
];

const stats = [
  { k: "150+", v: "Enterprise Projects" },
  { k: "40+", v: "AI Deployments" },
  { k: "15+", v: "Industries Served" },
  { k: "10 yrs", v: "In Business" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <NeuralHero />
        <div className="relative container-x pt-24 pb-32 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
              <span className="size-1.5 rounded-full bg-brand-accent animate-pulse" />
              AI &amp; Technology Innovation
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
              Building <em className="not-italic text-gradient-brand bg-gradient-to-r from-[#ff5a5a] via-[#e63946] to-[#ff9b9b] bg-clip-text text-transparent">Intelligent</em> Digital Futures
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              We help enterprises transform through AI, software engineering, automation and
              digital innovation — from strategy to production.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md bg-white text-ink px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition"
              >
                Explore Services <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-brand text-white px-6 py-3.5 text-sm font-medium shadow-elegant hover:shadow-glow transition"
              >
                Book Consultation
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl text-white">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/50 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust marquee */}
        <div className="relative border-t border-white/10 py-6 bg-black/40 backdrop-blur">
          <div className="container-x mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/50">
            <span className="h-px flex-1 bg-white/10" />
            Trusted by enterprises worldwide
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <Marquee
            items={clients.map((c) => (
              <span className="font-display text-2xl md:text-3xl text-white/60 hover:text-white transition">
                {c}
              </span>
            ))}
          />
        </div>
      </section>

      {/* Technology overview */}
      <section className="container-x py-24">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A full-stack AI & technology partner for the modern enterprise."
            description="From boardroom strategy to production-grade AI systems — we operate as an extension of your engineering, data and product teams."
          />
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, t: "AI-first" },
                { icon: ShieldCheck, t: "Enterprise-grade" },
                { icon: Rocket, t: "Ship velocity" },
                { icon: Layers, t: "Full-stack" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="rounded-2xl border border-black/5 bg-surface-muted p-5">
                  <Icon className="size-6 text-brand" />
                  <div className="mt-3 font-medium text-ink">{t}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface-muted py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Services" title="Everything you need to build intelligent products." />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <StaggerItem key={title}>
                <Link
                  to={to}
                  className="group block h-full rounded-2xl bg-white border border-black/5 p-6 hover:border-brand/40 hover:shadow-elegant transition-all"
                >
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand text-white shadow-elegant group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Learn more <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* AI Innovation showcase */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-28">
        <div className="absolute inset-0 opacity-40">
          <NeuralHero />
        </div>
        <div className="relative container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
              <Sparkles className="size-3 text-brand-accent" /> AI Innovation
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              AI agents that think, act and integrate with your business.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl">
              Purpose-built AI systems that read your documents, query your databases, call your
              APIs and collaborate with your teams — deployed securely in your cloud.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "LLM & RAG systems",
                "Document intelligence",
                "Voice & conversational AI",
                "Computer vision on the edge",
                "Predictive analytics",
                "Generative AI experiences",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle2 className="size-4 text-brand-accent" /> {f}
                </div>
              ))}
            </div>
            <Link
              to="/ai-solutions"
              className="mt-10 inline-flex items-center gap-2 rounded-md bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-elegant hover:shadow-glow"
            >
              Explore AI Solutions <ArrowRight className="size-4" />
            </Link>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-elegant">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <span className="size-2 rounded-full bg-brand-accent animate-pulse" />
                felix.ai — live agent
              </div>
              <div className="mt-5 space-y-3 font-mono text-[13px]">
                {[
                  { r: "user", t: "Summarize Q3 supplier defects and route the top 3 to procurement." },
                  { r: "agent", t: "Analyzing 12,483 QC records across 4 plants..." },
                  { r: "agent", t: "Top defects: cable insulation (2.1%), solder cold joints (1.4%), housing warp (0.9%)." },
                  { r: "agent", t: "Routed 3 tickets to procurement@felixims.com. ETA: 2 days." },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`rounded-xl px-4 py-3 ${
                      m.r === "user" ? "bg-white/10 text-white" : "bg-brand/20 text-white border border-brand/30"
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{m.r}</div>
                    {m.t}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[{ k: "1.2s", v: "Latency" }, { k: "99.4%", v: "Accuracy" }, { k: "24/7", v: "Uptime" }].map((s) => (
                  <div key={s.v} className="rounded-xl bg-black/40 p-3">
                    <div className="font-display text-xl text-white">{s.k}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="Industries" title="Deep expertise across sectors." />
        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3" gap={0.04}>
          {industries.map((i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl border border-black/5 bg-white p-5 text-center hover:border-brand/40 hover:bg-brand/5 transition-colors">
                <span className="text-sm font-medium text-ink">{i}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Tech stack */}
      <section className="bg-surface-muted py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Technology stack"
            title="Modern, proven, production-ready."
            description="We build with the best of the ecosystem — carefully chosen for reliability, performance and long-term maintainability."
          />
          <div className="mt-14">
            <Marquee
              className="mask-fade"
              items={stack.map((s) => (
                <span className="font-display text-3xl md:text-4xl text-ink/50 hover:text-brand transition">
                  {s}
                </span>
              ))}
            />
          </div>
        </div>
      </section>

      {/* Transformation timeline */}
      <section className="container-x py-28">
        <SectionHeading
          eyebrow="Our journey"
          title="From workforce solutions to AI innovation."
          description="A decade of enterprise operations experience, now powering an AI-first technology company."
        />
        <div className="mt-16 grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-brand/40 via-brand/20 to-transparent" />
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-brand text-white font-display text-lg shadow-elegant">
                  {i + 1}
                </div>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-brand">{t.year}</div>
                  <div className="mt-2 font-display text-2xl text-ink">{t.title}</div>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Felix */}
      <section className="bg-[#0a0a0a] text-white py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/70">
              Why Felix IMSI
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              A partner that combines enterprise operations DNA with cutting-edge AI.
            </h2>
          </div>
          <Stagger className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Cpu, t: "AI-first engineering", d: "Every solution designed with intelligence at the core." },
              { icon: ShieldCheck, t: "Enterprise trust", d: "Security, compliance and governance built-in." },
              { icon: Database, t: "Data-native", d: "Real production data, not proof-of-concept demos." },
              { icon: LineChart, t: "Measurable ROI", d: "We ship outcomes, not deliverables." },
            ].map(({ icon: Icon, t, d }) => (
              <StaggerItem key={t}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur h-full">
                  <Icon className="size-6 text-brand-accent" />
                  <div className="mt-4 font-display text-xl">{t}</div>
                  <p className="mt-2 text-sm text-white/60">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-28">
        <SectionHeading eyebrow="Process" title="How we deliver." />
        <Stagger className="mt-14 grid md:grid-cols-5 gap-5">
          {process.map((p) => (
            <StaggerItem key={p.n}>
              <div className="rounded-2xl border border-black/5 p-6 h-full hover:border-brand/40 transition">
                <div className="font-display text-3xl text-brand">{p.n}</div>
                <div className="mt-3 font-medium text-ink">{p.t}</div>
                <p className="mt-2 text-sm text-ink-muted">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Insights teaser */}
      <section className="bg-surface-muted py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading eyebrow="Insights" title="Latest thinking from our team." />
            <Link to="/resources" className="text-sm font-medium text-brand inline-flex items-center gap-1">
              All insights <ArrowRight className="size-4" />
            </Link>
          </div>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { tag: "AI", t: "Building enterprise-ready LLM agents in 2026", d: "The architectural patterns that separate demos from production." },
              { tag: "Automation", t: "Beyond RPA: why AI-native automation wins", d: "Traditional RPA hits its ceiling. Agentic workflows raise it." },
              { tag: "Cloud", t: "The cost of skipping a data platform", d: "Every AI initiative is a data initiative in disguise." },
            ].map((p) => (
              <StaggerItem key={p.t}>
                <article className="group h-full rounded-2xl bg-white border border-black/5 overflow-hidden hover:shadow-elegant transition-shadow">
                  <div className="aspect-[16/9] bg-gradient-brand relative">
                    <Bot className="absolute inset-0 m-auto size-16 text-white/40" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-brand font-medium">{p.tag}</span>
                    <h3 className="mt-3 font-display text-xl text-ink group-hover:text-brand transition-colors">{p.t}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{p.d}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
