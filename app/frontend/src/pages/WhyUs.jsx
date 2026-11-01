import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Lightbulb, Cpu, HeartHandshake } from "lucide-react";
import { PageHero } from "../components/Pagehero";
import { FadeIn, SectionHead } from "../components/Reveal";
import { IMAGES } from "../lib/siteData";

const PILLARS = [
  {
    id: "veterans", icon: Users, title: "Skilled Tech Veterans",
    text: "Every engagement is staffed with senior engineers, architects and designers. No bait-and-switch, no learning on your budget.",
    points: ["Avg. 8+ years of experience", "Dedicated tech lead per project", "Direct access to your builders"],
    span: "lg:col-span-3",
  },
  {
    id: "innovation", icon: Lightbulb, title: "Innovative Solutions",
    text: "We prototype fast, test with real users, and ship what moves metrics — not what looks good in a slide deck.",
    points: ["Rapid prototyping sprints", "AI-assisted workflows"],
    span: "lg:col-span-2",
  },
  {
    id: "stack", icon: Cpu, title: "Modern Tech Stack",
    text: "Cloud-native, API-first, AI-ready. Technology choices that will still be current five years from now.",
    points: ["Kubernetes & serverless", "Observability by default"],
    span: "lg:col-span-2",
  },
  {
    id: "client-first", icon: HeartHandshake, title: "Client-First Partnership",
    text: "Weekly demos, transparent roadmaps and a 99.9% uptime mindset. Your goals become our sprint goals — from kickoff to long after launch.",
    points: ["Weekly demo cadence", "Transparent pricing & roadmaps", "Post-launch support SLAs"],
    span: "lg:col-span-3",
  },
];

const NUMBERS = [
  ["150+", "Projects delivered"],
  ["99.9%", "Uptime SLA"],
  ["24/7", "Operations coverage"],
  ["1 day", "Average response time"],
];

export default function WhyUs() {
  return (
    <div data-testid="why-us-page">
      <PageHero
        eyebrow="Why Choose Us"
        lines={["The partner your", "roadmap deserves."]}
        description="Four pillars that make TechNova the safe pair of hands for ambitious builds — and the bold choice for hard ones."
        testId="why-us-hero-title"
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.id} delay={0.07 * i} className={p.span}>
              <div
                data-testid={`pillar-card-${p.id}`}
                className="card-glow relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-card2/80 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="glow-orb absolute -right-12 -top-12 h-40 w-40 bg-electric/20" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-neon">
                    <p.icon size={22} />
                  </div>
                  <h2 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-slate-50">{p.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed">{p.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="rounded-full border border-slate-700 px-3.5 py-1.5 text-xs text-slate-300">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-800/70">
        <img src={IMAGES.cyber} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/70 to-navy" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <SectionHead eyebrow="By the numbers" title="Fictional stats, genuine ambition" align="center" />
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {NUMBERS.map(([num, label], i) => (
              <FadeIn key={label} delay={0.08 * i}>
                <div data-testid={`number-card-${i}`} className="glass-panel rounded-2xl border border-slate-700/80 p-8 text-center">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-gradient">{num}</p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mt-14 text-center">
            <Link
              to="/contact"
              data-testid="why-us-cta-contact"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon hover:text-navy hover:shadow-[0_0_36px_rgba(0,240,255,0.45)]"
            >
              Put us to the test <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
