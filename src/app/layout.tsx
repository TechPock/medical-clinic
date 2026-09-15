import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Medinova Medical Clinic | Your Health, Our Priority",
    template: "%s | Medinova Medical Clinic",
  },
  description:
    "Modern healthcare, experienced specialists, and compassionate medical care for you and your family.",
  keywords: [
    "medical clinic",
    "healthcare",
    "doctor",
    "specialist",
    "appointment",
    "Medinova",
  ],
  authors: [{ name: "Medinova Medical Clinic" }],
  creator: "Medinova",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://medinova.example",
    title: "Medinova Medical Clinic | Your Health, Our Priority",
    description:
      "Modern healthcare, experienced specialists, and compassionate medical care for you and your family.",
    siteName: "Medinova Medical Clinic",
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="bg-surface text-navy antialiased">
        <Navbar />
        <div aria-hidden="true" className="h-20" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
