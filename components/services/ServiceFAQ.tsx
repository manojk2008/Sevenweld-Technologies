"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. Our engineers handle complete installation, machine setup, calibration and commissioning to ensure smooth operation.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes. We offer flexible AMC plans covering preventive maintenance, inspections and priority technical support.",
  },
  {
    question: "Can your team provide operator training?",
    answer:
      "Absolutely. We provide on-site operator training covering machine operation, safety practices and basic maintenance.",
  },
  {
    question: "Do you provide emergency breakdown support?",
    answer:
      "Yes. Our technical support team assists with troubleshooting and on-site service whenever required.",
  },
  {
    question: "Do you supply spare parts and consumables?",
    answer:
      "Yes. We supply genuine spare parts and consumables to maintain machine reliability and performance.",
  },
];

export default function ServiceFAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            Answers to common questions about our industrial
            services and technical support.
          </p>

        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-800 bg-[#0E1726]"
              >
                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {active && (
                  <div className="border-t border-slate-800 px-6 py-5">
                    <p className="leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}