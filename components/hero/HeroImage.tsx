"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Background Accent */}

      <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Main Image */}

      <div className="mt-25 relative overflow-hidden rounded-2xl border border-white/10 bg-[#111C31] shadow-2xl">

        <Image
          src="/images/hero/hero-main.png"
          alt="Industrial Welding Solutions"
          width={1200}
          height={900}
          priority
          className="aspect-[4/3] w-full max-w-[680px] object-cover transition duration-700 hover:scale-[1.02]"
        />

      </div>

    </motion.div>
  );
}