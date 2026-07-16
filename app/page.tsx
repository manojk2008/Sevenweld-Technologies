import Hero from "@/components/hero/Hero";
import { Products } from "@/components/products";
import { WhyUs } from "@/components/why-us";
import { Industries } from "@/components/industries";
import { Brands } from "@/components/brands";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyUs />
      <Industries />
      <Brands />
      <CTA />
      <Footer />
    </>
  );
}