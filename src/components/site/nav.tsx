import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/clients", label: "Clients" },
  { to: "/careers", label: "Careers" },
  { to: "/compliance", label: "Compliance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-border/60 bg-background/95 backdrop-blur-xl shadow-sm",
        scrolled ? "py-0" : "py-1"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/felix_logo.png" alt="Felix IMSI Logo" className="h-10 w-auto object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-[15px] tracking-tight text-foreground">
              FELIX IMSI
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
              Private Limited
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary transition-colors relative"
              activeProps={{ className: "!text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919585978599"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>24/7 Support</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep transition-colors"
          >
            Hire Workforce
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 border-b border-border/50 last:border-0"
                activeProps={{ className: "!text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Hire Workforce
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
