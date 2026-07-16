"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className="group relative flex h-11 items-center justify-center px-4"
    >
      <span
        className={`text-[15px] font-semibold transition-colors duration-300 ${
          active
            ? "text-white"
            : "text-slate-300 group-hover:text-white"
        }`}
      >
        {label}
      </span>

      <motion.span
        initial={false}
        animate={{
          width: active ? "100%" : "0%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.25,
        }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
      />
    </Link>
  );
}