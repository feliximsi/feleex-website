import type { ReactNode } from "react";

export function Marquee({ items, className }: { items: ReactNode[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex gap-16 animate-marquee w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">{item}</div>
        ))}
      </div>
    </div>
  );
}
