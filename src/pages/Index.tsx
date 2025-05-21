
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Gaurav Ghandat | Cybersecurity Engineer";
    
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };
    
    window.addEventListener("scroll", animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
    
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
