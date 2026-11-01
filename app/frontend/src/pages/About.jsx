import React from "react";
import { Target, Eye, Compass } from "lucide-react";
import { PageHero } from "../components/Pagehero";
import { FadeIn, SectionHead } from "../components/Reveal";
import { IMAGES, VALUES, TEAM } from "../lib/siteData";

const MissionVision = () => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
    <div className="grid gap-5 lg:grid-cols-3">
      {[
        { icon: Compass, title: "Who We Are", text: "TechNova Solutions is a fictional full-spectrum IT services company founded on one belief: great software is a team sport. Strategists, designers and engineers work as one unit from day one." },
        { icon: Target, title: "Our Mission", text: "To make enterprise-grade engineering accessible to every ambitious team — turning complex technology into products people love to use." },
        { icon: Eye, title: "Our Vision", text: "A world where every organisation, regardless of size, can harness AI, cloud and modern software to compete on a global stage." },
      ].map((c, i) => (
        <FadeIn key={c.title} delay={0.08 * i}>
          <div data-testid={`about-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`} className="card-glow h-full rounded-2xl border border-slate-800 bg-card2/80 p-8 transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-neon">
              <c.icon size={22} />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-slate-50">{c.title}</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">{c.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

const Story = () => (
  <section className="border-t border-slate-800/70 bg-navy2/40">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Our story"
            title="From a two-desk studio to a full-stack technology house"
            description="TechNova began as a fictional two-person web studio and grew into a multi-disciplinary team of 40+ engineers, designers and strategists. What never changed: senior people on every engagement, honest timelines, and code we are proud to sign."
          />
          <FadeIn delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["2016", "Founded as a web studio"],
                ["2019", "Cloud & DevOps practice launches"],
                ["2022", "Applied AI lab established"],
                ["2025", "40+ specialists, 12 industries"],
              ].map(([year, event]) => (
                <div key={year} className="border-l-2 border-electric/60 pl-5">
                  <dt className="font-display text-2xl font-bold text-gradient">{year}</dt>
                  <dd className="mt-1 text-sm text-slate-400">{event}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-neon/15 to-electric/20 blur-xl" />
            <img
              src={IMAGES.datacenter}
              alt="Modern data center with neon-lit server racks"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-3xl border border-slate-700/80 object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
    <SectionHead
      eyebrow="Core values"
      title="The principles behind every commit"
      align="center"
    />
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {VALUES.map((v, i) => (
        <FadeIn key={v.id} delay={0.07 * i}>
          <div data-testid={`value-card-${v.id}`} className="h-full rounded-2xl border border-slate-800 bg-card2/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
            <p className="font-mono text-xs tracking-[0.25em] text-neon">0{i + 1}</p>
            <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">{v.title}</h3>
            <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{v.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

const Team = () => (
  <section className="border-t border-slate-800/70 bg-navy2/40">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
      <SectionHead
        eyebrow="Leadership"
        title="The people behind the pixels"
        description="Fictional leadership profiles shown for demonstration."
        align="center"
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <FadeIn key={m.name} delay={0.07 * i}>
            <div data-testid={`team-card-${m.initials.toLowerCase()}`} className="group h-full rounded-2xl border border-slate-800 bg-card2/80 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-electric to-neon font-display text-xl font-bold text-navy transition-transform duration-300 group-hover:scale-105">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">{m.name}</h3>
              <p className="mt-1 font-mono text-xs tracking-widest uppercase text-slate-500">{m.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="About TechNova"
        lines={["The team behind", "tomorrow's software."]}
        description="We are a fictional technology company with a very real obsession: building digital products that are fast, secure and beautiful."
        testId="about-hero-title"
      />
      <MissionVision />
      <Story />
      <Values />
      <Team />
    </div>
  );
}