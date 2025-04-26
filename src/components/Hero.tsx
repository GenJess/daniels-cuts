
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
            <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-xl">
              Classic cuts, modern style. Experience the art of grooming in a refined, welcoming atmosphere.
            </p>
            <Link to="/book">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-xl px-8 py-4 rounded shadow-lg transition-all duration-200">
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
