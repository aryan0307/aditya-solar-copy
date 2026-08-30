import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Wrench, ShieldAlert, Award, ArrowRight, Check } from "lucide-react";
import { services as allServices } from "../../data/siteData";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load services from static data
    setServices(allServices);
    setLoading(false);
  }, []);

  const defaultServices = [
    {
      name: "Solar Engineering & Consulting",
      description: "Custom engineering, rooftop assessment, shading analysis, shadow simulation, and complete ROI-based technical design proposals for your premises.",
      features: ["3D Shadow path modeling", "Financial payback reports", "Subsidy application documentation guidance"],
      icon: "clipboard-list"
    },
    {
      name: "Professional Rooftop Installation",
      description: "End-to-end site preparation, module mounting, structural anchoring, inverter installation, and net-metering integration by certified solar technicians.",
      features: ["Certified structural safety designs", "Double-insulated DC wiring", "Net-metering connection execution"],
      icon: "wrench"
    },
    {
      name: "Annual Maintenance Contracts (AMC)",
      description: "Keep your solar systems running at peak yield with regular checkups, professional dust washing, thermal diagnostics, and wiring testing.",
      features: ["Quarterly safety checkups", "Professional panel pressure washing", "Detailed production report comparison"],
      icon: "shield-check"
    }
  ];

  const servicesToRender = services.length > 0 ? services : defaultServices;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Our Engineering & Solar Services</h1>
        <p className="text-sm md:text-base text-bodyText">
          We handle the entire process from structural engineering, discom net-metering approvals, to annual maintenance washing.
        </p>
      </section>

      {/* Services Grid cards */}
      {loading && services.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white border border-borderLight rounded-3xl h-80 animate-pulse"></div>
          ))}
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesToRender.map((srv, idx) => (
            <div key={idx} className="bg-white border border-borderLight rounded-3xl p-6 shadow-subtle flex flex-col justify-between hover-lift">
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {srv.icon === "clipboard-list" || idx === 0 ? (
                    <ClipboardList className="w-6 h-6" />
                  ) : srv.icon === "wrench" || idx === 1 ? (
                    <Wrench className="w-6 h-6" />
                  ) : (
                    <Award className="w-6 h-6 text-secondary" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading">{srv.name}</h3>
                  <p className="text-xs text-bodyText leading-relaxed mt-2">{srv.description}</p>
                </div>
                <ul className="space-y-2 pt-2 border-t border-borderLight/60">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center text-xs text-bodyText">
                      <Check className="w-4 h-4 text-secondary mr-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                >
                  Book Service Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* AMC SLA Info Frame */}
      <section className="max-w-4xl mx-auto bg-heading text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-premium relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-primary uppercase tracking-wider block">Peak Yield Guarantees</span>
          <h2 className="text-xl md:text-2xl font-bold">Annual Maintenance Contract Packages</h2>
          <p className="text-xs text-white/60 leading-relaxed">
            Dust, pollen, and leaves reduce your panel generation efficiency by up to 25% if left unwashed. Our AMC packages guarantee peak electricity generation and keep your systems compliant with safety parameters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#4a3620]">
          <div className="bg-[#1a1000] border border-[#4a3620] p-4 rounded-2xl">
            <span className="text-xs text-white/60 block">Residential AMC</span>
            <span className="text-lg font-bold text-white block mt-1">₹4,999 / Year</span>
            <span className="text-[10px] text-white/50">Includes 4 washings, terminal diagnostics</span>
          </div>
          <div className="bg-[#1a1000] border border-[#4a3620] p-4 rounded-2xl">
            <span className="text-xs text-white/60 block">Commercial AMC</span>
            <span className="text-lg font-bold text-white block mt-1">₹12,499 / Year</span>
            <span className="text-[10px] text-white/50">Includes 6 washings, thermal checkups</span>
          </div>
          <div className="bg-[#1a1000] border border-[#4a3620] p-4 rounded-2xl">
            <span className="text-xs text-white/60 block">Industrial AMC</span>
            <span className="text-lg font-bold text-white block mt-1">Custom Slabs</span>
            <span className="text-[10px] text-white/50">Includes 12 washings, safety audits</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
