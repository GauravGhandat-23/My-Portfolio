
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="w-full lg:w-1/2">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-semibold mb-6 text-cyber-light">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:gauravghandat12@gmail.com" 
                  className="flex items-center gap-4 text-gray-300 hover:text-cyber-light transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span>gauravghandat12@gmail.com</span>
                </a>
                
                <a 
                  href="https://github.com/GauravGhandat-23" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-gray-300 hover:text-cyber-light transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center">
                    <Github size={18} />
                  </div>
                  <span>github.com/gauravghandat</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-gray-300 hover:text-cyber-light transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-cyber-accent/20 flex items-center justify-center">
                    <Linkedin size={18} />
                  </div>
                  <span>linkedin.com/in/gauravghandat</span>
                </a>
              </div>
              
              <div className="mt-10">
                <p className="text-gray-400 mb-4">I'm currently open to new opportunities and collaborations in the cybersecurity field. Feel free to reach out!</p>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="cyber-card h-full">
              <h3 className="text-2xl font-semibold mb-6 text-cyber-light">Send Me a Message</h3>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light/30 rounded-md focus:outline-none focus:border-cyber-light text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light/30 rounded-md focus:outline-none focus:border-cyber-light text-white"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 bg-cyber-dark border border-cyber-light/30 rounded-md focus:outline-none focus:border-cyber-light text-white resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-cyber-accent hover:bg-cyber-accent/80 text-white rounded-md transition-all duration-300 shadow-lg shadow-cyber-accent/20 mt-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
