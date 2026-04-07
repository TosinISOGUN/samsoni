import logo from "@/assets/samsoni-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12 pb-20 md:pb-12 px-4 md:px-8">
    <div className="container-main">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <img src={logo} alt="SAMSONI logo" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="text-primary-foreground/60 text-sm">Clean, NAFDAC-approved water for homes, offices, and events across Lagos.</p>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <a href="#home" className="hover:text-secondary transition-colors">Home</a>
            <a href="#products" className="hover:text-secondary transition-colors">Products</a>
            <a href="#delivery" className="hover:text-secondary transition-colors">Delivery</a>
            <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-sm">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <p>+234 812 590 1301</p>
            <p>support@gmail.com</p>
            <p>No 1, Pipeline Bus Stop, Gberigbe</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} SAMSONI Water. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
