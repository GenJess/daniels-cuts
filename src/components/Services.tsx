
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Haircuts", price: "$40" },
  { name: "Beard Trimming", price: "$35" },
  { name: "Shaving", price: "$30" },
  { name: "Hair Styling", price: "$50" },
  { name: "Facial Treatments", price: "Varies" },
  { name: "Grooming Packages", price: "$75" },
];

export const Services = () => {
  return (
    <section className="py-16 bg-muted" id="services">
      <div className="container">
        <h2 className="font-playfair text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.name} className="p-6 bg-card hover:bg-card/60 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <span className="text-lg font-playfair">{service.price}</span>
              </div>
              <Button variant="outline" className="w-full">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
