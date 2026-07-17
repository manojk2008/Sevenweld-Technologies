import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Factory,
  ShieldCheck,
  Users,
  Target,
  Lightbulb,
  HeartHandshake,
  Wrench,
  ImageIcon,
} from "lucide-react";

import Container from "@/layouts/Container";

export default function AboutPage() {
  return (
    <main className="bg-[#08111F] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-[-250px] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute right-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <Container className="py-20">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                About SevenWeld
              </span>

              <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Engineering
                <br />
                Industrial
                <br />
                Excellence
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                SevenWeld Technologies supplies industrial welding
                machines, robotic automation and laser solutions for
                manufacturers across India.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-700"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* Placeholder image */}
            <div className="flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111C31] to-[#16233A]">
              <ImageIcon className="h-10 w-10 text-slate-600" />
            </div>

          </div>

        </Container>

      </section>

      {/* Stats */}

      <Container as="section" className="py-14">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <Stat
            icon={<Award className="h-6 w-6 text-blue-500" />}
            value="25+"
            label="Years Experience"
          />

          <Stat
            icon={<Factory className="h-6 w-6 text-orange-400" />}
            value="5000+"
            label="Industrial Clients"
          />

          <Stat
            icon={<ShieldCheck className="h-6 w-6 text-emerald-400" />}
            value="ISO"
            label="Certified Quality"
          />

          <Stat
            icon={<Users className="h-6 w-6 text-cyan-400" />}
            value="24/7"
            label="Support Team"
          />

        </div>

      </Container>

      {/* Company */}

      <Container as="section" className="pb-16">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Placeholder image */}
          <div className="flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111C31] to-[#16233A]">
            <ImageIcon className="h-10 w-10 text-slate-600" />
          </div>

          <div>

            <h2 className="text-3xl font-black md:text-4xl">
              Who We Are
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              SevenWeld Technologies is dedicated to delivering
              advanced welding, cutting and industrial automation
              solutions for fabrication, automotive, infrastructure,
              heavy engineering and manufacturing industries.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Our focus is on providing reliable products,
              technical expertise and long-term customer support
              that helps manufacturers improve productivity and
              quality.
            </p>

          </div>

        </div>

      </Container>

      {/* Mission / Values */}

      <Container as="section" className="pb-16">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Our Values
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            What Drives Us
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Every product and partnership is guided by the same
            principles that built our reputation across India.
          </p>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <ValueCard
            icon={<Target className="h-5 w-5 text-blue-500" />}
            title="Precision"
            description="Every machine is built and tested to exact industrial standards."
          />

          <ValueCard
            icon={<Lightbulb className="h-5 w-5 text-orange-400" />}
            title="Innovation"
            description="We bring the latest welding and automation technology to Indian manufacturers."
          />

          <ValueCard
            icon={<ShieldCheck className="h-5 w-5 text-emerald-400" />}
            title="Reliability"
            description="Durable equipment backed by warranty and responsive service."
          />

          <ValueCard
            icon={<HeartHandshake className="h-5 w-5 text-cyan-400" />}
            title="Partnership"
            description="Long-term relationships built on trust and technical support."
          />

        </div>

      </Container>

      {/* Timeline / History */}

      <Container as="section" className="pb-16">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Our Journey
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Milestones Along the Way
          </h2>

        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 border-l border-white/10 pl-6">

          <TimelineItem
            year="1999"
            title="Company Founded"
            description="SevenWeld began supplying welding equipment to local fabrication workshops."
          />

          <TimelineItem
            year="2008"
            title="Expanded Product Line"
            description="Introduced laser cutting and plasma cutting solutions to our catalogue."
          />

          <TimelineItem
            year="2015"
            title="Robotic Automation Division"
            description="Launched robotic welding cells for automotive and heavy engineering clients."
          />

          <TimelineItem
            year="2024"
            title="Nationwide Service Network"
            description="Grew to serve 5000+ industrial clients with 24/7 support across India."
          />

        </div>

      </Container>

      {/* Team */}

      <Container as="section" className="pb-16">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Our Team
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            The People Behind SevenWeld
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Experienced engineers and support staff dedicated to
            your production success.
          </p>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <TeamCard
            name="Rajesh Mehta"
            role="Founder & CEO"
          />

          <TeamCard
            name="Priya Shah"
            role="Head of Engineering"
          />

          <TeamCard
            name="Arjun Patel"
            role="Automation Lead"
          />

          <TeamCard
            name="Neha Verma"
            role="Customer Success"
          />

        </div>

      </Container>

      {/* CTA */}

      <Container as="section" className="pb-20">

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111C31] to-[#16233A] p-6">

          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

            <div>

              <h3 className="text-xl font-black text-white md:text-2xl">
                Ready to Upgrade Your Production?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Speak with our experts and discover the right welding or
                automation solution for your business.
              </p>

            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>

      </Container>

    </main>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111C31] p-4">

      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
        {icon}
      </div>

      <h3 className="text-2xl font-black">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>

    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111C31] p-4">

      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative">

      <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-[#08111F]" />

      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
        {year}
      </span>

      <h3 className="mt-1 text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function TeamCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111C31] p-4 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#16233A] to-[#1E2C45]">
        <Users className="h-6 w-6 text-slate-500" />
      </div>

      <h3 className="mt-3 text-sm font-bold text-white">
        {name}
      </h3>

      <p className="mt-0.5 text-xs text-slate-400">
        {role}
      </p>

    </div>
  );
}