import { useState } from "react";
import { X, Shield, Activity, Terminal, Award, Network, ChevronRight } from "lucide-react";
import SOCCommandCenter from "./SOCCommandCenter";
import MitreAttackMap from "./MitreAttackMap";
import IncidentTimeline from "./IncidentTimeline";
import InteractiveTerminal from "./InteractiveTerminal";
import Certifications from "./Certifications";
import SecurityLab from "./SecurityLab";

interface SOCCommandHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SOCCommandHubModal = ({ isOpen, onClose }: SOCCommandHubModalProps) => {
  const [activeTab, setActiveTab] = useState<"soc" | "mitre" | "incident" | "terminal" | "certifications" | "lab">("soc");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl"
      role="dialog"
      aria-modal="true"
      aria-label="SOC Command Hub"
    >
      <div className="w-full max-w-7xl h-[92vh] rounded-3xl bg-[#070D19] border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <Shield size={18} />
            </div>
            <div>
              <h3 className="font-headline text-xl text-white uppercase tracking-wider">
                GAURAV GHANDAT // SOC COMMAND HUB
              </h3>
              <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">
                DEFENSIVE OPERATIONS · LIVE LAB ENVIRONMENT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm"
              aria-label="Close SOC Command Hub"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-6 py-2.5 bg-black/60 border-b border-white/10 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {[
            { id: "soc", label: "SOC CENTER", icon: <Activity size={14} /> },
            { id: "mitre", label: "MITRE ATT&CK", icon: <Shield size={14} /> },
            { id: "incident", label: "INCIDENT TIMELINE", icon: <Activity size={14} /> },
            { id: "terminal", label: "INTERACTIVE TERMINAL", icon: <Terminal size={14} /> },
            { id: "lab", label: "SECURITY LAB", icon: <Network size={14} /> },
            { id: "certifications", label: "CERTIFICATIONS", icon: <Award size={14} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/30"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#070D19]">
          {activeTab === "soc" && <SOCCommandCenter />}
          {activeTab === "mitre" && <MitreAttackMap />}
          {activeTab === "incident" && <IncidentTimeline />}
          {activeTab === "terminal" && <InteractiveTerminal />}
          {activeTab === "lab" && <SecurityLab />}
          {activeTab === "certifications" && <Certifications />}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-white/10 bg-black/50 flex items-center justify-between text-[11px] font-mono text-white/50">
          <span>STATUS: ONLINE &amp; SECURED</span>
          <span>LOCATION: NASHIK, MH, INDIA</span>
        </div>

      </div>
    </div>
  );
};

export default SOCCommandHubModal;

