import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowLeft } from "lucide-react";

const ProductsPage = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-padding bg-background">
          <div className="container-main">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Products</h1>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Browse our full catalog of NAFDAC-approved water products. Order via WhatsApp for fast delivery.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === c.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-lg">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{p.size}</p>
                    <p className="text-muted-foreground text-xs mt-2">{p.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-secondary font-heading">{p.price}</span>
                      <a href={getWhatsAppLink(`Hi, I'd like to order ${p.name} (${p.size})`)} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold">
                          Order Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ProductsPage;
