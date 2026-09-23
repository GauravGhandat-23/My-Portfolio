
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SOCCommandCenter from "@/components/SOCCommandCenter";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import MitreAttackMap from "@/components/MitreAttackMap";
import IncidentTimeline from "@/components/IncidentTimeline";
import Certifications from "@/components/Certifications";
import SecurityLab from "@/components/SecurityLab";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import SecurityToolkit from "@/components/SecurityToolkit";
import NetworkVisualization from "@/components/NetworkVisualization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    document.title = "Gaurav Ghandat | SOC Analyst | Cybersecurity & Blue Team";

    // Scroll-reveal animation using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "#0A0F1E" }}
    >
      {/* Skip to main content — Accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm"
        style={{ background: "#00D4FF", color: "#060B14" }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <SOCCommandCenter />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <CaseStudies />
        <MitreAttackMap />
        <IncidentTimeline />
        <Certifications />
        <SecurityLab />
        <InteractiveTerminal />
        <SecurityToolkit />
        <NetworkVisualization />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
