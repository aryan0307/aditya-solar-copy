import React from "react";
import { Link } from "react-router-dom";
import { Info, HelpCircle, FileCheck, ArrowRight, ShieldCheck } from "lucide-react";

const GovSubsidy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Government Solar Subsidy Guide</h1>
        <p className="text-sm md:text-base text-bodyText">
          Learn how to claim up to ₹78,000 in central financial assistance under the PM Surya Ghar Muft Bijli Yojana (2026).
        </p>
      </section>

      {/* Subsidy Table Card */}
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-borderLight shadow-card overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primaryDark text-white p-6">
          <h2 className="text-lg font-bold">PM Surya Ghar Subsidy Structures</h2>
          <p className="text-xs text-white/80">Direct financial assistance rates for residential rooftops</p>
        </div>
        <div className="divide-y divide-borderLight">
          <div className="grid grid-cols-3 px-6 py-4 text-xs md:text-sm font-bold bg-bgLight text-heading">
            <span>Rooftop Solar Capacity</span>
            <span>Estimated Plant Cost</span>
            <span>Government Subsidy Amount</span>
          </div>
          <div className="grid grid-cols-3 px-6 py-4 text-xs md:text-sm text-bodyText">
            <span className="font-semibold text-heading">1 kWp System</span>
            <span>₹60,000 - ₹65,000</span>
            <span className="text-secondary font-bold">₹30,000</span>
          </div>
          <div className="grid grid-cols-3 px-6 py-4 text-xs md:text-sm text-bodyText">
            <span className="font-semibold text-heading">2 kWp System</span>
            <span>₹1,20,000 - ₹1,25,000</span>
            <span className="text-secondary font-bold">₹60,000</span>
          </div>
          <div className="grid grid-cols-3 px-6 py-4 text-xs md:text-sm text-bodyText">
            <span className="font-semibold text-heading">3 kWp to 10 kWp System</span>
            <span>₹1,80,000 - ₹5,50,000</span>
            <span className="text-secondary font-bold">₹78,000 (Maximum Caped)</span>
          </div>
        </div>
        <div className="p-4 bg-bgLight border-t border-borderLight flex items-center space-x-2 text-[10px] sm:text-xs text-bodyText">
          <Info className="w-4 h-4 text-primary shrink-0" />
          <span>Note: Subsidies are only applicable to residential connections using DCR (Domestic Content Requirement) panels manufactured in India.</span>
        </div>
      </section>

      {/* DCR panels & requirements */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-heading">What is the Domestic Content Requirement (DCR)?</h2>
          <p className="text-xs md:text-sm text-bodyText leading-relaxed">
            To support domestic solar manufacturing, the Ministry of New and Renewable Energy (MNRE) mandates that any residential rooftop solar installation claiming a government subsidy must utilize solar panels made inside India.
          </p>
          <p className="text-xs md:text-sm text-bodyText leading-relaxed">
            Aditya Solar supplies fully certified DCR Monocrystalline PERC modules that comply with these MNRE parameters. We make sure all serial numbers are logged into the national solar portal for direct audit.
          </p>
        </div>
        <div className="bg-bgLight p-6 rounded-3xl border border-borderLight space-y-4">
          <h3 className="text-sm font-extrabold text-heading uppercase tracking-wider">How to Apply for Subsidy:</h3>
          <div className="space-y-3">
            {[
              "1. Submit roof dimension & discom details on pmsuryaghar.gov.in portal.",
              "2. Select Aditya Solar as your registered empaneled channel partner.",
              "3. We complete technical layouts, mounting structures, and net-meter wiring.",
              "4. Discom engineers conduct site integration tests and install net-meters.",
              "5. Subsidy is disbursed directly to your bank account within 30 days."
            ].map((step, idx) => (
              <div key={idx} className="flex items-start text-xs font-semibold text-heading">
                <FileCheck className="w-4.5 h-4.5 text-primary mr-2 shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy CTA */}
      <section className="max-w-4xl mx-auto bg-gradient-to-tr from-secondary/15 to-primary/10 border border-secondary/20 rounded-3xl p-6 text-center space-y-4">
        <h3 className="text-lg font-bold text-heading">Compute Sizing & Estimate Subsidy</h3>
        <p className="text-xs text-bodyText max-w-xl mx-auto">
          Need help sizing your roof? Use our configurator calculator to see recommended kilowatts, panel weights, structural sizes, and estimated subsidy amounts.
        </p>
        <Link
          to="/calculator"
          className="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-premium hover:bg-primaryDark transition-premium"
        >
          Open Solar Calculator <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </section>
    </div>
  );
};

export default GovSubsidy;
