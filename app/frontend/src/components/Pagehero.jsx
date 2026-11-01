import React from "react";
import { FadeIn, KineticLine } from "./Reveal";

export const PageHero = ({ eyebrow, lines, description, testId }) => (
  <section className="relative overflow-hidden">
    <div className="tech-grid absolute inset-0" />
    <div className="glow-orb absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-electric/20" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20">
      <FadeIn>
        <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neon mb-6">{eyebrow}</p>
      </FadeIn>
      <h1
        data-testid={testId}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-50"
      >
        {lines.map((line, i) => (
          <KineticLine key={i} delay={0.12 * i}>
            {i === lines.length - 1 ? <span className="text-gradient">{line}</span> : line}
          </KineticLine>
        ))}
      </h1>
      {description && (
        <FadeIn delay={0.45}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
        </FadeIn>
      )}
    </div>
  </section>
);