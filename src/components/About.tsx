
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-1/2">
            <div className="cyber-card h-full">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Gaurav Ghandat, an ambitious cybersecurity enthusiast with a passion for AI-driven security solutions. Currently pursuing my Bachelor of Engineering, I focus on developing innovative approaches to combat evolving cyber threats.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I am committed to mastering the art of protecting digital environments. My academic journey is centered on understanding both the technical and security aspects of computing systems.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I believe that the future of cybersecurity lies at the intersection of human expertise and machine intelligence. My goal is to develop systems that can adapt to new threats in real-time, providing proactive rather than reactive security.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a solid foundation in computer engineering, I am uniquely positioned to tackle cybersecurity challenges from both a software and hardware perspective. I am constantly learning and applying new skills, from identifying system vulnerabilities to defending against evolving cyber threats.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="cyber-card h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyber-light">My Focus Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Ethical Hacking and Penetration Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Cybersecurity Strategies and Network Defense</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Vulnerability Assessment and Incident Response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Secure Software Development and Cryptography</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10">
                <a 
                  href="/resume.pdf"  // Ensure this file exists in your public folder
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-secondary hover:bg-cyber-secondary/80 text-white rounded-md transition-all duration-300 shadow-lg shadow-cyber-secondary/20"
                >
                  <FileText size={18} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
