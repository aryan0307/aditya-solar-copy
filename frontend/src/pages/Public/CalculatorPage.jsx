import React from "react";
import SolarCalculator from "../../components/SolarCalculator";

const CalculatorPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Solar Savings Calculator</h1>
        <p className="text-sm text-bodyText">
          Calculate your electricity savings, system size recommendations, payback periods, and central capital subsidies under the PM Surya Ghar scheme rules.
        </p>
      </div>

      <div className="py-6">
        <SolarCalculator />
      </div>
      
      {/* Information row */}
      <section className="bg-white border border-borderLight rounded-3xl p-6 md:p-8 space-y-4 max-w-4xl mx-auto shadow-subtle text-sm leading-relaxed">
        <h3 className="text-base font-bold text-heading">How the calculations work:</h3>
        <p className="text-bodyText">
          <strong>1. Solar System Sizing:</strong> Sizing is calculated based on daily utility electricity usage. A 1 kWp system in North India requires approximately 100 square feet of shadow-free rooftop space and produces an average of 4 units (kWh) of electricity daily.
        </p>
        <p className="text-bodyText">
          <strong>2. Payback Period:</strong> The payback duration represents the time needed to recoup the net out-of-pocket investment. Typical residential systems achieve complete payback in 3 to 4 years, followed by 21+ years of free electricity generation.
        </p>
        <p className="text-bodyText">
          <strong>3. Carbon Offsets:</strong> A 1 kWp solar plant offsets approximately 1.2 tons of carbon dioxide emission annually. Transitioning to solar is the equivalent of planting 15 mature trees per kilowatt installed.
        </p>
      </section>
    </div>
  );
};

export default CalculatorPage;
