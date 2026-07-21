import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/layout";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Felix IMSI — Hire Workforce, Request Quotation" },
      {
        name: "description",
        content:
          "Contact Felix IMSI to hire manpower, request a quotation or schedule a consultation. Reach us by phone, email or WhatsApp.",
      },
      { property: "og:title", content: "Contact Felix IMSI" },
      { property: "og:description", content: "Hire workforce, request a quotation, or schedule a consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Intent = "Hire Workforce" | "Business Enquiry" | "Request Quotation" | "Schedule Consultation";

function ContactPage() {
  const [intent, setIntent] = useState<Intent>("Hire Workforce");
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    
    let text = `*New ${intent}*\n\n`;
    text += `*Name:* ${data.name || "N/A"}\n`;
    text += `*Company:* ${data.company || "N/A"}\n`;
    text += `*Email:* ${data.email || "N/A"}\n`;
    text += `*Phone:* ${data.phone || "N/A"}\n`;
    
    if (intent === "Hire Workforce") {
      if (data.roles) text += `*Roles Required:* ${data.roles}\n`;
      if (data.count) text += `*Number of Positions:* ${data.count}\n`;
    } else if (intent === "Request Quotation") {
      if (data.scope) text += `*Scope:* ${data.scope}\n`;
    } else if (intent === "Schedule Consultation") {
      if (data.time) text += `*Preferred Time:* ${data.time}\n`;
    }
    
    text += `*Message:*\n${data.message || "N/A"}`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/919585978599?text=${encodedText}`;

    window.open(waUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk workforce.</>}
        description="Whether you need 5 candidates or 500, our team responds within 24 hours with a workforce plan tailored to your operation."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <ContactCard icon={Phone} title="Call us" line="+91 95859 78599" sub="Mon–Sat · 9AM–7PM IST" href="tel:+919585978599" />
            <ContactCard icon={Mail} title="Email" line="rkrajaa@felixims.com" sub="We respond within 24 hours" href="mailto:rkrajaa@felixims.com" />
            <ContactCard icon={MessageCircle} title="WhatsApp" line="Chat with our team" sub="Fast responses on workforce queries" href="https://wa.me/919585978599" />
            <ContactCard icon={MapPin} title="Head Office" line="Corporate Office, India" sub="Pan-India deployment network" />
            <div className="rounded-sm bg-brand-deep text-white p-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                <Clock className="h-3.5 w-3.5" />
                Business Hours
              </div>
              <div className="mt-3 text-sm text-white/80">Monday – Saturday</div>
              <div className="font-display font-bold text-lg">9:00 AM – 7:00 PM IST</div>
              <div className="mt-3 text-xs text-white/60">
                Client emergency support available 24×7
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-border bg-background p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary">
                I'd like to
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["Hire Workforce", "Business Enquiry", "Request Quotation", "Schedule Consultation"] as Intent[]).map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIntent(i)}
                    className={cn(
                      "rounded-sm border px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                      intent === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                    )}
                  >
                    {i}
                  </button>
                ))}
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" required />
                </div>
                {intent === "Hire Workforce" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Roles Required" name="roles" placeholder="e.g. Machine Operators, Welders" />
                    <Field label="Number of Positions" name="count" type="number" />
                  </div>
                )}
                {intent === "Request Quotation" && (
                  <Field label="Scope of Requirement" name="scope" placeholder="Roles, headcount, locations, duration" />
                )}
                {intent === "Schedule Consultation" && (
                  <Field label="Preferred Time / Date" name="time" placeholder="e.g. Any weekday morning" />
                )}
                <Field label="Message" name="message" textarea placeholder="Share any details that help us prepare for the conversation." />

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by Felix IMSI regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-border">
        <div className="aspect-[21/9] w-full bg-muted">
          <iframe
            title="Felix IMSI office location"
            src="https://www.google.com/maps?q=India&output=embed"
            className="h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  line,
  sub,
  href,
}: {
  icon: typeof Phone;
  title: string;
  line: string;
  sub: string;
  href?: string;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Reveal>
      <Comp
        {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
        className="group flex items-start gap-4 rounded-sm border border-border bg-background p-5 hover:border-primary transition-colors"
      >
        <div className="grid h-10 w-10 place-items-center rounded-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {title}
          </div>
          <div className="mt-1 font-display font-bold">{line}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
        </div>
      </Comp>
    </Reveal>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        className="mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}
