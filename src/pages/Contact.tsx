
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="font-playfair text-4xl mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6 font-playfair">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <Input placeholder="John Doe" id="name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <Input placeholder="john@example.com" id="email" type="email" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                <Input placeholder="How can we help you?" id="subject" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <Textarea placeholder="Tell us more..." id="message" rows={5} />
              </div>
              
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl mb-6 font-playfair">Contact Information</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-muted-foreground mt-1">
                      123 Barber Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Phone Number</h3>
                    <p className="text-muted-foreground mt-1">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Email Address</h3>
                    <p className="text-muted-foreground mt-1">
                      info@danielsbarbershop.com
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
