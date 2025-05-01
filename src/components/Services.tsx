
import { Eye, Brush, Droplet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    title: "Facial Treatments",
    description: "Rejuvenating facials that cleanse, exfoliate, and nourish your skin for a radiant glow.",
    icon: Droplet,
    color: "bg-beauty-peach"
  },
  {
    title: "Professional Makeup",
    description: "Enhance your natural beauty with our professional makeup services for any occasion.",
    icon: Brush,
    color: "bg-beauty-lavender"
  },
  {
    title: "Skin Consultation",
    description: "Personalized skin analysis and tailored skincare routines for your unique needs.",
    icon: Eye,
    color: "bg-beauty-mint"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-beauty-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Experience our premium beauty treatments designed to enhance your natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="beauty-card h-full border-none">
                <CardHeader>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 beauty-card bg-gradient-to-r from-beauty-peach to-beauty-pink">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-medium mb-2">Ready for a transformative experience?</h3>
              <p>Schedule your beauty session today and embrace your natural glow.</p>
            </div>
            <button className="px-6 py-3 bg-white text-primary-foreground rounded-lg hover:shadow-md transition-all">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
