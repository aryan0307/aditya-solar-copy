import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Zap, ArrowRight, ClipboardList } from "lucide-react";
import { projects as allProjects } from "../../data/siteData";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const categoryFilter = searchParams.get("category") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    // Filter projects locally
    setLoading(true);
    
    let filtered = [...allProjects];
    
    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Pagination
    const limit = 6;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    const paginated = filtered.slice(startIdx, endIdx);
    
    setProjects(paginated);
    setTotalPages(pages);
    setLoading(false);
  }, [categoryFilter, page]);

  const handleCategorySelect = (slug) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    if (slug) {
      newParams.set("category", slug);
    } else {
      newParams.delete("category");
    }
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Completed Solar Projects</h1>
        <p className="text-sm text-bodyText">
          Explore case studies of rooftop installations completed across residential houses, schools, farm facilities, and heavy industrial sheds.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center space-x-2 border-b border-borderLight/60 pb-2.5 overflow-x-auto scrollbar-none">
        {[
          { name: "All Solutions", value: "" },
          { name: "Residential Solar", value: "Residential" },
          { name: "Commercial & Office", value: "Commercial" },
          { name: "Heavy Industrial", value: "Industrial" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleCategorySelect(tab.value)}
            className={`px-5 py-2 text-xs font-bold rounded-xl border transition-premium shrink-0 ${
              categoryFilter === tab.value
                ? "bg-primary border-primary text-white shadow-premium"
                : "bg-white border-borderLight text-bodyText hover:border-primary/20 hover:text-primary"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white border border-borderLight rounded-3xl h-96 animate-pulse p-6 space-y-6">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl"></div>
              <div className="h-6 bg-slate-100 rounded w-2/3"></div>
              <div className="h-10 bg-slate-100 rounded"></div>
            </div>
          ))}
        </div>
      ) : projects.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj._id}
                className="bg-white border border-borderLight rounded-3xl overflow-hidden hover-lift flex flex-col justify-between"
              >
                {/* Visual placeholder */}
                <div className="aspect-[4/3] bg-bgLight flex items-center justify-center p-4 border-b border-borderLight/60 relative overflow-hidden">
                  <span className="absolute bottom-3 left-3 bg-heading text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider z-10">
                    {proj.category}
                  </span>
                  {proj.image_url ? (
                    <img
                      src={proj.image_url}
                      alt={proj.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-slate-700 rounded-xl flex items-center justify-center text-white font-extrabold text-center text-xs p-2 shadow-premium">
                      {proj.title}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-[10px] font-bold text-secondary uppercase">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Capacity: {proj.capacity}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-heading mt-1 line-clamp-1">
                      {proj.title}
                    </h3>
                    <div className="flex items-center text-xs text-bodyText mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-primary mr-1" />
                      <span>{proj.state}</span>
                    </div>
                    <p className="text-xs text-bodyText line-clamp-3 mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-borderLight/60">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="text-xs font-bold text-primary hover:underline flex items-center"
                    >
                      View Details & Case Study <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.set("page", (i + 1).toString());
                    setSearchParams(newParams);
                  }}
                  className={`w-9 h-9 rounded-xl border text-xs font-bold transition-premium ${
                    page === i + 1
                      ? "bg-primary border-primary text-white shadow-premium"
                      : "bg-white border-borderLight text-heading hover:bg-bgLight"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-borderLight">
          <p className="text-sm font-semibold text-bodyText">
            No projects found matching these criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
