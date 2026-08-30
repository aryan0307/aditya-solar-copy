import React from "react";
import { Award, Leaf, Zap, ShieldCheck, Sun } from "lucide-react";
import teamImage from "../../assets/ref-images/team.jpg";

const About = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 border-b border-borderLight/60">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading">About Aditya Solar Kota</h1>
          <p className="text-sm sm:text-base md:text-lg text-bodyText max-w-2xl mx-auto leading-relaxed">
            Leading solar energy solution provider in Kota Rajasthan with over 2300 kW of installed capacity across 180+ successful projects in the Hadoti region.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-heading">Our Mission & Corporate Vision</h2>
          <p className="text-sm md:text-base text-bodyText leading-relaxed">
            Aditya Solar Kota is one of the leading solar energy solution providers in Kota Rajasthan. With over 2300 kW of installed capacity across 180+ successful projects in the Hadoti region, the company has earned a strong reputation for delivering reliable, efficient, and cost-effective solar solutions. The company provides rooftop solar systems, hybrid systems, on-grid systems, off-grid systems, solar inverters, batteries, and complete solar solutions for residential, commercial, industrial, and agricultural customers.
          </p>
          <div className="space-y-3.5 pt-2">
            <div className="flex items-start space-x-3 text-sm font-semibold text-heading">
              <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
              <span>100% Empaneled component arrays matching DCR rules.</span>
            </div>
            <div className="flex items-start space-x-3 text-sm font-semibold text-heading">
              <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
              <span>Zero-corruption subsidy approval processing support.</span>
            </div>
            <div className="flex items-start space-x-3 text-sm font-semibold text-heading">
              <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">✓</div>
              <span>Certified structural engineer checks for heavy wind parameters.</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-primary to-hoverBlue rounded-3xl overflow-hidden relative aspect-[4/3] flex items-center justify-center">
          <img src={teamImage} alt="Aditya Solar Kota Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-heading/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-lg font-bold">2300+ kW Installed Capacity</h3>
            <p className="text-xs text-white/90 leading-relaxed mt-1">
              180+ successful projects across Kota and Rajasthan region
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-bgLight border-t border-b border-borderLight/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-heading text-center">Our Core Operating Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-subtle space-y-3">
              <Award className="text-primary w-8 h-8" />
              <h3 className="text-sm font-bold text-heading">Quality Tier-1 Raw Elements</h3>
              <p className="text-xs text-bodyText leading-relaxed">
                We reject low-tier silicon wafer components. We use certified high-grade cells, holding performance quotients above 80% for 25 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-subtle space-y-3">
              <Zap className="text-secondary w-8 h-8" />
              <h3 className="text-sm font-bold text-heading">Safety First Wiring</h3>
              <p className="text-xs text-bodyText leading-relaxed">
                All DC connections are wired with UV-resistant XLPE double insulated cables, surge protective devices, and strict earthing pits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-subtle space-y-3">
              <ShieldCheck className="text-accent w-8 h-8" />
              <h3 className="text-sm font-bold text-heading">Hassle-free Net Metering</h3>
              <p className="text-xs text-bodyText leading-relaxed">
                No need to make runs to discom offices. Our administrative desks manage connection permissions, safety certificates, and billing updates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-borderLight shadow-subtle space-y-3">
              <Leaf className="text-warning w-8 h-8" />
              <h3 className="text-sm font-bold text-heading">Long Term Yield Care</h3>
              <p className="text-xs text-bodyText leading-relaxed">
                Our operations don't end after mounting. With our AMC contracts, we provide annual thermal inspections, pressure washing checks, and wiring resets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-extrabold text-heading text-center">Discom Empanelment & Safety Licenses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { discom: "MNRE APPROVED", region: "Government of India", lic: "Reg #2018/CPL/24" },
            { discom: "RRECL APPROVED", region: "Rajasthan Renewable Energy", lic: "Emp. ID RJ/RRECL/SOLAR-502" },
            { discom: "RVVNL PARTNER", region: "Rajasthan Utilities", lic: "Grid Tie Integration lic #318" },
            { discom: "PM SURYA GHAR", region: "Government Subsidy Partner", lic: "Channel Partner ID #2026" }
          ].map((cert, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-borderLight text-center space-y-2">
              <span className="block text-xs font-extrabold text-primary">{cert.discom}</span>
              <span className="block text-[10px] text-heading uppercase tracking-wider font-semibold">{cert.region}</span>
              <span className="block text-[9px] text-bodyText">{cert.lic}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
