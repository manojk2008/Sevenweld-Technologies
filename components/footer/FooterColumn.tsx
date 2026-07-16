"use client";

import Link from "next/link";

interface Props {
  title: string;
  links: string[];
}

export default function FooterColumn({
  title,
  links,
}: Props) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-slate-400 transition hover:text-white"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}