import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { FadeIn, KineticLine, SectionHead, Counter } from "../components/Reveal";
import { Marquee } from "../components/Marquee";
import { IMAGES, STATS, SERVICES, PROJECTS, WHY_US } from "../lib/siteData";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative overflow-hidden">
      <div className="tech-grid absolute inset-0" />
      <motion.div style={{ y: glowY }} className="glow-orb absolute -top-32 left-[8%] h-96 w-[42rem] bg-electric/25" />
      <div className="glow-orb absolute top-40 right-[-6rem] h-80 w-80 bg-neon/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <FadeIn>
              <span
                data-testid="hero-eyebrow"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-neon"
              >
                <Sparkles size={13} /> IT Services · Software · Digital Transformation
              </span>
            </FadeIn>
            <h1
              data-testid="hero-headline"
              className="mt-7 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06] text-slate-50"
            >
              <KineticLine delay={0.1}>Engineering the</KineticLine>
              <KineticLine delay={0.24}>Next <span className="text-gradient">Digital</span></KineticLine>
              <KineticLine delay={0.38}>Frontier.</KineticLine>
            </h1>
            <FadeIn delay={0.55}>
              <p data-testid="hero-subcopy" className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
                TechNova Solutions designs and builds the software, cloud and AI systems ambitious
                companies run on — from first sketch to planet-scale production.
              </p>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-cta-start-project"
                  className="group inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon hover:text-navy hover:shadow-[0_0_36px_rgba(0,240,255,0.45)]"
                >
                  Start a Project
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  data-testid="hero-cta-explore-services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-neon hover:text-neon"
                >
                  Explore Services <ArrowUpRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>

          <motion.div style={{ y: imgY }} className="relative hidden lg:block">
            <FadeIn delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-electric/30 via-neon/20 to-mint/20 blur-2xl" />
                <img
                  src={IMAGES.hero}
                  alt="Abstract digital neural network — TechNova hero visual"
                  data-testid="hero-visual"
                  className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-slate-700/80 object-cover shadow-2xl"
                />
                <div className="animate-float-slow absolute -left-8 top-10 glass-panel rounded-2xl border border-slate-700 px-5 py-4">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon">System status</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-mint" /> All systems operational
                  </p>
                </div>
                <div className="animate-float-slow absolute -right-6 bottom-12 glass-panel rounded-2xl border border-slate-700 px-5 py-4" style={{ animationDelay: "1.4s" }}>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neon">Deploys this week</p>
                  <p className="mt-1 font-display text-2xl font-bold text-slate-50">128</p>
                </div>
              </div>
            </FadeIn>
          </motion.div>
        </div>

        <FadeIn delay={0.85}>
          <dl data-testid="hero-stats" className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-navy2/80 px-6 py-6">
                <dt className="order-2 mt-1 block text-xs sm:text-sm text-slate-500">{s.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-slate-50">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
};

const Intro = () => (
  <section className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-28">
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <FadeIn>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-electric/20 to-neon/10 blur-xl" />
          <img
            src={IMAGES.workspace}
            alt="Engineer at a multi-monitor workstation"
            className="relative aspect-[4/3] w-full rounded-3xl border border-slate-700/80 object-cover"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <div>
        <SectionHead
          eyebrow="Who we are"
          title="A technology partner, not just a vendor"
          description="TechNova Solutions is a fictional full-spectrum IT company. We take products from whiteboard sketch to production: strategy, design, engineering, cloud and security — under one roof, with one accountable team."
        />
        <FadeIn delay={0.15}>
          <ul className="mt-8 space-y-4">
            {["End-to-end product engineering", "Cloud-native & AI-first architecture", "Security baked into every release"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-slate-300">
                <CheckCircle2 size={18} className="text-mint shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            data-testid="intro-cta-about"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-neon transition-colors hover:text-mint"
          >
            More about TechNova <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="relative border-t border-slate-800/70 bg-navy2/40">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="What we do"
          title="Eight disciplines. One integrated team."
          description="Every capability you need to design, build, launch and scale a digital product."
        />
        <FadeIn delay={0.2}>
          <Link to="/services" data-testid="services-preview-cta" className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-neon hover:text-neon">
            All services <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.id} delay={0.06 * i}>
            <Link
              to="/services"
              data-testid={`service-card-${s.id}`}
              className="card-glow group block h-full rounded-2xl border border-slate-800 bg-card2/80 p-7 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-neon transition-colors duration-300 group-hover:bg-neon group-hover:text-navy">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">{s.title}</h3>
              <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">{s.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-slate-500 transition-colors group-hover:text-neon">
                Learn more <ArrowUpRight size={13} />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-28">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <SectionHead
        eyebrow="Selected work"
        title="Fictional case studies, real engineering depth"
        description="A sample of the kind of systems we design and ship. All projects shown are fictional demonstrations."
      />
      <FadeIn delay={0.2}>
        <Link to="/projects" data-testid="projects-preview-cta" className="group inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-neon hover:text-neon">
          Full portfolio <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </div>
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {PROJECTS.slice(0, 3).map((p, i) => (
        <FadeIn key={p.id} delay={0.1 * i}>
          <Link
            to="/projects"
            data-testid={`project-card-${p.id}`}
            className="group block overflow-hidden rounded-2xl border border-slate-800 bg-card2/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40"
          >
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase text-neon backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-slate-50">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full border border-slate-700 px-2.5 py-1 font-mono text-[10px] text-slate-400">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  </section>
);

const WhyBento = () => (
  <section className="border-t border-slate-800/70 bg-navy2/40">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-28">
      <SectionHead
        eyebrow="Why TechNova"
        title="Built differently, on purpose"
        align="center"
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {WHY_US.map((w, i) => (
          <FadeIn key={w.id} delay={0.08 * i} className={w.span}>
            <div
              data-testid={`why-card-${w.id}`}
              className="card-glow relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-card2/80 p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="glow-orb absolute -right-10 -top-10 h-32 w-32 bg-electric/20" />
              <p className="font-mono text-xs tracking-[0.25em] text-neon">0{i + 1}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-50">{w.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">{w.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="relative overflow-hidden">
    <div className="glow-orb absolute left-1/2 top-1/2 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-electric/25" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 text-center">
      <FadeIn>
        <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neon">Ready when you are</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50">
          Let's build something <span className="text-gradient">worth shipping.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
          Tell us about your product, platform or wild idea. We reply within one business day.
        </p>
        <Link
          to="/contact"
          data-testid="cta-banner-button"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon hover:text-navy hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
        >
          Start the conversation <ArrowRight size={16} />
        </Link>
      </FadeIn>
    </div>
  </section>
);

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <Marquee />
      <Intro />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyBento />
      <CTABanner />
    </div>
  );
}