import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Brain, Bot, MessageSquare, FileText, Mic, LineChart, Sparkles, Workflow, Database, Cpu, CheckCircle2 } from "lucide-react";
import { NeuralHero } from "@/components/site/NeuralHero";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI Solutions — Felix IMSI" },
      { name: "description", content: "Enterprise AI: agents, LLMs, RAG, computer vision, voice AI and predictive analytics — designed and deployed by Felix IMSI." },
      { property: "og:title", content: "AI Solutions — Felix IMSI" },
      { property: "og:description", content: "Enterprise-grade AI, deployed securely in your cloud." },
      { property: "og:url", content: "/ai-solutions" },
    ],
    links: [{ rel: "canonical", href: "/ai-solutions" }],
  }),
  component: AIPage,
});

const sections = [
  { icon: Brain, t: "AI Consulting", d: "Roadmaps, feasibility studies and platform architecture." },
  { icon: Bot, t: "AI Agents", d: "Autonomous agents that act across your systems." },
  { icon: Cpu, t: "LLM Development", d: "Fine-tuning, distillation and hosted inference." },
  { icon: MessageSquare, t: "ChatGPT Integrations", d: "Bring GPT-class models to your product." },
  { icon: Sparkles, t: "Enterprise AI", d: "Secure, governed, auditable deployments." },
  { icon: Database, t: "Knowledge Bases", d: "RAG systems over your documents and databases." },
  { icon: FileText, t: "Document Intelligence", d: "Extract, classify and route unstructured data." },
  { icon: Mic, t: "Voice AI", d: "IVR, call analytics and voice assistants." },
  { icon: LineChart, t: "Predictive Analytics", d: "Forecasting, anomaly detection, recommendation." },
  { icon: Sparkles, t: "Generative AI", d: "Content, code, image and video generation." },
  { icon: Workflow, t: "Automation Systems", d: "LLM-orchestrated workflows across teams." },
];

function AIPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-white py-28">
        <NeuralHero />
        <div className="relative container-x">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80">
              <Brain className="size-3 text-brand-accent" /> AI Practice
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
              Enterprise AI — designed, engineered, deployed.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              From strategy through production. Secure by default. Measured by outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title="Every layer of the AI stack."
          description="We build AI that works in the real world — with your data, your systems and your governance."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <div className="group h-full rounded-2xl border border-black/5 p-6 hover:border-brand/40 hover:shadow-elegant transition-all">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-brand text-white shadow-elegant">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              How our AI practice ships production systems.
            </h2>
            <p className="mt-4 text-white/70">
              We don't do proofs-of-concept that never leave the lab. Every AI engagement targets a
              live production system, integrated with your data and workflows.
            </p>
          </div>
          <Stagger className="grid gap-4">
            {[
              "Data audit and readiness assessment",
              "Model selection & architecture design",
              "Secure deployment in your cloud",
              "MLOps, monitoring and retraining",
              "Governance, compliance and audit trails",
              "Continuous evaluation against business KPIs",
            ].map((s) => (
              <StaggerItem key={s}>
                <div className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                  <CheckCircle2 className="size-5 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-white/85">{s}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection />
    </>
  );
}
