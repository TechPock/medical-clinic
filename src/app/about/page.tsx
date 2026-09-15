import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyChooseMedinova } from "@/components/sections/WhyChooseMedinova";

export const metadata: Metadata = {
  title: "About Us | Medinova Medical Clinic",
  description:
    "Learn about Medinova Medical Clinic's story, mission, and vision. Dedicated to compassionate, evidence-based healthcare for you and your family.",
  keywords: [
    "about",
    "medical clinic",
    "healthcare",
    "Medinova",
    "mission",
    "vision",
  ],
  openGraph: {
    title: "About Us | Medinova Medical Clinic",
    description:
      "Discover Medinova's commitment to compassionate, evidence-based care and our journey since 2010.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[60vh] items-center justify-center">
        <Image
          src="/images/page-title.jpg"
          alt="Modern medical facility at Medinova"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1
              className="font-extrabold tracking-tight text-white sm:text-5xl"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                textShadow: "0px 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              About Medinova
            </h1>
            <p
              className="max-w-xl text-white/90"
              style={{
                fontSize: "clamp(0.95rem, 3vw, 1.125rem)",
                textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              Compassionate care, experienced specialists, and a commitment to
              your family&apos;s health since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="relative py-16 md:py-24"
        aria-labelledby="story-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[#F7F8FC] md:hidden"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            backgroundImage: "url('/images/shape-10.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            backgroundSize: "200px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="story-heading"
            title="Our Story"
            subtitle="Founded with a vision to make quality healthcare accessible, Medinova has grown into a trusted medical home for thousands of families."
            align="left"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-slate-600">
                Medinova Medical Clinic was established in 2010 with a simple
                belief: everyone deserves access to high-quality, compassionate
                healthcare. What started as a small practice has grown into a
                full-service medical clinic serving the community with integrity
                and expertise.
              </p>
              <p className="mt-4 text-slate-600">
                Our team of board-certified physicians and dedicated staff work
                together to provide seamless care across cardiology, pediatrics,
                orthopedics, dermatology, dentistry, and general medicine.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/images/consult.jpg"
                alt="Medinova medical team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="relative py-16 md:py-24"
        aria-labelledby="mission-heading"
        style={{
          background: "linear-gradient(135deg, #F8F9FB 0%, #EEF1F8 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute opacity-20 hidden md:block"
          style={{
            backgroundImage: "url('/images/shape-10.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "250px",
            width: "250px",
            height: "250px",
            top: "2rem",
            right: "2rem",
            zIndex: 0,
            transform: "rotate(180deg)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h2
                id="mission-heading"
                className="text-2xl font-bold text-navy"
              >
                Our Mission
              </h2>
              <p className="mt-4 text-slate-600">
                To deliver patient-centered, evidence-based medical care that
                empowers individuals and families to live healthier lives. We
                strive to combine clinical excellence with genuine compassion in
                every interaction.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <h2 className="text-2xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 text-slate-600">
                To be the leading healthcare provider in our community, recognized
                for clinical innovation, patient satisfaction, and a culture of
                continuous improvement. We aim to set the standard for modern,
                accessible medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseMedinova />

      {/* Statistics */}
      <section
        className="py-16 md:py-24"
        aria-labelledby="stats-heading"
        style={{
          background: "linear-gradient(135deg, #17253a 0%, #2447E8 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header id="stats-heading" className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Impact
            </h2>
            <span
              aria-hidden="true"
              className="mt-3 block h-1.5 w-14 rounded-full bg-gradient-to-r from-brand-light to-accent-light mx-auto"
            />
            <p className="mt-4 max-w-2xl text-slate-200 mx-auto">
              Numbers that reflect our commitment to quality care.
            </p>
          </header>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "15+", label: "Years of Service" },
              { value: "10,000+", label: "Happy Patients" },
              { value: "12+", label: "Medical Specialties" },
              { value: "98%", label: "Patient Satisfaction" },
            ].map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-200">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 md:py-24"
        aria-labelledby="about-cta"
        style={{
          background: "linear-gradient(135deg, #EEF1FF 0%, #F5F0FF 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 hidden md:block"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/shape-10.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "300px",
            width: "300px",
            height: "300px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="about-cta"
            className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
          >
            Ready to Experience the Medinova Difference?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 mx-auto">
            Book an appointment today and see why families across the community
            trust us with their health.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#4F46E5] font-bold text-white hover:bg-[#433CB7]"
            >
              <Link href="/appointment">Book an Appointment</Link>
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