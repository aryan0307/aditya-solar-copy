import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-borderLight rounded-3xl overflow-hidden hover-lift flex flex-col justify-between">
      <div className="aspect-[4/3] bg-bgLight flex items-center justify-center p-6 border-b border-borderLight/60 relative hover-zoom">
        {product.featured && (
          <span className="absolute top-4 left-4 bg-primaryGreen text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Featured
          </span>
        )}
        <div className="w-36 h-36 bg-gradient-to-br from-heading to-[#1a1000] rounded-2xl flex items-center justify-center text-white font-extrabold text-center text-sm shadow-card">
          {product.title}
        </div>
      </div>
      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            {product.category.replace("-", " ")}
          </span>
          <h3 className="text-xl font-extrabold text-textDark mt-2 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-bodyText line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        <div className="pt-6 border-t border-borderLight/60 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="text-sm font-bold text-primary hover:underline flex items-center"
          >
            View Details <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to={`/products/${product.slug}#enquire`}
            className="px-5 py-2.5 bg-bgLight hover:bg-primary hover:text-white rounded-xl text-sm font-bold text-textDark transition-all duration-300 border border-borderLight"
          >
            Quick Inquiry
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
