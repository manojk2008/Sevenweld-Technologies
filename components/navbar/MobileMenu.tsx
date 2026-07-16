"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl xl:hidden"
        aria-label="Open Menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col border-l border-white/10 bg-[#08111F] p-8"
            >
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Menu
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl text-white"
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
                >
                  Request Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}