import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, icon: Icon, color }) => {
  return (
    <div className="bg-white border border-borderLight rounded-3xl p-6 hover-lift">
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-heading mb-2">{service.title}</h3>
      <p className="text-sm text-bodyText leading-relaxed mb-4">
        {service.description}
      </p>
      <Link
        to="/services"
        className={`text-xs font-bold hover:underline inline-flex items-center ${color.replace('bg-', 'text-')}`}
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
