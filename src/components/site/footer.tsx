import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-sm bg-white p-1">
                <img src="/felix_logo.png" alt="Felix IMSI Logo" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold tracking-tight">FELIX IMSI</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                  Private Limited
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              Your trusted workforce solutions partner. Delivering staffing, HR outsourcing,
              payroll management, and statutory compliance to industries across India for over
              five years.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-sm border border-white/20 hover:bg-white hover:text-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-white/90 mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/industries", "Industries"],
                ["/clients", "Clients"],
                ["/careers", "Careers"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-white/90 mb-4">
              Services
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                "Contract Staffing",
                "Permanent Recruitment",
                "Industrial Manpower",
                "Payroll Management",
                "HR Outsourcing",
                "Compliance Services",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.15em] font-semibold text-white/90 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                <span>Chennai</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                <a href="tel:+919789975479" className="hover:text-white">+91 97899 75479</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                <a href="mailto:rkrajaa@felixims.com" className="hover:text-white">rkrajaa@felixims.com</a>
              </li>
            </ul>
            <div className="mt-5 text-xs text-white/60">
              Mon – Sat · 9:00 AM to 7:00 PM IST
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Felix IMSI Private Limited. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
