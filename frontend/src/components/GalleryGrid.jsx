import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Image as ImageIcon } from "lucide-react";

const GalleryGrid = ({ galleryItems }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter className="w-5 h-5 text-bodyText" />
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-premium ${
              activeFilter === filter.id
                ? "bg-primary text-white shadow-premium"
                : "bg-white text-bodyText border border-borderLight hover:bg-bgLight"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item._id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-bgLight border border-borderLight hover-lift"
          >
            <div className="aspect-[4/3] flex items-center justify-center p-4">
              <div className="w-full h-full bg-heading rounded-xl flex items-center justify-center text-white font-extrabold text-center text-xs p-2">
                <div className="flex flex-col items-center space-y-2">
                  <ImageIcon className="w-8 h-8" />
                  <span>{item.title || "Gallery Image"}</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-premium flex items-end p-4">
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-sm font-bold text-white">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="w-12 h-12 text-bodyText mx-auto mb-4" />
          <p className="text-bodyText text-sm">No gallery items found for this category</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
