import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, HeartPulse, Landmark, ShoppingBag, GraduationCap, Truck, HardHat, Home, UtensilsCrossed, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Felix IMSI" },
      { name: "description", content: "Industry-focused AI and technology solutions from Felix IMSI: manufacturing, healthcare, finance, retail and more." },
      { property: "og:title", content: "Solutions — Felix IMSI" },
      { property: "og:description", content: "Business-focused AI and software solutions by industry." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  { icon: Factory, t: "Manufacturing", d: "Predictive maintenance, quality vision, MES integration." },
  { icon: HeartPulse, t: "Healthcare", d: "Clinical documentation, patient portals, HL7/FHIR." },
  { icon: Landmark, t: "Finance", d: "Fraud detection, KYC automation, risk analytics." },
  { icon: ShoppingBag, t: "Retail", d: "Personalization, demand forecasting, omni-channel." },
  { icon: GraduationCap, t: "Education", d: "LMS, adaptive learning, AI tutoring." },
  { icon: Truck, t: "Logistics", d: "Route optimization, fleet AI, TMS." },
  { icon: HardHat, t: "Construction", d: "Project intelligence, safety vision, BIM analytics." },
  { icon: Home, t: "Real Estate", d: "CRM, listings AI, tenant portals." },
  { icon: UtensilsCrossed, t: "Hospitality", d: "Guest experience, revenue optimization." },
  { icon: Users, t: "HR Management", d: "Talent AI, workforce analytics, compliance." },
];

function SolutionsPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Solutions shaped by your industry.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            We combine deep domain patterns with AI engineering to solve the problems that
            actually move your business.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, t, d }) => (
            <StaggerItem key={t}>
              <Link
                to="/contact"
                className="group block h-full rounded-3xl border border-black/5 p-8 hover:border-brand/40 hover:shadow-elegant transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-brand text-white shadow-elegant">
                    <Icon className="size-6" />
                  </div>
                  <ArrowRight className="size-5 text-ink-muted group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{t}</h3>
                <p className="mt-2 text-ink-muted">{d}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
