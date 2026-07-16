"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  position: string;
  iconBg: string;
  iconColor: string;
  delay?: number;
}

export default function FloatingCard({
  icon: Icon,
  title,
  value,
  position,
  iconBg,
  iconColor,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute z-20 w-[270px] rounded-[28px] border border-white/10 bg-[#111C2F]/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-xl ${position}`}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}
      >
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>

      <h3 className="text-5xl font-black text-orange-500">
        {value}
      </h3>

      <p className="mt-3 text-base text-slate-300">
        {title}
      </p>
    </motion.div>
  );
}