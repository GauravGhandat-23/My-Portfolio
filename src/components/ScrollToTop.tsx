
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 p-3 bg-cyber-accent rounded-full shadow-lg shadow-cyber-accent/20 transition-all duration-300 hover:bg-cyber-accent/80 z-50",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="text-white" size={20} />
    </button>
  );
};

export default ScrollToTop;
