import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white/80 mt-24">
      <div className="h-1 w-full bg-gradient-brand" />
      <div className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-md bg-gradient-brand text-white font-display text-xl leading-none">
              F
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl text-white">Felix IMSI</span>
              <span className="text-[10px] tracking-[0.18em] text-white/60 uppercase">
                Private Limited
              </span>
            </span>
          </Link>
          <p className="text-sm text-white/60 max-w-sm">
            An AI &amp; Technology Innovation Company. We help enterprises transform through
            artificial intelligence, software engineering, and digital innovation.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center h-9 w-9 rounded-full border border-white/15 hover:bg-brand hover:border-brand transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-medium text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-brand-accent">About</Link></li>
            <li><Link to="/careers" className="hover:text-brand-accent">Careers</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-accent">Portfolio</Link></li>
            <li><Link to="/resources" className="hover:text-brand-accent">Insights</Link></li>
            <li><Link to="/workforce" className="hover:text-brand-accent">Workforce</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-medium text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/ai-solutions" className="hover:text-brand-accent">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Software</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Cloud</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent">Automation</Link></li>
            <li><Link to="/tech-stack" className="hover:text-brand-accent">Tech Stack</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4 space-y-3 text-sm">
          <h4 className="text-white font-medium text-sm mb-4">Contact</h4>
          <div className="flex gap-3 text-white/70">
            <MapPin className="size-4 mt-0.5 text-brand-accent shrink-0" />
            <span>New No: 3, Old No. 1/1, Second Floor, Srinivasan Street, Perambur, Chennai, Tamil Nadu 600011</span>
          </div>
          <div className="flex gap-3 text-white/70">
            <Phone className="size-4 mt-0.5 text-brand-accent shrink-0" />
            <a href="tel:+919585978599">+91 95859 78599</a>
          </div>
          <div className="flex gap-3 text-white/70">
            <Mail className="size-4 mt-0.5 text-brand-accent shrink-0" />
            <a href="mailto:rkrajaa@felixims.com">rkrajaa@felixims.com</a>
          </div>
          <div className="flex gap-3 text-white/70">
            <Globe className="size-4 mt-0.5 text-brand-accent shrink-0" />
            <span>www.felixims.com</span>
          </div>
          <p className="text-xs text-white/40 pt-2">GST NO: 33AAFCH7188C1ZM</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Felix Integrated Management Services India Private Limited. All rights reserved.</p>
          <p>Manpower · People · Possibilities</p>
        </div>
      </div>
    </footer>
  );
}
