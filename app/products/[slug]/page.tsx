import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { getProduct } from "@/lib/getProduct";

import ProductBreadcrumb from "@/components/products/ProductBreadcrumb";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductSpecifications from "@/components/products/ProductSpecifications";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDownloads from "@/components/products/ProductDownloads";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) return notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08111F] text-white">

      {/* Background */}

      <div className="absolute left-[-250px] top-20 h-[650px] w-[650px] rounded-full bg-blue-600/10 blur-[220px]" />

      <div className="absolute right-[-250px] top-[500px] h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[220px]" />

      {/* Hero */}

      <section className="relative border-b border-white/10">

        <div className="mx-auto max-w-[1700px] px-8 pt-36 pb-28">

          <ProductBreadcrumb
            category={product.category}
            productName={product.name}
          />

          <div className="mt-12 grid items-start gap-24 xl:grid-cols-[1.35fr_.65fr]">

            <ProductGallery product={product} />

            <div className="sticky top-28">
              <ProductInfo product={product} />
            </div>

          </div>

        </div>

      </section>

      {/* Specifications */}

      <section className="relative">

        <div className="mx-auto max-w-[1700px] px-8 py-28">

          <ProductSpecifications product={product} />

          <div className="mt-36">
            <ProductFeatures product={product} />
          </div>

          <div className="mt-36">
            <ProductDownloads product={product} />
          </div>

        </div>

      </section>

    </main>
  );
}