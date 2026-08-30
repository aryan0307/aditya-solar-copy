import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-borderLight/60 rounded-3xl p-6 shadow-subtle flex flex-col justify-between space-y-6"
    >
      <div className="space-y-4">
        <div className="flex text-yellow-400 text-sm">
          {"★".repeat(testimonial.rating)}
          {"☆".repeat(5 - testimonial.rating)}
        </div>
        <p className="text-xs md:text-sm text-bodyText italic leading-relaxed">
          "{testimonial.review}"
        </p>
      </div>
      
      <div className="flex items-center space-x-3 pt-4 border-t border-borderLight/60">
        <div className="w-10 h-10 rounded-full bg-bgLight text-bodyText flex items-center justify-center font-bold text-xs uppercase shadow-inner shrink-0">
          {testimonial.name[0]}
        </div>
        <div>
          <span className="block text-sm font-bold text-heading">
            {testimonial.name}
          </span>
          <span className="block text-[10px] text-bodyText">
            {testimonial.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
