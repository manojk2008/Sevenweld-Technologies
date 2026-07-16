"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="border-t border-slate-800 bg-[#08111F]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
                Ready to Get Started?
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-white">
                Let&apos;s Build the Right Industrial Solution Together
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-400">
                Contact SevenWeld Technologies today for product
                enquiries, technical consultation, quotations or
                after-sales support.
              </p>

            </div>

            <Link
              href="/products"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Explore Products

              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}