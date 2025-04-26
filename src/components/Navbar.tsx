
import { Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-background/95 backdrop-blur border-b border-border">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Daniels Barbershop Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-playfair text-lg font-semibold">DanielsBarbershop</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary">About Us</Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-primary">Gallery</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
          <Link to="/book" className="text-sm font-medium hover:text-primary">Book Appointment</Link>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Music className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};
