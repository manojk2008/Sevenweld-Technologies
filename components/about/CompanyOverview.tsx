"use client";

import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-white">

          <Image
            src="/images/about/company.jpg"
            alt="SevenWeld Technologies"
            width={900}
            height={700}
            className="h-[420px] w-full object-cover"
          />

        </div>

        {/* Content */}

        <div>

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Company Overview
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Trusted Industrial
            Solutions Partner
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            SevenWeld Technologies specializes in supplying
            industrial welding machines, robotic automation,
            laser systems and fabrication solutions for a wide
            range of manufacturing industries. We partner with
            globally recognized brands to deliver reliable,
            efficient and future-ready technology.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Our focus extends beyond supplying equipment. We
            provide technical consultation, installation,
            commissioning, operator training and dependable
            after-sales support to help customers maximize
            productivity and minimize downtime.
          </p>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-lg border border-slate-800 bg-[#0E1726] p-5">
              <h3 className="text-3xl font-semibold text-white">
                25+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Years of Industry Experience
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0E1726] p-5">
              <h3 className="text-3xl font-semibold text-white">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Industrial Customers
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0E1726] p-5">
              <h3 className="text-3xl font-semibold text-white">
                15+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Product Categories
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#0E1726] p-5">
              <h3 className="text-3xl font-semibold text-white">
                PAN India
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Sales & Support Network
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}