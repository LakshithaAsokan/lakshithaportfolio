import { useState, type FormEvent } from "react";
import { Reveal } from "../Reveal";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../SocialIcons";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Name required (max 100)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255)
      e.email = "Valid email required";
    if (!form.message.trim() || form.message.length > 1000)
      e.message = "Message required (max 1000)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:lakshithaasokan@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-neon-cyan font-medium text-sm tracking-widest mb-2">// LET'S TALK</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <Reveal>
            <div className="glass rounded-2xl p-7 h-full flex flex-col">
              <h3 className="font-display text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Have a project in mind or want to collaborate? Let's connect.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { icon: Mail, label: "Email", value: "lakshithaasokan@gmail.com", href: "mailto:lakshithaasokan@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 8807473236", href: "tel:+918807473236" },
                  { icon: MapPin, label: "Location", value: "Pondicherry, India" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary/15 border border-neon-purple/30 flex items-center justify-center shrink-0 group-hover:border-neon-cyan transition-colors">
                      <Icon size={16} className="text-neon-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium group-hover:text-neon-cyan transition-colors break-all">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-xs text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-3">
                  {[
                    { Icon: GithubIcon, href: "https://github.com/LakshithaAsokan", label: "GitHub" },
                    { Icon: LinkedinIcon, href: "https://linkedin.com/in/lakshitha-asokan31", label: "LinkedIn" },
                    { Icon: Mail, href: "mailto:lakshithaasokan@gmail.com", label: "Email" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/60 hover:shadow-[0_0_20px_oklch(0.85_0.18_200/0.5)] transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="glass rounded-2xl p-7 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_oklch(0.85_0.18_200/0.3)] transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_oklch(0.85_0.18_200/0.3)] transition-all"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_20px_oklch(0.85_0.18_200/0.3)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground glow-purple transition-all hover:scale-[1.02]"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Opening your email...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
