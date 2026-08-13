import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { trustedClients } from "@/components/site/content";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Industry Partners & Success Stories | Felix IMSI" },
      {
        name: "description",
        content:
          "Felix IMSI has partnered with industrial groups across manufacturing, electronics and more — long-term staffing relationships built on reliability.",
      },
      { property: "og:title", content: "Our Clients — Felix IMSI" },
      { property: "og:description", content: "Industry partners and success stories." },
      { property: "og:url", content: "https://felixims.com/clients" },
    ],
    links: [{ rel: "canonical", href: "https://felixims.com/clients" }],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const cases = [
    {
      client: "Automotive OEM",
      scope: "Line operators, welders, assembly",
      result: "220+ workforce deployed within 21 days for a new plant ramp-up.",
    },
    {
      client: "Electronics Manufacturer",
      scope: "SMT operators, quality inspectors",
      result: "Ongoing pipeline of 150+ skilled workers supported through peak seasons.",
    },
    {
      client: "Warehousing Group",
      scope: "Pickers, packers, forklift operators",
      result: "24×7 shift coverage across 4 facilities with 92% retention.",
    },
    {
      client: "Furniture Manufacturer",
      scope: "Skilled trade workers & supervisors",
      result: "Full statutory compliance handled end-to-end for a 300-person site.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title={<>Long-term partnerships. Established industry relationships.</>}
        description="Felix IMSI has supported industrial groups across India — some as their primary workforce partner for years."
      />

      <Section>
        <SectionHeading
          eyebrow="Trusted Organisations"
          title="Companies that have worked with Felix IMSI"
          description="A snapshot of the industrial groups we've partnered with over the years."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {trustedClients.map((name, i) => (
            <Reveal key={name} delay={i * 50}>
              <div className="group aspect-[3/2] rounded-sm border border-border bg-muted/50 p-6 flex flex-col justify-between hover:border-primary hover:bg-background transition-all">
                <Building2 className="h-5 w-5 text-primary/60 group-hover:text-primary" />
                <div className="font-display font-bold text-sm md:text-base uppercase tracking-wider text-foreground/70 group-hover:text-foreground">
                  {name}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Success Stories" title="Case snapshots" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-sm border border-border bg-background p-8 h-full">
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">
                  Client Case
                </div>
                <h3 className="mt-2 font-display font-bold text-xl">{c.client}</h3>
                <div className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Scope: </span>
                  {c.scope}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Outcome: </span>
                  {c.result}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-deep text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-balance max-w-2xl mx-auto">
          Add your name to our list of trusted partners.
        </h2>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
