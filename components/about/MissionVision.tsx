"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">

        {/* Mission */}

        <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-8">

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
            <Target className="h-6 w-6 text-blue-400" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-white">
            Our Mission
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            To deliver reliable welding, cutting and industrial
            automation solutions that improve productivity,
            efficiency and long-term value for manufacturers
            through quality products and dependable technical
            support.
          </p>

        </div>

        {/* Vision */}

        <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-8">

          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
            <Eye className="h-6 w-6 text-blue-400" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-white">
            Our Vision
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            To become one of India&apos;s most trusted industrial
            solution providers by combining advanced technology,
            engineering expertise and exceptional customer
            service across every stage of manufacturing.
          </p>

        </div>

      </div>
    </section>
  );
}