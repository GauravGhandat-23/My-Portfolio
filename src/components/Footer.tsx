
import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative" style={{ background: "#060B14", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)" }}>
                <Shield size={16} className="text-cyber-light" />
              </div>
              <span className="font-bold text-white">Gaurav Uttam Ghandat</span>
            </div>
            <p className="text-xs text-gray-500 mb-1 font-mono">SOC Analyst • Blue Team • Cybersecurity</p>
            <p className="text-xs text-cyber-light font-mono italic">"Detect. Investigate. Respond. Secure."</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-mono">Navigation</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                ["#home", "Home"], ["#about", "About"], ["#skills", "Skills"],
                ["#experience", "Experience"], ["#projects", "Projects"], ["#case-studies", "Case Studies"],
                ["#certifications", "Certifications"], ["#security-lab", "Security Lab"], ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a key={href} href={href}
                  className="text-xs text-gray-500 hover:text-cyber-light transition-colors font-mono">
                  › {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 font-mono">Connect</h4>
            <div className="space-y-3">
              <a href="https://github.com/GauravGhandat-23" target="_blank" rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-3 text-gray-500 hover:text-cyber-light transition-colors group">
                <Github size={16} />
                <span className="text-xs font-mono">github.com/GauravGhandat-23</span>
              </a>
              <a href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-3 text-gray-500 hover:text-cyber-light transition-colors">
                <Linkedin size={16} />
                <span className="text-xs font-mono">linkedin.com/in/gaurav-ghandat</span>
              </a>
              <a href="mailto:gauravghandat23@gmail.com"
                aria-label="Send Email"
                className="flex items-center gap-3 text-gray-500 hover:text-cyber-light transition-colors">
                <Mail size={16} />
                <span className="text-xs font-mono">gauravghandat23@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <p className="text-xs text-gray-600 font-mono">
            © 2026 Gaurav Uttam Ghandat. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00FF88", boxShadow: "0 0 4px #00FF88", animation: "pulse 2s infinite" }} />
            <span className="text-xs text-gray-600 font-mono">Open to Cybersecurity Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
