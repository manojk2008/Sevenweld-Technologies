"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111C31] p-6 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(37,99,235,.18)]"
    >
      {/* Glow */}

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-600/0 blur-3xl transition-all duration-500 group-hover:bg-blue-600/10" />

      {/* Icon */}

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 transition-all duration-500 group-hover:bg-blue-600">
        <Icon className="h-6 w-6 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
      </div>

      {/* Title */}

      <h3 className="mt-5 text-xl font-black leading-tight text-white">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
          Learn More
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 group-hover:bg-blue-600">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </div>

      </div>
    </motion.div>
  );
}