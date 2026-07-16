"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
}

export default function NavDropdown({
  title,
  items,
}: NavDropdownProps) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex h-11 items-center gap-1 rounded-xl px-4 text-[15px] font-semibold text-slate-300 transition-all duration-300 hover:text-white data-[state=open]:text-white">
            {title}

            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute left-1/2 top-[calc(100%+18px)] z-50 w-[720px] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#0B1526]/95 p-7 shadow-[0_30px_80px_rgba(0,0,0,.55)] backdrop-blur-2xl">
            <div className="w-[720px] rounded-3xl border border-white/10 bg-[#0F172A]/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
              <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/5"
                  >
                    <h4 className="font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}