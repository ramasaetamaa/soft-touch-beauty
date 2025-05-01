
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-beauty-pink/30 to-white"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Discover Your Natural <span className="text-gradient">Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Luxurious skincare treatments tailored to enhance your natural glow and bring out your confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-white">
                Book a Session
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Explore Services
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-6">
              <div>
                <p className="text-3xl font-playfair font-medium">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-playfair font-medium">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="h-10 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-playfair font-medium">20+</p>
                <p className="text-sm text-muted-foreground">Beauty Products</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-beauty-lavender rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-beauty-peach rounded-full filter blur-3xl opacity-40"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1620916566886-fbdb6b9c9e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Beauty Treatment" 
                className="w-full h-auto rounded-2xl shadow-lg relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
