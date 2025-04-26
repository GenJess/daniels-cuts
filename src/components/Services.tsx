
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { 
    name: "Classic Haircuts", 
    price: "$40",
    description: "Traditional barbering techniques with modern styling."
  },
  { 
    name: "Beard Trimming", 
    price: "$35",
    description: "Precise beard shaping and maintenance for a polished look."
  },
  { 
    name: "Hot Towel Shave", 
    price: "$30",
    description: "Relaxing traditional straight razor shave with hot towels."
  },
  { 
    name: "Hair Styling", 
    price: "$50",
    description: "Custom styling with premium products for any occasion."
  },
  { 
    name: "Facial Treatments", 
    price: "$45",
    description: "Revitalizing skin care treatments tailored for men."
  },
  { 
    name: "Grooming Packages", 
    price: "from $75",
    description: "Complete packages combining our premium services."
  },
];

export const Services = () => {
  return (
    <section className="py-16" id="services">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-2">Premium Services</h2>
            <p className="text-muted-foreground">Experience the best in men's grooming</p>
          </div>
          <Link to="/services" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              View All Services <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Scissors className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                  </div>
                  <span className="text-lg font-playfair font-bold text-primary">{service.price}</span>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to="/book">
                  <Button variant="outline" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
