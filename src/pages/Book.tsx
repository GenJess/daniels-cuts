import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";
import { ServiceSelection } from "@/components/ServiceSelection";
import { TimeSelection } from "@/components/TimeSelection";
import { BookingConfirmation } from "@/components/BookingConfirmation";
import { supabase } from "@/lib/supabaseClient";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type BookingStep = "service" | "time" | "info" | "confirmation";

const barbers = [
  "Any",
  "Mariana L.",
  "Christian C.",
  "Daniel H.",
  "Dennis H.",
  "Eric N.",
  "Erin L.",
  "Ilda B.",
  "Javier S.",
  "Monica L.",
  "Richard P."
];

const Book = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [selectedBarber, setSelectedBarber] = useState<string>("Any");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*');

    if (error) {
      console.error("Error fetching appointments:", error);
    } else {
      setAppointments(data || []);
    }
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setCurrentStep("time");
  };

 const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep("info");
  };

  const handleBarberSelect = (barber: string) => {
    setSelectedBarber(barber);
  };

  const handleFormSubmit = (details: any) => {
    setBookingDetails({
      name: details.name,
      email: details.email,
      phone: details.phone,
      notes: details.notes,
      service: selectedService,
      time: selectedTime,
    });
    setCurrentStep("confirmation");

    // Save booking details to Supabase
    const saveAppointment = async () => {
      // Structure the data for the 'details' JSONB column
      const appointmentDetails = {
        name: details.name,
        email: details.email,
        phone: details.phone,
        notes: details.notes,
        barber: selectedBarber // Include selected barber
      };

      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            service: selectedService,
            time: selectedTime,
            customer_name: details.name,
            customer_email: details.email,
            customer_phone: details.phone,
            selected_barber: selectedBarber,
            details: {
              notes: details.notes
            },
          },
        ]);

      if (error) {
        console.error("Error saving appointment:", error);
      } else {
        console.log("Appointment saved successfully!");
        // Optionally, refresh the appointments list
        fetchAppointments();
      }
    };

    saveAppointment();
  };

  const renderStep = () => {
    switch (currentStep) {
      case "service":
        return <ServiceSelection onSelect={handleServiceSelect} />;
      case "time":
        return (
          <TimeSelection
            onSelect={handleTimeSelect}
            onBack={() => setCurrentStep("service")}
            service={selectedService}
            selectedBarber={selectedBarber}
            appointments={appointments}
          />
        );
      case "info":
        return (
          <BookingForm
            onSubmit={handleFormSubmit}
            onBack={() => setCurrentStep("time")}
            service={selectedService}
            time={selectedTime}
            selectedBarber={selectedBarber}
          />
        );
      case "confirmation":
        return (
          <BookingConfirmation
            details={bookingDetails}
            customerName={bookingDetails?.name}
            customerEmail={bookingDetails?.email}
            customerPhone={bookingDetails?.phone}
            onNewBooking={() => {
              setCurrentStep("service");
              setSelectedService("");
              setSelectedTime("");
              setBookingDetails(null);
            }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-4">
        <h1 className="font-playfair text-4xl mb-6 text-center">Book an Appointment</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {["Select Service", "Choose Time", "Your Information", "Confirmation"].map((step, index) => {
                const stepNum = index + 1;
                const isActive = 
                  (currentStep === "service" && stepNum === 1) ||
                  (currentStep === "time" && stepNum === 2) ||
                  (currentStep === "info" && stepNum === 3) ||
                  (currentStep === "confirmation" && stepNum === 4);
                const isPast = 
                  (currentStep === "time" && stepNum === 1) ||
                  (currentStep === "info" && stepNum <= 2) ||
                  (currentStep === "confirmation");
                  
                return (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isActive ? "bg-primary text-primary-foreground" : 
                      isPast ? "bg-primary/30 text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {stepNum}
                    </div>
                    <span className={`text-xs mt-1 ${isActive ? "font-medium" : "text-muted-foreground"}`}>{step}</span>
                  </div>
                );
              })}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 h-1 bg-muted w-full"></div>
              <div className={`absolute top-0 h-1 bg-primary transition-all ${
                currentStep === "service" ? "w-[0%]" : 
                currentStep === "time" ? "w-[33%]" : 
                currentStep === "info" ? "w-[66%]" : "w-[100%]"
              }`}></div>
            </div>
          </div>

          <Select onValueChange={handleBarberSelect}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a barber" />
            </SelectTrigger>
            <SelectContent>
              {barbers.map((barber) => (
                <SelectItem key={barber} value={barber}>{barber}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Card>
            <CardContent className="p-6">
              {renderStep()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Book;
