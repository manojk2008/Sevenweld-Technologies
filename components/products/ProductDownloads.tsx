"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";
import type { Product } from "@/types/product";

interface ProductDownloadsProps {
  product: Product;
}

export default function ProductDownloads({
  product,
}: ProductDownloadsProps) {
  return (
    <section className="mt-12">

      <div className="mb-6">

        <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
          Downloads
        </span>

        <h2 className="mt-3 text-2xl font-black text-white">
          Documentation
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Download the official brochure, specifications and product documentation.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-xl border border-white/10 bg-[#111C31]"
      >

        <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10">
              <FileText className="h-5 w-5 text-blue-500" />
            </div>

            <div>

              <h3 className="text-lg font-bold text-white">
                Product Brochure
              </h3>

              <p className="mt-1.5 max-w-2xl text-xs leading-5 text-slate-400">
                Complete catalogue, technical specifications, installation
                information and machine overview in PDF format.
              </p>

            </div>

          </div>

          <a
            href={product.brochure}
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Download className="h-4 w-4" />
            Download PDF
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>

      </motion.div>

    </section>
  );
}