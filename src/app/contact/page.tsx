import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Medinova Medical Clinic",
  description:
    "Get in touch with Medinova Medical Clinic. Find our address, phone number, email, and opening hours, or send us a message.",
  keywords: [
    "contact",
    "address",
    "phone",
    "email",
    "hours",
    "Medinova",
    "medical clinic",
  ],
  openGraph: {
    title: "Contact Us | Medinova Medical Clinic",
    description:
      "Reach out to Medinova Medical Clinic for appointments, inquiries, or general questions.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[44vh] items-center">
        <Image
          src="/images/care.jpg"
          alt="Compassionate care at Medinova"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black/50"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        <div
          className="relative mx-auto max-w-3xl px-4 text-center"
          style={{
            zIndex: 2,
            textShadow: "0px 2px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          <h1
            className="font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
          >
            Contact Us
          </h1>
          <div className="mt-5 flex flex-col items-center gap-4">
            <p
              className="max-w-xl text-slate-200"
              style={{ fontSize: "clamp(0.95rem, 3vw, 1.125rem)" }}
            >
              We&apos;re here to help. Reach out to schedule an appointment,
              ask a question, or connect with our care team — we&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="contact-heading"
            title="Get in Touch"
            subtitle="Visit us, call us, or send a message. Our team is ready to assist you."
          />

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-6">
                <h3 className="text-base font-semibold text-navy sm:text-lg">Address</h3>
                <p className="mt-1.5 text-sm text-slate-600 sm:mt-2">
                  123 Health Avenue, Medical District
                  <br />
                  Springfield, ST 12345
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-6">
                <h3 className="text-base font-semibold text-navy sm:text-lg">Phone</h3>
                <p className="mt-1.5 text-sm text-slate-600 sm:mt-2">
                  <a
                    href="tel:+15551234567"
                    className="text-brand hover:text-brand-hover"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-6">
                <h3 className="text-base font-semibold text-navy sm:text-lg">Email</h3>
                <p className="mt-1.5 text-sm text-slate-600 sm:mt-2">
                  <a
                     href="mailto:hello@medinova.example"
                    className="text-brand hover:text-brand-hover"
                  >
                     hello@medinova.example
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-6">
                <h3 className="text-base font-semibold text-navy sm:text-lg">Opening Hours</h3>
                <ul className="mt-1.5 space-y-0.5 text-sm text-slate-600 sm:mt-2 sm:space-y-1">
                  <li>Monday – Friday: 7:00 AM – 7:00 PM</li>
                  <li>Saturday: 8:00 AM – 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-lg font-semibold text-navy">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-24 bg-slate-50" aria-label="Location map">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Location"
            subtitle="Conveniently located in the heart of the medical district."
          />
          <div className="aspect-[4/3] sm:aspect-video w-full overflow-hidden rounded-2xl">
            <iframe
              src="https://maps.google.com/maps?q=30.670848,73.089024&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-2xl"
              title="Medinova Medical Clinic location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
