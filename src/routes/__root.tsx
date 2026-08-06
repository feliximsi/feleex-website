import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "../components/site/layout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 pt-24">
        <div className="max-w-md text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Error 404
          </div>
          <h1 className="mt-4 text-5xl font-bold text-foreground">Page not found</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-brand-deep"
            >
              Return home
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-brand-deep"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "Felix IMSI — Workforce Solutions, Staffing & Compliance Partner" },
      {
        name: "description",
        content:
          "Felix IMSI Private Limited delivers industrial manpower, contract & permanent staffing, HR outsourcing, payroll and statutory compliance to businesses across India.",
      },
      { name: "keywords", content: "felixims, felixims.com, Felix IMSI, Felix IMSI Private Limited, workforce solutions, industrial staffing Chennai" },
      { name: "author", content: "Felix IMSI Private Limited" },
      { property: "og:site_name", content: "Felix IMSI" },
      { property: "og:title", content: "Felix IMSI — Your Trusted Workforce Solutions Partner" },
      {
        property: "og:description",
        content:
          "Industrial manpower, staffing, HR outsourcing, payroll and statutory compliance for industries across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.felixims.com/" },
      { property: "og:image", content: "https://www.felixims.com/felix_logo.png" },
      { name: "twitter:image", content: "https://www.felixims.com/felix_logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.felixims.com/" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/felix_logo.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Felix IMSI Private Limited",
          alternateName: ["felixims", "felixims.com", "www.felixims.com", "Felix IMSI"],
          url: "https://www.felixims.com",
          logo: "https://www.felixims.com/felix_logo.png",
          telephone: "+91-9789975479",
          email: "rkrajaa@felixims.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressCountry: "IN",
          },
          description:
            "Workforce solutions, staffing, HR outsourcing, payroll and statutory compliance partner for industries across India.",
          areaServed: "IN",
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
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
