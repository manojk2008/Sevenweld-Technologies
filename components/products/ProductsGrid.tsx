"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const categories = [
    "Welding Machines",
    "Robotic Automation",
    "Laser Solutions",
    "Plasma Cutting",
    "Accessories",
  ];

  return (
    <section className="bg-[#08111F] py-16">
      <div className="mx-auto max-w-7xl px-6">

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          if (!categoryProducts.length) return null;

          return (
            <section
              key={category}
              className="mb-20 last:mb-0"
            >
              <div className="mb-8">

                <h2 className="text-2xl font-semibold text-white">
                  {category}
                </h2>

                <div className="mt-3 h-px w-full bg-slate-800" />

              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>

            </section>
          );
        })}

      </div>
    </section>
  );
}