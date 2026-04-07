import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Mrs. Adebayo", role: "Homeowner, Ikorodu", text: "SAMSONI water is the best we've used. Delivery is always on time and the water quality is excellent." },
  { name: "Chinedu O.", role: "Office Manager", text: "We switched to SAMSONI for our office and haven't looked back. Consistent quality and reliable delivery every week." },
  { name: "Funke A.", role: "Event Planner", text: "For every event I organize, SAMSONI is my go-to. Bulk orders are always delivered fast and the water is top quality." },
  { name: "Ibrahim K.", role: "Restaurant Owner", text: "My customers appreciate clean water. SAMSONI gives us confidence with their certified quality and great taste." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-main">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by Lagos</h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm">
          Real feedback from homes, offices, and event planners who count on us.
        </p>
      </div>

      {/* Masonry-ish two-column layout */}
      <div className="columns-1 sm:columns-2 gap-5 space-y-5">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`break-inside-avoid rounded-xl p-6 border border-border ${
              i === 1 ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            <Quote className={`h-6 w-6 mb-3 ${i === 1 ? "text-secondary" : "text-primary/20"}`} />
            <p className={`text-sm leading-relaxed mb-5 ${i === 1 ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              "{t.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-bold text-sm ${i === 1 ? "" : "text-foreground"}`}>{t.name}</p>
                <p className={`text-xs ${i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{t.role}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`h-3.5 w-3.5 ${i === 1 ? "fill-secondary text-secondary" : "fill-secondary text-secondary"}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
