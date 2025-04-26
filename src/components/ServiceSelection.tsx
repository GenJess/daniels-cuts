
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Calendar } from "lucide-react";

interface ServiceSelectionProps {
  onSelect: (service: string) => void;
}

export const ServiceSelection = ({ onSelect }: ServiceSelectionProps) => {
  const services = [
    { 
      name: "Classic Haircut", 
      price: "$40",
      description: "Traditional barbering techniques with modern styling.",
      duration: "45 min"
    },
    { 
      name: "Beard Trimming", 
      price: "$35",
      description: "Precise beard shaping and maintenance for a polished look.",
      duration: "30 min"
    },
    { 
      name: "Hot Towel Shave", 
      price: "$30",
      description: "Relaxing traditional straight razor shave with hot towels.",
      duration: "45 min"
    },
    { 
      name: "Hair Styling", 
      price: "$50",
      description: "Custom styling with premium products for any occasion.",
      duration: "60 min"
    },
    { 
      name: "Facial Treatment", 
      price: "$45",
      description: "Revitalizing skin care treatments tailored for men.",
      duration: "45 min"
    },
    { 
      name: "Complete Package", 
      price: "$75",
      description: "Haircut, beard trim, and facial treatment combined.",
      duration: "90 min"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-playfair mb-4">Select a Service</h2>
      <p className="text-muted-foreground mb-6">Choose the service you would like to book</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <Card 
            key={service.name} 
            className="cursor-pointer hover:shadow-md transition-all border-muted hover:border-primary"
            onClick={() => onSelect(service.name)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium flex items-center">
                  <Scissors className="h-4 w-4 mr-2 text-primary" />
                  {service.name}
                </h3>
                <span className="font-playfair font-bold">{service.price}</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
              <div className="mt-4 text-sm flex items-center text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {service.duration}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
