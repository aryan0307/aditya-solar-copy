import React, { useState, useEffect } from "react";
import { Image, Layers, Sparkles } from "lucide-react";
import { galleryItems as allGalleryItems } from "../../data/siteData";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    // Filter gallery items locally
    setLoading(true);
    
    let filtered = [...allGalleryItems];
    
    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    setItems(filtered);
    setLoading(false);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Installation Media Gallery</h1>
        <p className="text-sm text-bodyText">
          Explore actual solar installations, structural roof mounts, inverters configurations, and before/after comparisons from our active projects.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center space-x-2.5 overflow-x-auto py-2 border-b border-borderLight/60">
        {[
          { name: "All Media", value: "" },
          { name: "Completed Projects", value: "Projects" },
          { name: "Installations & Mounting", value: "Installations" },
          { name: "Before & After", value: "BeforeAfter" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            className={`px-5 py-2 text-xs font-bold rounded-xl border transition-premium shrink-0 ${
              activeCategory === tab.value
                ? "bg-primary border-primary text-white shadow-premium"
                : "bg-white border-borderLight text-bodyText hover:border-primary/20 hover:text-primary"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-bgLight rounded-2xl h-60 animate-pulse"></div>
          ))}
        </div>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-borderLight rounded-2xl overflow-hidden shadow-subtle group relative"
            >
              <div className="aspect-square bg-textDark flex items-center justify-center overflow-hidden relative">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-premium duration-400"
                  />
                ) : (
                  <div className="w-full h-full bg-textDark flex items-center justify-center text-white font-bold text-center text-xs p-4">
                    {item.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-textDark/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <span className="text-[9px] font-extrabold uppercase text-secondary tracking-widest block mb-0.5">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-white leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-borderLight">
          <p className="text-sm font-semibold text-bodyText">
            No gallery items found. Seed the database to view default setup images.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
