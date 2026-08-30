import React from "react";
import FAQAccordion from "../../components/FAQAccordion";

const FAQPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-heading">Frequently Asked Questions</h1>
        <p className="text-sm text-bodyText">
          Find fast answers regarding net-metering applications, central PM Surya Ghar capital subsidies, battery lifecycles, and on-grid / hybrid solar structures.
        </p>
      </div>

      <div className="py-6">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQPage;
