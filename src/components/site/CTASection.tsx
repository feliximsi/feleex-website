import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="container-x py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Let's build together
              </p>
              <h3 className="mt-3 font-display text-4xl md:text-5xl text-white leading-tight">
                Ready to transform your enterprise with AI?
              </h3>
              <p className="mt-4 text-white/80 max-w-xl">
                Book a strategy consultation with our technology leadership team. We'll map
                your goals to an AI &amp; automation roadmap in under 30 minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-brand hover:bg-white/90 transition"
              >
                Book Consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
