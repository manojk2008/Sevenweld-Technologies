"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import CTAButtons from "./CTAButtons";
import MobileMenu from "./MobileMenu";
import Container from "@/layouts/Container";

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
      <Container
        as="nav"
        className="flex h-18 items-center justify-between"
      >

        <Logo />

        <DesktopMenu />

        <div className="flex items-center gap-4">
          <CTAButtons />
          <MobileMenu />
        </div>

      </Container>
    </header>
  );
}