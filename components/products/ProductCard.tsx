"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({
  product,
  index,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: index * 0.04,
      }}
      className="h-full"
    >
      <Link
        href={`/products/${product.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-800 bg-[#0E1726] transition-colors hover:border-slate-600"
      >
        {/* Image */}

        <div className="flex h-[300px] items-center justify-center overflow-hidden border-b border-slate-800 bg-white p-4">

          <Image
            src={product.thumbnail}
            alt={product.name}
            width={500}
            height={350}
            className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />

        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col p-5">

          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
            {product.category}
          </span>

          <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-7 text-white">
            {product.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
            {product.shortDescription}
          </p>

          <div className="mt-auto pt-5">

            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400">
              View Product
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>

          </div>

        </div>

      </Link>
    </motion.article>
  );
}