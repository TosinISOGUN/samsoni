import { ShieldCheck, Droplets, Package, Truck, Award, Beaker } from "lucide-react";

const TrustSection = () => (
  <section id="about" className="section-padding bg-background overflow-hidden">
    <div className="container-main">
      {/* Asymmetric two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left — big statement */}
        <div className="lg:col-span-2">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Quality Assurance</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Why thousands trust <span className="text-gradient">SAMSONI</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Every drop goes through rigorous multi-stage testing. Our facility meets the highest Nigerian regulatory standards so you never have to worry.
          </p>
          <div className="flex items-center gap-3 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <Award className="h-10 w-10 text-primary shrink-0" />
            <div>
              <p className="font-bold text-foreground text-sm">NAFDAC Certified</p>
              <p className="text-muted-foreground text-xs">Fully registered & regularly inspected</p>
            </div>
          </div>
        </div>

        {/* Right — process steps as staggered cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Droplets, label: "Filtration", desc: "Multi-stage sediment and carbon filtration removes all impurities", color: "bg-blue-50 dark:bg-blue-950/30" },
            { icon: Beaker, label: "Purification", desc: "UV sterilisation and reverse-osmosis treatment for total safety", color: "bg-cyan-50 dark:bg-cyan-950/30" },
            { icon: Package, label: "Packaging", desc: "Automated hygienic lines seal freshness from factory to you", color: "bg-indigo-50 dark:bg-indigo-950/30" },
            { icon: Truck, label: "Distribution", desc: "Temperature-controlled fleet delivers within hours across Lagos", color: "bg-teal-50 dark:bg-teal-950/30" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`${s.color} rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
            >
              <s.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">{s.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
