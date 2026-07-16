"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
}

interface Props {
  brands: Brand[];
}

export default function BrandMarquee({ brands }: Props) {
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      {/* Left Fade */}

      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-[#08111F] to-transparent" />

      {/* Right Fade */}

      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-[#08111F] to-transparent" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center gap-24"
      >
        {marqueeBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="group flex h-24 w-48 items-center justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={180}
              height={70}
              className="h-[150px] w-[150px] object-contain opacity-45 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}