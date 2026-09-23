
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Google Professional Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    category: "General Cybersecurity",
    categoryColor: "#00D4FF",
    url: "https://coursera.org/share/f01b9a5dc1a8447f65c18b289515be43",
    verified: true,
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    category: "Networking / Security",
    categoryColor: "#00B4D8",
    url: "https://www.credly.com/badges/d1a2f7f7-d5c8-47dc-a4ce-aee6588ff9f1/public_url",
    verified: true,
  },
  {
    name: "Introduction to Network Analysis",
    issuer: "Security Blue Team",
    date: "2024",
    category: "Network Analysis",
    categoryColor: "#00FF88",
    url: "https://elearning.securityblue.team/home/courses/free-courses/introduction-to-network-analysis#content",
    verified: true,
  },
  {
    name: "Foundation Level Threat Intelligence Analyst",
    issuer: "arcX",
    date: "2025",
    category: "Threat Intelligence",
    categoryColor: "#8B5CF6",
    url: "https://arcx.io/verify-certificate?id=e5489e828df82604ca906bd9ebadf7f85ce7a2a5&k=350ac886ebc54bc8b92df70a00259d0a",
    verified: true,
  },
  {
    name: "Cyber Security Associate Certification Programme",
    issuer: "Reliance Foundation",
    date: "2025",
    category: "General Cybersecurity",
    categoryColor: "#00D4FF",
    url: "https://rfskillingacademy.com/certificate/group/388/109181",
    verified: true,
  },
  {
    name: "Cybersecurity Programme",
    issuer: "Tech Mahindra Foundation",
    date: "2025",
    category: "General Cybersecurity",
    categoryColor: "#00D4FF",
    url: "#",
    verified: false,
  },
  {
    name: "Linux Fundamentals Certification Training",
    issuer: "Edureka",
    date: "2024",
    category: "Linux / Systems",
    categoryColor: "#FF8C00",
    url: "https://www.edureka.co/lms/certificate/d02a917382ff6218c3246ac7507b697a",
    verified: true,
  },
  {
    name: "Cyber Security & Ethical Hacking Internship Program",
    issuer: "Edureka",
    date: "2024",
    category: "Ethical Hacking",
    categoryColor: "#FF3366",
    url: "https://www.edureka.co/certificates/mycertificate/9848229319fff4688c4b5e98c01c9eae",
    verified: true,
  },
  {
    name: "Microsoft — Intro to Computers, OS & Security",
    issuer: "Microsoft / Coursera",
    date: "2024",
    category: "OS & Systems",
    categoryColor: "#00B4D8",
    url: "https://coursera.org/share/c9d8678e0d942b83c8f201672bef1f20",
    verified: true,
  },
  {
    name: "Network Security",
    issuer: "Great Learning",
    date: "2024",
    category: "Networking / Security",
    categoryColor: "#00B4D8",
    url: "https://www.mygreatlearning.com/certificate/POWMXJMJ",
    verified: true,
  },
  {
    name: "TCS Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/tata/cybersecurity-sbda",
    verified: true,
  },
  {
    name: "PwC Switzerland Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/pwc-ch/cybersecurity-9iwh",
    verified: true,
  },
  {
    name: "Mastercard Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye",
    verified: true,
  },
  {
    name: "JPMorgan Chase Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/jpmorgan/cybersecurity-0acj",
    verified: true,
  },
  {
    name: "Datacom Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/datacom/cybersecurity-zm6d",
    verified: true,
  },
  {
    name: "AIG Shields Up: Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/aig/cybersecurity-ku1i",
    verified: true,
  },
  {
    name: "Telstra Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/telstra/cybersecurity-cyyo",
    verified: true,
  },
  {
    name: "Commonwealth Bank Intro to Cybersecurity Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/commonwealth-bank/intro-cybersecurity-rdxl",
    verified: true,
  },
  {
    name: "ANZ Australia Cyber Security Management Simulation",
    issuer: "Forage",
    date: "2024",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/anz/cybersecurity-management-szf9",
    verified: true,
  },
  {
    name: "Deloitte Australia Cyber Virtual Experience",
    issuer: "Forage",
    date: "2025",
    category: "Industry Simulation",
    categoryColor: "#8B5CF6",
    url: "https://www.theforage.com/simulations/deloitte-au/cyber-c1e3",
    verified: true,
  },
  {
    name: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
    date: "2025",
    category: "Cloud / Platform",
    categoryColor: "#FF8C00",
    url: "https://www.theforage.com/achievements",
    verified: true,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #060B14 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Award size={12} /> CERTIFICATIONS
          </div>
          <h2 className="section-title">Certification <span>Wall</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            {certifications.length} certifications across cybersecurity, networking, ethical hacking, and industry simulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cyber-card group animate-on-scroll relative"
              style={{ animationDelay: `${(index % 6) * 60}ms` }}
            >
              {/* Category Label */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-0.5 rounded font-mono"
                  style={{
                    background: `${cert.categoryColor}10`,
                    border: `1px solid ${cert.categoryColor}25`,
                    color: cert.categoryColor,
                  }}>
                  {cert.category}
                </span>
                <span className="text-xs text-gray-600 font-mono">{cert.date}</span>
              </div>

              {/* Content */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cert.categoryColor}10`, border: `1px solid ${cert.categoryColor}25`, color: cert.categoryColor }}>
                  <Award size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-cyber-light transition-colors mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              </div>

              {/* Verify Button */}
              {cert.verified && cert.url !== "#" && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-xs text-gray-500 hover:text-cyber-light transition-colors"
                  aria-label={`Verify ${cert.name} certificate`}
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink size={11} />
                  Verify Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
