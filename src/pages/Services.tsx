import { Navbar } from "@/components/Navbar";

const services = [
  { category: "Haircuts", items: [
    { name: "Men's haircut", price: "$40", description: "" },
    { name: "Men's haircut for seniors, military/veterans, first responders and kids", price: "$35", description: "Seniors 65 or older. Kids 9 and under." },
    { name: "Buzz cut", price: "$30", description: "" },
    { name: "Nape Undercut", price: "$30", description: "" },
    { name: "Shaved Head", price: "$30", description: "" },
    { name: "Skin Tight Bald Fade", price: "$45", description: "" },
    { name: "Package services available", price: "See booking site", description: "" },
    { name: "Discount for Seniors, Military, Veterans, and First Responders", price: "Available", description: "" },
  ]},
  { category: "Grooming", items: [
    { name: "Beard Trim and Shaves", price: "$30", description: "" },
    { name: "Line Up back of neck and sideburns", price: "$18", description: "" },
    { name: "Line Up forehead, back of neck and sideburn", price: "$25", description: "" },
    { name: "Nose and Ears wax", price: "$15", description: "" },
    { name: "Eyebrow wax/razor", price: "$15", description: "" },
    { name: "Shampoo and Conditioner hair wash", price: "$10", description: "" },
    { name: "Hair Design", price: "$15+", description: "Designs start at $15, pricing varies depending on art difficulty." },
  ]}
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto py-16 max-w-2xl">
      <h1 className="font-playfair text-5xl mb-4 text-center tracking-tight">Our Services</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">Discover our range of premium grooming services, crafted for the modern gentleman. Every service is delivered with precision, care, and a touch of classic dapper style.</p>
      {services.map((section) => (
        <section key={section.category} className="mb-12">
          <h2 className="font-playfair text-2xl font-semibold mb-6 border-b border-muted pb-2 uppercase tracking-widest text-primary">{section.category}</h2>
          <ul>
            {section.items.map((item, idx) => (
              <li key={item.name} className="py-5 border-b border-muted last:border-b-0">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold text-lg text-foreground">{item.name}</span>
                  <span className="font-playfair text-xl text-primary tabular-nums">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-muted-foreground text-base pl-1 mt-1">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Services;

