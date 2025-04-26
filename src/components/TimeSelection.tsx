import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface TimeSelectionProps {
  onSelect: (time: string) => void;
  onBack: () => void;
  service: string;
  selectedBarber: string;
  appointments: any[]; // Add appointments prop
}

export const TimeSelection = ({ onSelect, onBack, service, selectedBarber, appointments }: TimeSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  // Remove internal bookedSlots state and useEffect

  // Generate available time slots
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

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const isSlotBooked = (slot: string) => {
    if (!selectedDate) return false;

    // Format the selected date to match the expected "M/D/YYYY" format used in storage.
    const selectedDateString = selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }); // Ensures M/D/YYYY format

    // Construct the full date/time string to check against, e.g., "4/26/2025 at 9:00 AM"
    const dateTimeToCheck = `${selectedDateString} at ${slot}`;

    // Check if there's *any* appointment matching the dateTimeToCheck
    const isBooked = appointments.some(app => {
      // Basic check: Does the appointment time match the slot's date and time?
      if (app.time !== dateTimeToCheck) {
        return false;
      }

      // If a specific barber is selected, check if this appointment is for them.
      if (selectedBarber !== "Any") {
        return app.details?.barber === selectedBarber;
      }

      // If barber is "Any", *any* appointment at this time makes the slot booked.
      return true;
    });

    return isBooked;
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
                {timeSlots.map((slot) => {
                  const isBooked = isSlotBooked(slot);
                  return (
                    <Button
                      key={slot}
                      variant={!isBooked ? "outline" : "ghost"}
                      className={`w-full ${isBooked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-primary-foreground'}`}
                      disabled={isBooked}
                      onClick={() => !isBooked && onSelect(`${selectedDate.toLocaleDateString()} at ${slot}`)}
                    >
                      {slot}
                    </Button>
                  );
                })}
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
