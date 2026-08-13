import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import hero from "@/assets/hero-industrial.jpg";
import { PageHero } from "@/components/site/layout";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Felix IMSI Operations, Deployments & Team" },
      {
        name: "description",
        content:
          "Inside Felix IMSI — recruitment drives, industrial deployments, training sessions, office and team moments.",
      },
      { property: "og:title", content: "Gallery — Felix IMSI" },
      { property: "og:description", content: "Recruitment, deployments, training and team moments." },
      { property: "og:url", content: "https://www.felixims.com/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://www.felixims.com/gallery" }],
  }),
  component: GalleryPage,
});

type Category = "All" | "Deployments" | "Recruitment" | "Training" | "Office";

const items: { src: string; cat: Exclude<Category, "All">; caption: string }[] = [
  { src: gallery1, cat: "Deployments", caption: "Factory floor — machine operators" },
  { src: gallery2, cat: "Recruitment", caption: "Corporate recruitment drive" },
  { src: gallery3, cat: "Deployments", caption: "Warehouse operations" },
  { src: gallery4, cat: "Training", caption: "Employee training session" },
  { src: gallery5, cat: "Deployments", caption: "Automotive assembly line" },
  { src: gallery6, cat: "Office", caption: "Corporate reception" },
  { src: aboutTeam, cat: "Office", caption: "Leadership meeting" },
  { src: hero, cat: "Deployments", caption: "Industrial site at dawn" },
];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside Felix IMSI.</>}
        description="A glimpse into our recruitment drives, industrial deployments, training programs and everyday operations."
      />
      <Section>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {(["All", "Deployments", "Recruitment", "Training", "Office"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors",
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((it, i) => (
            <Reveal key={i} delay={i * 40}>
              <figure className={cn("group relative overflow-hidden rounded-sm", i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/5]")}>
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">{it.cat}</div>
                  <div className="text-sm font-semibold mt-0.5">{it.caption}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
