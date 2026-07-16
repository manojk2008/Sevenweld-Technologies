"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="border-t border-slate-800 bg-[#08111F]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white">
                Looking for the Right Industrial Solution?
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-400">
                Whether you need welding equipment, robotic automation,
                laser systems or technical consultation, our team is
                ready to help you find the right solution for your
                business.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

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
                Browse Products
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}