
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const services = [
    { name: "Haircuts", price: "$40" },
    { name: "Beard Trimming", price: "$35" },
    { name: "Shaving", price: "$30" },
    { name: "Hair Styling", price: "$50" },
    { name: "Facial Treatments", price: "Book →" },
    { name: "Grooming Packages", price: "$75" },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-playfair text-[6rem] leading-none mb-6">
            The<br />Gentleman's<br />Club
          </h1>
          <Link to="/book">
            <Button variant="outline" size="lg">
              Book Appointment <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <div 
              key={service.name}
              className="flex items-center justify-between border-b border-muted pb-4"
            >
              <span className="text-xl">{service.name}</span>
              {service.price === "Book →" ? (
                <Link to="/book">
                  <Button variant="outline" size="sm">
                    Book →
                  </Button>
                </Link>
              ) : (
                <span className="text-xl">{service.price}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
