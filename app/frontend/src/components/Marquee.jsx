import React from "react";
import { Sparkle } from "lucide-react";
import { MARQUEE_ITEMS } from "../lib/siteData";

export const Marquee = () => {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div data-testid="tech-marquee" className="relative overflow-hidden border-y border-slate-800 bg-navy2/60 py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm tracking-[0.3em] text-slate-500">
            {item}
            <Sparkle size={12} className="text-neon/70" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
    </div>
  );
};