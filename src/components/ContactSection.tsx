import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, my name is ${name} (${email}). ${message}`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-section-light">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — form */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Let's talk water.</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md">
              Whether it's a question, a bulk order, or a partnership — we're one message away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-card" />
                <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-card" />
              </div>
              <Textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required className="bg-card min-h-[120px]" />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Right — contact info cards */}
          <div className="space-y-4 lg:pt-16">
            {[
              { icon: Phone, label: "Call us", value: "+234 812 590 1301", href: "tel:+2348125901301" },
              { icon: Mail, label: "Email", value: "support@gmail.com", href: "mailto:support@gmail.com" },
              { icon: MapPin, label: "Visit", value: "No 1, Pipeline Bus Stop, Gberigbe" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-muted-foreground text-sm hover:text-secondary transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex items-center gap-4 p-5 rounded-xl bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 transition-colors cursor-pointer">
                <MessageCircle className="h-6 w-6" />
                <div>
                  <p className="font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-whatsapp-foreground/70">Usually replies within minutes</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
