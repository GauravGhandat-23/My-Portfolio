import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "", showLabels = false }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to Futuristic Light mode" : "Switch to Dark Cyber mode"}
      title={isDark ? "Switch to Light Cyber Mode" : "Switch to Dark Cyber Mode"}
      className={`group relative flex items-center p-1 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 select-none ${
        isDark
          ? "bg-black/80 border border-white/15 hover:border-cyan-400/50 shadow-lg shadow-black/40"
          : "bg-white/90 border border-slate-200 hover:border-cyan-500/50 shadow-md shadow-slate-900/5"
      } ${className}`}
    >
      {/* Sliding background highlight indicator */}
      <div className="relative flex items-center gap-1">
        {/* Dark Slot (Moon) */}
        <div
          className={`relative z-10 flex items-center justify-center gap-1.5 px-2 py-1 rounded-full transition-colors duration-200 ${
            isDark ? "text-cyan-300 font-bold" : "text-slate-400 hover:text-slate-600"
          }`}
        >
          <Moon
            size={13}
            className={`transition-transform duration-300 ${
              isDark ? "scale-110 drop-shadow-[0_0_6px_rgba(0,229,255,0.8)]" : "scale-95"
            }`}
          />
          {showLabels && <span className="text-[10px] font-mono tracking-wider">DARK</span>}
        </div>

        {/* Light Slot (Sun) */}
        <div
          className={`relative z-10 flex items-center justify-center gap-1.5 px-2 py-1 rounded-full transition-colors duration-200 ${
            !isDark ? "text-amber-500 font-bold" : "text-white/40 hover:text-white/70"
          }`}
        >
          <Sun
            size={13}
            className={`transition-transform duration-300 ${
              !isDark ? "scale-110 rotate-45 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" : "scale-95"
            }`}
          />
          {showLabels && <span className="text-[10px] font-mono tracking-wider">LIGHT</span>}
        </div>

        {/* Animated gliding pill */}
        <motion.div
          layout
          className={`absolute top-0 bottom-0 rounded-full ${
            isDark
              ? "left-0 w-1/2 bg-cyan-950/60 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,229,255,0.25)]"
              : "right-0 w-1/2 bg-amber-50 border border-amber-300/80 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          }`}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

