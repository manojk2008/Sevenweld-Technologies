"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import NavItem from "./NavItem";

const productItems = [
  {
    title: "Welding Machines",
    href: "/products",
    description:
      "MIG, TIG, MMA and industrial inverter welding systems.",
  },
  {
    title: "Laser Solutions",
    href: "/products",
    description:
      "Laser welding, laser cleaning and laser cutting machines.",
  },
  {
    title: "Robotic Automation",
    href: "/products",
    description:
      "Industrial robotic welding cells and cobot solutions.",
  },
  {
    title: "Accessories",
    href: "/products",
    description:
      "Torches, consumables, regulators and welding accessories.",
  },
];

const industryItems = [
  {
    title: "Automotive",
    href: "/industries",
    description:
      "Advanced robotic welding for automotive manufacturing.",
  },
  {
    title: "Heavy Engineering",
    href: "/industries",
    description:
      "Reliable solutions for fabrication and heavy industries.",
  },
  {
    title: "Railways",
    href: "/industries",
    description:
      "Industrial welding systems for railway manufacturing.",
  },
  {
    title: "Infrastructure",
    href: "/industries",
    description:
      "Solutions for structural steel and construction projects.",
  },
];

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavDropdownItemProps {
  title: string;
  items: DropdownItem[];
}

function NavDropdownItem({ title, items }: NavDropdownItemProps) {
  const pathname = usePathname();
  const active = items.some((item) => pathname === item.href);

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={`group flex h-11 items-center gap-1 rounded-xl px-4 text-[15px] font-semibold transition-all duration-300 hover:text-white data-[state=open]:text-white ${
          active ? "text-white" : "text-slate-300"
        }`}
      >
        {title}
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />

        {active && (
          <motion.span
            layoutId="nav-active-bar"
            className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-orange-500"
          />
        )}
      </NavigationMenu.Trigger>

      <NavigationMenu.Content className="absolute left-0 top-[calc(100%+12px)] z-50 w-[680px] rounded-2xl border border-white/10 bg-[#0B1526]/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.55)] backdrop-blur-2xl">
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/5"
            >
              <h4 className="font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

export default function DesktopMenu() {
  return (
    <NavigationMenu.Root className="relative hidden xl:flex">
      <NavigationMenu.List className="flex items-center gap-1">
        <NavItem href="/" label="Home" />

        <NavDropdownItem title="Products" items={productItems} />

        <NavDropdownItem title="Industries" items={industryItems} />

        <NavItem href="/about" label="About" />

        <NavItem href="/services" label="Services" />

        <NavItem href="/contact" label="Contact" />

        <NavigationMenu.Indicator className="top-full z-[1] flex h-3 items-end justify-center overflow-hidden">
          <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-white/10" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute left-0 top-full perspective-[2000px]">
        <NavigationMenu.Viewport className="origin-top-left" />
      </div>
    </NavigationMenu.Root>
  );
}