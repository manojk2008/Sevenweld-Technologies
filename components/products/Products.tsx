"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";

export default function Products() {
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All Products") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Header */}

        <div className="flex flex-col gap-4">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-400">
              Products
            </p>

            <h2 className="mt-2 text-4xl font-semibold text-white">
              Our Product Range
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
              Industrial welding machines, robotic automation,
              plasma cutting and laser solutions for manufacturing,
              fabrication and engineering industries.
            </p>
          </div>

          <ProductTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

        </div>

        {/* Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}