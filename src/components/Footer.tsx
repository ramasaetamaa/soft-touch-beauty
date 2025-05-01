
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beauty-light py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary-foreground mr-2" />
              <span className="font-playfair text-xl font-semibold">Soft Touch</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Enhancing your natural beauty with luxurious treatments and premium products.
            </p>
            <p className="text-sm">
              © {currentYear} Soft Touch Beauty. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary-foreground transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary-foreground transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Facial Treatments</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Professional Makeup</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Skin Consultation</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Body Treatments</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Special Occasions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for beauty tips and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg border border-border flex-grow"
              />
              <button 
                type="submit"
                className="bg-primary-foreground text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>
            Designed with care for beauty enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
