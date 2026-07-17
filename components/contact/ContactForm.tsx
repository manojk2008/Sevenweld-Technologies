"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number"),
  productService: z.string().min(1, "Please specify a product or service"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact-form" className="bg-[#08111F] py-20">
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-10 space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={
                      errors.fullName ? "fullName-error" : undefined
                    }
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                    {...register("fullName")}
                  />

                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Company Name
                  </label>

                  <input
                    id="companyName"
                    type="text"
                    placeholder="ABC Industries"
                    aria-invalid={!!errors.companyName}
                    aria-describedby={
                      errors.companyName ? "companyName-error" : undefined
                    }
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                    {...register("companyName")}
                  />

                  {errors.companyName && (
                    <p
                      id="companyName-error"
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.companyName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                    {...register("email")}
                  />

                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "phone-error" : undefined
                    }
                    className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                    {...register("phone")}
                  />

                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="productService"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Product / Service
                </label>

                <input
                  id="productService"
                  type="text"
                  placeholder="Welding Machine, Automation, Service..."
                  aria-invalid={!!errors.productService}
                  aria-describedby={
                    errors.productService ? "productService-error" : undefined
                  }
                  className="h-12 w-full rounded-lg border border-slate-700 bg-[#08111F] px-4 text-white outline-none transition focus:border-blue-500"
                  {...register("productService")}
                />

                {errors.productService && (
                  <p
                    id="productService-error"
                    className="mt-1 text-xs text-red-400"
                  >
                    {errors.productService.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="w-full rounded-lg border border-slate-700 bg-[#08111F] p-4 text-white outline-none transition focus:border-blue-500"
                  {...register("message")}
                />

                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">
                  Thank you — your enquiry has been sent. Our team will
                  contact you shortly.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or contact us
                  directly.
                </p>
              )}
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