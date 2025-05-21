
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "2024",
    url: "#"
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    url: "#"
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2023",
    url: "#"
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    url: "#"
  },
  {
    name: "AI Fundamentals for Cybersecurity",
    issuer: "Edureka",
    date: "2023",
    url: "#"
  },
  {
    name: "Python for Security Professionals",
    issuer: "Coursera",
    date: "2022",
    url: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card group hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Award className="text-cyber-accent group-hover:text-cyber-light transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyber-light transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-cyber-muted mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
