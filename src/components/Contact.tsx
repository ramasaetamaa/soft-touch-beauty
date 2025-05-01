
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or ready to schedule an appointment? Reach out to us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Contact Information</h3>
            <p className="text-muted-foreground">
              We'd love to hear from you. Fill out the form or use our contact information.
            </p>
            
            <Card className="beauty-card border-none bg-beauty-peach/20 p-6">
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">123 Beauty Lane, Suite 100</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
                
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 7pm</p>
                  <p className="text-muted-foreground">Saturday: 10am - 5pm</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
                
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                  <p className="text-muted-foreground">Email: info@softtouchbeauty.com</p>
                </div>
              </div>
            </Card>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-beauty-lavender/30 hover:bg-beauty-lavender/50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                
                <a href="#" className="p-2 rounded-full bg-beauty-peach/30 hover:bg-beauty-peach/50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-11.834 4.858c5.046 0 7.812-4.191 7.812-7.831 0-.119 0-.237-.006-.354.535-.388.999-.87 1.368-1.42a5.446 5.446 0 01-1.575.433c.566-.344.999-.885 1.202-1.529a5.336 5.336 0 01-1.743.667 2.738 2.738 0 00-4.673 2.5 7.781 7.781 0 01-5.65-2.866 2.774 2.774 0 00-.371 1.38c0 .949.483 1.788 1.217 2.277a2.71 2.71 0 01-1.243-.344v.035c0 1.326.94 2.432 2.189 2.682a2.745 2.745 0 01-1.237.048c.349 1.085 1.36 1.879 2.56 1.9a5.489 5.489 0 01-4.066 1.14 7.76 7.76 0 004.207 1.234" />
                  </svg>
                </a>
                
                <a href="#" className="p-2 rounded-full bg-beauty-mint/30 hover:bg-beauty-mint/50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.359 4H4.64C4.286 4 4 4.286 4 4.641v14.719c0 .355.286.64.641.64h14.719c.354 0 .64-.285.64-.64V4.64C20 4.286 19.714 4 19.359 4zm-10.897 6h-2.286v7h-2.25v-7H2v-2.281h6.464V10h-.002zm.5 5.055c0 1.164-.928 2.066-2.107 2.066-1.2 0-2.188-.902-2.188-2.066v-3.337c0-1.164.987-2.066 2.188-2.066 1.178 0 2.107.902 2.107 2.066v3.337zm1.982 1.945h2.139l.003-4.042s.04-1.148 1.258-1.148c.605-.53.98.344.973 1.188l.008 4.002h2.139v-4.403c0-.598-.127-1.072-.279-1.386-.215-.448-.676-.87-1.136-1.06-.427-.175-1.048-.257-1.752-.257-1.46 0-2.354.685-2.354.685v-.622h-1v7.043h.001z" />
                  </svg>
                </a>
                
                <a href="#" className="p-2 rounded-full bg-beauty-cream/30 hover:bg-beauty-cream/50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.101 2h5.798c.5 0 .755.004 1.33.038 1.205.07 2.023.246 2.741.525a5.55 5.55 0 012.04 1.328 5.55 5.55 0 011.329 2.041c.278.718.455 1.536.524 2.741.035.575.039.83.039 1.33v5.798c0 .5-.004.755-.039 1.33-.069 1.205-.246 2.023-.524 2.741a5.55 5.55 0 01-1.329 2.04 5.55 5.55 0 01-2.04 1.329c-.718.278-1.536.455-2.741.524-.575.035-.83.039-1.33.039H9.101c-.5 0-.755-.004-1.33-.039-1.205-.069-2.023-.246-2.741-.524a5.55 5.55 0 01-2.04-1.329 5.55 5.55 0 01-1.328-2.04c-.28-.718-.456-1.536-.525-2.741C1.102 16.855 1.098 16.6 1.098 16.1v-5.798c0-.5.004-.755.039-1.33.069-1.205.247-2.023.525-2.741a5.55 5.55 0 011.328-2.041 5.55 5.55 0 012.04-1.328c.718-.28 1.536-.456 2.741-.525C8.346 2.004 8.601 2 9.101 2zM12 7.235c-2.624 0-4.765 2.141-4.765 4.765 0 2.624 2.141 4.765 4.765 4.765 2.624 0 4.765-2.141 4.765-4.765 0-2.624-2.141-4.765-4.765-4.765zm4.9-1.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm-4.9.9a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary-foreground hover:bg-primary-foreground/90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
