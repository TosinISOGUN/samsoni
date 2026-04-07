import sachetImg from "@/assets/product-sachet.jpg";
import bottleImg from "@/assets/product-bottle.jpg";
import dispenserImg from "@/assets/product-dispenser.jpg";

export type Product = {
  id: string;
  name: string;
  category: "sachet" | "bottled" | "dispenser";
  size: string;
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "sachet-bag",
    name: "SAMSONI Pure Water Sachet",
    category: "sachet",
    size: "60cl x 20 sachets (1 bag)",
    price: "₦300",
    image: sachetImg,
    description: "Our signature sachet water, perfect for everyday hydration. NAFDAC approved and hygienically packaged.",
  },
  {
    id: "sachet-bulk",
    name: "SAMSONI Sachet Water (Bulk)",
    category: "sachet",
    size: "60cl x 20 bags (1 set)",
    price: "₦5,500",
    image: sachetImg,
    description: "Bulk sachet water for events, offices, and households. Great value for large orders.",
  },
  {
    id: "bottle-50cl",
    name: "SAMSONI Bottled Water 50cl",
    category: "bottled",
    size: "50cl",
    price: "₦200",
    image: bottleImg,
    description: "Compact and portable bottled water, ideal for on-the-go hydration.",
  },
  {
    id: "bottle-75cl",
    name: "SAMSONI Bottled Water 75cl",
    category: "bottled",
    size: "75cl",
    price: "₦300",
    image: bottleImg,
    description: "Our premium 75cl bottle. Perfect for personal use at work or home.",
  },
  {
    id: "bottle-1500ml",
    name: "SAMSONI Bottled Water 1.5L",
    category: "bottled",
    size: "1.5 Litres",
    price: "₦500",
    image: bottleImg,
    description: "Family-size bottle for your home or office. Stay hydrated all day.",
  },
  {
    id: "dispenser-18l",
    name: "SAMSONI Dispenser Bottle",
    category: "dispenser",
    size: "18.9 Litres",
    price: "₦1,500",
    image: dispenserImg,
    description: "Large dispenser bottle for offices and homes. Fits standard water dispensers.",
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "sachet", label: "Sachet Water" },
  { id: "bottled", label: "Bottled Water" },
  { id: "dispenser", label: "Dispenser Bottles" },
] as const;
