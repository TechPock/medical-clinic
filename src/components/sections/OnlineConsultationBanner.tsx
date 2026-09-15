"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export function OnlineConsultationBanner() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative w-full" aria-labelledby="consultation-heading">
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "320px" }}
      >
        {/* Healthcare background image */}
        <Image
          src="/images/consult.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />

        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(20, 34, 70, 0.78)" }}
          aria-hidden="true"
        />

        {/* Decorative dotted curved path */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1200 340"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M320 180 C 420 180, 460 90, 560 90"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 5"
            opacity="0.7"
          />
          <polygon points="555,86 565,90 555,94" fill="white" opacity="0.7" />
        </svg>

        {/* Content */}
        <div className="relative mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex items-center justify-between gap-8">
            {/* Left content */}
            <motion.div
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-[480px]"
            >
              <h2
                id="consultation-heading"
                className="font-extrabold leading-[1.1] text-white"
                style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
              >
                Online Consultations With Qualified Doctors
              </h2>

              <Link
                href="/appointment"
                className="mt-6 inline-block rounded-full bg-[#2447E8] px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-[#1647cc]"
              >
                Make an Appointment
              </Link>
            </motion.div>

            {/* Center play button */}
            <motion.div
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="relative hidden md:flex items-center justify-center shrink-0"
              style={{ width: "90px", height: "90px" }}
            >
              {/* Outer pulse ring */}
              <span
                className="absolute inset-0 rounded-full border-2 border-white/50"
                style={{
                  animation: reduce ? "none" : "pulse-ring 2s ease-out infinite",
                }}
                aria-hidden="true"
              />
              {/* Second ring */}
              <span
                className="absolute inset-3 rounded-full border border-white/30"
                aria-hidden="true"
              />
              {/* Play button */}
              <button
                type="button"
                aria-label="Play video"
                className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#2447E8] text-white transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Play className="h-6 w-6 fill-current" aria-hidden="true" />
              </button>
            </motion.div>

            {/* Right-side person image */}
            <motion.div
              initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative hidden lg:block shrink-0"
              style={{ width: "260px", height: "340px" }}
            >
              <Image
                src="/images/doctor2.jpg"
                alt="Online consultation doctor"
                fill
                sizes="260px"
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
