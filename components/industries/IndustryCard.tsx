"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function IndustryCard({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111C31]">

        <Image
          src={image}
          alt={title}
          width={900}
          height={700}
          className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08111F]/80 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#08111F]/80 px-3 py-1.5 backdrop-blur-xl">

          <Factory className="h-4 w-4 text-blue-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
            Industry Solution
          </span>

        </div>

      </div>

      {/* Content */}

      <div>

        <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
          {title}
        </span>

        <h3 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>

        <div className="mt-5 space-y-2">

          {[
            "High Productivity",
            "Precision Engineering",
            "Reliable Performance",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-500" />

              <span className="text-sm text-slate-300">
                {item}
              </span>
            </div>
          ))}

        </div>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Talk to an Expert

          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>

    </motion.div>
  );
}