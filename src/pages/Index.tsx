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
      title="Pure Hydration for Lagos"
      description="NAFDAC-approved (Reg No: E1-6702L) premium water delivery service in Lagos. Order sachet bags, bottled packs, and dispenser refills directly to your doorstep."
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
