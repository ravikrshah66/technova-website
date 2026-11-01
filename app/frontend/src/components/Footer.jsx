import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICES, CONTACT_INFO } from "../lib/siteData";

export const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-slate-800 bg-[#070B15]">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm text-slate-400 leading-relaxed">
            Premium IT services, software development and digital transformation — engineered for what comes next.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-slate-500">
            Fictional demo company
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-neon mb-5">Navigate</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-slate-400 hover:text-neon transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-neon mb-5">Services</h4>
          <ul className="space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-sm text-slate-400 hover:text-neon transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs tracking-[0.25em] uppercase text-neon mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 text-neon shrink-0" /> {CONTACT_INFO.email}
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 text-neon shrink-0" /> {CONTACT_INFO.phone}
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-neon shrink-0" /> {CONTACT_INFO.address}
            </li>
          </ul>
          <Link
            to="/contact"
            data-testid="footer-cta-contact"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-neon hover:text-neon"
          >
            Get in touch <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-8">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} TechNova Solutions. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Demo website — company, projects and statistics are fictional.
        </p>
      </div>
    </div>
  </footer>
);