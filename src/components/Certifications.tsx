
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    url: "https://coursera.org/share/f01b9a5dc1a8447f65c18b289515be43"
  },
  {
    name: "MICROSOFT - Introduction to Computers and Operating Systems and Security",
    issuer: "Coursera",
    date: "2024",
    url: "https://coursera.org/share/c9d8678e0d942b83c8f201672bef1f20"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    url: "https://www.credly.com/badges/d1a2f7f7-d5c8-47dc-a4ce-aee6588ff9f1/public_url"
  },
  {
    name: "Cyber Security and Ethical Hacking Internship Program",
    issuer: "Edureka",
    date: "2024",
    url: "https://www.edureka.co/certificates/mycertificate/9848229319fff4688c4b5e98c01c9eae"
  },
  {
    name: "Linux Fundamentals Certification Training ",
    issuer: "Edureka",
    date: "2024",
    url: "https://www.edureka.co/lms/certificate/d02a917382ff6218c3246ac7507b697a"
  },
  {
    name: "Introduction to Network Analysis",
    issuer: "Security Blue Team",
    date: "2024",
    url: "https://elearning.securityblue.team/home/courses/free-courses/introduction-to-network-analysis#content"
  },
  {
    name: "Foundation Level Threat intelligence Analyst",
    issuer: "arcX",
    date: "2025",
    url: "https://arcx.io/verify-certificate?id=e5489e828df82604ca906bd9ebadf7f85ce7a2a5&k=350ac886ebc54bc8b92df70a00259d0a"
  },
  {
    name: "Cyber Security Associate Certification Programme ",
    issuer: "Reliance Foundation",
    date: "2025",
    url: "https://rfskillingacademy.com/certificate/group/388/109181"
  },
  {
    name: "Cybersecurity",
    issuer: "Tech Mahindra Foundation",
    date: "2025",
    url: "#"
  },
  {
    name: "Network Security",
    issuer: "Great Learning",
    date: "2024",
    url: "https://www.mygreatlearning.com/certificate/POWMXJMJ"
  },
  {
    name: "TCS Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/tata/cybersecurity-sbda"
  },
  {
    name: "PwC Switzerland's Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/pwc-ch/cybersecurity-9iwh"
  },
  {
    name: "Mastercard's Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye"
  },
  {
    name: "JPMorgan Chase & Co.'s Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/jpmorgan/cybersecurity-0acj"
  },
  {
    name: "Datacom's Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/datacom/cybersecurity-zm6d"
  },
  {
    name: "AIG's Shields Up: Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/aig/cybersecurity-ku1i"
  },
  {
    name: "Telstra's Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/telstra/cybersecurity-cyyo"
  },
  {
    name: "Commonwealth Bank's Introduction to Cybersecurity Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/commonwealth-bank/intro-cybersecurity-rdxl"
  },
  {
    name: "ANZ Australia's Cyber Security Management Job Simulation",
    issuer: "Forage",
    date: "2024",
    url: "https://www.theforage.com/simulations/anz/cybersecurity-management-szf9"
  },
  {
    name: "Verizon Cloud Platform Job Simulation",
    issuer: "Forage",
    date: "2025",
    url: "https://www.theforage.com/achievements"
  },
  {
    name: "Deloitte Australia's Cyber Virtual Experience Program",
    issuer: "Forage",
    date: "2025",
    url: "https://www.theforage.com/simulations/deloitte-au/cyber-c1e3"
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
