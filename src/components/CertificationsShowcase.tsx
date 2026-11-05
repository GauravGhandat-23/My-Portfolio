import { useState } from "react";
import { Award, ExternalLink, CheckCircle2, Shield, Calendar, Building, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import CosmicVortexCanvas from "./CosmicVortexCanvas";

interface Cert {
  name: string;
  issuer: string;
  date: string;
  category: "soc" | "network" | "systems" | "foundations";
  categoryLabel: string;
  url: string;
  verified: boolean;
  credentialId?: string;
}

export const CertificationsShowcase = () => {
  const [filter, setFilter] = useState<"all" | "soc" | "network" | "systems">("all");
  const { isDark } = useTheme();

  const certs: Cert[] = [
    {
      name: "Google Professional Cybersecurity Certificate",
      issuer: "Google / Coursera",
      date: "2024",
      category: "soc",
      categoryLabel: "Security Operations",
      url: "https://coursera.org/share/f01b9a5dc1a8447f65c18b289515be43",
      verified: true,
      credentialId: "COURSERA-F01B9A5DC1",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "network",
      categoryLabel: "Networking & Security",
      url: "https://www.credly.com/badges/d1a2f7f7-d5c8-47dc-a4ce-aee6588ff9f1/public_url",
      verified: true,
      credentialId: "CREDLY-D1A2F7F7",
    },
    {
      name: "Foundation Level Threat Intelligence Analyst",
      issuer: "arcX",
      date: "2025",
      category: "soc",
      categoryLabel: "Threat Intelligence",
      url: "https://arcx.io/verify-certificate?id=e5489e828df82604ca906bd9ebadf7f85ce7a2a5&k=350ac886ebc54bc8b92df70a00259d0a",
      verified: true,
      credentialId: "ARCX-E5489E82",
    },
    {
      name: "Introduction to Network Analysis",
      issuer: "Security Blue Team",
      date: "2024",
      category: "network",
      categoryLabel: "Traffic Analysis",
      url: "https://elearning.securityblue.team/home/courses/free-courses/introduction-to-network-analysis#content",
      verified: true,
      credentialId: "SBT-NET-ANALYSIS",
    },
    {
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      date: "2024",
      category: "systems",
      categoryLabel: "Application Security",
      url: "#",
      verified: true,
      credentialId: "SECOPS-CAP-2024",
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "network",
      categoryLabel: "Network Fundamentals",
      url: "https://www.credly.com/badges/51fa6a8b-1e96-48eb-b1fb-421f148404a3/public_url",
      verified: true,
      credentialId: "CREDLY-51FA6A8B",
    },
    {
      name: "Hardware and Operating Systems",
      issuer: "IBM / Coursera",
      date: "2024",
      category: "systems",
      categoryLabel: "Systems Administration",
      url: "https://coursera.org/share/76865aa7054fba6a877ca6b864939766",
      verified: true,
      credentialId: "COURSERA-76865AA7",
    },
    {
      name: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "systems",
      categoryLabel: "OS Fundamentals",
      url: "https://www.credly.com/badges/bc82a637-a859-4fa2-bc40-272da4fe4e54/public_url",
      verified: true,
      credentialId: "CREDLY-BC82A637",
    },
    {
      name: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "soc",
      categoryLabel: "Career Pathway",
      url: "https://www.credly.com/badges/b5ecce27-4a11-4aa8-963d-4c315eb0c354/public_url",
      verified: true,
      credentialId: "CREDLY-B5ECCE27",
    },
    {
      name: "Cybersecurity Internship Certificate",
      issuer: "Edureka",
      date: "2024",
      category: "soc",
      categoryLabel: "Hands-on Internship",
      url: "#",
      verified: true,
      credentialId: "EDUREKA-INTERN-2024",
    },
    {
      name: "TCS Cybersecurity Analyst Job Simulation",
      issuer: "Tata Consultancy Services / Forage",
      date: "2024",
      category: "soc",
      categoryLabel: "Industry SOC Simulation",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata%20Consultancy%20Services/m7WCSm6Wv5Yqvgw4g_Tata%20Consultancy%20Services_gauravghandat23@gmail.com_completion_certificate.pdf",
      verified: true,
      credentialId: "FORAGE-TCS-CYBER",
    },
  ];

  const filteredCerts =
    filter === "all" ? certs : certs.filter((c) => c.category === filter);

  return (
    <section
      id="certifications"
      className={`relative min-h-screen py-24 md:py-36 overflow-hidden transition-colors duration-300 ${
        isDark ? "text-white bg-[#03060E]" : "text-slate-900 bg-[#F7F9FC]"
      }`}
      aria-label="Certifications and Professional Credentials"
    >
      <CosmicVortexCanvas variant="ambient" particleCount={250} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Index Marker */}
        <div
          className={`flex items-center justify-between border-b pb-4 mb-12 transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div
            className={`font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 ${
              isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"
            }`}
          >
            <span>(05)</span>
            <span className={isDark ? "text-white/60" : "text-slate-600"}>VERIFIED CREDENTIALS &amp; RIGOR</span>
          </div>
          <div className={`font-mono text-xs md:text-sm tracking-wider ${isDark ? "text-white/50" : "text-slate-500"}`}>
            11 ACCREDITATIONS
          </div>
        </div>

        {/* ── GIANT HEADLINE ── */}
        <div className="mb-14">
          <h2 className="font-headline uppercase text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] select-none">
            <span className={`block transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"}`}>
              VALIDATED DEFENSE.
            </span>
            <span className="block text-outline">
              AUTHENTIC PROOF.
            </span>
          </h2>
        </div>

        {/* Filter Navigation */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b transition-colors duration-300 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <p
            className={`text-sm font-sans max-w-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Every certification represents verified hands-on coursework, technical lab examinations, and industry-standard security curriculum.
          </p>

          <div
            className={`flex items-center gap-2 p-1 rounded-full border w-fit ${
              isDark ? "bg-black/60 border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            {(["all", "soc", "network", "systems"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? isDark
                      ? "bg-white text-black font-semibold shadow-md shadow-white/20"
                      : "bg-slate-900 text-white font-semibold shadow-md shadow-slate-900/15"
                    : isDark
                    ? "text-white/60 hover:text-white"
                    : "text-slate-600 hover:text-slate-900 font-medium"
                }`}
              >
                {cat === "all" ? "ALL (11)" : cat === "soc" ? "SOC & INTEL" : cat === "network" ? "NETWORKING" : "SYSTEMS"}
              </button>
            ))}
          </div>
        </div>

        {/* ── EDITORIAL CERTIFICATION LIST ── */}
        <div className="space-y-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.name}
              className={`p-5 md:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.04]"
                  : "bg-white border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5 hover:shadow-xl"
              }`}
            >
              {/* Left Details */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                    isDark
                      ? "bg-cyan-950/40 border-cyan-500/30 text-cyan-400"
                      : "bg-cyan-50 border-cyan-300 text-cyan-700"
                  }`}
                >
                  <Award size={22} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`font-headline text-lg md:text-xl uppercase tracking-wider transition-colors ${
                        isDark
                          ? "text-white group-hover:text-cyan-300"
                          : "text-slate-900 group-hover:text-cyan-700 font-semibold"
                      }`}
                    >
                      {cert.name}
                    </span>
                    {cert.verified && (
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-mono ${
                          isDark
                            ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                            : "bg-emerald-50 border-emerald-300 text-emerald-800 font-medium"
                        }`}
                      >
                        <CheckCircle2 size={10} />
                        VERIFIED
                      </span>
                    )}
                  </div>

                  <div
                    className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono ${
                      isDark ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    <span className={`flex items-center gap-1.5 ${isDark ? "text-white/80" : "text-slate-700"}`}>
                      <Building size={12} className={isDark ? "text-cyan-400" : "text-cyan-700"} />
                      {cert.issuer}
                    </span>
                    <span className={`flex items-center gap-1.5 ${isDark ? "text-white/50" : "text-slate-500"}`}>
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                    <span className={isDark ? "text-cyan-400/70" : "text-cyan-700 font-semibold"}>
                      [{cert.categoryLabel}]
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Verification Link Button */}
              <div className="flex items-center gap-3 self-end md:self-center">
                {cert.url && cert.url !== "#" ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-headline tracking-wider text-xs uppercase border transition-all ${
                      isDark
                        ? "bg-white/5 hover:bg-white text-white/90 hover:text-black border-white/15 hover:border-white group-hover:shadow-lg group-hover:shadow-cyan-950/40"
                        : "bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white border-slate-300 hover:border-slate-900 shadow-xs"
                    }`}
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ExternalLink size={12} className="stroke-[2.5]" />
                  </a>
                ) : (
                  <span
                    className={`text-xs font-mono px-3 py-1.5 rounded-full border ${
                      isDark
                        ? "text-white/40 bg-white/[0.02] border-white/5"
                        : "text-slate-500 bg-slate-100 border-slate-200"
                    }`}
                  >
                    ACCREDITED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsShowcase;
