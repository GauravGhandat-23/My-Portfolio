
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
                My journey in cybersecurity began with a fascination for how systems could be protected against malicious actors. This led me to explore ethical hacking, penetration testing, and eventually, the application of artificial intelligence in threat detection.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I believe that the future of cybersecurity lies at the intersection of human expertise and machine intelligence. My goal is to develop systems that can adapt to new threats in real-time, providing proactive rather than reactive security.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or researching security vulnerabilities, I enjoy participating in CTF competitions, contributing to open-source security projects, and mentoring aspiring security professionals.
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
                    <span className="text-gray-300">Developing AI models for anomaly detection in network traffic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Creating machine learning algorithms to identify phishing attempts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Automating threat intelligence gathering and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyber-accent rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">Implementing secure coding practices in software development</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10">
                <a 
                  href="#" 
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
