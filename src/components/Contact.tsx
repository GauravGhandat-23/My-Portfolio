
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "gauravghandat23@gmail.com",
    href: "mailto:gauravghandat23@gmail.com",
    color: "#00D4FF",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/GauravGhandat-23",
    href: "https://github.com/GauravGhandat-23",
    color: "#8B5CF6",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/gaurav-ghandat-68a5a22b4",
    href: "https://www.linkedin.com/in/gaurav-ghandat-68a5a22b4/",
    color: "#00B4D8",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Nashik, Maharashtra, India",
    href: null,
    color: "#FF8C00",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Frontend-only: open default email client with pre-filled message
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Gaurav,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
    );
    window.location.href = `mailto:gauravghandat23@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060B14 0%, #0A0F1E 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Mail size={12} /> CONTACT
          </div>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="section-title-line" />
          <p className="text-gray-500 text-sm mt-4">
            Open to cybersecurity opportunities, SOC analyst roles, and professional collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: Contact Info ── */}
          <div className="animate-on-scroll">
            <div className="cyber-card h-full">
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Get In Touch</h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: `${link.color}10`, border: `1px solid ${link.color}25`, color: link.color }}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">{link.label}</div>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto") ? undefined : "_blank"}
                          rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                          aria-label={`${link.label}: ${link.value}`}
                        >
                          {link.value}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-300">{link.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl"
                style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.15)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#00FF88", boxShadow: "0 0 6px #00FF88", animation: "pulse 2s infinite" }} />
                  <span className="text-sm font-medium" style={{ color: "#00FF88" }}>Open to Opportunities</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Currently open to SOC Analyst positions, Blue Team roles, and cybersecurity infrastructure opportunities.
                  I respond to all professional inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <div className="cyber-card">
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="mb-4" style={{ color: "#00FF88" }} />
                  <h4 className="text-white font-bold mb-2">Opening Email Client...</h4>
                  <p className="text-gray-400 text-sm">Your default email app will open with the message pre-filled.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-gray-400 mb-1.5 font-mono uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(6,11,20,0.8)",
                        border: errors.name ? "1px solid #FF3366" : "1px solid rgba(0,212,255,0.2)",
                      }}
                      {...register("name")}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs mt-1" style={{ color: "#FF3366" }} role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-gray-400 mb-1.5 font-mono uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(6,11,20,0.8)",
                        border: errors.email ? "1px solid #FF3366" : "1px solid rgba(0,212,255,0.2)",
                      }}
                      {...register("email")}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs mt-1" style={{ color: "#FF3366" }} role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-gray-400 mb-1.5 font-mono uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="SOC Analyst Opportunity / Collaboration"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(6,11,20,0.8)",
                        border: errors.subject ? "1px solid #FF3366" : "1px solid rgba(0,212,255,0.2)",
                      }}
                      {...register("subject")}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs mt-1" style={{ color: "#FF3366" }} role="alert">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-gray-400 mb-1.5 font-mono uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 transition-all duration-200 outline-none resize-none"
                      style={{
                        background: "rgba(6,11,20,0.8)",
                        border: errors.message ? "1px solid #FF3366" : "1px solid rgba(0,212,255,0.2)",
                      }}
                      {...register("message")}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs mt-1" style={{ color: "#FF3366" }} role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Opening Email Client..." : "Send Message"}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    * Opens your default email client. No data is stored.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
