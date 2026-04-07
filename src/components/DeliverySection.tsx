import { MapPin, Clock, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";

const DeliverySection = () => (
  <section id="delivery" className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
    <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-secondary/10 blur-3xl" />

    <div className="container-main relative z-10">
      <div className="max-w-xl mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Lightning-fast logistics</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          We deliver across Lagos — fast.
        </h2>
      </div>

      {/* Horizontal timeline-style cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
        {[
          {
            icon: MapPin,
            title: "Areas We Serve",
            desc: "Lagos Mainland & Island — Ikorodu, Gberigbe, Agric, Ijede, and more",
            num: "01",
          },
          {
            icon: Clock,
            title: "Same-Day Delivery",
            desc: "Order before 2 PM and get it today. All other orders arrive next day, guaranteed",
            num: "02",
          },
          {
            icon: Package,
            title: "Low Minimums",
            desc: "Just 1 bag of sachet, 1 pack of bottles, or 1 dispenser bottle to get started",
            num: "03",
          },
        ].map((f, i) => (
          <div
            key={f.title}
            className={`relative p-6 md:p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-primary-foreground/15" : ""}`}
          >
            <span className="text-5xl font-bold text-primary-foreground/10 absolute top-4 right-6">{f.num}</span>
            <f.icon className="h-7 w-7 text-secondary mb-4" />
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a href={getWhatsAppLink("Hi, I'd like to schedule a delivery")} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
            Schedule Delivery <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default DeliverySection;
