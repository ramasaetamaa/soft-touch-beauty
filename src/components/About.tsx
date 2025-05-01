
import { Button } from "@/components/ui/button";
import { Brush, Droplet, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-beauty-cream/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="About Soft Touch Beauty" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-beauty-peach rounded-full filter blur-2xl opacity-50"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title mb-6">Our Beauty Philosophy</h2>
            
            <p className="mb-6 text-lg">
              At Soft Touch, we believe in enhancing your natural beauty, not masking it. Our approach combines traditional techniques with modern innovations to provide treatments that nourish your skin and soul.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-beauty-peach/50">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Natural Ingredients</h4>
                  <p className="text-muted-foreground">We use only the highest quality organic ingredients in all our products and treatments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-beauty-lavender/50">
                  <Droplet className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Personalized Approach</h4>
                  <p className="text-muted-foreground">Every skin is unique, and we tailor our services to meet your specific needs and concerns.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-lg bg-beauty-mint/50">
                  <Brush className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Expert Techniques</h4>
                  <p className="text-muted-foreground">Our specialists are certified professionals with years of experience in the beauty industry.</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
