"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "@/layouts/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111F]">

      {/* Background */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-[#08111F]/92" />

      {/* Single Glow */}

      <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

      <Container className="relative">

        <div className="grid min-h-[88vh] items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>

    </section>
  );
}