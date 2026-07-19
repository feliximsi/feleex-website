import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/tech-stack")({
  head: () => ({
    meta: [
      { title: "Technology Stack — Felix IMSI" },
      { name: "description", content: "The frontend, backend, cloud, database, AI, DevOps and security stack Felix IMSI builds with." },
      { property: "og:title", content: "Technology Stack — Felix IMSI" },
      { property: "og:description", content: "Modern, proven, production-ready technology." },
      { property: "og:url", content: "/tech-stack" },
    ],
    links: [{ rel: "canonical", href: "/tech-stack" }],
  }),
  component: TechStackPage,
});

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TanStack", "TypeScript", "Tailwind CSS", "Vite", "React Native", "Flutter"] },
  { title: "Backend", items: ["Node.js", "Python", "Go", "Java Spring", ".NET", "GraphQL", "gRPC", "REST"] },
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Vercel", "DigitalOcean"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ClickHouse", "pgvector", "Elasticsearch"] },
  { title: "AI Frameworks", items: ["OpenAI", "Anthropic", "Gemini", "LangChain", "LlamaIndex", "PyTorch", "Hugging Face", "Ollama"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD", "Datadog", "Grafana"] },
  { title: "Security", items: ["Auth0", "Okta", "Cognito", "Vault", "SOC 2", "ISO 27001", "OWASP"] },
  { title: "Integrations", items: ["SAP", "Salesforce", "HubSpot", "Stripe", "Twilio", "SendGrid", "n8n", "Zapier"] },
];

function TechStackPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Our technology stack.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            The tools we've road-tested at enterprise scale. We pick the right one for each
            problem — never a preferred vendor tax.
          </p>
        </div>
      </section>

      <section className="container-x py-24 space-y-16">
        {groups.map((g) => (
          <Reveal key={g.title}>
            <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
              <div>
                <SectionHeading eyebrow="Layer" title={g.title} />
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink hover:border-brand/40 hover:text-brand hover:shadow-soft transition-all"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
