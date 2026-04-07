import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { CalendarCheck, Repeat, ArrowRight } from "lucide-react";

const plans = [
  {
    icon: Repeat,
    label: "Weekly Plan",
    desc: "Automatic weekly supply — never run out again",
    perks: ["Priority delivery slot", "Same driver every week", "Pause anytime"],
  },
  {
    icon: CalendarCheck,
    label: "Monthly Plan",
    desc: "Budget-friendly monthly schedule for homes & offices",
    perks: ["Bulk discount pricing", "Flexible quantities", "Cancel anytime"],
    featured: true,
  },
];

const SubscriptionSection = () => (
  <section className="section-padding bg-section-light">
    <div className="container-main">
        <div className="mb-10 max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Set & Forget</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recurring Delivery Plans</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Choose a plan that fits your rhythm. We'll handle the rest — on time, every time.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {plans.map((p) => (
          <div
            key={p.label}
            className={`rounded-xl p-6 md:p-8 border transition-shadow hover:shadow-xl ${
              p.featured
                ? "bg-primary text-primary-foreground border-primary shadow-lg"
                : "bg-card border-border"
            }`}
          >
            <p.icon className={`h-8 w-8 mb-4 ${p.featured ? "text-secondary" : "text-primary"}`} />
            <h3 className="font-bold text-xl mb-1">{p.label}</h3>
            <p className={`text-sm mb-5 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {p.desc}
            </p>
            <ul className="space-y-2 mb-6">
              {p.perks.map((pk) => (
                <li key={pk} className={`flex items-center gap-2 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${p.featured ? "bg-secondary" : "bg-primary"}`} />
                  {pk}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppLink(`Hi, I'd like to set up a ${p.label.toLowerCase()}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={`w-full font-semibold gap-2 ${
                  p.featured
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
                }`}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SubscriptionSection;
