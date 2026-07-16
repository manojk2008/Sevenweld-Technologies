"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.4,
      }}
      className="mt-12 flex flex-wrap gap-5"
    >
      {/* Primary Button */}
      <Link
        href="/products"
        className="group inline-flex h-16 items-center justify-center rounded-2xl bg-blue-600 px-9 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
      >
        Explore Products

        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      {/* Secondary Button */}
      <Link
        href="/contact"
        className="group inline-flex h-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-9 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
      >
        <PhoneCall className="mr-3 h-5 w-5 text-orange-400" />

        Request Quote
      </Link>
    </motion.div>
  );
}