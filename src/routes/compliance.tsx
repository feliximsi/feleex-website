import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileCheck, Scale, ClipboardCheck, Landmark, BookOpen, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Statutory Compliance Services — PF, ESI, PT, LWF, CLRA | Felix IMSI" },
      {
        name: "description",
        content:
          "End-to-end statutory compliance for deployed manpower — PF, ESI, Professional Tax, LWF, Contract Labour, Minimum Wages, audits and documentation.",
      },
      { property: "og:title", content: "Compliance Services — Felix IMSI" },
      { property: "og:description", content: "PF, ESI, PT, LWF, CLRA and payroll compliance, handled end-to-end." },
      { property: "og:url", content: "https://felixims.com/compliance" },
    ],
    links: [{ rel: "canonical", href: "https://felixims.com/compliance" }],
  }),
  component: CompliancePage,
});

const areas = [
  { icon: FileCheck, title: "PF Management", desc: "Enrolment, monthly ECR filing, transfers and settlements." },
  { icon: ShieldCheck, title: "ESI", desc: "Registrations, contributions, and dispensary coordination." },
  { icon: Landmark, title: "Professional Tax", desc: "State-wise PT compliance, filings and payments." },
  { icon: Scale, title: "Contract Labour Act", desc: "Licences, registers, half-yearly and annual returns." },
  { icon: BookOpen, title: "Minimum Wages", desc: "State-wise wage revision tracking and payroll updates." },
  { icon: ClipboardCheck, title: "Employee Records", desc: "Statutory registers, muster rolls, wage records maintained." },
  { icon: FileCheck, title: "Government Compliance", desc: "Labour department filings and inspection support." },
  { icon: BookOpen, title: "Labour Law Updates", desc: "Advisory on notifications, amendments and applicability." },
  { icon: ShieldCheck, title: "Audit Support", desc: "Preparation, documentation and representation for statutory audits." },
  { icon: ClipboardCheck, title: "Documentation", desc: "Digitised records, monthly reports and audit trails." },
];

function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance Services"
        title={<>Statutory compliance, handled end-to-end.</>}
        description="Felix IMSI's dedicated compliance practice keeps your deployed workforce audit-ready across every relevant central and state statute."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 40}>
              <article className="h-full rounded-sm border border-border bg-background p-7 hover:border-primary transition-colors">
                <div className="grid h-11 w-11 place-items-center rounded-sm bg-primary/10 text-primary">
                  <a.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display font-bold text-lg">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Why It Matters"
              title="Compliance is not an afterthought — it's built into every deployment."
              description="From PF enrolment on day one to monthly returns and audit representation, Felix IMSI's in-house team manages the full statutory lifecycle."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-sm bg-brand-deep text-white p-8">
              <ul className="space-y-4">
                {[
                  "Dedicated compliance officer per client engagement",
                  "Monthly compliance reports shared with the client HR",
                  "Digitised records for quick audit response",
                  "Advisory on labour law notifications & amendments",
                  "Representation support during inspections",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-white/90">
                    <ShieldCheck className="h-4 w-4 mt-0.5 text-white shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-balance max-w-2xl mx-auto">
          Talk to our compliance team about your requirement.
        </h2>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-deep hover:bg-white/90"
          >
            Request Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
