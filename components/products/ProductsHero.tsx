"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="border-b border-slate-800 bg-[#08111F]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Breadcrumb */}

        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">
            Products
          </span>
        </nav>

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
            Products
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Industrial Welding Machines &
            Automation Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Explore our range of industrial welding machines,
            robotic welding systems, plasma cutting equipment,
            laser solutions and accessories engineered for
            manufacturing, fabrication and heavy industries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Request Quote

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/downloads"
              className="inline-flex h-11 items-center rounded-lg border border-slate-700 px-5 text-sm font-medium text-white transition hover:border-slate-500"
            >
              Download Catalogue
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}