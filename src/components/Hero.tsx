
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const services = [
    { name: "Haircuts", price: "$40" },
    { name: "Beard Trimming", price: "$35" },
    { name: "Shaving", price: "$30" },
    { name: "Hair Styling", price: "$50" },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] relative">
      {/* Main splash image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10 h-full flex flex-col">
        {/* Main heading */}
        <div className="flex-grow flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-[6rem] leading-none mb-6 text-white">
              Daniels<br />Barbershop
            </h1>
          </div>
        </div>

        {/* Services section at bottom right */}
        <div className="self-end mb-12 w-full sm:w-80 md:w-96">
          <div className="bg-background/80 backdrop-blur p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl mb-3 md:mb-4 font-playfair">Our Services</h2>
            <div className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className="flex items-center justify-between border-b border-muted pb-2"
                >
                  <span>{service.name}</span>
                  <span className="font-medium">{service.price}</span>
                </div>
              ))}
              <Link to="/book" className="block mt-3 md:mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
