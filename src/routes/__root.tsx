import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-brand">Error 404</p>
        <h1 className="mt-3 font-display text-6xl text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-elegant"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
        <p className="mt-3 text-sm text-ink-muted">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-gradient-brand px-4 py-2 text-sm font-medium text-white"
          >Try again</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Felix IMSI — Building Intelligent Digital Futures" },
      {
        name: "description",
        content:
          "AI, software, cloud and automation for enterprises. Felix IMSI partners with businesses to design, build and scale intelligent digital products.",
      },
      { name: "author", content: "Felix IMSI Private Limited" },
      { property: "og:site_name", content: "Felix IMSI" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Felix IMSI — Building Intelligent Digital Futures" },
      {
        property: "og:description",
        content: "AI, software, cloud and automation for enterprises. Felix IMSI partners with businesses to design, build and scale intelligent digital products.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Felix IMSI — Building Intelligent Digital Futures" },
      { name: "twitter:description", content: "AI, software, cloud and automation for enterprises. Felix IMSI partners with businesses to design, build and scale intelligent digital products." },
      { property: "og:image", content: "https://felixims.com/felix_logo.png" },
      { name: "twitter:image", content: "https://felixims.com/felix_logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Felix Integrated Management Services India Private Limited",
          alternateName: "Felix IMSI",
          url: "https://felixims.com",
          email: "rkrajaa@felixims.com",
          telephone: "+91-9585978599",
          address: {
            "@type": "PostalAddress",
            streetAddress: "New No: 3, Old No. 1/1, Second Floor, Srinivasan Street, Perambur",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600011",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <Toaster />
    </QueryClientProvider>
  );
}
