
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cyber-darker/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient">
          My Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-cyber-light transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-cyber-light"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-cyber-darker/95 z-40 transition-all duration-300 flex flex-col justify-center items-center",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="space-y-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xl text-gray-300 hover:text-cyber-light transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
