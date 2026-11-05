import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

interface FloatingNavProps {
  onOpenHub?: () => void;
}

export const FloatingNav = ({ onOpenHub }: FloatingNavProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navItems = [
    { id: "home", label: "HOME", href: "#home" },
    { id: "about", label: "ABOUT", href: "#about" },
    { id: "skills", label: "SKILLS", href: "#skills" },
    { id: "projects", label: "PROJECTS", href: "#projects" },
    { id: "certifications", label: "CERTIFICATIONS", href: "#certifications" },
    { id: "contact", label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
          const scrollPos = window.scrollY + 220;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -70, duration: 1.15 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto gap-2">
        {/* ── Left: Brand Capsule Badge ── */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
            isDark
              ? "bg-black/70 hover:bg-black/90 border border-white/15 hover:border-white/35 shadow-xl shadow-black/40"
              : "bg-white/85 hover:bg-white/95 border border-slate-200/90 hover:border-slate-400/50 shadow-lg shadow-slate-900/5"
          }`}
          aria-label="Gaurav Ghandat Home"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-amber-400/80 flex items-center justify-center shadow-inner bg-black">
            <img src="/gaurav-original.jpg" alt="Gaurav Ghandat" className="w-full h-full object-cover object-top" />
          </div>
          <span
            className={`font-headline tracking-wider text-xs md:text-sm transition-colors ${
              isDark ? "text-white/90 group-hover:text-white" : "text-slate-900 group-hover:text-black font-semibold"
            }`}
          >
            GAURAV GHANDAT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
        </a>

        {/* ── Center: Menu Capsule with Smooth Sliding Pill (Desktop) ── */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 ${
            isDark
              ? "bg-black/70 border border-white/15 shadow-2xl shadow-black/60"
              : "bg-white/85 border border-slate-200/90 shadow-xl shadow-slate-900/5"
          }`}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase transition-colors duration-200 group"
              >
                {/* Sliding active pill indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className={`absolute inset-0 rounded-full ${
                      isDark
                        ? "bg-white shadow-md shadow-white/20"
                        : "bg-slate-900 shadow-md shadow-slate-900/25"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? isDark
                        ? "text-black font-bold"
                        : "text-white font-bold"
                      : isDark
                      ? "text-white/70 group-hover:text-white"
                      : "text-slate-600 group-hover:text-slate-950 font-medium"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
          {onOpenHub && (
            <button
              onClick={onOpenHub}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200 flex items-center gap-1.5 ml-1 border active:scale-95 ${
                isDark
                  ? "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/15 border-cyan-500/30"
                  : "text-cyan-700 hover:text-cyan-900 hover:bg-cyan-50 border-cyan-300/80 font-semibold"
              }`}
            >
              <Shield size={12} className="animate-pulse" />
              <span>SOC HUB</span>
            </button>
          )}
        </nav>

        {/* ── Right: Theme Toggle + LET'S TALK CTA ── */}
        <div className="flex items-center gap-2">
          {/* Minimalist Pill Theme Switcher */}
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className={`group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline tracking-wider text-xs md:text-sm uppercase transition-all duration-200 hover:scale-105 active:scale-95 ${
              isDark
                ? "bg-white text-black shadow-xl shadow-white/15 hover:bg-neutral-200"
                : "bg-slate-900 text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800"
            }`}
          >
            <span>LET'S TALK</span>
            <ArrowUpRight size={14} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center focus:outline-none active:scale-95 transition-transform ${
              isDark
                ? "bg-black/70 border-white/15 text-white"
                : "bg-white/90 border-slate-200 text-slate-900 shadow-md"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown with Smooth Stagger ── */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`md:hidden fixed top-20 left-4 right-4 p-5 rounded-3xl backdrop-blur-2xl border shadow-2xl z-50 pointer-events-auto flex flex-col gap-2 ${
            isDark
              ? "bg-black/95 border-white/20 text-white"
              : "bg-white/95 border-slate-200 text-slate-900 shadow-slate-900/15"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`px-4 py-3 rounded-2xl text-xs font-mono tracking-widest uppercase transition-all ${
                  isActive
                    ? isDark
                      ? "bg-white text-black font-bold"
                      : "bg-slate-900 text-white font-bold"
                    : isDark
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-black font-medium"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          {/* Theme switcher row in mobile menu */}
          <div
            className={`flex items-center justify-between px-4 py-3 rounded-2xl mt-1 border ${
              isDark ? "bg-white/[0.04] border-white/10" : "bg-slate-100/70 border-slate-200"
            }`}
          >
            <span
              className={`text-xs font-mono tracking-wider uppercase ${
                isDark ? "text-white/70" : "text-slate-600 font-medium"
              }`}
            >
              MODE // THEME
            </span>
            <ThemeToggle showLabels />
          </div>

          {onOpenHub && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHub();
              }}
              className={`mt-2 px-4 py-3 rounded-2xl font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 border ${
                isDark
                  ? "bg-cyan-950/40 border-cyan-500/40 text-cyan-300"
                  : "bg-cyan-50 border-cyan-300 text-cyan-800 font-semibold"
              }`}
            >
              <Shield size={14} />
              <span>OPEN SOC HUB</span>
            </button>
          )}
        </motion.div>
      )}
    </motion.header>
  );
};

export default FloatingNav;
