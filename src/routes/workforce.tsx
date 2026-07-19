import { createFileRoute, Link } from "@tanstack/react-router";
import { UserCheck, FileCheck2, Handshake, Users, Timer, BadgeCheck, ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/workforce")({
  head: () => ({
    meta: [
      { title: "Workforce & Resource Solutions — Felix IMSI" },
      { name: "description", content: "Felix IMSI's workforce vertical: IT staffing, contract staffing, resource augmentation, compliance and hiring services." },
      { property: "og:title", content: "Workforce & Resource Solutions — Felix IMSI" },
      { property: "og:description", content: "Enterprise workforce and resource solutions." },
      { property: "og:url", content: "/workforce" },
    ],
    links: [{ rel: "canonical", href: "/workforce" }],
  }),
  component: WorkforcePage,
});

const items = [
  { icon: UserCheck, t: "IT Staffing", d: "Specialist engineers, on demand." },
  { icon: Handshake, t: "Contract Staffing", d: "Flexible contract talent for fixed engagements." },
  { icon: Users, t: "Resource Augmentation", d: "Extend your team with vetted professionals." },
  { icon: FileCheck2, t: "Compliance Support", d: "Statutory and labour compliance handled end-to-end." },
  { icon: Timer, t: "Temporary Staffing", d: "Seasonal and project-based workforce." },
  { icon: BadgeCheck, t: "Permanent Hiring", d: "Executive and specialist recruitment." },
];

function WorkforcePage() {
  return (
    <>
      <section className="bg-surface-muted py-20 border-b border-black/5">
        <div className="container-x">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand">
            Legacy business vertical
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl max-w-3xl">
            Workforce &amp; Resource Solutions.
          </h1>
          <p className="mt-5 text-ink-muted max-w-2xl">
            Alongside our AI and technology practice, Felix IMSI continues to serve enterprises
            with the workforce operations that built our reputation over the last decade.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Services" title="Manpower · People · Possibilities" />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <div className="rounded-2xl border border-black/5 p-6 hover:border-brand/40 hover:shadow-soft transition-all h-full">
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg">{t}</h3>
                <p className="mt-1.5 text-sm text-ink-muted">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-black/5 p-8">
          <div>
            <h3 className="font-display text-2xl">Looking for our technology services?</h3>
            <p className="mt-2 text-ink-muted">Explore our AI, software and cloud practice.</p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-elegant"
          >
            View Services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
