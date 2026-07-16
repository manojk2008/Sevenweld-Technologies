import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SevenWeld Technologies | Industrial Welding & Automation Solutions",
    template: "%s | SevenWeld Technologies",
  },
  description:
    "SevenWeld Technologies supplies industrial welding machines, robotic automation, laser solutions and fabrication equipment for manufacturers across India.",
  keywords: [
    "welding machines",
    "industrial welding",
    "robotic automation",
    "laser welding",
    "MIG welding",
    "TIG welding",
    "plasma cutting",
    "SevenWeld",
  ],
  openGraph: {
    siteName: "SevenWeld Technologies",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
