"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="border-b border-slate-800 bg-[#08111F]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Breadcrumb */}

        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-white">
            About
          </span>
        </nav>

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            About SevenWeld
          </p>

          <h1 className="mt-3 text-5xl font-semibold leading-tight text-white">
            Building Industrial
            Solutions That
            Power Manufacturing
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            SevenWeld Technologies supplies industrial welding
            machines, robotic automation systems, laser solutions
            and engineering equipment for manufacturers across
            India. We focus on reliable products, technical
            expertise and long-term customer support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Contact Us

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex h-11 items-center rounded-lg border border-slate-700 px-5 text-sm font-medium text-white transition hover:border-slate-500"
            >
              View Products
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}