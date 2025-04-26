
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative py-24 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Gentleman's Club
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Experience the finest in men's grooming at DanielsBarbershop. 
              Where tradition meets modern style.
            </p>
            <Link to="/book">
              <Button size="lg" className="mb-4">
                Book Your Visit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/d0fb03d6-4c0b-4043-b280-e85ddd7639f9.png" 
              alt="Barbershop" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-4 rounded">
              <p className="font-playfair font-bold">Premium Grooming</p>
              <p className="text-sm text-muted-foreground">For the modern gentleman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
