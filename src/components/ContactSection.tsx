import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, ArrowUp, Send, CheckCircle2, FileText, MapPin } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { isDark } = useTheme();

  const email = "gauravghandat23@gmail.com";

  const handleCopyEmail = () => {
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
      lenis.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen py-24 md:py-36 overflow-hidden flex flex-col justify-between transition-colors duration-300 ${
        isDark ? "text-white" : "text-slate-900"
      }`}
      style={{
        background: isDark
          ? "radial-gradient(ellipse at 70% 50%, #200806 0%, #060B14 45%, #03060E 100%)"
          : "radial-gradient(ellipse at 70% 50%, rgba(249, 115, 22, 0.08) 0%, #FFFFFF 50%, #F7F9FC 100%)",
      }}
      aria-label="Contact Gaurav Ghandat"
    >
      {/* ── Glowing Particle Sphere / Ring ── */}
      <CosmicVortexCanvas variant="ring" particleCount={400} />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Section Index Marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between border-b pb-4 mb-12 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div
            className={`font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 ${
              isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
          >
            <span>(06)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>INITIATE TRANSMISSION</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            NASHIK, INDIA
          </div>
        </motion.div>

        {/* ── GIANT HEADLINE WITH VIEWPORT REVEAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h2 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] select-none">
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              HAVE A SECURITY CHALLENGE?
            </span>
            <span className="block text-outline">
              LET'S CONNECT.
            </span>
          </h2>
        </motion.div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`font-sans text-base md:text-xl max-w-xl mb-10 leading-relaxed transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-slate-600"
          }`}
        >
          Open to full-time cybersecurity opportunities, SOC Analyst roles, threat intelligence collaboration, and building resilient defense operations.
        </motion.p>

        {/* ── BIG CAPSULE BUTTON ── */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            href={`mailto:${email}`}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-headline tracking-wider text-base md:text-xl uppercase shadow-2xl transition-all duration-200 ${
              isDark
                ? "bg-white text-black hover:bg-neutral-200"
                : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20"
            }`}
          >
            <span>{email}</span>
            <ArrowUpRight size={20} className="stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFormOpen(!formOpen)}
            className={`px-6 py-4 rounded-full font-headline tracking-wider text-sm md:text-base uppercase transition-all duration-200 border ${
              isDark
                ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                : "bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm"
            }`}
          >
            {formOpen ? "CLOSE FORM" : "SEND DIRECT MESSAGE"}
          </motion.button>

          {copied && (
            <span className="font-mono text-xs text-emerald-500 animate-fade-in flex items-center gap-1.5 font-semibold">
              <CheckCircle2 size={14} />
              COPIED TO CLIPBOARD
            </span>
          )}
        </div>

        {/* ── COLLAPSIBLE DIRECT MESSAGE FORM ── */}
        {formOpen && (
          <div
            className={`mb-14 p-6 md:p-8 rounded-3xl border backdrop-blur-2xl max-w-2xl animate-fade-in transition-all duration-300 ${
              isDark
                ? "bg-black/75 border-white/15 text-white"
                : "bg-white/95 border-slate-200 text-slate-900 shadow-2xl shadow-slate-900/10"
            }`}
          >
            <h3 className={`font-headline text-2xl uppercase mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Send Encrypted Transmission
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono uppercase mb-1 ${isDark ? "text-white/60" : "text-slate-600 font-medium"}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      isDark
                        ? "bg-white/5 border-white/15 text-white placeholder-white/30 focus:border-cyan-400"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                    }`}
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase mb-1 ${isDark ? "text-white/60" : "text-slate-600 font-medium"}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      isDark
                        ? "bg-white/5 border-white/15 text-white placeholder-white/30 focus:border-cyan-400"
                        : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                    }`}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono uppercase mb-1 ${isDark ? "text-white/60" : "text-slate-600 font-medium"}`}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/15 text-white placeholder-white/30 focus:border-cyan-400"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                  }`}
                  placeholder="Tell me about your team, role, or security project..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-400 text-black font-headline tracking-wider text-sm uppercase hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-400/20"
                >
                  <Send size={14} />
                  <span>DISPATCH MESSAGE</span>
                </button>

                {sent && (
                  <span className="text-xs font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={14} />
                    LAUNCHING EMAIL CLIENT...
                  </span>
                )}
              </div>
            </form>
          </div>
        )}

        {/* ── SOCIAL CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          <a
            href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border backdrop-blur-md transition-all group ${
              isDark
                ? "bg-black/50 border-white/10 hover:border-cyan-400/50"
                : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5 hover:shadow-lg"
            }`}
          >
            <div className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-slate-500 font-semibold"}`}>
              LINKEDIN
            </div>
            <div
              className={`font-mono text-xs transition-colors mt-1 truncate ${
                isDark ? "text-white/90 group-hover:text-cyan-300" : "text-slate-800 group-hover:text-cyan-700 font-medium"
              }`}
            >
              in/gaurav-ghandat
            </div>
          </a>

          <a
            href="https://github.com/GauravGhandat-23"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl border backdrop-blur-md transition-all group ${
              isDark
                ? "bg-black/50 border-white/10 hover:border-cyan-400/50"
                : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5 hover:shadow-lg"
            }`}
          >
            <div className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-slate-500 font-semibold"}`}>
              GITHUB
            </div>
            <div
              className={`font-mono text-xs transition-colors mt-1 truncate ${
                isDark ? "text-white/90 group-hover:text-cyan-300" : "text-slate-800 group-hover:text-cyan-700 font-medium"
              }`}
            >
              @GauravGhandat-23
            </div>
          </a>

          <a
            href="/resume.pdf"
            download
            className={`p-4 rounded-2xl border backdrop-blur-md transition-all group ${
              isDark
                ? "bg-black/50 border-white/10 hover:border-cyan-400/50"
                : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5 hover:shadow-lg"
            }`}
          >
            <div className={`font-mono text-[10px] uppercase tracking-widest ${isDark ? "text-white/40" : "text-slate-500 font-semibold"}`}>
              CURRICULUM VITAE
            </div>
            <div
              className={`font-mono text-xs transition-colors mt-1 flex items-center gap-1 ${
                isDark ? "text-white/90 group-hover:text-cyan-300" : "text-slate-800 group-hover:text-cyan-700 font-medium"
              }`}
            >
              <span>Download PDF</span>
              <ArrowUpRight size={12} />
            </div>
          </a>
        </div>

      </div>

      {/* ── FOOTER BAR ── */}
      <footer
        className={`container mx-auto px-4 md:px-8 mt-20 pt-6 border-t relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono transition-colors duration-300 ${
          isDark ? "border-white/10 text-white/50" : "border-slate-200 text-slate-600"
        }`}
      >
        <div>
          © 2026 GAURAV GHANDAT
        </div>

        <div className={`hidden md:block uppercase tracking-widest text-[11px] ${isDark ? "text-white/40" : "text-slate-500"}`}>
          SECURING THE DIGITAL FRONTIER · BLUE TEAM READINESS
        </div>

        <button
          onClick={scrollToTop}
          className={`flex items-center gap-1.5 uppercase tracking-wider transition-colors font-medium ${
            isDark ? "text-white/70 hover:text-white" : "text-slate-700 hover:text-black font-semibold"
          }`}
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={13} />
        </button>
      </footer>
    </section>
  );
};

export default ContactSection;
