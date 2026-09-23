
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Certifications", href: "#certifications" },
  { name: "Security Lab", href: "#security-lab" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(l => l.href.replace("#", ""));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-2 border-b border-cyber-light/10"
            : "py-4 border-b border-transparent"
        )}
        style={{
          background: isScrolled
            ? "rgba(6,11,20,0.92)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Gaurav Ghandat — SOC Analyst"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-cyan-md"
              style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)" }}>
              <Shield size={16} className="text-cyber-light" />
            </div>
            <span className="text-lg font-bold">
              <span className="text-white">Gaurav</span>
              <span className="text-cyber-light">.</span>
              <span className="text-cyber-muted text-sm font-mono ml-1">SOC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1" role="menubar">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.name} role="none">
                  <a
                    href={link.href}
                    role="menuitem"
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-cyber-light"
                        : "text-gray-400 hover:text-white"
                    )}
                    style={isActive ? {
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    } : {}}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyber-light transition-colors"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(6,11,20,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="space-y-2 text-center w-64">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li
                  key={link.name}
                  style={{
                    animationDelay: `${i * 60}ms`,
                    animation: isOpen ? "fade-in-up 0.4s ease-out forwards" : "none",
                    opacity: 0,
                  }}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "block px-6 py-3 rounded-xl text-base font-medium transition-all duration-200",
                      isActive
                        ? "text-cyber-light"
                        : "text-gray-300 hover:text-white"
                    )}
                    style={isActive ? {
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.25)",
                    } : {}}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex items-center gap-2 text-xs text-gray-500 font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px #00FF88" }} />
            OPEN TO OPPORTUNITIES
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
