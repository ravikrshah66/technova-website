import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/Pagehero";
import { PROJECTS, PROJECT_FILTERS } from "../lib/siteData";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div data-testid="projects-page">
      <PageHero
        eyebrow="Our Projects"
        lines={["Proof, not", "promises."]}
        description="A portfolio of fictional case studies demonstrating the systems we design and ship. All projects below are demonstrations, not real client work."
        testId="projects-hero-title"
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div data-testid="project-filters" className="flex flex-wrap gap-2.5">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              data-testid={`filter-${f.toLowerCase().replace(/[\s/]+/g, "-")}`}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-electric text-white shadow-[0_0_24px_rgba(0,102,255,0.4)]"
                  : "border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-neon"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                data-testid={`project-tile-${p.id}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-card2/80 transition-colors duration-300 hover:border-cyan-500/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-neon backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold text-slate-50">{p.title}</h2>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-slate-700 px-2.5 py-1 font-mono text-[10px] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-12 text-center font-mono text-xs tracking-[0.2em] uppercase text-slate-600">
          Fictional case studies · no real clients implied
        </p>
      </section>
    </div>
  );
}