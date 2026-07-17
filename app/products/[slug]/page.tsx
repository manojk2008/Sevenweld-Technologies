import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { getProduct } from "@/lib/getProduct";

import Container from "@/layouts/Container";

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

      <div className="absolute left-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute right-[-250px] top-[400px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-[-250px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      {/* Hero */}

      <section className="relative border-b border-white/10">

        <Container className="pt-24 pb-16">

          <ProductBreadcrumb
            category={product.category}
            productName={product.name}
          />

          <div className="mt-8 grid items-start gap-10 xl:grid-cols-[1.35fr_.65fr]">

            <ProductGallery product={product} />

            <div className="sticky top-24">
              <ProductInfo product={product} />
            </div>

          </div>

        </Container>

      </section>

      {/* Specifications */}

      <section className="relative">

        <Container className="py-16">

          <ProductSpecifications product={product} />

          <div className="mt-16">
            <ProductFeatures product={product} />
          </div>

          <div className="mt-16">
            <ProductDownloads product={product} />
          </div>

        </Container>

      </section>

    </main>
  );
}