import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  ArrowRight,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  Wrench,
  ChevronRight,
  Leaf,
  Users,
  Building,
  Phone,
  ArrowUp,
  MessageSquare
} from "lucide-react";
import { products as allProducts, projects as allProjects, testimonials as allTestimonials, services as allServices, siteSettings } from "../../data/siteData";
import SolarCalculator from "../../components/SolarCalculator";
import heroImageStatic from "../../assets/image-1.png";


const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [services, setServices] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Load data from static files
    setFeaturedProducts(allProducts.filter(p => p.is_featured).slice(0, 3));
    setFeaturedProjects(allProjects.filter(p => p.is_featured).slice(0, 3));
    setTestimonials(allTestimonials.slice(0, 3));
    setServices(allServices);
    setSettings(siteSettings);
    setLoading(false);
  }, []);

  const categories = [
    { name: "Solar Panels", slug: "solar-panels", icon: Sun, count: "Mono & Poly Panels" },
    { name: "Hybrid Inverters", slug: "hybrid-inverters", icon: Zap, count: "Backup + Grid-Tie" },
    { name: "On-Grid Inverters", slug: "on-grid-inverters", icon: TrendingUp, count: "Subsidy Enabled" },
    { name: "Solar Batteries", slug: "solar-batteries", icon: ShieldCheck, count: "Lithium & Tubular" },
    { name: "Solar Pumps", slug: "solar-pumps", icon: Wrench, count: "5HP / 10HP Submersible" },
    { name: "Water Heaters", slug: "solar-water-heaters", icon: Sun, count: "ETC 300LPD / 500LPD" },
  ];

  const stats = [
    { number: "5000+", label: "Solar Installations" },
    { number: "10+", label: "Years Experience" },
    { number: "25", label: "Year Warranty" },
    { number: "98%", label: "Customer Satisfaction" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "Empaneled Partner", desc: "Fully approved by state discoms (DVVNL, PVVNL, BSES, etc. Seamless PM Surya Ghar subsidy process." },
    { icon: ShieldCheck, title: "25-Year Yield", desc: "Tier-1 high-efficiency monocrystalline DCR panels with strict linear power output retention warranties." },
    { icon: Leaf, title: "Custom Designs", desc: "3D shadow simulations using advanced software to analyze sun pathways on your rooftop before mounting." },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-24 pb-24">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-bgLight flex items-center overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-primaryGreen/5 blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div ref={(el) => (sectionRefs.current[0] = el)} className="section-reveal lg:col-span-6 space-y-8">

            <h1 className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold text-textDark leading-[1.05] tracking-tight">
              {settings.hero_heading || "Power Your Future with Clean & Smart Energy"}
            </h1>

            <p className="text-xl text-bodyText leading-relaxed">
              {settings.hero_description || "Transition to affordable, eco-friendly energy. Save up to 90% on electricity bills with PM Surya Ghar subsidies. Premium panels, hybrid backups, and net-metering."}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
              <Link to="/contact" className="cta-gradient text-white px-8 py-3.5 rounded-xl font-bold text-[15px] transition-premium">
                Get Free Quote
              </Link>
              <Link to="/products" className="px-8 py-3.5 bg-white text-textDark rounded-xl font-bold text-[15px] hover:bg-primary hover:text-white transition-premium border border-borderLight">
                Explore Catalogue
              </Link>
            </div>

            {/* Trust Stats - Neatly Below Heading */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <span className="block text-2xl md:text-3xl font-extrabold text-textDark">{stat.number}</span>
                  <span className="block text-xs font-semibold text-bodyText uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - PREMIUM HERO IMAGE */}
          <div ref={(el) => (sectionRefs.current[1] = el)} className="section-reveal lg:col-span-6 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-sectionAlt shadow-card border border-borderLight">
              <img 
                src={heroImageStatic}
                alt="Premium Solar Installation" 
                className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px]">
        <div ref={(el) => (sectionRefs.current[2] = el)} className="section-reveal bg-white rounded-3xl border border-borderLight shadow-card py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <span className="block text-4xl md:text-5xl font-extrabold text-textDark">{stat.number}</span>
              <span className="block text-sm font-bold text-bodyText uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-12">
        <div ref={(el) => (sectionRefs.current[3] = el)} className="section-reveal text-center max-w-3xl mx-auto space-y-4">
          <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-textDark">
            Why Choose Aditya Solar?
          </h2>
          <p className="text-bodyText text-lg">
            The trusted partner for over 5000 solar rooftops across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} ref={(el) => (sectionRefs.current[4 + index] = el)} className="section-reveal bg-white border border-borderLight rounded-3xl p-8 hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-textDark mb-3">{item.title}</h3>
                <p className="text-base text-bodyText leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-sectionAlt py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-12">
          <div ref={(el) => (sectionRefs.current[7] = el)} className="section-reveal flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-textDark">
                Explore Solar Products
              </h2>
              <p className="text-bodyText text-base mt-2">
                Premium solar components to power your home & business.
              </p>
            </div>
            <Link to="/products" className="text-primary font-bold hover:underline flex items-center text-base">
              View Full Catalog <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.slug} ref={(el) => (sectionRefs.current[8 + index] = el)} to={`/products?category=${cat.slug}`} className="section-reveal bg-white border border-borderLight hover:border-primary/30 rounded-3xl p-8 text-center hover-lift block">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="block text-sm font-extrabold text-textDark">{cat.name}</span>
                  <span className="block text-xs text-bodyText mt-2 uppercase tracking-widest font-semibold">{cat.count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-12">
        <div ref={(el) => (sectionRefs.current[14] = el)} className="section-reveal text-center max-w-3xl mx-auto space-y-4">
          <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-textDark">
            Featured Solar Systems
          </h2>
          <p className="text-bodyText text-lg">
            Our top-performing solar panels, hybrid inverters, and batteries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((prod, index) => (
            <div key={prod._id} ref={(el) => (sectionRefs.current[15 + index] = el)} className="section-reveal bg-white border border-borderLight rounded-3xl overflow-hidden hover-lift flex flex-col justify-between">
              <div className="aspect-[4/3] bg-bgLight flex items-center justify-center p-6 border-b border-borderLight/60 relative hover-zoom">
                {prod.image_url ? (
                  <img src={prod.image_url} alt={prod.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-36 h-36 bg-gradient-to-br from-heading to-[#1a1000] rounded-2xl flex items-center justify-center text-white font-extrabold text-center text-sm shadow-card">Product Image</div>
                )}
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{prod.category.replace("-", " ")}</span>
                  <h3 className="text-xl font-extrabold text-textDark mt-2 line-clamp-1">{prod.title}</h3>
                  <p className="text-sm text-bodyText line-clamp-2 mt-2 leading-relaxed">{prod.description}</p>
                </div>
                <div className="pt-6 border-t border-borderLight/60 flex items-center justify-between">
                  <Link to={`/products/${prod.slug}`} className="text-sm font-bold text-primary hover:underline flex items-center">
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link to={`/products/${prod.slug}#enquire`} className="px-5 py-2.5 bg-bgLight hover:bg-primary hover:text-white rounded-xl text-sm font-bold text-textDark transition-all border border-borderLight">Quick Inquiry</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLAR SOLUTIONS */}
      <section className="bg-heading text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-16">
          <div ref={(el) => (sectionRefs.current[18] = el)} className="section-reveal text-center max-w-3xl mx-auto space-y-4">
            <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-white">
              Custom Solar Solutions
            </h2>
            <p className="text-white/70 text-lg">
              Designed for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Residential Solar", desc: "Save up to 90% on electricity bills. Eligible for maximum PM Surya Ghar subsidies. Payback in 3-4 years." },
              { icon: Building, title: "Commercial Solar", desc: "Reduce overheads for offices, malls, showrooms. Claim 40% accelerated depreciation benefits." },
              { icon: Zap, title: "Industrial Solar", desc: "High load operations for manufacturing units and factories with remote monitoring systems." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} ref={(el) => (sectionRefs.current[19 + index] = el)} className="section-reveal bg-primary/20 border border-primary/30 rounded-3xl p-8 space-y-6">
                  <Icon className="w-12 h-12 text-primaryGreen" />
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLAR SAVINGS CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-10">
        <div ref={(el) => (sectionRefs.current[22] = el)} className="section-reveal text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold text-primary uppercase tracking-widest block">PM Surya Ghar Scheme</span>
          <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-textDark">Calculate Your Savings</h2>
          <p className="text-bodyText text-lg">
            Input your average utility bill to calculate sizing and savings estimates.</p>
        </div>

        <div ref={(el) => (sectionRefs.current[23] = el)} className="section-reveal">
          <SolarCalculator />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-sectionAlt py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px] space-y-12">
          <div ref={(el) => (sectionRefs.current[28] = el)} className="section-reveal text-center max-w-3xl mx-auto space-y-4">
            <h2 className="section-title inline-block text-3xl md:text-48px font-extrabold text-textDark">
              What Our Customers Say
            </h2>
            <p className="text-bodyText text-lg">
              Don't just take our word for it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={test._id || index} ref={(el) => (sectionRefs.current[29 + index] = el)} className="section-reveal bg-white border border-borderLight/60 rounded-3xl p-8 shadow-card flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(test.rating)}{"☆".repeat(5 - test.rating)}
                  </div>
                  <p className="text-base text-bodyText italic leading-relaxed">"{test.review}"</p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-borderLight/60">
                  <div className="w-12 h-12 rounded-full bg-bgLight text-bodyText flex items-center justify-center font-bold text-lg uppercase shadow-inner shrink-0">
                    {test.name[0]}
                  </div>
                  <div>
                    <span className="block text-base font-bold text-textDark">{test.name}</span>
                    <span className="block text-xs text-bodyText">{test.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[120px]">
        <div ref={(el) => (sectionRefs.current[32] = el)} className="section-reveal cta-gradient rounded-2xl p-10 md:p-16 text-white shadow-card relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 relative z-10 max-w-3xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Ready to Go Solar?
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Book your zero-cost site visit and roof analysis. Our engineers evaluate your electricity loads, structural feasibility, and provide instant net-metering blueprints.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-white text-primary font-extrabold text-[15px] rounded-xl hover:bg-bgLight transition-premium">
              Get Free Site Visit <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

       
    </div>
  );
};

export default Home;
