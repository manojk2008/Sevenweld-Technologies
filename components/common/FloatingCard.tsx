"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function FloatingCard({
  value,
  label,
  className,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl ${className}`}
    >
      <h3 className="text-3xl font-bold text-orange-500">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}