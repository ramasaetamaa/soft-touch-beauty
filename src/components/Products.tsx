
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const productsData = [
  {
    name: "Hydrating Serum",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2335&q=80",
    badge: "Bestseller",
    description: "Intense hydration for all skin types"
  },
  {
    name: "Gentle Cleanser",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1619451683875-9a109042561a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80",
    badge: "",
    description: "For sensitive and dry skin"
  },
  {
    name: "Renewal Night Cream",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee7694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    badge: "New",
    description: "Rejuvenating overnight treatment"
  },
  {
    name: "Vitamin C Moisturizer",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1634452953510-65b10c1b430e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    badge: "",
    description: "Brightening daily moisturizer"
  }
];

const Products = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Premium skincare products crafted with natural ingredients for your daily beauty routine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="beauty-card h-full border-none overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 bg-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="pt-5">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <p className="font-medium text-lg mt-2">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary-foreground hover:bg-primary-foreground/90">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
