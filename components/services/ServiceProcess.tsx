"use client";

import {
  Search,
  ClipboardCheck,
  Wrench,
  GraduationCap,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Consultation",
    description: "Understand your production requirements and application.",
  },
  {
    icon: ClipboardCheck,
    title: "Site Inspection",
    description: "Evaluate installation space, utilities and workflow.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Machine setup, calibration and commissioning by our engineers.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Operator training for safe and efficient machine usage.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    description: "Ongoing maintenance, spare parts and technical assistance.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Service Process
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            How We Work
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            Our structured service process ensures every project is
            delivered efficiently with reliable technical support at
            every stage.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-xl border border-slate-800 bg-[#0E1726] p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <span className="text-sm font-semibold text-blue-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}