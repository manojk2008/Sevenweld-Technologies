"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`transition-colors duration-300 ${
              active
                ? "font-semibold text-orange-500"
                : "text-slate-700 hover:text-orange-500"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}