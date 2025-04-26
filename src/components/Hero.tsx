
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/d0fb03d6-4c0b-4043-b280-e85ddd7639f9.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          The Gentleman's Club
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-fade-in">
          Experience the finest in men's grooming at DanielsBarbershop. 
          Where tradition meets modern style.
        </p>
        <Button size="lg" className="animate-fade-in">
          Book Your Visit <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
