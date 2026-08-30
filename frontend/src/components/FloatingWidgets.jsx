import React, { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageSquare } from "lucide-react";
import { siteSettings } from "../data/siteData";

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const phone = siteSettings.phone;
  const whatsapp = siteSettings.whatsapp_number;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const cleanPhone = phone.replace(/[^+\d]/g, "");
  const cleanWA = whatsapp.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(
    "Hello Aditya Solar Team! I visited your website and would like to learn more about your rooftop solar solutions, savings, and subsidies. Please connect with me."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {showScrollTop && (
        <button onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-heading text-white flex items-center justify-center shadow-premium hover:bg-primary transition-premium transform hover:scale-110 active:scale-95 border border-[#4a3620]/50"
          title="Back to Top">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a href={`tel:${cleanPhone}`}
        className="lg:hidden w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-premium hover:bg-primaryDark transition-premium transform hover:scale-110 active:scale-95"
        title="Call Now">
        <Phone className="w-5 h-5" />
      </a>
      <a href={`https://wa.me/${cleanWA}?text=${encodedMessage}`}
        target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium hover:bg-[#20ba59] transition-premium transform hover:scale-110 active:scale-95 animate-bounce"
        title="WhatsApp Support">
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};

export default FloatingWidgets;
