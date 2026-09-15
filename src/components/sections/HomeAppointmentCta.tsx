"use client";

import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/AppointmentForm";
import { cn } from "@/lib/utils";

export function HomeAppointmentCta() {
  return (
    <section
      id="book-appointment"
      className="relative isolate py-16 md:py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-light via-accent-light/30 to-brand-light"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 lg:pt-2"
          >
            <h2
              id="cta-heading"
              className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
            >
              Your Health Journey Starts Here
            </h2>
            <p className="mt-4 max-w-md text-slate-600">
              Book an appointment online in seconds. Our team will confirm
              your visit within one business day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className={cn(
              "relative rounded-2xl bg-white p-6 sm:p-8 shadow-elegant",
            )}
          >
            <AppointmentForm className="space-y-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
