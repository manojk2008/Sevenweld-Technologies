"use client";

import {
  Zap,
  Gauge,
  Cpu,
  Ruler,
  Weight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/types/product";

interface ProductSpecificationsProps {
  product: Product;
}

export default function ProductSpecifications({
  product,
}: ProductSpecificationsProps) {
  const specs = [
    {
      title: "Power",
      value: product.specifications.power,
      icon: Zap,
    },
    {
      title: "Voltage",
      value: product.specifications.voltage,
      icon: Cpu,
    },
    {
      title: "Current",
      value: product.specifications.current,
      icon: Gauge,
    },
    {
      title: "Dimensions",
      value: product.specifications.dimensions,
      icon: Ruler,
    },
    {
      title: "Weight",
      value: product.specifications.weight,
      icon: Weight,
    },
    {
      title: "Warranty",
      value: product.specifications.warranty,
      icon: ShieldCheck,
    },
  ];

  return (
    <section>

      <div className="mb-6">

        <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
          Specifications
        </span>

        <h2 className="mt-3 text-2xl font-black text-white">
          Technical Specifications
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Complete technical information and performance data for this machine.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {specs.map((spec, index) => {
          const Icon = spec.icon;

          return (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
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

              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                {spec.title}
              </p>

              <h3 className="mt-1.5 text-lg font-bold leading-tight text-white">
                {spec.value}
              </h3>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}