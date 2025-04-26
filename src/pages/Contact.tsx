import { Navbar } from "@/components/Navbar";

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
                  <input className="w-full px-4 py-2 border rounded" placeholder="John Doe" id="name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-4 py-2 border rounded" placeholder="john@example.com" id="email" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                <input className="w-full px-4 py-2 border rounded" placeholder="How can we help you?" id="subject" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 border rounded" placeholder="Tell us more..." id="message" rows={5} />
              </div>
              <button className="bg-primary text-white px-6 py-2 rounded w-full" type="submit">Send Message</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl mb-6 font-playfair">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground mt-1">
                  3708 West Davis Street, Suite C<br />
                  Conroe, Texas 77304, United States
                </p>
              </div>
              <div>
                <h3 className="font-medium">Phone Number</h3>
                <p className="text-muted-foreground mt-1">936-539-8593</p>
              </div>
              <div>
                <h3 className="font-medium">Email Address</h3>
                <p className="text-muted-foreground mt-1">info@danielsbarbershop.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Mon</span><span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tue-Fri</span><span>09:00 am – 06:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat</span><span>08:00 am – 03:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sun</span><span>Closed</span>
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
