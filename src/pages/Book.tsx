
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";
import { ServiceSelection } from "@/components/ServiceSelection";
import { TimeSelection } from "@/components/TimeSelection";
import { BookingConfirmation } from "@/components/BookingConfirmation";

type BookingStep = "service" | "time" | "info" | "confirmation";

const Book = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("service");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setCurrentStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep("info");
  };

  const handleFormSubmit = (details: any) => {
    setBookingDetails({
      ...details,
      service: selectedService,
      time: selectedTime,
    });
    setCurrentStep("confirmation");
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
          />
        );
      case "info":
        return (
          <BookingForm 
            onSubmit={handleFormSubmit}
            onBack={() => setCurrentStep("time")}
            service={selectedService}
            time={selectedTime}
          />
        );
      case "confirmation":
        return (
          <BookingConfirmation 
            details={bookingDetails} 
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
      <div className="container mx-auto py-16">
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
