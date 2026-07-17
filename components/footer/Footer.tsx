"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
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

        {/* Footer */}

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          <div>

            <Image
              src="/logos/logo.png"
              alt="SevenWeld Technologies"
              width={42}
              height={42}
              priority
              className="h-[42px] w-[42px] object-contain"
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