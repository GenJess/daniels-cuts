
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Array of barbershop related images
  const images = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1635272405118-9286d0917d91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1580618864482-f13b2f267623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="font-playfair text-4xl mb-12 text-center">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={image} 
                alt={`Barbershop gallery image ${index+1}`} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
