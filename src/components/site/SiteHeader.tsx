import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/ai-solutions", label: "AI Solutions" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/tech-stack", label: "Tech Stack" },
  { to: "/resources", label: "Resources" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-black/5 shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/felix_logo.png" alt="Felix IMSI Logo" className="h-10 w-auto object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-ink">Felix IMSI</span>
            <span className="text-[10px] tracking-[0.18em] text-ink-muted uppercase">
              AI · Technology
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.slice(1, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm text-ink/80 hover:text-brand transition-colors relative"
              activeProps={{ className: "text-brand" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-elegant hover:shadow-glow transition-shadow"
          >
            Book Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden p-2 text-ink"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-black/5 bg-white">
          <nav className="container-x py-4 grid gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-md hover:bg-surface-muted"
                activeProps={{ className: "text-brand font-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
