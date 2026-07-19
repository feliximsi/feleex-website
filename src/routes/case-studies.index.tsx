import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Felix IMSI" },
      { name: "description", content: "Detailed case studies of AI and technology projects delivered by Felix IMSI." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: () => (
    <section className="container-x py-24">
      <h1 className="font-display text-5xl">Case Studies</h1>
      <p className="mt-4 text-ink-muted">
        Browse detailed case studies from the{" "}
        <Link to="/portfolio" className="text-brand underline underline-offset-4">portfolio</Link>.
      </p>
    </section>
  ),
});
