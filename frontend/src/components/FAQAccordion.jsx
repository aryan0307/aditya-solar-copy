import React, { useState, useEffect } from "react";
import { ChevronDown, Search, CircleHelp } from "lucide-react";
import { faqs as allFaqs } from "../data/siteData";

const FAQAccordion = ({ category = null, limit = null }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    // Load FAQs from static data
    let filtered = [...allFaqs];
    if (category) {
      filtered = filtered.filter(faq => faq.category === category);
    }
    setFaqs(filtered);
    setLoading(false);
  }, [category]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  if (loading) {
    return (
      <div className="space-y-4 py-8 max-w-3xl mx-auto">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-16 bg-bgLight rounded-2xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 w-5 h-5 text-bodyText/60" />
        <input
          type="text"
          placeholder="Search solar system questions (e.g. subsidy, net-metering, batteries)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-borderLight bg-white text-heading text-sm font-semibold focus:outline-none focus:border-primary shadow-subtle"
        />
      </div>

      {/* Accordion List */}
      {displayFaqs.length > 0 ? (
        <div className="space-y-3.5">
          {displayFaqs.map((faq) => {
            const isExpanded = expandedId === faq._id;
            return (
              <div
                key={faq._id}
                className={`bg-white rounded-2xl border transition-premium overflow-hidden ${
                  isExpanded
                    ? "border-primary/40 shadow-premium"
                    : "border-borderLight hover:border-primary/20 hover:shadow-subtle"
                }`}
              >
                {/* FAQ Header Clickable Button */}
                <button
                  onClick={() => toggleExpand(faq._id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4"
                >
                  <span className="text-sm md:text-base font-bold text-heading leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-bgLight flex items-center justify-center text-heading transition-premium ${
                      isExpanded ? "bg-primary text-white rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* FAQ Content Panel */}
                <div
                  className={`transition-premium duration-300 ease-in-out ${
                    isExpanded ? "max-h-[500px] border-t border-borderLight" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-sm md:text-base text-bodyText leading-relaxed bg-bgLight/40 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-2xl border border-borderLight">
          <p className="text-bodyText font-medium text-sm">
            No questions matched your search query. Try other keywords or ask our team.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
