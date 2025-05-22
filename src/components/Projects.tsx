
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Phishing Detection System",
    description: "Developed an advanced phishing detection system using machine learning algorithms to identify and flag potentially malicious emails and websites. The system utilizes NLP techniques to analyze content, URLs, and metadata to provide real-time protection against sophisticated phishing attempts.",
    technologies: ["Python", "Streamlit", "scikit-learn", "pandas", "nltk"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Phishing-Detection-System",
    live: "https://ai-powered-phishing-detection-system-ples7i6bq2tzkaguiykzzt.streamlit.app/",
    image: "/project1.JPEG"
  },
  {
    title: "Advanced Threat Intelligence Platform",
    description: "The Advanced Threat Intelligence Platform is an all-in-one solution designed to analyze, classify, and visualize cybersecurity threats in real-time. By leveraging machine learning models and live threat feeds, the platform offers powerful insights to detect malicious activities and assess threats.",
    technologies: ["Python", "Streamlit", "pandas", "matplotlib", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/Advanced-Threat-Intelligence-Platform",
    live: "https://advanced-threat-intelligence-platform-mk7obgez2n4p59zcvziiso.streamlit.app/",
    image: "/project2.png"
  },
  {
    title: "AI-Powered Password Manager",
    description: "The AI-Powered Password Manager is a secure and user-friendly application designed to store, manage, and retrieve passwords for various services. This app leverages the power of Fernet encryption to ensure that sensitive data, such as passwords, remains safe and encrypted at all times.",
    technologies: ["Python","Streamlit","cryptography","sqlite3"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Password-Manager",
    live: "https://ai-powered-password-manager-nxmseazjnqwkgmwj3mxtht.streamlit.app/",
    image: "/project3.png"
  },
  {
    title: "AI-Powered Password Strength Checker",
    description: "The AI-powered Password Strength Checker is a web application designed to help users evaluate the strength of their passwords. Built using Streamlit and Python, this tool assesses passwords based on several important security factors such as length, complexity (uppercase, lowercase, digits, and special characters), and entropy (randomness).",
    technologies: ["Python", "Streamlit", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-powered-Password-Strength-Checker",
    live: "https://ai-powered-password-strength-checker-cbpcstehlbpiqkgldwpeed.streamlit.app/",
    image: "/project4.png"
  },
  {
    title: "AI-Powered Malware Traffic Analysis Dashboard",
    description: "The AI-powered dashboard for analyzing network traffic and detecting malware. Upload PCAP or CSV files, train a machine learning model (Random Forest, Logistic Regression, or SVM), and visualize classification results. Save models and preprocessing artifacts for later use.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "PyShark", "Pandas", "Matplotlib"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Malware-Traffic-Analysis-Dashboard",
    live: "https://ai-powered-malware-traffic-analysis-dashboard-5unhlmqws8fkwirx.streamlit.app/",
    image: "/project5.png"
  },
  {
    title: "SMS Spam Detection System using NLP",
    description: "The SMS Spam Detection System using NLP is a machine learning-based application designed to classify SMS messages as either spam or ham (non-spam). Built using Natural Language Processing (NLP) techniques, this project uses a Naive Bayes classifier to analyze the text of messages and identify whether they are spam or legitimate.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "numpy", "Pandas", "nltk", "matplotlib", "seaborn"],
    github: "https://github.com/GauravGhandat-23/SMS-Spam-Detection-System-using-NLP",
    live: "https://sms-spam-detection-system-using-nlp-gtuczas9epkwavddqnjx8s.streamlit.app/",
    image: "/project6.png"
  },
  {
    title: "AI-Powered Threat Hunting and Vulnerability Assessment Dashboard",
    description: "The AI-Powered Threat Hunting and Vulnerability Assessment Dashboard: This app provides real-time threat detection, vulnerability scanning, and log analysis. It uses machine learning for anomaly detection in network traffic, displays vulnerabilities from JSON files, and offers log file analysis with visualizations and advanced log generation.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "numpy", "Pandas", "wordcloud", "matplotlib", "seaborn", ],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Threat-Hunting-and-Vulnerability-Assessment-Dashboard",
    live: "https://ai-powered-threat-hunting-and-vulnerability-assessment-dashboa.streamlit.app/",
    image: "/project7.png"
  },
  {
    title: "AI-Powered Secure Coding Practices Analyzer",
    description: "The The AI-Powered Secure Coding Practices Analyzer is a tool designed to help developers identify and resolve common vulnerabilities in their source code. By leveraging language-specific detection rules, the tool scans code for high-priority security issues such as SQL Injection, Cross-Site Scripting (XSS), Command Injection, and Insecure API Usage.",
    technologies: ["Python", "Streamlit", "fpdf", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Secure-Coding-Practices-Analyzer",
    live: "https://ai-powered-secure-coding-practices-analyzer-d9gda3rgrdxfnsijkd.streamlit.app/",
    image: "/project8.png"
  },
  {
    title: "AI-Powered Zero-Trust Access Control",
    description: "The AI-Powered Zero-Trust Access Control leverages machine learning to assess user trust in real time based on factors like device, location, activity, and risk score. Built with Streamlit, the system predicts trustworthiness and enables adaptive security policies, ensuring continuous protection through a Zero-Trust model.",
    technologies: ["Python", "Streamlit", "python-dotenv", "Groq API", "pandas", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Zero-Trust-Access-Control",
    live: "https://ai-powered-zero-trust-access-control-jkduzc6ennjgf98hdyr44y.streamlit.app/",
    image: "/project9.png"
  },
  {
    title: "Quantum-Resistant AI-Powered Cybersecurity",
    description: "This project is an AI-powered cybersecurity tool that utilizes Groq AI to analyze cybersecurity threats and provides post-quantum encryption for enhanced security.",
    technologies: ["Python", "Streamlit", "json", "Groq API",],
    github: "https://github.com/GauravGhandat-23/Quantum-Resistant-AI-Powered-Cybersecurity",
    live: "https://quantum-resistant-ai-powered-cybersecurity-9hos7tozfxhke8sglct.streamlit.app/",
    image: "/project10.png"
  },
  {
    title: "AI-Powered Intrusion Detection System (IDS)",
    description: "AI-Powered Intrusion Detection System (IDS) is an advanced threat detection tool that leverages Machine Learning (ML) and the Groq API to analyze network traffic in real-time, identifying suspicious activities with high accuracy.",
    technologies: ["Python", "Streamlit", "Groq API", "pandas", "scikit-learn"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Intrusion-Detection-System",
    live: "https://ai-powered-intrusion-detection-system-fu9hleq57yva3bqcxxr2hb.streamlit.app/",
    image: "/project11.png"
  },
  {
    title: "AI-Powered Cybersecurity Threat Detection System",
    description: "This project is an AI-powered cybersecurity tool that analyzes text-based threats such as phishing emails, malicious network logs, and insider threats. It leverages the Groq API with the qwen-2.5-32b model and is built using Python and Streamlit for real-time security insights.",
    technologies: ["Python", "Streamlit", "Groq API", "pandas", "json"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Cybersecurity-Threat-Detection-System",
    live: "https://ai-powered-cybersecurity-threat-detection-system-bmnk8azbop2jd.streamlit.app/",
    image: "/project12.png"
  },
  {
    title: "AI-Powered Honeypot",
    description: "AI-Powered Honeypot , a cutting-edge cybersecurity tool designed to detect and analyze suspicious login attempts using artificial intelligence. This honeypot leverages the power of Streamlit for the frontend and Groq's AI models for real-time threat analysis.",
    technologies: ["Python", "Streamlit", "Groq API"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Honeypot",
    live: "https://ai-powered-honeypot-rcepzhgotza5t5ruqnejz7.streamlit.app/",
    image: "/project13.png"
  },
  {
    title: "AI-Powered Log Anomaly Detector ",
    description: "Detects suspicious patterns in system logs using AI and NLP via the Groq API .",
    technologies: ["Python", "Streamlit", "Groq API", "argparse"],
    github: "https://github.com/GauravGhandat-23/AI-Powered-Log-Anomaly-Detector",
    image: "/project14.png"
  },
  {
    title: "SECURE DATA HIDING IN IMAGES USING STEGANOGRAPHY",
    description: "The Image-Based Steganography Tool is a Python-powered application that enables users to securely hide messages within images using AES encryption and LSB (Least Significant Bit) steganography. The tool provides both encoding and decoding functionality through an intuitive Streamlit-based UI.",
    technologies: ["Python", "Streamlit", "numpy", "opencv-python-headless", "pycryptodome"],
    github: "https://github.com/GauravGhandat-23/ACITE-PROJECT-Steganography",
    live: "https://steganography-7dvxmx9kaewhhsh7c3aayn.streamlit.app/",
    image: "/project15.png"
  },


];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card group">
              <div className="aspect-video mb-6 overflow-hidden rounded-md border border-cyber-light/20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-cyber-light">{project.title}</h3>
              
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="cyber-badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-darker border border-cyber-light/30 hover:border-cyber-light/60 text-white rounded-md transition-all duration-300"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-accent/20 hover:bg-cyber-accent/40 border border-cyber-light/30 text-white rounded-md transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
