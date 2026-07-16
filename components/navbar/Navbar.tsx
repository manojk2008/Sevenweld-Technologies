"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import CTAButtons from "./CTAButtons";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08111F]/95"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-8">

        <Logo />

        <DesktopMenu />

        <div className="flex items-center gap-4">
          <CTAButtons />
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}