"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-4"
    >
      {/* Logo */}
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
        <Image
          src="/logos/logo.png"
          alt="SevenWeld Technologies"
          width={42}
          height={42}
          priority
          className="object-contain"
        />
      </div>

      {/* Company Name */}
      <div className="leading-none">
        <h2 className="text-[24px] font-black tracking-tight text-white">
          SevenWeld
        </h2>

        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-400">
          Technologies
        </p>
      </div>
    </Link>
  );
}