
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-cyber-darker overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-cyber-light/5 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-cyber-secondary/5 -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-4 inline-block py-1 px-3 bg-cyber-accent/20 rounded-full border border-cyber-light/30">
            <span className="text-sm text-cyber-light animate-pulse inline-flex items-center">
              <span className="w-2 h-2 bg-cyber-light rounded-full mr-2"></span>
              Currently Developing Best AI Powered Cyber security Tools and Projects
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-gradient">Gaurav Ghandat</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-cyber-muted mb-6">
            Aspiring Cybersecurity Engineer | AI-Driven Cybersecurity Innovator |Aspiring Ethical Hacker
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-lg">
            Passionate about developing AI-driven cybersecurity solutions to combat emerging threats. 
            Constantly learning and adapting to stay ahead in the evolving security landscape.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-cyber-accent hover:bg-cyber-accent/80 text-white rounded-md transition-all duration-300 shadow-lg shadow-cyber-accent/20">
              View My Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-cyber-light/30 hover:border-cyber-light/60 text-white rounded-md transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Animated Circle */}
            <div className="absolute inset-0 border-2 border-cyber-light/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-cyber-accent/20 rounded-full animate-spin-slow animation-delay-2000 animate-reverse"></div>
            <div className="w-full h-full bg-cyber-darker rounded-full overflow-hidden cyber-border cyber-glow flex items-center justify-center">
              {/* Replace with actual image when available */}
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyber-light animate-bounce w-8 h-8"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
