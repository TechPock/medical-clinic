"use client";

import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/AppointmentForm";

export function AppointmentHero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h1 className="font-extrabold tracking-tight text-navy" style={{ fontSize: "clamp(1.5rem, 6vw, 2.5rem)" }}>
            Schedule Your Appointment
          </h1>
          <span
            aria-hidden="true"
            className="mt-4 block h-1.5 w-20 rounded-full bg-gradient-to-r from-brand to-accent mx-auto"
          />
        </motion.header>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mb-8 text-center text-slate-500 sm:mb-10"
          style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.125rem)" }}
        >
          Fill out the form below and we&apos;ll get back to you within one
          business day to confirm your visit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <AppointmentForm />
        </motion.div>

        <p className="mt-8 text-center text-xs text-slate-400">
          * This is a demo form and does not submit to a live backend.
        </p>
      </div>
    </section>
  );
}
