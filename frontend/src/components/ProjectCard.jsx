import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Zap } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-borderLight rounded-3xl overflow-hidden hover-lift flex flex-col justify-between">
      <div className="aspect-[4/3] bg-bgLight flex items-center justify-center p-4 border-b border-borderLight/60 relative">
        <span className="absolute bottom-3 left-3 bg-heading text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {project.category}
        </span>
        <div className="w-32 h-32 bg-heading rounded-xl flex items-center justify-center text-white font-extrabold text-center text-xs p-2 shadow-premium">
          Aditya Solar Rooftop Setup
        </div>
      </div>
      <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-wider flex items-center">
              <Zap className="w-3 h-3 mr-1" />
              {project.capacity}
            </span>
            <span className="text-[10px] font-bold text-bodyText uppercase tracking-wider flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {project.state}
            </span>
          </div>
          <h3 className="text-base font-extrabold text-heading line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-bodyText line-clamp-2 mt-1 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="pt-4 border-t border-borderLight/60">
          <Link
            to={`/projects/${project.slug}`}
            className="text-xs font-bold text-primary hover:underline flex items-center"
          >
            View Details & Case Study <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
