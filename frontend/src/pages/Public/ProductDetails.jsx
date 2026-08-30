import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { FileText, Shield, ArrowDownToLine, PhoneCall, CheckCircle, Sparkles } from "lucide-react";
import { products as allProducts } from "../../data/siteData";

const FORMSUBMIT_EMAIL = "adityasolar2112@gmail.com";

const ProductDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Quote Form state
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", state: "Rajasthan", bill: 3000,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load product from static data
    setLoading(true);
    const prod = allProducts.find(p => p.slug === slug);
    setProduct(prod);
    
    if (prod) {
      // Get related products from same category
      const related = allProducts.filter(p => p.category === prod.category && p._id !== prod._id).slice(0, 3);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [slug]);

  // Jump to Enquiry form if hash exists
  useEffect(() => {
    if (location.hash === "#enquire" && !loading) {
      const el = document.getElementById("enquire-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, loading]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name, phone: form.phone, email: form.email,
          city: form.city, state: form.state,
          monthly_bill: form.bill,
          product: product.title,
          _subject: `Product Enquiry: ${product.title}`,
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setSubmitSuccess(true);
      } else throw new Error("Failed");
    } catch {
      const body = encodeURIComponent(`Product: ${product.title}\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nBill: ₹${form.bill}`);
      window.location.href = `mailto:${FORMSUBMIT_EMAIL}?subject=Product+Enquiry:+${encodeURIComponent(product.title)}&body=${body}`;
      setSubmitSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-[400px] bg-slate-100 rounded-3xl"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-100 rounded w-1/4"></div>
            <div className="h-10 bg-slate-100 rounded w-3/4"></div>
            <div className="h-28 bg-slate-100 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-heading">Product Not Found</h2>
        <p className="text-bodyText">The product you requested does not exist or has been removed.</p>
        <Link to="/products" className="text-primary font-bold hover:underline">
          Back to Solar Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Product top showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Image Frame & Specs */}
        <div className="lg:col-span-6 space-y-8">
          <div className="w-full aspect-[4/3] rounded-3xl bg-white border border-borderLight flex items-center justify-center p-8 relative overflow-hidden shadow-card">
            {product.image_url ? (
              <img
                src={buildImageUrl(product.image_url)}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-48 h-48 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-extrabold text-center text-sm shadow-premium p-4 z-10">
                {product.title}
              </div>
            )}
            <div className="absolute top-4 left-4 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
              {product.category.replace("-", " ")}
            </div>
          </div>

          {/* Features list */}
          <div className="bg-white rounded-3xl border border-borderLight p-6 space-y-4 shadow-subtle">
            <h3 className="text-lg font-bold text-heading">Key Features & Engineering</h3>
            <ul className="space-y-3">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start text-sm text-bodyText">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0 mr-2.5 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Descriptions & Form */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight">
              {product.title}
            </h1>
            <p className="text-sm md:text-base text-bodyText leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications Table */}
          {Object.keys(product.specs).length > 0 && (
            <div className="bg-white rounded-3xl border border-borderLight overflow-hidden shadow-subtle">
              <div className="px-6 py-4 bg-bgLight border-b border-borderLight">
                <h3 className="text-sm font-extrabold text-heading uppercase tracking-wider">
                  Technical Specifications
                </h3>
              </div>
              <div className="divide-y divide-borderLight/60">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 px-6 py-3 text-xs md:text-sm">
                    <span className="font-bold text-heading">{key}</span>
                    <span className="text-bodyText">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Downloads section */}
          {product.downloads.length > 0 && (
            <div className="bg-white rounded-3xl border border-borderLight p-6 space-y-3.5 shadow-subtle">
              <h3 className="text-sm font-extrabold text-heading uppercase tracking-wider">
                Product Documents & Downloads
              </h3>
              <div className="space-y-2">
                {product.downloads.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    download
                    className="flex items-center justify-between p-3.5 rounded-xl border border-borderLight hover:border-primary/40 hover:bg-primary/5 group transition-premium"
                  >
                    <div className="flex items-center space-x-2.5">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-heading group-hover:text-primary">
                        {doc.name}
                      </span>
                    </div>
                    <ArrowDownToLine className="w-4 h-4 text-bodyText group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quote / Inquiry Request Form Segment */}
      <section id="enquire-form" className="max-w-4xl mx-auto bg-white rounded-3xl border border-borderLight shadow-card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Form left promo */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-primaryDark text-white p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Request a System Quote</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect with our engineer team to get customized designs, calculate loads, check structure weights, and calculate state subsidy credits.
              </p>
            </div>
            <div className="space-y-3.5 pt-6 md:pt-0">
              <div className="flex items-center text-xs font-bold">
                <Shield className="w-4 h-4 mr-2" /> Empaneled Subsidy Partner
              </div>
              <div className="flex items-center text-xs font-bold">
                <PhoneCall className="w-4 h-4 mr-2" /> Callback within 24 Hours
              </div>
            </div>
          </div>

          {/* Form Right Inputs */}
          <div className="md:col-span-8 p-6 md:p-8">
            {!submitSuccess ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h4 className="text-sm font-bold text-heading">
                  Enquire about: <span className="text-primary">{product.title}</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. rajesh@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">City</label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Noida"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">Avg Monthly Bill (₹)</label>
                    <input
                      type="number"
                      required
                      value={form.bill}
                      onChange={(e) => setForm({ ...form, bill: e.target.value })}
                      placeholder="e.g. 4500"
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-heading">State</label>
                    <select
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Maharashtra">Maharashtra</option>
                    </select>
                  </div>
                </div>

                {/* File bill upload removed — static build */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-primary hover:bg-primaryDark text-white font-extrabold rounded-xl text-sm transition-premium flex items-center justify-center shadow-premium"
                >
                  {submitting ? "Submitting Inquiry..." : "Submit Enquiry & Request Callback"}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-secondary mx-auto" />
                <h4 className="text-lg font-bold text-secondary">Enquiry Submitted Successfully!</h4>
                <p className="text-xs text-bodyText max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in <strong>{product.title}</strong>. A dedicated solar consultant will contact you at <strong>{form.phone}</strong> within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 border border-borderLight rounded-xl text-xs font-bold hover:bg-bgLight text-heading transition-premium"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Recommendations */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-lg font-extrabold text-heading">Related Products in Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <div
                key={p._id}
                className="bg-white border border-borderLight rounded-3xl p-5 hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-bgLight rounded-2xl flex items-center justify-center p-3 mb-4 overflow-hidden">
                    {p.image_url ? (
                      <img
                        src={buildImageUrl(p.image_url)}
                        alt={p.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-slate-800">{p.title}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-heading line-clamp-1">{p.title}</h3>
                  <p className="text-[11px] text-bodyText line-clamp-2 mt-1">{p.description}</p>
                </div>
                <div className="pt-4 border-t border-borderLight/60 mt-4 flex items-center justify-between">
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    View Specs
                  </Link>
                  <Link
                    to={`/products/${p.slug}#enquire`}
                    className="px-3 py-1 bg-bgLight text-[10px] font-bold rounded-lg border hover:bg-primary hover:text-white transition-premium"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
