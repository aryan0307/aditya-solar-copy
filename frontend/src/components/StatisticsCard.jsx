import React from "react";
import { motion } from "framer-motion";

const StatisticsCard = ({ value, label, icon: Icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {Icon && (
        <div className={`w-16 h-16 mx-auto rounded-2xl ${color} flex items-center justify-center mb-4 shadow-premium`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="block text-3xl md:text-4xl font-extrabold text-heading">{value}</span>
      </motion.div>
      <span className="block text-xs font-bold text-bodyText uppercase tracking-wider mt-1">{label}</span>
    </motion.div>
  );
};

export default StatisticsCard;
