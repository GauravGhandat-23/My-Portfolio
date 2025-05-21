
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Phishing Detection System",
    description: "Developed an advanced phishing detection system using machine learning algorithms to identify and flag potentially malicious emails and websites. The system utilizes NLP techniques to analyze content, URLs, and metadata to provide real-time protection against sophisticated phishing attempts.",
    technologies: ["Python", "TensorFlow", "NLP", "Docker", "FastAPI"],
    github: "https://github.com/gauravghandat",
    live: "#",
    image: "/placeholder.svg"
  },
  {
    title: "Advanced Threat Intelligence Platform",
    description: "Created a comprehensive threat intelligence platform that aggregates and analyzes data from multiple sources to identify potential security threats. The platform features automated OSINT gathering, vulnerability scanning, and customizable alert systems.",
    technologies: ["Python", "React", "MongoDB", "ElasticSearch", "AWS"],
    github: "https://github.com/gauravghandat",
    live: "#",
    image: "/placeholder.svg"
  }
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
