"use client";

import { productCategories } from "@/data/products";

interface ProductTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProductTabs({
  activeCategory,
  setActiveCategory,
}: ProductTabsProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-slate-800 pb-4">

      {productCategories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative pb-2 text-sm font-medium transition-colors duration-200 ${
              active
                ? "text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {category}

            {active && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500" />
            )}
          </button>
        );
      })}

    </div>
  );
}