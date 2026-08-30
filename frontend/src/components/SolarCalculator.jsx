import React, { useState, useEffect } from "react";
import { Calculator, ShieldCheck, Leaf, Sparkles, TrendingUp } from "lucide-react";

const FORMSUBMIT_EMAIL = "adityasolar2112@gmail.com";

const SolarCalculator = ({ inline = false }) => {
  const [bill, setBill] = useState(3000);
  const [propertyType, setPropertyType] = useState("Residential");
  const [roofArea, setRoofArea] = useState(250);
  const [state, setState] = useState("Rajasthan");

  const [plantSize, setPlantSize] = useState(3);
  const [estimatedCost, setEstimatedCost] = useState(180000);
  const [subsidy, setSubsidy] = useState(78000);
  const [netCost, setNetCost] = useState(102000);
  const [annualSavings, setAnnualSavings] = useState(32400);
  const [payback, setPayback] = useState(3.15);
  const [roi, setRoi] = useState(31.76);
  const [co2Offset, setCo2Offset] = useState(3.6);

  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "" });

  const statesOfIndia = [
    "Andhra Pradesh","Bihar","Delhi NCR","Gujarat","Haryana",
    "Karnataka","Maharashtra","Punjab","Rajasthan","Tamil Nadu",
    "Telangana","Uttar Pradesh","West Bengal",
  ];

  useEffect(() => {
    const calculatedSize = Math.max(1, Math.round((bill / 900) * 10) / 10);
    const maxKWRoof = Math.floor(roofArea / 100);
    const recommendedKW = Math.max(1, Math.min(calculatedSize, maxKWRoof > 0 ? maxKWRoof : 1));
    setPlantSize(recommendedKW);

    let unitCost = 60000;
    if (recommendedKW === 1) unitCost = 65000;
    else if (recommendedKW === 2) unitCost = 62000;
    else if (recommendedKW >= 5) unitCost = 55000;
    const cost = recommendedKW * unitCost;
    setEstimatedCost(cost);

    let calcSubsidy = 0;
    if (propertyType === "Residential") {
      if (recommendedKW === 1) calcSubsidy = 30000;
      else if (recommendedKW === 2) calcSubsidy = 60000;
      else if (recommendedKW >= 3) calcSubsidy = 78000;
    }
    setSubsidy(calcSubsidy);

    const net = cost - calcSubsidy;
    setNetCost(net);

    const annualUnits = recommendedKW * 1460;
    const yearlySavings = annualUnits * 7.5;
    const realYearlySav = Math.min(yearlySavings, bill * 12);
    setAnnualSavings(Math.round(realYearlySav));

    if (realYearlySav > 0) {
      setPayback(Math.round((net / realYearlySav) * 100) / 100);
      setRoi(Math.round((realYearlySav / net) * 100 * 100) / 100);
    } else {
      setPayback(0);
      setRoi(0);
    }
    setCo2Offset(Math.round(recommendedKW * 1.2 * 10) / 10);
  }, [bill, propertyType, roofArea]);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone || !leadForm.email) {
      alert("Please fill all contact fields.");
      return;
    }
    setLeadLoading(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          phone: leadForm.phone,
          email: leadForm.email,
          _subject: `Solar Calculator Quote — ${plantSize}kW ${propertyType}`,
          message: `Calculator Recommendation: ${plantSize}kW ${propertyType} Solar\nEstimated Cost: ₹${estimatedCost.toLocaleString()}\nSubsidy: ₹${subsidy.toLocaleString()}\nNet Cost: ₹${netCost.toLocaleString()}\nAnnual Savings: ₹${annualSavings.toLocaleString()}\nState: ${state}\nMonthly Bill: ₹${bill.toLocaleString()}`,
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setLeadSubmitted(true);
      } else {
        throw new Error("Failed");
      }
    } catch {
      // Fallback mailto
      const body = encodeURIComponent(
        `Name: ${leadForm.name}\nPhone: ${leadForm.phone}\nSystem: ${plantSize}kW ${propertyType}\nState: ${state}\nMonthly Bill: ₹${bill}`
      );
      window.location.href = `mailto:${FORMSUBMIT_EMAIL}?subject=Solar+Calculator+Quote&body=${body}`;
      setLeadSubmitted(true);
    } finally {
      setLeadLoading(false);
    }
  };

  return (
    <div className={`w-full ${inline ? "" : "max-w-6xl mx-auto"} bg-white rounded-3xl border border-borderLight shadow-card overflow-hidden`}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Inputs */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-bgLight border-r border-borderLight">
          <div className="flex items-center space-x-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading">Savings Configurator</h3>
              <p className="text-xs text-bodyText">Adjust sliders to fit your roof & bills</p>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-heading">Monthly Electricity Bill</label>
                <span className="text-base font-extrabold text-primary">₹{bill.toLocaleString()}</span>
              </div>
              <input type="range" min="500" max="50000" step="500" value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-2 bg-bgLight rounded-lg appearance-none cursor-pointer accent-primary" />
              <div className="flex justify-between text-[10px] text-bodyText mt-1">
                <span>₹500</span><span>₹25,000</span><span>₹50,000+</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-heading">Available Roof Space</label>
                <span className="text-base font-extrabold text-primary">{roofArea} Sq.Ft.</span>
              </div>
              <input type="range" min="100" max="5000" step="50" value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2 bg-bgLight rounded-lg appearance-none cursor-pointer accent-primary" />
              <div className="flex justify-between text-[10px] text-bodyText mt-1">
                <span>100 sq.ft. (1kW)</span><span>2,500 sq.ft.</span><span>5,000 sq.ft.</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-heading mb-2">Property Type</label>
              <div className="grid grid-cols-3 gap-2">
                {["Residential","Commercial","Industrial"].map((type) => (
                  <button key={type} type="button" onClick={() => setPropertyType(type)}
                    className={`py-2 px-1 text-xs font-bold rounded-xl border text-center transition-premium ${
                      propertyType === type
                        ? "bg-primary border-primary text-white shadow-premium"
                        : "bg-white border-borderLight text-bodyText hover:border-primary/40 hover:text-primary"
                    }`}>
                    {type}
                  </button>
                ))}
              </div>
              {propertyType !== "Residential" && (
                <p className="text-[10px] text-warning font-semibold mt-1.5">
                  * Note: Govt. subsidies apply to residential installations only.
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-heading mb-1.5">Your State</label>
              <select value={state} onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-borderLight bg-white text-heading text-sm font-semibold focus:outline-none focus:border-primary">
                {statesOfIndia.map((st) => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
          </form>
        </div>

        {/* Right Output */}
        <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-extrabold text-heading uppercase tracking-wider text-primary mb-4">
              Recommended Solar Solution
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-bgLight rounded-2xl p-4 border border-borderLight/60">
                <span className="text-xs text-bodyText font-medium block">System Size</span>
                <span className="text-xl md:text-2xl font-extrabold text-heading">{plantSize} kWp</span>
              </div>
              <div className="bg-bgLight rounded-2xl p-4 border border-borderLight/60">
                <span className="text-xs text-bodyText font-medium block">Estimated Cost</span>
                <span className="text-xl md:text-2xl font-extrabold text-heading">₹{estimatedCost.toLocaleString()}</span>
              </div>
              <div className="bg-bgLight rounded-2xl p-4 border border-borderLight/60 col-span-2 sm:col-span-1">
                <span className="text-xs text-bodyText font-medium block">Govt. Subsidy</span>
                <span className="text-xl md:text-2xl font-extrabold text-secondary">
                  {subsidy > 0 ? `₹${subsidy.toLocaleString()}` : "No Subsidy"}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-5 border border-primary/10 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-heading font-extrabold uppercase tracking-wider block mb-1">Net Investment Cost</span>
                <span className="text-3xl font-extrabold text-heading">₹{netCost.toLocaleString()}</span>
                <p className="text-[10px] text-bodyText mt-1">* Includes panels, inverter, structures & net-metering setup</p>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-xs text-bodyText font-medium block">Estimated Payback</span>
                <span className="text-2xl font-extrabold text-primary flex items-center justify-end">
                  <TrendingUp className="w-5 h-5 mr-1 text-secondary" />
                  {payback} Years
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-sm font-semibold text-heading">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>ROI: <span className="text-primary font-bold">{roi}% / Year</span></span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-heading">
                <Leaf className="w-5 h-5 text-accent shrink-0" />
                <span>CO2 Offset: <span className="text-accent font-bold">{co2Offset} Tons / Yr</span></span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-heading">
                <Sparkles className="w-5 h-5 text-warning shrink-0" />
                <span>Yearly Savings: <span className="text-heading font-bold">₹{annualSavings.toLocaleString()}</span></span>
              </div>
            </div>
          </div>

          <div className="border-t border-borderLight pt-6">
            {!leadSubmitted ? (
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <h5 className="text-sm font-bold text-heading mb-2">
                  Email this detailed quotation & claim your subsidy:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input type="text" placeholder="Your Name" required value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
                  <input type="tel" placeholder="Phone Number" required value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
                  <input type="email" placeholder="Email Address" required value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="px-4 py-2.5 rounded-xl border border-borderLight text-sm text-heading bg-bgLight focus:outline-none focus:border-primary" />
                </div>
                <button type="submit" disabled={leadLoading}
                  className="w-full py-3 cta-gradient text-white font-bold rounded-xl text-sm transition-premium flex items-center justify-center shadow-premium">
                  {leadLoading ? "Saving Quote..." : "Book Free Roof Inspection & Submit Quote"}
                </button>
              </form>
            ) : (
              <div className="bg-sectionLight rounded-2xl p-4 border border-secondary/20 text-center animate-fade-in">
                <h5 className="text-base font-bold text-secondary mb-1">✓ Quote Submitted Successfully!</h5>
                <p className="text-xs text-bodyText">
                  Our engineering team will contact you at <strong>{leadForm.phone}</strong> within 24 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
