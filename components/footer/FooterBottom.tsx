"use client";

export default function FooterBottom() {
  return (
    <div className="mt-20 border-t border-white/10 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} SevenWeld Technologies.
          All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>

          <a href="#" className="hover:text-white transition">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  );
}