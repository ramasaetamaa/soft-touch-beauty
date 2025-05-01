
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    name: "Emma Johnson",
    role: "Regular Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The facial treatment at Soft Touch completely transformed my skin. My complexion has never looked better, and the staff made me feel so comfortable throughout the entire session."
  },
  {
    name: "Michael Chen",
    role: "New Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "I was skeptical at first, but the results speak for themselves. The skincare consultation was thorough, and the products recommended have made a significant difference in just two weeks."
  },
  {
    name: "Sophia Rodriguez",
    role: "Monthly Subscriber",
    image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "I've been a client for over a year now, and I'm consistently impressed by the quality of service. The team truly understands my skin needs and always provides exceptional care."
  },
  {
    name: "Olivia Taylor",
    role: "Bridal Client",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "My wedding day makeup was absolutely flawless. The artist listened to exactly what I wanted and created a look that stayed perfect all day and photographed beautifully."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-beauty-lavender/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Experiences</h2>
          <p className="section-subtitle">
            Discover why our clients love their experience at Soft Touch Beauty.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {testimonialsData.map((testimonial, index) => (
              <Card 
                key={index}
                className="beauty-card border-none"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center mt-4">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Mobile View - Carousel */}
          <div className="block md:hidden">
            <Card className="beauty-card border-none">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="mb-6 italic text-muted-foreground">"{testimonialsData[activeIndex].quote}"</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonialsData[activeIndex].image} alt={testimonialsData[activeIndex].name} />
                      <AvatarFallback>{testimonialsData[activeIndex].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonialsData[activeIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonialsData[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full border border-muted"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === index ? 'bg-primary-foreground' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full border border-muted"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
