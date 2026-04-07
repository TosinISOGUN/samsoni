import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import heroWater from "@/assets/hero-water-glass.jpg";
import heroDelivery from "@/assets/hero_delivery.png";
import heroFactory from "@/assets/hero-factory.jpg";
import heroFamily from "@/assets/hero_family.png";

const slides = [heroWater, heroDelivery, heroFactory, heroFamily];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[110vh] min-h-[700px] overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          {...(i === 0 ? {} : { loading: "lazy" as const })}
          width={1920}
          height={1080}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 container-main">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl animate-fade-in tracking-tight">
          Pure Hydration Delivered with Integrity
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
          Premium quality water for your home, office, and events. Refreshing, safe, and delivered fast across Lagos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold text-base px-8">
              Order via WhatsApp
            </Button>
          </a>
          <Link to="/products">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold text-base px-8 border-transparent">
              View Products
            </Button>
          </Link>
        </div>

        {/* Carousel indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
