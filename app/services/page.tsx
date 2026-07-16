import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import WhyChooseService from "@/components/services/WhyChooseService";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Services | SevenWeld Technologies",
  description:
    "Industrial installation, commissioning, preventive maintenance, AMC, operator training and technical support.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      <ServicesHero />

      <ServicesGrid />

      <ServiceProcess />

      <WhyChooseService />

      <ServiceFAQ />

      <ServiceCTA />

    </main>
  );
}