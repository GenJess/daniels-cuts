
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Men's Haircut", price: "$40", description: "Traditional and modern haircuts for men." },
  { name: "Men's Haircut (Seniors, Military/Veterans, First Responders, Kids)", price: "$35", description: "Discounted haircut for seniors (65+), military, veterans, first responders, and kids (9 and under)." },
  { name: "Buzz Cut", price: "$30", description: "Simple, clean buzz cut." },
  { name: "Nape Undercut", price: "$30", description: "Undercut at the nape of the neck." },
  { name: "Shaved Head", price: "$30", description: "Full head shave." },
  { name: "Skin Tight Bald Fade", price: "$45", description: "Skin-tight fade for a sharp look." },
  { name: "Beard Trim and Shaves", price: "$30", description: "Beard trimming and traditional shaves." },
  { name: "Line Up (Back of Neck and Sideburns)", price: "$18", description: "Line up for back of neck and sideburns." },
  { name: "Line Up (Forehead, Back of Neck, Sideburns)", price: "$25", description: "Line up for forehead, back of neck, and sideburns." },
  { name: "Nose and Ears Wax", price: "$15", description: "Waxing for nose and ears." },
  { name: "Eyebrow Wax/Razor", price: "$15", description: "Eyebrow shaping with wax or razor." },
  { name: "Shampoo and Conditioner Hair Wash", price: "$10", description: "Hair wash with shampoo and conditioner." },
  { name: "Hair Design", price: "$15+", description: "Custom hair designs. Pricing varies depending on art difficulty." },
  { name: "Grooming Packages", price: "See booking site", description: "Complete packages combining premium services." },
  { name: "Discounts", price: "Available", description: "Discounts for Seniors, Military, Veterans, and First Responders available." },
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
