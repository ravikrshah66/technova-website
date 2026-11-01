import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "../components/Pagehero";
import { FadeIn } from "../components/Reveal";
import { SERVICES, CONTACT_INFO } from "../lib/siteData";

const API = `${import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000"}/api`;

const EMPTY = { name: "", email: "", phone: "", service: "", message: "" };

const validate = (f) => {
  const errors = {};
  if (f.name.trim().length < 2) errors.name = "RAVI KUMAR SHAH";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) errors.email = "ravikrshah66@gmail.com";
  if (f.phone && !/^[+()\-\s\d]{7,20}$/.test(f.phone.trim())) errors.phone = "7003376120";
  if (f.message.trim().length < 10) errors.message = "We do the best";
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-navy2/70 px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors duration-200 focus:border-neon focus:ring-2 focus:ring-cyan-400/20 ${
    hasError ? "border-red-500/70" : "border-slate-700"
  }`;

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
      });
      toast.success("Message sent! Our team will reach out within one business day.");
      setForm(EMPTY);
    } catch (err) {
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero
        eyebrow="Contact Us"
        lines={["Let's build", "what's next."]}
        description="Tell us about your project, platform or idea. A senior engineer — not a sales bot — replies within one business day."
        testId="contact-hero-title"
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: CONTACT_INFO.email, testId: "contact-info-email" },
                { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, testId: "contact-info-phone" },
                { icon: MapPin, label: "Office", value: CONTACT_INFO.address, testId: "contact-info-address" },
                { icon: Clock, label: "Hours", value: CONTACT_INFO.hours, testId: "contact-info-hours" },
              ].map((c) => (
                <div
                  key={c.label}
                  data-testid={c.testId}
                  className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-card2/80 p-6 transition-colors duration-300 hover:border-cyan-500/40"
                >
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/15 text-neon">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-500">{c.label}</p>
                    <p className="mt-1.5 text-sm sm:text-base text-slate-200">{c.value}</p>
                  </div>
                </div>
              ))}
              <p className="pt-2 font-mono text-[11px] tracking-[0.2em] uppercase text-slate-600">
                Fictional contact details · demo only
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <form
              data-testid="contact-form"
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-slate-800 bg-card2/80 p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Full name *</label>
                  <input
                    id="contact-name"
                    data-testid="contact-form-name-input"
                    type="text"
                    placeholder="Jane Cooper"
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p data-testid="contact-form-name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email *</label>
                  <input
                    id="contact-email"
                    data-testid="contact-form-email-input"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p data-testid="contact-form-email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-slate-300">Phone</label>
                  <input
                    id="contact-phone"
                    data-testid="contact-form-phone-input"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && <p data-testid="contact-form-phone-error" className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-slate-300">Service of interest</label>
                  <select
                    id="contact-service"
                    data-testid="contact-form-service-select"
                    value={form.service}
                    onChange={set("service")}
                    className={`${inputClass(false)} appearance-none`}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Message *</label>
                  <textarea
                    id="contact-message"
                    data-testid="contact-form-message-input"
                    rows={5}
                    placeholder="Tell us about your project, timeline and goals…"
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass(errors.message)} resize-none`}
                  />
                  {errors.message && <p data-testid="contact-form-message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>
              </div>
              <button
                type="submit"
                data-testid="contact-form-submit-button"
                disabled={sending}
                className="mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon hover:text-navy hover:shadow-[0_0_36px_rgba(0,240,255,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}