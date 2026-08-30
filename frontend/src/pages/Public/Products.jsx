import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Sun, Zap, Sparkles } from "lucide-react";
import { products as allProducts, categories as allCategories } from "../../data/siteData";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories] = useState(allCategories);
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  
  // Params states
  const categoryFilter = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    // Simulate loading and filter products locally
    setLoading(true);
    
    let filtered = [...allProducts];
    
    // Filter by category
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }
    
    // Pagination
    const limit = 9;
    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    const paginated = filtered.slice(startIdx, endIdx);
    
    setProducts(paginated);
    setTotalProducts(total);
    setTotalPages(pages);
    setLoading(false);
  }, [categoryFilter, searchTerm, page]);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    if (query) {
      newParams.set("search", query);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Solar Product Catalogue</h1>
        <p className="text-sm md:text-base text-bodyText">
          We integrate Tier-1 solar systems, on-grid & off-grid smart inverter packages, and premium lithium iron phosphate batteries with long lifecycle warranties.
        </p>
      </div>

      {/* Filter Options & Search bar */}
      <div className="bg-white rounded-3xl border border-borderLight shadow-card p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-bodyText/60" />
          <input
            name="search"
            type="text"
            defaultValue={searchTerm}
            placeholder="Search solar panels, storage, batteries..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-borderLight bg-bgLight text-heading text-sm font-semibold focus:outline-none focus:border-primary"
          />
        </form>

        {/* Dynamic Category List Selector */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-thin">
          <button
            onClick={() => handleCategorySelect("")}
            className={`px-4 py-2 text-xs font-bold rounded-xl border transition-premium shrink-0 ${
              categoryFilter === ""
                ? "bg-primary border-primary text-white shadow-premium"
                : "bg-white border-borderLight text-bodyText hover:border-primary/30"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategorySelect(cat.slug)}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-premium shrink-0 ${
                categoryFilter === cat.slug
                  ? "bg-primary border-primary text-white shadow-premium"
                  : "bg-white border-borderLight text-bodyText hover:border-primary/30"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid Output */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white border border-borderLight rounded-3xl h-96 animate-pulse p-6 space-y-6">
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl"></div>
              <div className="h-6 bg-slate-100 rounded w-2/3"></div>
              <div className="h-10 bg-slate-100 rounded"></div>
            </div>
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod._id}
                className="bg-white border border-borderLight rounded-3xl overflow-hidden hover-lift flex flex-col justify-between"
              >
                {/* Image panel */}
                <div className="aspect-[4/3] bg-bgLight flex items-center justify-center p-4 border-b border-borderLight/60 relative overflow-hidden">
                  {prod.is_featured && (
                    <span className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest flex items-center z-10">
                      <Sparkles className="w-3 h-3 mr-1" /> Featured
                    </span>
                  )}
                  {prod.image_url ? (
                    <img
                      src={prod.image_url}
                      alt={prod.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-slate-900 rounded-xl flex items-center justify-center text-white font-extrabold text-center text-xs p-2 shadow-premium">
                      {prod.title}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                      {prod.category.replace("-", " ")}
                    </span>
                    <h3 className="text-base font-extrabold text-heading mt-1 line-clamp-1">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-bodyText line-clamp-3 mt-1 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-borderLight/60 flex items-center justify-between">
                    <Link
                      to={`/products/${prod.slug}`}
                      className="text-xs font-bold text-primary hover:underline flex items-center"
                    >
                      Specifications <SlidersHorizontal className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <Link
                      to={`/products/${prod.slug}#enquire`}
                      className="px-5 py-2.5 cta-gradient text-white rounded-xl text-xs font-bold transition-premium"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 pt-6">
              <button
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="px-4 py-2 rounded-xl border border-borderLight text-xs font-bold text-heading hover:bg-bgLight transition-premium disabled:opacity-40 disabled:hover:bg-transparent"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-9 h-9 rounded-xl border text-xs font-bold transition-premium ${
                    page === i + 1
                      ? "bg-primary border-primary text-white shadow-premium"
                      : "bg-white border-borderLight text-heading hover:bg-bgLight"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="px-4 py-2 rounded-xl border border-borderLight text-xs font-bold text-heading hover:bg-bgLight transition-premium disabled:opacity-40 disabled:hover:bg-transparent"
              >
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-borderLight">
          <p className="text-sm font-semibold text-bodyText">
            No products matched your filter or search search queries. Try other keyword selections.
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
