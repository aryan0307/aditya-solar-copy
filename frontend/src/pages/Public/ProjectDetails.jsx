import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Zap, MapPin, Building, ArrowLeft, ArrowRight } from "lucide-react";
import { projects as allProjects } from "../../data/siteData";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load project from static data
    setLoading(true);
    const proj = allProjects.find(p => p.slug === slug);
    setProject(proj);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse space-y-8">
        <div className="h-10 bg-slate-100 rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 h-[350px] bg-slate-100 rounded-3xl"></div>
          <div className="md:col-span-4 h-60 bg-slate-100 rounded-3xl"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-heading">Project Showcase Not Found</h2>
        <p className="text-bodyText">The installation report you requested does not exist.</p>
        <Link to="/projects" className="text-primary font-bold hover:underline">
          Back to Projects List
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center text-xs font-bold text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Completed Projects
        </Link>
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left main text details */}
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight leading-tight">
            {project.title}
          </h1>
          
          <div className="aspect-[16/9] bg-slate-800 rounded-3xl flex items-center justify-center text-white text-xs font-extrabold relative overflow-hidden shadow-card">
            {/* Fallback box */}
            <div className="z-10 bg-black/45 w-full h-full flex items-center justify-center p-6 text-center">
              Aditya Solar Case Study Photograph
            </div>
          </div>

          <div className="bg-white border border-borderLight rounded-3xl p-6 md:p-8 space-y-4 shadow-subtle leading-relaxed">
            <h3 className="text-lg font-bold text-heading">Project Execution & Narrative</h3>
            <p className="text-sm md:text-base text-bodyText whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </div>

        {/* Right side parameters card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-borderLight rounded-3xl p-6 shadow-subtle space-y-5">
            <h3 className="text-sm font-extrabold text-heading uppercase tracking-wider">
              Installation Metrics
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-[10px] text-bodyText uppercase font-semibold">Installed Capacity</span>
                  <span className="font-bold text-heading">{project.capacity}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <span className="block text-[10px] text-bodyText uppercase font-semibold">State / Location</span>
                  <span className="font-bold text-heading">{project.state}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <Calendar className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <span className="block text-[10px] text-bodyText uppercase font-semibold">Completion Date</span>
                  <span className="font-bold text-heading">{project.completion_date}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <Building className="w-5 h-5 text-warning shrink-0" />
                <div>
                  <span className="block text-[10px] text-bodyText uppercase font-semibold">Usage Sector</span>
                  <span className="font-bold text-heading">{project.category} Solar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sibling CTA */}
          <div className="bg-gradient-to-r from-primary to-primaryDark text-white rounded-3xl p-6 shadow-premium space-y-4">
            <h4 className="font-bold text-base">Request Similar Installation Quote</h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Want a similar solar setup for your facility? Request a free quote today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full py-3 bg-white text-primary font-bold rounded-xl text-xs shadow-md transition-premium"
            >
              Get Free Design Blueprints <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
