import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/Pagehero";
import { FadeIn, SectionHead } from "../components/Reveal";
import { SERVICES } from "../lib/siteData";

const PROCESS = [
  ["01", "Discover", "Workshops, research and technical audits to define exactly what success looks like."],
  ["02", "Design", "Prototypes, architecture blueprints and design systems — validated before a line of code."],
  ["03", "Build", "Agile sprints with weekly demos, continuous integration and security checks on every merge."],
  ["04", "Scale", "Launch, monitor, optimise and grow — with SLAs, observability and a team that stays."],
];

export default function Services() {
  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow="Our Services"
        lines={["Everything you need", "to ship and scale."]}
        description="Eight integrated disciplines covering the full product lifecycle — strategy to production and beyond."
        testId="services-hero-title"
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.id} delay={0.05 * i}>
              <article
                data-testid={`service-detail-${s.id}`}
                className="card-glow group h-full rounded-2xl border border-slate-800 bg-card2/80 p-8 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-electric/15 text-neon transition-colors duration-300 group-hover:bg-neon group-hover:text-navy">
                    <s.icon size={26} />
                  </div>
                  <span className="font-mono text-xs tracking-[0.25em] text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-6 font-display text-xl sm:text-2xl font-semibold text-slate-50">{s.title}</h2>
                <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">{s.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-mint shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/70 bg-navy2/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <SectionHead
            eyebrow="How we work"
            title="A process built for momentum"
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(([num, title, text], i) => (
              <FadeIn key={num} delay={0.08 * i}>
                <div data-testid={`process-step-${num}`} className="relative h-full rounded-2xl border border-slate-800 bg-card2/80 p-7">
                  <p className="font-display text-4xl font-extrabold text-gradient">{num}</p>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">{title}</h3>
                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mt-14 text-center">
            <Link
              to="/contact"
              data-testid="services-cta-contact"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon hover:text-navy hover:shadow-[0_0_36px_rgba(0,240,255,0.45)]"
            >
              Discuss your project <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}