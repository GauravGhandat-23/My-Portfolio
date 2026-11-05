import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const LuxuryNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME", number: "01", href: "#home" },
    { id: "about", label: "ABOUT", number: "02", href: "#about" },
    { id: "expertise", label: "EXPERTISE", number: "03", href: "#expertise" },
    { id: "projects", label: "PROJECTS", number: "04", href: "#projects" },
    { id: "certifications", label: "CERTIFICATIONS", number: "05", href: "#certifications" },
  ];

  const allMobileItems = [
    ...navItems,
    { id: "contact", label: "CONTACT", number: "06", href: "#contact" },
  ];

  // Scroll listener for active section indicator & subtle transparency adjustment
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const sections = ["home", "about", "expertise", "projects", "certifications", "contact"];
          const scrollPos = window.scrollY + 160;

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.15 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Completely Transparent Luxury Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/[0.25] backdrop-blur-[6px] border-b border-black/[0.05] py-4 md:py-5"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* ── Left: Brand Identity ── */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            className="group flex items-center gap-2.5 select-none"
            aria-label="Gaurav Ghandat Home"
          >
            <span className="font-headline tracking-[0.24em] text-sm md:text-base font-semibold text-[#111111] transition-opacity hover:opacity-75">
              GAURAV GHANDAT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E] opacity-90 transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* ── Center: Minimalist Transparent Nav Links (Desktop) ── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
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
                  className={`group relative py-1 text-[11px] font-mono tracking-[0.22em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {item.label}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTransparentNavUnderline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#111111]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Underline (when not active) */}
                  {!isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-[#111111]/40 transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right: Minimalist Luxury CONTACT Action ── */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.24em] uppercase text-[#111111] font-medium py-1 relative group"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Mobile Transparent Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#111111] hover:opacity-60 focus:outline-none transition-opacity"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={22} className="stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu: Translucent Pure White Luxury Fullscreen Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Top Bar with Brand & Minimal Close Button */}
            <div className="flex items-center justify-between pb-8 border-b border-black/[0.08]">
              <div className="flex items-center gap-2">
                <span className="font-headline tracking-[0.24em] text-sm sm:text-base font-semibold text-[#111111]">
                  GAURAV GHANDAT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E]" />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#111111] hover:opacity-60 transition-opacity focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X size={22} className="stroke-[1.75]" />
              </button>
            </div>

            {/* Middle: Large Translucent Editorial Navigation Links */}
            <nav className="flex flex-col py-8 sm:py-12 gap-3 sm:gap-4" aria-label="Mobile Navigation">
              {allMobileItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.35 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className={`group flex items-baseline gap-4 py-3 sm:py-4 border-b border-black/[0.05] transition-colors ${
                      isActive ? "text-[#111111]" : "text-[#666666] hover:text-[#111111]"
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#666666] group-hover:text-[#111111] transition-colors">
                      {item.number}
                    </span>
                    <span className="font-headline text-2xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] font-light group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E] ml-auto self-center" />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom Translucent Footer Info */}
            <div className="pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-[#666666]">
              <div>
                NASHIK, INDIA · BLUE TEAM OPERATIONS
              </div>
              <a
                href="mailto:gauravghandat23@gmail.com"
                className="text-[#111111] hover:underline"
              >
                gauravghandat23@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryNav;
