"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const points = [
  "Industrial Welding Machines",
  "Robotic Automation",
  "Laser Solutions",
  "Nationwide Service Support",
];

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-[560px]"
    >
      {/* Small Label */}

      <motion.p
        variants={item}
        className="mt-30 text-2xl font-semibold uppercase tracking-[0.18em] text-orange-400"
      >
        SevenWeld Technologies
      </motion.p>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-5 text-5xl font-bold leading-[1.1] text-white xl:text-[56px]"
      >
        Industrial Welding &
        <br />
        Automation Solutions
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-6 text-lg leading-8 text-slate-400"
      >
        We supply industrial welding machines, robotic automation,
        laser systems and fabrication equipment for manufacturers
        across India.
      </motion.p>

      {/* Features */}

      <motion.div
        variants={item}
        className="mt-8 grid gap-3"
      >
        {points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-blue-500" />

            <span className="text-slate-300">
              {point}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTA */}

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href="/products"
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Products

          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/contact"
          className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 px-6 text-sm font-semibold text-white transition hover:border-blue-500"
        >
          <Play className="h-4 w-4" />

          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  );
}