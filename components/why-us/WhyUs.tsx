"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-36">

      {/* Background */}

      <div className="absolute left-[-250px] top-20 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[220px]" />

      <div className="absolute right-[-250px] bottom-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[220px]" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative mx-auto max-w-[1700px] px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >

          <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Why Choose SevenWeld
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
            Built for Performance.
            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Trusted by Industry.
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">
            Delivering industrial welding, robotic automation and laser
            solutions backed by engineering expertise, premium products and
            dependable after-sales support.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}

        </div>

        {/* CTA */}

       <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-white/10 bg-[#111C31] p-6"
        >

          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

            <div>

              <h3 className="text-xl font-black text-white md:text-2xl">
                Ready to Upgrade Your Production?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Speak with our experts and discover the right welding or
                automation solution for your business.
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">

              Request Quote

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}