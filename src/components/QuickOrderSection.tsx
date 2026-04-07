import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getWhatsAppLink, getOrderMessage } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

const QuickOrderSection = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const handleOrder = () => {
    if (!product || !quantity || !location) return;
    const msg = getOrderMessage(product, quantity, location);
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section className="relative -mt-12 z-20 px-4 md:px-8">
      <div className="container-main">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">Order in 30 seconds</h2>
              <p className="text-muted-foreground text-sm">Pick a product, tell us where, and we'll deliver.</p>
            </div>

            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
              <Select onValueChange={setProduct}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sachet Water">Sachet Water</SelectItem>
                  <SelectItem value="Bottled Water">Bottled Water</SelectItem>
                  <SelectItem value="Dispenser Bottle">Dispenser Bottle</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Qty (e.g. 10 bags)"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-background border-border"
              />

              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-background border-border"
              />

              <Button
                onClick={handleOrder}
                className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-semibold gap-2"
              >
                Order <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOrderSection;
