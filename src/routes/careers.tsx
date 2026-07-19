import { createFileRoute } from "@tanstack/react-router";
import { Coffee, HeartHandshake, GraduationCap, Rocket, Sparkles, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Felix IMSI" },
      { name: "description", content: "Build the future of enterprise AI at Felix IMSI. Explore open roles and internships." },
      { property: "og:title", content: "Careers — Felix IMSI" },
      { property: "og:description", content: "Join a team building AI at enterprise scale." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  { t: "Senior AI Engineer", l: "Chennai / Remote", type: "Full-time" },
  { t: "Full-stack Engineer (TypeScript)", l: "Chennai / Remote", type: "Full-time" },
  { t: "Cloud & DevOps Engineer", l: "Chennai", type: "Full-time" },
  { t: "Product Designer", l: "Remote", type: "Full-time" },
  { t: "AI Research Intern", l: "Chennai", type: "Internship" },
  { t: "Frontend Engineering Intern", l: "Remote", type: "Internship" },
];

function CareersPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Build the future of enterprise AI.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Small teams. Big problems. Real production systems that touch millions of users.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Life at Felix IMSI" title="Why engineers choose to build here." />
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: Rocket, t: "Ship every week", d: "No committees. No busywork. Just production releases." },
            { icon: Sparkles, t: "Work with cutting-edge AI", d: "Frontier models, agent architectures and real user data." },
            { icon: GraduationCap, t: "Learning stipend", d: "Books, courses, conferences — on us." },
            { icon: HeartHandshake, t: "Ownership", d: "You own outcomes end-to-end, not just tickets." },
            { icon: Coffee, t: "Flexible", d: "Remote-first. Meet in Chennai monthly." },
            { icon: Users, t: "Senior peers", d: "Learn from engineers who've built at scale." },
          ].map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <div className="rounded-2xl border border-black/5 bg-white p-6 h-full">
                <Icon className="size-6 text-brand" />
                <h3 className="mt-4 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-surface-muted py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Open positions" title="We're hiring." />
          <div className="mt-14 space-y-3">
            {roles.map((r) => (
              <Reveal key={r.t}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between rounded-2xl bg-white border border-black/5 p-6 hover:border-brand/40 transition-colors">
                  <div>
                    <h3 className="font-display text-xl">{r.t}</h3>
                    <div className="text-sm text-ink-muted mt-1">{r.l} · {r.type}</div>
                  </div>
                  <a
                    href="mailto:rkrajaa@felixims.com?subject=Application"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-elegant"
                  >
                    Apply now
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
