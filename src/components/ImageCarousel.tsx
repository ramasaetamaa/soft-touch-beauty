
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
  },
  {
    url: "https://images.unsplash.com/photo-1570194065650-d99fb4ee7694?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Skincare Products",
  },
  {
    url: "https://images.unsplash.com/photo-1634452953510-65b10c1b430e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Wellness Treatment",
  },
  {
    url: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Natural Skincare",
  },
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-none overflow-hidden shadow-md">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static transform-none mr-2" />
          <CarouselNext className="relative static transform-none ml-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
