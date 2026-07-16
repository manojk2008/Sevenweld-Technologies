"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  category: string;
  productName: string;
}

export default function ProductBreadcrumb({
  category,
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav className="mb-12 flex flex-wrap items-center gap-3 text-sm">
      <Link
        href="/"
        className="text-slate-400 transition hover:text-white"
      >
        Home
      </Link>

      <ChevronRight className="h-4 w-4 text-slate-600" />

      <Link
        href="/products"
        className="text-slate-400 transition hover:text-white"
      >
        Products
      </Link>

      <ChevronRight className="h-4 w-4 text-slate-600" />

      <span className="text-slate-400">
        {category}
      </span>

      <ChevronRight className="h-4 w-4 text-slate-600" />

      <span className="font-medium text-white">
        {productName}
      </span>
    </nav>
  );
}