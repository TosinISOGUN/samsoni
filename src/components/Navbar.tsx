import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logo from "@/assets/samsoni-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Delivery", href: "#delivery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const navTransparency = isHome && !isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        navTransparency
          ? "bg-transparent py-4"
          : "bg-card/90 backdrop-blur-md border-b border-border py-2 shadow-sm"
      )}
    >
      <div className={cn(
        "container-main flex items-center justify-between px-4 md:px-8 transition-all duration-300",
        navTransparency ? "h-20" : "h-16"
      )}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="SAMSONI logo" 
            className={cn(
              "transition-all duration-300 w-auto",
              navTransparency ? "h-20 brightness-0 invert" : "h-16"
            )} 
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className={cn(
                "text-sm font-semibold transition-colors uppercase tracking-wider",
                navTransparency
                  ? "text-primary-foreground/90 hover:text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button 
              className={cn(
                "font-bold transition-all px-6",
                navTransparency
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-md"
              )}
            >
              Order Now
            </Button>
          </a>
        </div>

        {/* Mobile Sidebar (Slide-out) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button 
                className={cn(
                  "p-2 transition-colors",
                  navTransparency ? "text-primary-foreground" : "text-foreground"
                )} 
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:max-w-sm bg-card border-l border-border p-0 flex flex-col">
              <SheetHeader className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                    <img src={logo} alt="SAMSONI logo" className="h-12 w-auto" />
                  </Link>
                </div>
              </SheetHeader>
              
              <div className="flex flex-col flex-1 px-6 py-10 gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.href)}
                    className="text-2xl font-bold text-foreground hover:text-secondary transition-colors text-left uppercase tracking-widest font-heading"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-border/50">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold text-lg h-14 shadow-lg">
                    Order Now
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
