import { createFileRoute } from "@tanstack/react-router";
import { Factory, HeartPulse, Landmark, ShoppingBag, GraduationCap, Home, Truck, Cpu, ShieldCheck, UtensilsCrossed } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Felix IMSI" },
      { name: "description", content: "Industries served by Felix IMSI: manufacturing, healthcare, finance, retail, education, real estate, logistics, technology, government, hospitality." },
      { property: "og:title", content: "Industries — Felix IMSI" },
      { property: "og:description", content: "Deep domain expertise across sectors." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Factory, t: "Manufacturing" },
  { icon: HeartPulse, t: "Healthcare" },
  { icon: Landmark, t: "Finance" },
  { icon: ShoppingBag, t: "Retail" },
  { icon: GraduationCap, t: "Education" },
  { icon: Home, t: "Real Estate" },
  { icon: Truck, t: "Logistics" },
  { icon: Cpu, t: "Technology" },
  { icon: ShieldCheck, t: "Government" },
  { icon: UtensilsCrossed, t: "Hospitality" },
];

function IndustriesPage() {
  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Industries we serve.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            A decade of enterprise operations experience across sectors, now amplified with AI.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ icon: Icon, t }) => (
            <StaggerItem key={t}>
              <div className="rounded-2xl border border-black/5 p-8 text-center hover:border-brand/40 hover:bg-brand/5 transition-all h-full">
                <div className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-brand/10 text-brand">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 font-display text-lg">{t}</h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CTASection />
    </>
  );
}
