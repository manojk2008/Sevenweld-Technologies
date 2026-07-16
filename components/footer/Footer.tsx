"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";

import {
  companyLinks,
  productLinks,
  supportLinks,
} from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050C18]">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('/images/footer/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-[#050C18]/95" />

      <div className="absolute left-[-250px] top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute right-[-250px] bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1700px] px-8 py-16">

        {/* CTA */}

        {/* <div className="mb-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#111C31] to-[#16233A] p-6">

          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">

            <div>

              <h2 className="text-2xl font-black text-white md:text-3xl">
                Ready to Modernize Your Production?
              </h2>

              <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300">
                Speak with our experts and discover the right welding,
                robotic automation or laser solution for your business.
              </p>

            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Request Quote

              <ArrowUpRight className="h-4 w-4" />
            </Link>

          </div>

        </div> */}

        {/* Footer */}

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>

            <Image
              src="/logos/logo.png"
              alt="SevenWeld"
              width={140}
              height={38}
            />

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              SevenWeld Technologies supplies industrial welding,
              robotic automation and laser solutions trusted by
              manufacturers across India.
            </p>

            <div className="mt-5 space-y-3">

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300">
                  sales@sevenweld.com
                </span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300">
                  Ahmedabad, Gujarat, India
                </span>
              </div>

            </div>

          </div>

          <FooterColumn
            title="Products"
            links={productLinks}
          />

          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          <FooterColumn
            title="Support"
            links={supportLinks}
          />

        </div>

        <FooterBottom />

      </div>

    </footer>
  );
}