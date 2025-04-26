
import { Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-16 bg-background/95 backdrop-blur border-b border-border">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-playfair text-lg font-semibold">DanielsBarbershop</span>
        </Link>
        
        <div className="flex items-center space-x-8">
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
