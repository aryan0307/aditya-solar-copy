import React from "react";
import { Link } from "react-router-dom";
import { Sun, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "../assets/ref-images/img1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-bgLight flex items-center overflow-hidden pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-primary/10 text-xs font-extrabold text-primary uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 text-primary" />
            <span>India's Approved Solar Partner</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading leading-[1.1] tracking-tight">
            Power Your Future with Clean <span className="text-primary">Smart Solar</span> Energy
          </h1>

          <p className="text-base sm:text-lg text-bodyText leading-relaxed">
            Trusted solar energy solutions for homes, businesses, industries, and agriculture across Kota and Rajasthan with more than 2300 kW installed capacity and 180+ successful projects.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/calculator"
              className="px-8 py-3.5 cta-gradient text-white font-bold rounded-xl text-center transition-premium"
            >
              Calculate Solar Savings
            </Link>
            <Link
              to="/products"
              className="px-8 py-3.5 bg-white text-heading font-bold rounded-xl text-center border border-borderLight hover:bg-bgLight transition-premium"
            >
              Explore Solar Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-borderLight/60">
            {[
              "180+ Projects",
              "2300+ kW Installed",
              "Govt. Empaneled Subsidy",
              "25-Year Panel Warranty"
            ].map((badge, index) => (
              <div key={index} className="flex items-center space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                  <CheckCircle className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-heading">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center relative">
          <div className="w-full max-w-lg aspect-square rounded-2xl overflow-hidden bg-bgLight shadow-card border border-borderLight flex items-center justify-center relative">
            <img src={heroImage} alt="Aditya Solar Kota Hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-heading/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
