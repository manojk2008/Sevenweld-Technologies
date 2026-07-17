import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Car,
  Factory,
  TrainFront,
  Building2,
  Ship,
  Cog,
} from "lucide-react";

import Container from "@/layouts/Container";

const industries = [
  {
    icon: Car,
    title: "Automotive",
    description:
      "Advanced robotic welding and automation for automotive manufacturing lines.",
  },
  {
    icon: Factory,
    title: "Heavy Engineering",
    description:
      "Reliable welding and cutting solutions for fabrication and heavy industries.",
  },
  {
    icon: TrainFront,
    title: "Railways",
    description:
      "Industrial welding systems built for railway manufacturing and maintenance.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Solutions for structural steel, bridges and construction projects.",
  },
  {
    icon: Ship,
    title: "Shipbuilding",
    description:
      "Heavy-duty welding equipment for marine fabrication and shipyards.",
  },
  {
    icon: Cog,
    title: "General Manufacturing",
    description:
      "Versatile machines for fabrication shops and general production lines.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#08111F] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-[-250px] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute right-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

        <Container className="relative py-20 text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            Industries We Serve
          </span>

          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Engineering Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Across Every Industry
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            From automotive and heavy engineering to fabrication,
            shipbuilding and infrastructure, our industrial solutions
            power manufacturers across India.
          </p>

        </Container>

      </section>

      {/* Industry Grid */}

      <Container as="section" className="py-14">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group rounded-xl border border-white/10 bg-[#111C31] p-4 transition-all duration-300 hover:border-blue-500/40"
              >

                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 transition group-hover:bg-blue-600">
                  <Icon className="h-4 w-4 text-blue-500 group-hover:text-white" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {industry.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

      {/* Featured Case / Image */}

      <Container as="section" className="pb-16">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/industries/robotic-welding.png"
              alt="SevenWeld robotic welding automation in an industrial production line"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Why It Matters
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Built for Real Production Environments
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Every industry has different demands — high duty cycles,
              precision tolerances, or harsh environments. Our equipment
              is selected and configured to match the specific
              requirements of your production line.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Our engineers work directly with manufacturers to
              recommend the right welding, cutting or automation
              solution for their process — not a generic one-size-fits-all
              product.
            </p>

          </div>

        </div>

      </Container>

      {/* CTA */}

      <Container as="section" className="pb-20">

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111C31] to-[#16233A] p-6">

          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

            <div>

              <h3 className="text-xl font-black text-white md:text-2xl">
                Not Sure Which Solution Fits Your Industry?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Talk to our engineers and get a recommendation
                tailored to your production process.
              </p>

            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </Container>

    </main>
  );
}