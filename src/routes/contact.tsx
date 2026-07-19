import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Globe, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Felix IMSI" },
      { name: "description", content: "Talk to Felix IMSI about AI, software, cloud and automation projects. Book a consultation or request a project estimate." },
      { property: "og:title", content: "Contact Felix IMSI" },
      { property: "og:description", content: "Book a consultation or request a project estimate." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [tab, setTab] = useState<"consult" | "estimate">("consult");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    let text = `*New Contact Form Submission*\n\n`;
    text += `*Name:* ${data.name || "N/A"}\n`;
    text += `*Email:* ${data.email || "N/A"}\n`;
    if (data.company) text += `*Company:* ${data.company}\n`;
    if (data.phone) text += `*Phone:* ${data.phone}\n`;
    if (data.type) text += `*Type:* ${data.type}\n`;
    if (data.budget) text += `*Budget:* ${data.budget}\n`;
    text += `*Message:*\n${data.message || "N/A"}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/919585978599?text=${encodedText}`;

    window.open(waUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    form.reset();
  };

  return (
    <>
      <section className="bg-hero text-white py-24">
        <div className="container-x">
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl">
            Let's talk.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Book a strategy consultation or request a project estimate. We respond within one
            business day.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-[1.3fr_1fr] gap-14">
        <Reveal>
          <div className="rounded-3xl border border-black/5 p-8 md:p-10 bg-white shadow-soft">
            <div className="inline-flex rounded-full bg-surface-muted p-1">
              {[
                { k: "consult", l: "Book Consultation" },
                { k: "estimate", l: "Project Estimate" },
              ].map((t) => (
                <button
                  key={t.k}
                  onClick={() => setTab(t.k as typeof tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    tab === t.k ? "bg-gradient-brand text-white" : "text-ink-muted"
                  }`}
                >
                  {t.l}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" />
              </div>
              {tab === "estimate" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <SelectField label="Project type" name="type" options={["AI / Machine Learning", "Custom Software", "Web Application", "Mobile App", "Cloud & DevOps", "Automation"]} />
                  <SelectField label="Budget range" name="budget" options={["< $25k", "$25k–$75k", "$75k–$200k", "$200k+"]} />
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-ink">
                  {tab === "consult" ? "What would you like to discuss?" : "Project details"}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-elegant hover:shadow-glow transition-shadow"
              >
                {tab === "consult" ? "Book consultation" : "Request estimate"}
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <div className="rounded-3xl bg-gradient-brand text-white p-8 shadow-elegant">
              <h3 className="font-display text-2xl">Reach us directly</h3>
              <div className="mt-6 space-y-4 text-white/90">
                <Row icon={Phone} label="Phone" value="+91 95859 78599" href="tel:+919585978599" />
                <Row icon={Mail} label="Email" value="rkrajaa@felixims.com" href="mailto:rkrajaa@felixims.com" />
                <Row icon={Globe} label="Web" value="www.felixims.com" />
                <Row icon={MapPin} label="Office" value="New No. 3, Old No. 1/1, Second Floor, Srinivasan Street, Perambur, Chennai — 600011" />
              </div>
              <a
                href="https://wa.me/919585978599"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-white text-brand px-4 py-2.5 text-sm font-medium"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-black/5 aspect-[4/3]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Perambur,+Chennai,+Tamil+Nadu+600011&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <select
        name={name}
        className="mt-1.5 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-3">
      <Icon className="size-5 mt-0.5 shrink-0" />
      <div>
        <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
        <div className="mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90">{content}</a> : content;
}
