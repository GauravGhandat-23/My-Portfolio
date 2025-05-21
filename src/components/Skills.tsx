
import { Code, Shield, Network, Database, Terminal, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="text-cyber-light" size={28} />,
    skills: ["Python", "SQL", "JavaScript", "Bash Scripting", "PowerShell"],
  },
  {
    title: "Cybersecurity Tools",
    icon: <Shield className="text-cyber-light" size={28} />,
    skills: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "Snort"],
  },
  {
    title: "Networking & Security",
    icon: <Network className="text-cyber-light" size={28} />,
    skills: ["Ethical Hacking", "OSINT", "Cryptography", "Network Security", "Risk Assessment", "Vulnerability Management"],
  },
  {
    title: "OS & Tools",
    icon: <Terminal className="text-cyber-light" size={28} />,
    skills: ["Linux", "Windows", "Git", "Docker", "AWS", "AI/ML Tools"],
  },
  {
    title: "Databases",
    icon: <Database className="text-cyber-light" size={28} />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "ElasticSearch"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="text-cyber-light" size={28} />,
    skills: ["Problem-Solving", "Teamwork", "Communication", "Continuous Learning", "Analytical Thinking"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card h-full">
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-cyber-light">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="cyber-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
