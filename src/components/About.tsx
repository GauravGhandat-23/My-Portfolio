
import { Shield, Server, Network, Activity, MapPin, GraduationCap, Briefcase, User } from "lucide-react";

const focusAreas = [
  { icon: <Shield size={16} />, label: "SOC Operations" },
  { icon: <Activity size={16} />, label: "SIEM & Log Analysis" },
  { icon: <Shield size={16} />, label: "Threat Detection" },
  { icon: <Activity size={16} />, label: "Incident Response" },
  { icon: <Server size={16} />, label: "Windows Server" },
  { icon: <Server size={16} />, label: "Linux Administration" },
  { icon: <Network size={16} />, label: "Active Directory" },
  { icon: <Network size={16} />, label: "Networking" },
  { icon: <Shield size={16} />, label: "Security Monitoring" },
  { icon: <Activity size={16} />, label: "Security Automation" },
];

const profileDetails = [
  { icon: <Briefcase size={15} />, label: "Role", value: "SOC Analyst – Level 1" },
  { icon: <Shield size={15} />, label: "Specialization", value: "Blue Team / Defensive Security" },
  { icon: <MapPin size={15} />, label: "Location", value: "Nashik, India" },
  { icon: <Activity size={15} />, label: "Experience", value: "System Administration + Cybersecurity" },
  { icon: <GraduationCap size={15} />, label: "Education", value: "B.E. Computer Engineering" },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative" style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #0D1117 100%)" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <User size={12} /> ABOUT ME
          </div>
          <h2 className="section-title">Cybersecurity <span>Professional</span></h2>
          <div className="section-title-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left: Bio ── */}
          <div className="animate-on-scroll">
            <div className="cyber-card h-full">
              <h3 className="text-lg font-semibold mb-5 text-white">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  I am a cybersecurity professional specializing in <span className="text-cyber-light font-medium">Security Operations</span>, SIEM monitoring, threat detection, incident response, and secure infrastructure administration.
                </p>
                <p>
                  With a solid background in <span className="text-cyber-light font-medium">Windows Server &amp; Linux administration</span>, Active Directory, and enterprise networking, I bridge the gap between system operations and defensive security.
                </p>
                <p>
                  Currently working as a System Administrator at <span className="text-white font-medium">Bits &amp; Bytes Services Pvt. Ltd.</span>, I actively apply security hardening, access control, and ITIL-based incident management in a production environment.
                </p>
                <p>
                  My hands-on experience with <span className="text-cyber-light font-medium">Splunk Enterprise</span>, log analysis, and SOC-oriented projects reflects my commitment to mastering the Blue Team discipline — detect, investigate, and respond.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Core Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span key={area.label} className="cyber-badge flex items-center gap-1.5">
                      <span className="text-cyber-light" aria-hidden="true">{area.icon}</span>
                      {area.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Profile Card ── */}
          <div className="animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <div className="cyber-card h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-5 text-white">Professional Profile</h3>

              {/* Profile Avatar Placeholder */}
              <div className="flex items-center gap-4 mb-6 pb-6"
                style={{ borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))", border: "2px solid rgba(0,212,255,0.2)" }}>
                  🛡️
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Gaurav Uttam Ghandat</div>
                  <div className="text-cyber-light text-sm font-mono">@gauravghandat-soc</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00FF88", boxShadow: "0 0 4px #00FF88" }} />
                    <span className="text-xs" style={{ color: "#00FF88" }}>Open to Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-4 flex-1">
                {profileDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
                      {detail.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{detail.label}</div>
                      <div className="text-white text-sm font-medium mt-0.5">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume CTA */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary w-full justify-center"
                  aria-label="Download Resume PDF"
                >
                  <Shield size={16} />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
