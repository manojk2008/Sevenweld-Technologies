"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

export default function ProductQuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111C31] to-[#162A4A] p-10"
    >
      <span className="rounded-full bg-blue-600/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        Expert Assistance
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-white">
        Need Help Choosing the Right Machine?
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        Our technical experts can help you select the ideal welding or
        automation solution based on your application, production volume
        and budget.
      </p>

      <div className="mt-8 space-y-5">

        {[
          "Product Consultation",
          "Machine Recommendation",
          "Installation Guidance",
          "After Sales Support",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4"
          >
            <CheckCircle2 className="h-6 w-6 text-blue-500" />

            <span className="text-lg text-slate-300">
              {item}
            </span>
          </div>
        ))}

      </div>

      <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-semibold text-white transition hover:bg-blue-700">
        Request a Quote
        <ArrowRight className="h-5 w-5" />
      </button>

      <a
        href="tel:+919876543210"
        className="mt-5 flex items-center justify-center gap-3 rounded-2xl border border-white/10 py-5 text-lg font-semibold text-white transition hover:border-blue-500"
      >
        <Phone className="h-5 w-5" />
        +91 98765 43210
      </a>
    </motion.div>
  );
}