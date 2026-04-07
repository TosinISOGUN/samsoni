import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

const ProductsPreview = () => {
  const featured = products.slice(0, 3);

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Products</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Premium quality water for every need — sachet, bottled, and dispenser sizes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
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
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-secondary font-heading">{p.price}</span>
                  <a href={getWhatsAppLink(`Hi, I'd like to order ${p.name}`)} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                      Order
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 px-8 h-12">
              View All Products <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
