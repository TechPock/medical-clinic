"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    image: "/images/consult.jpg",
    title: "Get Appointment",
    description: "Book your visit online or call us — quick and hassle-free scheduling with our specialists.",
  },
  {
    number: "02",
    image: "/images/equipment.jpg",
    title: "Start Check-Up",
    description: "Our expert team conducts a thorough examination to understand your health needs.",
  },
  {
    number: "03",
    image: "/images/care.jpg",
    title: "Enjoy Healthy Life",
    description: "Receive personalized care and follow-up support for a long, healthy life.",
  },
];

export function ProcessSection() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative bg-white py-12 md:py-16" aria-labelledby="process-heading">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Left coral squiggly */}
        <svg
          className="absolute left-[10%] top-1/2 hidden lg:block"
          width="40"
          height="20"
          viewBox="0 0 40 20"
          fill="none"
        >
          <path d="M2 10 Q 10 2, 20 10 T 38 10" stroke="#FF4650" strokeWidth="1.5" opacity="0.4" />
        </svg>

        {/* Right coral outlined circle */}
        <svg
          className="absolute right-[8%] top-8 hidden lg:block"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="#FF4650" strokeWidth="1.5" opacity="0.35" />
        </svg>

        {/* Bottom-left blue squiggly */}
        <svg
          className="absolute bottom-8 left-[15%] hidden lg:block"
          width="50"
          height="24"
          viewBox="0 0 50 24"
          fill="none"
        >
          <path d="M2 12 Q 12 4, 24 12 T 48 12" stroke="#2447E8" strokeWidth="1.5" opacity="0.25" />
        </svg>

        {/* Subtle top-right brush texture */}
        <div
          className="absolute -right-10 -top-10 h-40 w-40 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23111340' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2447E8]">
            Process
          </span>
          <h2
            id="process-heading"
            className="mt-2 text-xl font-extrabold leading-tight text-navy sm:text-[22px]"
          >
            How It Helps You To Keep Healthy
          </h2>
        </div>

        {/* Steps with connecting line */}
        <div className="relative mt-10">
          {/* SVG connecting dotted line */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 900 180"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M165 90 C 300 40, 380 140, 450 90 S 600 40, 735 90"
              stroke="#2447E8"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.4"
            />
            <polygon points="730,86 740,90 730,94" fill="#2447E8" opacity="0.5" />
          </svg>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Large background number */}
                <span
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl font-extrabold text-[#E9E9ED] select-none sm:text-3xl md:text-[44px]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Image */}
                <div className="relative mt-2 h-[120px] w-[120px] overflow-hidden rounded-[16px] border-[5px] border-white shadow-lg sm:h-[140px] sm:w-[140px] md:h-[155px] md:w-[155px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 125px, (max-width: 1024px) 140px, 155px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-sm font-bold text-navy">{step.title}</h3>

                 {/* Description */}
                 <p className="mt-1.5 text-xs leading-relaxed text-[#73798C]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
