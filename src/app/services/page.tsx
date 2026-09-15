import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Medinova Medical Clinic",
  description:
    "Explore Medinova's comprehensive medical services including general medicine, cardiology, pediatrics, dermatology, orthopedics, dental care, women's health, and laboratory diagnostics.",
  keywords: [
    "medical services",
    "healthcare",
    "Medinova",
    "specialists",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex w-full min-h-[56vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/page-title.jpg"
          alt="Doctors and lab technicians working together at Medinova"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-black/45"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        <div
          className="relative mx-auto max-w-3xl px-4 text-center"
          style={{
            textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)",
            zIndex: 2,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <h1
              className="font-extrabold tracking-tight text-white sm:text-5xl"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
            >
              Our Medical Services
            </h1>
            <p
              className="max-w-2xl font-medium text-slate-200"
              style={{ fontSize: "clamp(0.95rem, 3vw, 1.125rem)" }}
            >
              Trusted, evidence-based care across every specialty. From routine
              check-ups to advanced diagnostics, our team is here for you and your
              family.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 md:py-24" aria-labelledby="all-services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="all-services"
            title="All Services"
            subtitle="Select a specialty to learn more, or book an appointment to get started."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #EEF1FF 0%, #F5F0FF 100%)",
        }}
      >
        <div className="relative mx-auto max-w-3xl px-6 text-center py-12 sm:py-[60px]">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Need help choosing the right care?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-500 mx-auto">
            Our patient services team can help you find the right specialist and
            schedule your appointment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#4F46E5] font-bold text-white hover:bg-[#433CB7]"
            >
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-colors duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
