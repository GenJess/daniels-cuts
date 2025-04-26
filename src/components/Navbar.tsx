
import { Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/d0fb03d6-4c0b-4043-b280-e85ddd7639f9.png" alt="Logo" className="h-8 w-8" />
          <span className="font-playfair text-lg font-semibold">DanielsBarbershop</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">About Us</Link>
          <Link to="/services" className="text-sm font-medium transition-colors hover:text-primary">Services</Link>
          <Link to="/gallery" className="text-sm font-medium transition-colors hover:text-primary">Gallery</Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Music className="h-5 w-5" />
          </a>
          <Link to="/book" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
