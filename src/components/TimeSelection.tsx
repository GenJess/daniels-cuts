
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface TimeSelectionProps {
  onSelect: (time: string) => void;
  onBack: () => void;
  service: string;
}

export const TimeSelection = ({ onSelect, onBack, service }: TimeSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Generate fake available time slots
  const generateTimeSlots = () => {
    const slots = [];
    // Start at 9 AM
    let hour = 9;
    
    // Generate slots every 30 minutes until 7 PM
    while (hour < 19) {
      const hourStr = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour < 12 ? 'AM' : 'PM';
      
      slots.push(`${hourStr}:00 ${period}`);
      slots.push(`${hourStr}:30 ${period}`);
      
      hour++;
    }
    
    // Randomly make some slots unavailable
    return slots.map(slot => ({
      time: slot,
      available: Math.random() > 0.3 // 70% chance of being available
    }));
  };
  
  const timeSlots = generateTimeSlots();

  return (
    <div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="mb-4" 
        onClick={onBack}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Services
      </Button>
      
      <h2 className="text-2xl font-playfair mb-2">Choose a Date & Time</h2>
      <p className="text-muted-foreground mb-6">
        For your {service} appointment
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-2">Select Date</h3>
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => {
                // Disable past dates and Sundays (day 0)
                return date < new Date() || date.getDay() === 0;
              }}
              className="p-3 pointer-events-auto"
            />
          </Card>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Available Time Slots</h3>
          <Card className="p-4">
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.available ? "outline" : "ghost"}
                    className={`w-full ${!slot.available ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-primary-foreground'}`}
                    disabled={!slot.available}
                    onClick={() => slot.available && onSelect(`${selectedDate.toLocaleDateString()} at ${slot.time}`)}
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                Please select a date first
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
