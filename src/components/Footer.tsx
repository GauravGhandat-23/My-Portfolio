
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-cyber-darker border-t border-cyber-light/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">
              Gaurav Ghandat
            </a>
            <p className="text-gray-500 mt-2">Aspiring Cybersecurity Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/GauravGhandat-23" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center text-gray-300 hover:text-cyber-light hover:bg-cyber-accent/40 transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center text-gray-300 hover:text-cyber-light hover:bg-cyber-accent/40 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:gauravghandat12@gmail.com" 
              className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center text-gray-300 hover:text-cyber-light hover:bg-cyber-accent/40 transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cyber-light/10 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Gaurav Ghandat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
