"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Users,
  Wrench,
  Clock,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineers",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
  },
  {
    icon: Clock,
    title: "Quick Response Time",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Spare Parts",
  },
  {
    icon: Headphones,
    title: "Reliable After Sales Support",
  },
  {
    icon: CheckCircle2,
    title: "Tailored Industrial Solutions",
  },
];

export default function WhyChooseService() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Why Choose SevenWeld
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Trusted Industrial
            Service Partner
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            We don&apos;t just supply machines—we support your entire
            manufacturing operation with expert engineering,
            dependable service and long-term technical assistance.
          </p>

          <div className="mt-10 space-y-5">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex items-center gap-4 rounded-lg border border-slate-800 bg-[#0E1726] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  <span className="font-medium text-white">
                    {reason.title}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

        {/* Right */}

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-white">

          <Image
            src="/images/services/service-team.jpg"
            alt="SevenWeld Service Team"
            width={900}
            height={700}
            className="h-[620px] w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}