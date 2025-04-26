
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

interface BookingFormProps {
  onSubmit: (details: any) => void;
  onBack: () => void;
  service: string;
  time: string;
}

export const BookingForm = ({ onSubmit, onBack, service, time }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  return (
    <div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-4" 
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Time Selection
      </Button>
      
      <h2 className="text-2xl font-playfair mb-2">Complete Your Booking</h2>
      <p className="text-muted-foreground mb-6">
        {service} on {time}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="(555) 123-4567"
            required
          />
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-2">Special Requests (Optional)</label>
          <Textarea 
            id="notes" 
            name="notes" 
            value={formData.notes} 
            onChange={handleChange} 
            placeholder="Any specific preferences or requests for your appointment"
            rows={3}
          />
        </div>
        
        <Button type="submit" size="lg" className="w-full">
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};
