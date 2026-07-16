"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Award,
  ShieldCheck,
  Wrench,
  Headphones,
} from "lucide-react";
import type { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

const highlights = [
  {
    icon: Award,
    title: "Industrial Grade",
  },
  {
    icon: ShieldCheck,
    title: "2 Year Warranty",
  },
  {
    icon: Wrench,
    title: "Installation Support",
  },
  {
    icon: Headphones,
    title: "After Sales Service",
  },
];

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-white/10 bg-[#111C31] p-6"
      >

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
            {product.category}
          </span>

          <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
            {product.badge}
          </span>

        </div>

        <h1 className="mt-4 text-3xl font-black leading-tight text-white">
          {product.name}
        </h1>

        <p className="mt-3 text-base text-slate-300">
          {product.shortDescription}
        </p>

        <p className="mt-5 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        <div className="mt-6 grid gap-3 grid-cols-2">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#16233A] p-3"
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/10">
                  <Icon className="h-4 w-4 text-blue-500" />
                </div>

                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

        <div className="mt-6 space-y-2">

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Request Quote
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={product.brochure}
        download
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-semibold text-white transition hover:border-blue-500"
      >
        <Download className="h-4 w-4" />
        Download Brochure
      </a>

        </div>

      </motion.div>

    </div>
  );
}