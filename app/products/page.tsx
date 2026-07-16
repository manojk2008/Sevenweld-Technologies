import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductCTA from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Products | SevenWeld Technologies",
  description:
    "Explore SevenWeld's range of industrial welding machines, robotic automation, plasma cutting systems, laser solutions and accessories.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      <ProductsHero />

      <ProductsGrid />

      <ProductCTA />

    </main>
  );
}