import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface CertItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  url: string;
  verified: boolean;
}

export const LuxuryCertifications = () => {
  const certs: CertItem[] = [
    {
      id: "01",
      name: "Google Professional Cybersecurity Certificate",
      issuer: "Google / Coursera",
      date: "2024",
      category: "Security Operations",
      url: "https://coursera.org/share/f01b9a5dc1a8447f65c18b289515be43",
      verified: true,
    },
    {
      id: "02",
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "Networking & Security",
      url: "https://www.credly.com/badges/d1a2f7f7-d5c8-47dc-a4ce-aee6588ff9f1/public_url",
      verified: true,
    },
    {
      id: "03",
      name: "Foundation Level Threat Intelligence Analyst",
      issuer: "arcX",
      date: "2025",
      category: "Threat Intelligence",
      url: "https://arcx.io/verify-certificate?id=e5489e828df82604ca906bd9ebadf7f85ce7a2a5&k=350ac886ebc54bc8b92df70a00259d0a",
      verified: true,
    },
    {
      id: "04",
      name: "Introduction to Network Analysis",
      issuer: "Security Blue Team",
      date: "2024",
      category: "Traffic Analysis",
      url: "https://elearning.securityblue.team/home/courses/free-courses/introduction-to-network-analysis#content",
      verified: true,
    },
    {
      id: "05",
      name: "Certified AppSec Practitioner (CAP)",
      issuer: "The SecOps Group",
      date: "2024",
      category: "Application Security",
      url: "#",
      verified: true,
    },
    {
      id: "06",
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "Network Fundamentals",
      url: "https://www.credly.com/badges/51fa6a8b-1e96-48eb-b1fb-421f148404a3/public_url",
      verified: true,
    },
    {
      id: "07",
      name: "Hardware and Operating Systems",
      issuer: "IBM / Coursera",
      date: "2024",
      category: "Systems Administration",
      url: "https://coursera.org/share/76865aa7054fba6a877ca6b864939766",
      verified: true,
    },
    {
      id: "08",
      name: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "OS Fundamentals",
      url: "https://www.credly.com/badges/bc82a637-a859-4fa2-bc40-272da4fe4e54/public_url",
      verified: true,
    },
    {
      id: "09",
      name: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco Networking Academy",
      date: "2024",
      category: "SOC Specialization",
      url: "https://www.credly.com/badges/b5ecce27-4a11-4aa8-963d-4c315eb0c354/public_url",
      verified: true,
    },
    {
      id: "10",
      name: "Cybersecurity Internship Certificate",
      issuer: "Edureka",
      date: "2024",
      category: "Hands-on Practice",
      url: "#",
      verified: true,
    },
    {
      id: "11",
      name: "TCS Cybersecurity Analyst Job Simulation",
      issuer: "Tata Consultancy Services / Forage",
      date: "2024",
      category: "Industry SOC Simulation",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata%20Consultancy%20Services/m7WCSm6Wv5Yqvgw4g_Tata%20Consultancy%20Services_gauravghandat23@gmail.com_completion_certificate.pdf",
      verified: true,
    },
  ];

  return (
    <section
      id="certifications"
      className="py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-subtle)]"
      aria-label="Professional Development & Certifications"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-[1px] bg-[#D9381E]" />
            <span className="luxury-section-label !mb-0">
              04 / VALIDATED COMPETENCIES
            </span>
          </div>
          <h2 className="luxury-section-title mt-3">
            PROFESSIONAL DEVELOPMENT
          </h2>
        </div>
        <p className="text-xs md:text-sm font-sans text-[var(--text-secondary)] max-w-md leading-relaxed">
          11 industry-standard accreditations verifying mastery in security operations, threat intelligence, traffic analysis, and systems governance.
        </p>
      </div>

      {/* ── Minimalist Horizontal Editorial Rows ── */}
      <div className="border-t border-[var(--border-subtle)]">
        {certs.map((c) => (
          <div
            key={c.name}
            className="py-6 md:py-7 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-[var(--bg-surface)] px-2 md:px-4 transition-colors duration-200"
          >
            {/* Left Column: Number, Title, Category */}
            <div className="flex items-start md:items-center gap-6 md:gap-10">
              <span className="font-mono text-xs text-[var(--text-secondary)] tracking-widest pt-0.5 md:pt-0">
                {c.id}
              </span>
              <div>
                <h3 className="font-headline text-lg sm:text-xl uppercase tracking-tight text-[var(--text-primary)] font-light group-hover:translate-x-1 transition-transform duration-200">
                  {c.name}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-sans text-[var(--text-secondary)]">
                    {c.issuer}
                  </span>
                  <span className="text-[10px] text-[var(--border-subtle)]">/</span>
                  <span className="text-[11px] font-mono tracking-wider text-[var(--text-secondary)]">
                    {c.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Year + Verification Link */}
            <div className="flex items-center gap-8 self-end md:self-center pl-16 md:pl-0">
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                {c.date}
              </span>

              {c.url && c.url !== "#" ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-link group/link"
                >
                  <span>VERIFY</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : (
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--text-secondary)]">
                  VERIFIED
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryCertifications;

