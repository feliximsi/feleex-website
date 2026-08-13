import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { industries } from "@/components/site/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Manufacturing, Auto, Electronics & More | Felix IMSI" },
      {
        name: "description",
        content:
          "Felix IMSI provides workforce solutions across manufacturing, automobile, electronics, engineering, warehousing, logistics, healthcare, hospitality, retail, FMCG and more.",
      },
      { property: "og:title", content: "Industries We Serve — Felix IMSI" },
      { property: "og:description", content: "Workforce solutions across India's core industries." },
      { property: "og:url", content: "https://felixims.com/industries" },
    ],
    links: [{ rel: "canonical", href: "https://felixims.com/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={<>Workforce expertise across India's core sectors.</>}
        description="From automotive assembly to warehousing hubs — every industry has its own hiring rhythm. Felix IMSI has staffed operations in each of them."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 40}>
              <article className="group h-full rounded-sm border border-border bg-background p-8 hover:border-primary hover:shadow-lg transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display font-bold text-xl">{ind.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  Discuss requirements <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="rounded-sm bg-brand-deep text-white p-10 md:p-16 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Don't see your industry?
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white text-balance max-w-2xl mx-auto">
            We staff industries not listed here too. Talk to us about your operation.
          </h2>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
            >
              Contact Felix IMSI <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
