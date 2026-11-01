import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export const FadeIn = ({ children, delay = 0, y = 32, className = "", once = true }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const KineticLine = ({ children, delay = 0, className = "" }) => (
  <span className={`-mb-1.5 block overflow-hidden pb-1.5 -mr-3 pr-3 ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const SectionHead = ({ eyebrow, title, description, align = "left" }) => (
  <FadeIn className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
    <p data-testid="section-eyebrow" className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neon mb-4">
      {eyebrow}
    </p>
    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
      {title}
    </h2>
    {description && <p className="mt-4 text-base text-slate-400 leading-relaxed">{description}</p>}
  </FadeIn>
);

export const Counter = ({ value, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.8, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
    });
    return unsub;
  }, [spring, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
};
