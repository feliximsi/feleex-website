interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-brand-deep text-white py-5 border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center px-8 shrink-0">
            <span className="text-sm md:text-base font-display font-semibold uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="ml-8 h-1.5 w-1.5 rounded-full bg-white/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
