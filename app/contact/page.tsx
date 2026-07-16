import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact | SevenWeld Technologies",
  description:
    "Contact SevenWeld Technologies for industrial welding machines, robotic automation, technical consultation and after-sales support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#08111F] text-white">

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <ContactCTA />

    </main>
  );
}