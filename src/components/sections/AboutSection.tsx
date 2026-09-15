"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const features = [
  "Experienced Doctors",
  "Modern Technology",
  "24/7 Medical Support",
  "Affordable Healthcare",
];

export function AboutSection() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="bg-[#F7F8FC] py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image composition */}
          <motion.div
            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/consult.jpg"
                   alt="Medical consultation at Medinova"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-floating sm:-bottom-8 sm:-right-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg font-bold text-navy">World Woman</p>
                    <p className="text-sm text-muted">Health First</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-[#3159E8]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3159E8]">
              About Us
            </span>

            <h2
              id="about-heading"
              className="font-extrabold tracking-tight text-navy"
              style={{ fontSize: "clamp(1.5rem, 5vw, 2.25rem)" }}
            >
              Medical Services & Diagnostics
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              We are committed to providing comprehensive healthcare services
              with a focus on quality, compassion, and innovation. Our team of
              experienced professionals is here to support your health journey.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-navy">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#3159E8] text-white shadow-card hover:shadow-floating hover:bg-[#2446E8]"
              >
                <Link href="/about">
                  Discover More{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
