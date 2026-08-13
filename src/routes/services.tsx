import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { serviceGroups } from "@/components/site/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Workforce Services — Staffing, Payroll & Compliance | Felix IMSI" },
      {
        name: "description",
        content:
          "Contract & permanent staffing, industrial manpower, administrative & technical staffing, payroll management, HR outsourcing and statutory compliance.",
      },
      { property: "og:title", content: "Felix IMSI Services" },
      { property: "og:description", content: "The complete workforce, payroll and compliance suite." },
      { property: "og:url", content: "https://felixims.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://felixims.com/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>A complete workforce, payroll & compliance suite.</>}
        description="Eight service families that cover every stage of the workforce lifecycle — from a single specialist hire to a two-hundred-strong production ramp-up."
      />

      <Section>
        <div className="space-y-4">
          {serviceGroups.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <article
                id={s.slug}
                className="group rounded-sm border border-border bg-background overflow-hidden hover:border-primary transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-muted/50 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
                    <div className="grid h-14 w-14 place-items-center rounded-sm bg-primary text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Service 0{i + 1}
                    </div>
                    <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-balance">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.summary}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-deep"
                    >
                      Enquire about this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:col-span-8 p-8 lg:p-10">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                      What's Included
                    </div>
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm">
                          <span className="mt-1 grid h-4 w-4 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-foreground">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
            Not sure which service you need?
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Talk to a workforce consultant.
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Share your requirement and we'll come back with a workforce plan, timelines and pricing
            within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
            >
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
