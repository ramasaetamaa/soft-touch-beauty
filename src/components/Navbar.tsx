
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Heart className="h-6 w-6 text-primary-foreground mr-2" />
          <span className="font-playfair text-xl font-semibold">Soft Touch</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm hover:text-primary-foreground transition-colors">
            Home
          </a>
          <a href="#services" className="text-sm hover:text-primary-foreground transition-colors">
            Services
          </a>
          <a href="#products" className="text-sm hover:text-primary-foreground transition-colors">
            Products
          </a>
          <a href="#about" className="text-sm hover:text-primary-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm hover:text-primary-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden md:flex border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white"
          >
            Book Now
          </Button>
          
          {/* Mobile Menu Dropdown */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button className="block md:hidden p-2" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md mt-2">
              <DropdownMenuItem asChild>
                <a href="#home" className="w-full px-3 py-2 hover:bg-accent">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#services" className="w-full px-3 py-2 hover:bg-accent">Services</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#products" className="w-full px-3 py-2 hover:bg-accent">Products</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#about" className="w-full px-3 py-2 hover:bg-accent">About</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="w-full px-3 py-2 hover:bg-accent">Contact</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#" className="w-full px-3 py-2 text-primary-foreground font-medium hover:bg-accent">Book Now</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
