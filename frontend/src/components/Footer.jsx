import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { siteSettings } from "../data/siteData";
import adityaLogo from "../assets/aditya-logo.png";

const Footer = () => {
  const s = siteSettings;

  return (
    <footer className="bg-heading text-white/80 pt-20 pb-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Brief */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src={adityaLogo} alt={s.company_name} className="h-[56px] w-auto" />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Powering India's sustainable future. We deliver state-of-the-art rooftop solar systems, highly efficient inverters, lithium batteries, and agricultural pumps.
            </p>
            <div className="flex space-x-4">
              {s.facebook_url && (
                <a href={s.facebook_url} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary flex items-center justify-center text-white transition-all duration-300" title="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
              )}
              {s.twitter_url && (
                <a href={s.twitter_url} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary flex items-center justify-center text-white transition-all duration-300" title="Twitter">
                  <FaXTwitter className="w-5 h-5" />
                </a>
              )}
              {s.linkedin_url && (
                <a href={s.linkedin_url} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary flex items-center justify-center text-white transition-all duration-300" title="LinkedIn">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              )}
              {s.instagram_url && (
                <a href={s.instagram_url} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary flex items-center justify-center text-white transition-all duration-300" title="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-extrabold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Projects", path: "/projects" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solar Solutions */}
          <div>
            <h3 className="text-white text-lg font-extrabold mb-6">Solar Solutions</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Solar Panels", path: "/products?category=solar-panels" },
                { name: "Hybrid Inverters", path: "/products?category=hybrid-inverters" },
                { name: "On-Grid Inverters", path: "/products?category=on-grid-inverters" },
                { name: "Solar Batteries", path: "/products?category=solar-batteries" },
                { name: "Solar Pumps", path: "/products?category=solar-pumps" },
                { name: "Water Heaters", path: "/products?category=solar-water-heaters" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-primaryGreen hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-extrabold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 shrink-0 mt-1" />
                <span className="text-white/70 leading-relaxed">{s.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primaryGreen mr-3 shrink-0" />
                <a href={`tel:${s.phone}`} className="text-white/70 hover:text-primary hover:underline transition-colors">{s.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-3 shrink-0" />
                <a href={`mailto:${s.email}`} className="text-white/70 hover:text-primaryGreen hover:underline transition-colors">{s.email}</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 text-white/50 mr-3 shrink-0 mt-1" />
                <span className="text-xs text-white/50 leading-normal">{s.office_hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 space-y-4 sm:space-y-0">
          <div>&copy; {new Date().getFullYear()} {s.company_name}. All Rights Reserved.</div>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            {/* <Link to="/admin/login"
              className="text-white/50 hover:text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:border-primary/60 transition-all duration-300 font-semibold">
              Admin Area
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
