import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickOrderSection from "@/components/QuickOrderSection";
import ProductsPreview from "@/components/ProductsPreview";
import TrustSection from "@/components/TrustSection";
import DeliverySection from "@/components/DeliverySection";
import SubscriptionSection from "@/components/SubscriptionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEO from "@/components/SEO";

const Index = () => (
  <>
    <SEO 
      title="Integrity in Every Drop"
      description="NAFDAC-certified premium water delivery in Lagos. Experience pure, refreshing hydration for homes, offices, and events. Sachet bags, bottled packs, and 19L refills delivered with integrity."
    />
    <Navbar />
    <HeroSection />
    <QuickOrderSection />
    <ProductsPreview />
    <TrustSection />
    <DeliverySection />
    <SubscriptionSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
