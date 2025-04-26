import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface BookingConfirmationProps {
  details: {
    service: string;
    time: string;
    notes?: string;
  };
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  onNewBooking: () => void;
}

export const BookingConfirmation = ({ details, customerName, customerEmail, customerPhone, onNewBooking }: BookingConfirmationProps) => {
  const bookingNumber = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
        <CheckCircle className="h-8 w-8" />
      </div>
      
      <h2 className="text-2xl font-playfair mb-2">Booking Confirmed!</h2>
      <p className="text-muted-foreground mb-8">
        Your appointment has been scheduled. We look forward to seeing you soon!
      </p>
      
      <div className="max-w-md mx-auto bg-muted/30 p-6 rounded-lg mb-8">
        <div className="text-left space-y-4">
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Booking Reference</p>
            <p className="font-medium">{bookingNumber}</p>
          </div>
          
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Service</p>
            <p className="font-medium">{details.service}</p>
          </div>
          
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Date & Time</p>
            <p className="font-medium">{details.time}</p>
          </div>
          
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{customerName}</p>
          </div>
          
          <div className="border-b border-border pb-3">
            <p className="text-sm text-muted-foreground">Contact Information</p>
            <p className="font-medium">{customerEmail}</p>
            <p className="font-medium">{customerPhone}</p>
          </div>
          
          {details.notes && (
            <div>
              <p className="text-sm text-muted-foreground">Special Requests</p>
              <p className="font-medium">{details.notes}</p>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-6">
        A confirmation has been sent to your email address.
      </p>
      
      <div className="space-x-4">
        <Button onClick={onNewBooking} variant="outline">
          Book Another Appointment
        </Button>
        <Button onClick={() => window.location.href = "/"}>
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};
