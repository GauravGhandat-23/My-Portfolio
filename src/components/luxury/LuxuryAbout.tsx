import { motion } from "framer-motion";
import { ArrowUpRight, Download, ShieldCheck } from "lucide-react";

export const LuxuryAbout = () => {
  return (
    <section
      id="about"
      className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-subtle)] overflow-hidden"
      aria-label="About Gaurav Ghandat"
    >
      {/* ── Subtle Oversized Background Portrait Watermark (Luxury Editorial Touch) ── */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] pointer-events-none select-none opacity-[0.05] grayscale overflow-hidden z-0"
        aria-hidden="true"
      >
        <img
          src="/gaurav-original.jpg"
          alt=""
          className="w-full h-full object-cover object-top filter contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FFFFFF]/50 to-[#FFFFFF]" />
      </div>

      <div className="relative z-10">
        {/* ── Section Label ── */}
        <div className="flex items-center justify-between mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#D9381E]" />
            <span className="luxury-section-label !mb-0">
              01 / IDENTITY &amp; PHILOSOPHY
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[var(--text-secondary)]">
            DEFENSIVE ARCHITECTURE
          </span>
        </div>

        {/* ── Headline + Editorial Narrative Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Giant Editorial Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] uppercase font-light leading-[0.95] text-[var(--text-primary)]">
              ORIGINAL THINKING.<br />
              <span className="font-semibold">SECURE EXECUTION.</span>
            </h2>
          </div>

          {/* Right Column: Editorial Narrative & Real Background */}
          <div className="lg:col-span-6 space-y-6 text-[var(--text-secondary)] font-sans text-sm md:text-base leading-relaxed">
            <p className="text-base md:text-lg text-[var(--text-primary)] font-medium leading-relaxed">
              I am <strong className="text-[var(--text-primary)]">Gaurav Ghandat</strong>, a cybersecurity professional focused on security operations, threat detection, defensive engineering, and building resilient digital environments.
            </p>

            <p>
              With disciplined experience in Blue Team operations, I specialize in centralized log orchestration with Splunk Enterprise, multi-tier anomaly correlation, network traffic packet dissection using Wireshark and Zeek, and threat intelligence synthesis mapped against the MITRE ATT&amp;CK matrix.
            </p>

            <p>
              Currently serving as a <strong className="text-[var(--text-primary)] font-semibold">System Administrator at Bits &amp; Bytes Services Pvt. Ltd.</strong>, I actively govern enterprise Windows Server and Linux infrastructure, enforce Active Directory Group Policy Objects (GPOs), minimize corporate attack surfaces, and lead rapid incident triage.
            </p>

            {/* Action Links */}
            <div className="pt-4 flex items-center gap-8">
              <a
                href="/resume.pdf"
                download
                className="luxury-link group"
              >
                <span>DOWNLOAD CURRICULUM VITAE</span>
                <Download size={13} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#expertise"
                className="luxury-link group"
              >
                <span>VIEW EXPERTISE</span>
                <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ── Three Editorial Pillars (Clean Monochrome Rows) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[var(--border-subtle)]">
          <div className="space-y-3">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              01 / OPERATIONS
            </div>
            <h3 className="font-headline text-xl text-[var(--text-primary)] uppercase tracking-tight">
              SOC &amp; Telemetry
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Continuous surveillance, calibrated SPL query construction, and high-fidelity alert correlation to neutralize threats before lateral expansion.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              02 / RESILIENCE
            </div>
            <h3 className="font-headline text-xl text-[var(--text-primary)] uppercase tracking-tight">
              Infrastructure Hardening
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Enterprise Active Directory governance, strict GPO baseline compliance, least privilege RBAC enforcement, and secure perimeter containment.
            </p>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              03 / INTELLIGENCE
            </div>
            <h3 className="font-headline text-xl text-[var(--text-primary)] uppercase tracking-tight">
              Threat Analysis &amp; IR
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
              Adversary TTP identification, deep PCAP traffic inspection, automated IOC enrichment, and structured post-incident remediation playbooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryAbout;
