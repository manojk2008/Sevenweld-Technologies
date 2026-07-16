"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Zap,
  Wrench,
  Gauge,
  Settings,
} from "lucide-react";
import type { Product } from "@/types/product";

interface ProductFeaturesProps {
  product: Product;
}

const icons = [
  Cpu,
  Zap,
  ShieldCheck,
  Wrench,
  Gauge,
  Settings,
];

export default function ProductFeatures({
  product,
}: ProductFeaturesProps) {
  return (
    <section className="mt-12">

      <div className="mb-6">

        <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
          Features
        </span>

        <h2 className="mt-3 text-2xl font-black text-white">
          Key Features
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Built for industrial performance, reliability and long service life.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {product.features.map((feature, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -4,
              }}
              className="group rounded-xl border border-white/10 bg-[#111C31] p-4 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(37,99,235,.18)]"
            >

              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 transition group-hover:bg-blue-600">
                <Icon className="h-4 w-4 text-blue-500 group-hover:text-white" />
              </div>

              <h3 className="text-lg font-bold text-white">
                {feature}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Designed to deliver consistent industrial performance while improving productivity, reliability and operational efficiency.
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}