"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="hidden items-center gap-4 xl:flex">
      {/* Call Button */}
      <Link
        href="tel:+919773206134"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
      >
        <Phone className="h-4 w-4 text-orange-400" />
        Call Now
      </Link>

      {/* Quote Button */}
      <Link
        href="/contact"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
      >
        Request Quote

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}