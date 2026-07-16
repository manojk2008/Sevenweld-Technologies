"use client";

export default function ContactMap() {
  return (
    <section className="bg-[#08111F] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8">

          <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
            Visit Our Office
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-white">
            Find Us
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Visit our office to explore our products, discuss your
            industrial requirements or meet our technical team.
          </p>

        </div>

        <div className="overflow-hidden rounded-xl border border-slate-800">

          <iframe
            title="SevenWeld Location"
            src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
            className="h-[500px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>
    </section>
  );
}