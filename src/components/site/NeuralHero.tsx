import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Animated neural-network SVG with floating particles.
 * Deterministic node positions so SSR/CSR agree.
 */
export function NeuralHero() {
  const { nodes, edges, particles } = useMemo(() => {
    const cols = 6;
    const rows = 4;
    const nodes: { x: number; y: number; id: string }[] = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        nodes.push({
          id: `${c}-${r}`,
          x: 60 + c * 140 + ((r % 2) * 30),
          y: 80 + r * 130 + ((c % 2) * 20),
        });
      }
    }
    const edges: { x1: number; y1: number; x2: number; y2: number; d: number }[] = [];
    for (let c = 0; c < cols - 1; c++) {
      for (let r = 0; r < rows; r++) {
        const a = nodes[c * rows + r];
        for (let dr = -1; dr <= 1; dr++) {
          const nr = r + dr;
          if (nr < 0 || nr >= rows) continue;
          const b = nodes[(c + 1) * rows + nr];
          edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, d: (c + r + dr + 3) * 0.15 });
        }
      }
    }
    const particles = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: (i * 47) % 900,
      y: (i * 83) % 600,
      s: 1 + ((i * 7) % 5) * 0.5,
      dur: 6 + (i % 5),
      delay: (i * 0.3) % 5,
    }));
    return { nodes, edges, particles };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 960 640"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-90"
      >
        <defs>
          <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5a5a" stopOpacity="1" />
            <stop offset="100%" stopColor="#b30000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0" />
            <stop offset="50%" stopColor="#e63946" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        {edges.map((e, i) => (
          <g key={i}>
            <line
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke="rgba(230,57,70,0.15)" strokeWidth={0.6}
            />
            <motion.circle
              r={2}
              fill="#ff8b8b"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cx: [e.x1, e.x2],
                cy: [e.y1, e.y2],
              }}
              transition={{
                duration: 3 + e.d,
                repeat: Infinity,
                delay: e.d,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={12} fill="url(#node-grad)" opacity={0.6} />
            <motion.circle
              cx={n.x} cy={n.y} r={3}
              fill="#ffb3b3"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: (i % 6) * 0.2 }}
            />
          </g>
        ))}
      </svg>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-brand-accent/60 blur-[1px]"
          style={{ left: `${(p.x / 960) * 100}%`, top: `${(p.y / 640) * 100}%`, width: p.s * 3, height: p.s * 3 }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
