import React from "react";
import { Link } from "react-router-dom";

export const LogoMark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="tn-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0066FF" />
        <stop offset="0.55" stopColor="#00F0FF" />
        <stop offset="1" stopColor="#00F5D4" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="#0A0F1D" stroke="url(#tn-g)" strokeWidth="3" />
    <path d="M20 22h24M32 22v22" stroke="url(#tn-g)" strokeWidth="6" strokeLinecap="round" />
    <circle cx="47" cy="42" r="4.5" fill="#00F0FF" />
  </svg>
);

export const Logo = ({ compact = false }) => (
  <Link to="/" data-testid="logo-link" className="flex items-center gap-3 group">
    <LogoMark size={compact ? 34 : 40} />
    <span className="font-display font-bold tracking-tight text-lg leading-none">
      TechNova
      <span className="block text-[11px] font-mono font-medium tracking-[0.28em] text-neon">SOLUTIONS</span>
    </span>
  </Link>
);
