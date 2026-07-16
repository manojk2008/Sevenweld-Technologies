"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    subtitle: "Mon - Sat | 9:00 AM - 6:30 PM",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@sevenweld.com",
    subtitle: "We usually reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Ahmedabad, Gujarat",
    subtitle: "Visit us during business hours",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Saturday",
    subtitle: "09:00 AM - 06:30 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Contact Information
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-400">
            Reach out to our team for product enquiries,
            quotations, technical consultation or after-sales
            support.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-[#0E1726] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-base text-white">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.subtitle}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}