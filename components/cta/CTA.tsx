"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-14">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/hero-main.png')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#08111F]/90" />

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px] px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-10 text-center backdrop-blur-xl"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Let&apos;s Build Together
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-white xl:text-4xl">
            Ready to Modernize
            <br />
            Your Production Line?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Whether you&apos;re expanding production, upgrading
            equipment or investing in robotic automation,
            our engineers are ready to help you choose the
            right solution.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              href="/contact"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Request a Quote

              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/downloads"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />

              Download Brochure
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}