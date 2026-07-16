import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import WhySevenWeld from "@/components/about/WhySevenWeld";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | SevenWeld Technologies",
  description:
    "Learn about SevenWeld Technologies, our mission, vision, industrial expertise and commitment to delivering reliable welding and automation solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      <AboutHero />

      <CompanyOverview />

      <MissionVision />

      <WhySevenWeld />

      <AboutCTA />

    </main>
  );
}