"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "25+",
    label: "Years Experience",
  },
  {
    value: "5000+",
    label: "Industrial Clients",
  },
  {
    value: "100%",
    label: "Quality Assurance",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.6,
      }}
      className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-4xl font-black text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}