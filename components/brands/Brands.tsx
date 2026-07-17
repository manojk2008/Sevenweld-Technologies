"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";
import BrandMarquee from "./BrandMarquee";
import Container from "@/layouts/Container";

export default function Brands() {
  return (
    <section className="relative overflow-hidden bg-[#08111F] py-14">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Container className="relative">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Trusted Brands
          </span>

          <h2 className="mt-4 text-3xl font-black text-white xl:text-4xl">
            Authorized Partner of
            <br />
            <span className="bg-linear-to-r from-blue-500 via-cyan-300 to-orange-500 bg-clip-text text-transparent">
              Global Industry Leaders
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-400">
            We supply premium welding equipment and industrial
            automation solutions from internationally trusted
            manufacturers.
          </p>
        </motion.div>

        <div className="mt-8">
          <BrandMarquee brands={brands} />
        </div>
      </Container>
    </section>
  );
}