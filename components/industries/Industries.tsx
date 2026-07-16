"use client";

import { motion } from "framer-motion";
import { Factory, ArrowRight } from "lucide-react";

import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-20">

      {/* Background */}

      <div className="absolute left-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute right-[-250px] bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1700px] px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2">

            <Factory className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Industries We Serve
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
            Engineering Solutions
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Across Every Industry
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            From automotive and heavy engineering to fabrication,
            shipbuilding and infrastructure, our industrial solutions
            power manufacturers across India.
          </p>

        </motion.div>

        {/* Industries */}

        <div className="mt-14 space-y-16">

          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              title={industry.title}
              description={industry.description}
              image={industry.image}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-[#111C31] p-6"
        >
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">

            <div>

              <h3 className="text-xl font-black text-white">
                Looking for an Industry Specific Solution?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Our engineers can recommend the ideal welding,
                automation or laser solution for your manufacturing
                process.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Talk to an Expert

              <ArrowRight className="h-4 w-4" />
            </button>

          </div>
        </motion.div>

      </div>

    </section>
  );
}