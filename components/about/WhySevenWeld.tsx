"use client";

import {
  ShieldCheck,
  Wrench,
  Headphones,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable Products",
    description:
      "Industrial equipment from trusted manufacturers built for long-term performance.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description:
      "Experienced engineers helping customers select the right solution for every application.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    description:
      "Installation, commissioning, training and responsive technical assistance.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description:
      "Delivering dependable products and professional service with every project.",
  },
];

export default function WhySevenWeld() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Why Manufacturers Choose SevenWeld
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            We combine quality industrial products with technical
            knowledge and dependable customer support to help
            businesses improve productivity and operational efficiency.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-800 bg-[#0E1726] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}