import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Send, CheckCircle2, Copy } from "lucide-react";

export const LuxuryContact = () => {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const email = "gauravghandat23@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Cybersecurity Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Gaurav,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-subtle)] flex flex-col justify-between min-h-screen"
      aria-label="Contact Gaurav Ghandat"
    >
      <div>
        {/* ── Section Label ── */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#D9381E]" />
            <span className="luxury-section-label !mb-0">
              05 / INITIATE DIALOGUE
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--text-secondary)]">
            NASHIK, MH, INDIA
          </span>
        </div>

        {/* ── Headline (Luxury Brand Campaign Style) ── */}
        <div className="mb-12">
          <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] uppercase font-light leading-[0.92] text-[var(--text-primary)] max-w-5xl">
            LET'S CREATE<br />
            <span className="font-semibold">A MORE SECURE FUTURE.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-sans mt-8 max-w-2xl leading-relaxed">
            Open to cybersecurity opportunities, professional collaboration, and meaningful challenges.
          </p>
        </div>

        {/* ── Big Email Touchpoint + Action Buttons ── */}
        <div className="pt-4 pb-16 flex flex-wrap items-center gap-6 md:gap-8">
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-4 text-xl sm:text-2xl md:text-3xl font-headline tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity"
          >
            <span className="underline underline-offset-8 decoration-1 decoration-[var(--border-subtle)] group-hover:decoration-[var(--text-primary)] transition-colors">
              {email}
            </span>
            <ArrowUpRight size={24} className="stroke-[1.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="luxury-btn-secondary !px-5 !py-2.5 text-[11px]"
            title="Copy email to clipboard"
          >
            <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
          </button>

          <button
            onClick={() => setFormOpen(!formOpen)}
            type="button"
            className="luxury-btn-primary !px-6 !py-2.5 text-[11px]"
          >
            <span>{formOpen ? "CLOSE TRANSMISSION" : "SEND MESSAGE"}</span>
          </button>
        </div>

        {/* ── Minimalist Luxury Contact Form (Collapsible) ── */}
        {formOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="mb-20 p-8 md:p-12 border border-[var(--border-subtle)] bg-[var(--bg-surface)] max-w-3xl"
          >
            <div className="mb-8">
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--text-secondary)]">
                DIRECT INQUIRY
              </span>
              <h3 className="font-headline text-2xl uppercase tracking-tight text-[var(--text-primary)] mt-1">
                TRANSMIT SECURE MESSAGE
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[var(--text-secondary)] mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-main)] border border-[var(--border-subtle)] focus:border-[var(--text-primary)] text-[var(--text-primary)] text-sm rounded-none focus:outline-none transition-colors"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[var(--text-secondary)] mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-main)] border border-[var(--border-subtle)] focus:border-[var(--text-primary)] text-[var(--text-primary)] text-sm rounded-none focus:outline-none transition-colors"
                    placeholder="name@organization.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-[var(--text-secondary)] mb-2">
                  MESSAGE / OBJECTIVE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--bg-main)] border border-[var(--border-subtle)] focus:border-[var(--text-primary)] text-[var(--text-primary)] text-sm rounded-none focus:outline-none transition-colors resize-none"
                  placeholder="Outline your security team, role requirements, or project details..."
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button type="submit" className="luxury-btn-primary">
                  <span>DISPATCH MESSAGE</span>
                  <Send size={12} />
                </button>

                {sent && (
                  <span className="text-xs font-mono text-[var(--text-primary)] flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#D9381E]" />
                    LAUNCHING DEFAULT MAIL CLIENT...
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        )}

        {/* ── Monochromatic Social Links Rows ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-[var(--border-subtle)] max-w-4xl">
          <a
            href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 px-5 border border-[var(--border-subtle)] hover:border-[var(--text-primary)] bg-[var(--bg-surface)] transition-colors duration-200"
          >
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              LINKEDIN
            </div>
            <div className="font-headline text-base text-[var(--text-primary)] uppercase tracking-tight mt-1 flex items-center justify-between">
              <span>/in/gaurav-ghandat</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href="https://github.com/GauravGhandat-23"
            target="_blank"
            rel="noopener noreferrer"
            className="group py-4 px-5 border border-[var(--border-subtle)] hover:border-[var(--text-primary)] bg-[var(--bg-surface)] transition-colors duration-200"
          >
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              GITHUB
            </div>
            <div className="font-headline text-base text-[var(--text-primary)] uppercase tracking-tight mt-1 flex items-center justify-between">
              <span>@GauravGhandat-23</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          <a
            href="/resume.pdf"
            download
            className="group py-4 px-5 border border-[var(--border-subtle)] hover:border-[var(--text-primary)] bg-[var(--bg-surface)] transition-colors duration-200"
          >
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              CURRICULUM VITAE
            </div>
            <div className="font-headline text-base text-[var(--text-primary)] uppercase tracking-tight mt-1 flex items-center justify-between">
              <span>DOWNLOAD PDF</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>

      {/* ── Luxury Brand Footer ── */}
      <footer className="pt-24 mt-20 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
        <div>
          © 2026 GAURAV GHANDAT
        </div>

        <div className="hidden md:block text-[10px] text-[var(--text-secondary)]">
          CYBERSECURITY · SOC OPERATIONS · BLUE TEAM ARCHITECTURE
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={12} />
        </button>
      </footer>
    </section>
  );
};

export default LuxuryContact;

