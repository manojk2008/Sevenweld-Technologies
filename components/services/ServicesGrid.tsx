"use client";

import {
  Wrench,
  Settings,
  ShieldCheck,
  GraduationCap,
  Cog,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description:
      "Professional installation, machine setup, calibration and commissioning for smooth production startup.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance programs to maximize machine life and minimize unexpected downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Annual Maintenance Contract",
    description:
      "Comprehensive AMC packages with regular inspections, servicing and priority technical support.",
  },
  {
    icon: Headphones,
    title: "Breakdown Support",
    description:
      "Fast technical assistance and troubleshooting to restore production with minimum interruption.",
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description:
      "Hands-on operator training to improve safety, productivity and machine performance.",
  },
  {
    icon: Cog,
    title: "Technical Consultation",
    description:
      "Expert guidance for selecting the right welding, automation and cutting solutions.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Complete Industrial Support
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            Beyond supplying industrial equipment, we provide
            end-to-end technical services to ensure reliable
            operation and long-term productivity.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-800 bg-[#0E1726] p-7 transition hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}