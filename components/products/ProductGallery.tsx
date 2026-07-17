"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/types/product";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.gallery[0]
  );

  return (
    <div className="space-y-3">

      {/* Main Image */}

      <motion.div
        layout
        className="group relative flex h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white"
      >
        <Image
          src={selectedImage}
          alt={product.name}
          width={1400}
          height={1100}
          priority
          className="max-h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-xl">
          {product.badge}
        </div>

        <button className="absolute bottom-4 right-4 rounded-xl bg-black/40 p-2 backdrop-blur-xl transition hover:bg-blue-600">
          <Expand className="h-4 w-4 text-white" />
        </button>
      </motion.div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-2">
        {product.gallery.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-lg border transition-all duration-300 ${
              selectedImage === image
                ? "border-blue-500 ring-2 ring-blue-500/30"
                : "border-white/10 hover:border-blue-400"
            }`}
          >
            <Image
              src={image}
              alt={product.name}
              width={300}
              height={220}
              className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

    </div>
  );
}