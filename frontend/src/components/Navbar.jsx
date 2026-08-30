import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteSettings } from "../data/siteData";
import adityaLogo from "../assets/aditya-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-borderLight h-[80px]" : "bg-transparent h-[96px]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={adityaLogo} alt={siteSettings.company_name}
            className={`w-auto transition-all duration-500 ${isScrolled ? "h-[52px]" : "h-[60px]"}`} />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`text-[15px] font-semibold hover-underline transition-colors ${
                isActive(link.path) ? "text-primary" : "text-textDark hover:text-primary"
              }`}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <a href={`tel:${siteSettings.phone}`}
            className="flex items-center text-[15px] font-semibold text-textDark hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            {siteSettings.phone}
          </a>
          <Link to="/contact" className="cta-gradient text-white px-7 py-3.5 rounded-xl font-bold text-[15px] transition-premium">
            Get Free Quote
          </Link>
        </div>

        <div className="flex lg:hidden items-center">
          <button onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-textDark hover:text-primary hover:bg-primary/5 transition-premium"
            aria-label="Toggle Menu">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-borderLight shadow-xl py-6 px-6 space-y-3 z-50">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`block px-4 py-3 rounded-xl text-[16px] font-semibold ${
                isActive(link.path) ? "bg-primary/10 text-primary" : "text-textDark hover:bg-primary/5"
              }`}>
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-borderLight">
            <Link to="/contact" className="w-full block text-center py-3.5 cta-gradient text-white rounded-xl font-bold text-[15px] transition-premium">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
