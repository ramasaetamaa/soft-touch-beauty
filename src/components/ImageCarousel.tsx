
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  {
    url: "https://images.unsplash.com/photo-1620916566886-fbdb6b9c9e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Beauty Treatment",
    caption: "Luxurious Facial Treatments"
  },
  {
    url: "https://images.unsplash.com/photo-1570194065650-d99fb4ee7694?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Skincare Products",
    caption: "Premium Skincare Products"
  },
  {
    url: "https://images.unsplash.com/photo-1634452953510-65b10c1b430e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Wellness Treatment",
    caption: "Rejuvenating Wellness Treatments"
  },
  {
    url: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural Skincare",
    caption: "Natural Organic Formulations"
  },
];

const ImageCarousel = () => {
  return (
    <section className="py-16 bg-beauty-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title">Our Beauty Gallery</h2>
          <p className="section-subtitle">
            Explore our luxurious treatments and premium products
          </p>
        </div>
        
        <div className="w-full max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                  <div className="p-2">
                    <Card className="border-none overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0 relative">
                        <AspectRatio ratio={4 / 3}>
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-t-md"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4 font-medium">{image.caption}</p>
                          </div>
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static transform-none mr-4 bg-primary-foreground text-white hover:bg-primary-foreground/90 border-none" />
              <CarouselNext className="relative static transform-none ml-4 bg-primary-foreground text-white hover:bg-primary-foreground/90 border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
