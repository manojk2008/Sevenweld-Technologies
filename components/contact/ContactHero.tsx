"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="border-b border-slate-800 bg-[#08111F]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">

        {/* Left */}

        <div>

          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Contact
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/10 px-4 py-2">

            <PhoneCall className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              Contact SevenWeld
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white">
            Let&apos;s Discuss Your
            Industrial
            Requirements
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Whether you need welding machines, robotic automation,
            technical consultation or after-sales support, our team
            is ready to help you find the right solution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#contact-form"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Send Enquiry

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="tel:+919876543210"
              className="inline-flex h-11 items-center rounded-lg border border-slate-700 px-5 text-sm font-medium text-white transition hover:border-slate-500"
            >
              Call Now
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-white">

          <Image
            src="/images/contact/contact-hero.jpg"
            alt="Contact SevenWeld"
            width={900}
            height={700}
            priority
            className="h-[480px] w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}