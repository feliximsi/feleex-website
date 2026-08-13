import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, MapPin, Clock, Upload, GraduationCap, TrendingUp, Users, Heart } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Felix IMSI — Jobs, Openings & Employee Benefits" },
      {
        name: "description",
        content:
          "Join Felix IMSI. Current job openings, employee benefits, training programs and career growth in India's leading workforce solutions company.",
      },
      { property: "og:title", content: "Careers at Felix IMSI" },
      { property: "og:description", content: "Openings, benefits and career growth at Felix IMSI." },
      { property: "og:url", content: "https://felixims.com/careers" },
    ],
    links: [{ rel: "canonical", href: "https://felixims.com/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  { role: "Recruitment Executive", loc: "Chennai", type: "Full-time" },
  { role: "Client Servicing Manager", loc: "Bengaluru", type: "Full-time" },
  { role: "Payroll Specialist", loc: "Pune", type: "Full-time" },
  { role: "Compliance Officer", loc: "Delhi NCR", type: "Full-time" },
  { role: "Field HR Executive", loc: "Multiple Locations", type: "Full-time" },
  { role: "Business Development Manager", loc: "Mumbai", type: "Full-time" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Grow your career with Felix IMSI.</>}
        description="Be part of a team that helps businesses across India build reliable workforces. We hire recruiters, HR professionals, compliance specialists and client-servicing managers."
      />

      <Section>
        <SectionHeading eyebrow="Current Openings" title="Roles we're hiring for" />
        <div className="mt-10 rounded-sm border border-border overflow-hidden">
          {openings.map((o, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-5 border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <div className="md:col-span-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div className="font-display font-bold">{o.role}</div>
                </div>
                <div className="md:col-span-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {o.loc}
                </div>
                <div className="md:col-span-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {o.type}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <a
                    href="#apply"
                    className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Life at Felix IMSI" title="Why work with us" align="center" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            [Heart, "Employee Benefits", "Health cover, PF, ESI, paid leave and performance rewards."],
            [Users, "Collaborative Culture", "Small-team accountability with pan-India collaboration."],
            [GraduationCap, "Training Programs", "Ongoing training in recruitment, compliance, and client management."],
            [TrendingUp, "Career Growth", "Structured progression from executive to leadership roles."],
          ].map(([Icon, t, d], i) => (
            <Reveal key={t as string} delay={i * 60}>
              <div className="rounded-sm bg-background border border-border p-8 h-full">
                {(() => {
                  const IconComp = Icon as React.ComponentType<{ className?: string }>;
                  return <IconComp className="h-6 w-6 text-primary" />;
                })()}
                <div className="mt-4 font-display font-bold">{t as string}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="apply">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Upload Resume"
              title="Don't see the right role? Send us your resume."
              description="We're always looking for great recruiters, HR professionals and client-servicing talent. Share your CV and we'll reach out when a matching role opens."
            />
          </div>
          <div className="lg:col-span-7">
            <ResumeForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ResumeForm() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! Our team will review your resume and reach out.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }
  return (
    <form onSubmit={onSubmit} className="rounded-sm border border-border bg-background p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" required />
        <Field label="Role of Interest" name="role" />
      </div>
      <Field label="Cover Note" name="note" textarea />
      <label className="flex items-center gap-3 rounded-sm border border-dashed border-border p-4 cursor-pointer hover:border-primary">
        <Upload className="h-5 w-5 text-primary" />
        <div className="text-sm">
          <div className="font-semibold">Upload your resume</div>
          <div className="text-xs text-muted-foreground">PDF or DOCX, up to 5MB</div>
        </div>
        <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const Component = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <Component
        {...(textarea ? {} : { type })}
        name={name}
        required={required}
        rows={textarea ? 4 : undefined}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}
