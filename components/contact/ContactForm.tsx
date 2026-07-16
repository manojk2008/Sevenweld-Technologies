"use client";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#08111F] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">

          {/* Form */}

          <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-8">

            <p className="text-sm font-medium uppercase tracking-[0.15em] text-blue-400">
              Send an Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white">
              Tell Us About Your Requirement
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Fill in the form below and our team will contact you
              as soon as possible.
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="ABC Industries"
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

              </div>

              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Product / Service
                </label>

                <input
                  type="text"
                  placeholder="Welding Machine, Automation, Service..."
                  className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-lg border border-slate-700 bg-[#08111F] p-4 text-white outline-none transition focus:border-blue-500"
                />

              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Send Enquiry
              </button>

            </form>

          </div>

          {/* Side Panel */}

          <div className="rounded-xl border border-slate-800 bg-[#0E1726] p-8">

            <h3 className="text-2xl font-semibold text-white">
              Why Contact SevenWeld?
            </h3>

            <ul className="mt-8 space-y-5 text-slate-400">

              <li>✓ Product recommendations from experts</li>

              <li>✓ Fast quotation response</li>

              <li>✓ Industrial automation consultation</li>

              <li>✓ Installation & commissioning support</li>

              <li>✓ Genuine spare parts & service</li>

              <li>✓ PAN India customer support</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}