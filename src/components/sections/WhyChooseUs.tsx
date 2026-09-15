"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  UserRound,
  Siren,
  CalendarCheck,
  Headphones,
  Palette,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: UserRound,
    title: "Professional Staff",
    description:
      "Our experienced doctors and healthcare professionals provide compassionate, expert care tailored to every patient.",
  },
  {
    icon: Siren,
    title: "Emergency Case",
    description:
      "Get fast and reliable emergency medical assistance whenever you need it, with dedicated support available 24/7.",
  },
  {
    icon: CalendarCheck,
    title: "Online Appointment",
    description:
      "Book your doctor appointment online in just a few clicks and choose a convenient time that fits your schedule.",
  },
  {
    icon: Headphones,
    title: "24/7 Services",
    description:
      "Our healthcare support team is available around the clock to assist you with your medical needs and concerns.",
  },
];

const stats = [
  { value: "75+", label: "Expert Doctors" },
  { value: "7k+", label: "Happy Patients" },
  { value: "850+", label: "Modern Rooms" },
  { value: "15+", label: "Awards Won" },
];

export function WhyChooseUs() {
  const reduce = useReducedMotion() ?? false;

  return (
    <>
      <section className="relative bg-[#11143F] py-16 md:py-24" aria-labelledby="why-heading">
        {/* Left edge buttons */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden flex-col items-center justify-center gap-2 pl-2 lg:flex">
          <a href="#rtl" className="pointer-events-auto rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20">
            <span className="text-[10px] font-semibold tracking-wider whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>RTL</span>
          </a>
          <button className="pointer-events-auto rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20" aria-label="Palette">
            <Palette className="h-4 w-4" />
          </button>
        </div>

        {/* Right edge go-to-top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="pointer-events-auto absolute right-3 top-3 z-20 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 lg:right-4 lg:top-4" aria-label="Go to top">
          <ArrowUp className="h-4 w-4" />
        </button>

        {/* Subtle texture on far left */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-32 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[48%_52%] lg:gap-16">
            {/* Left content */}
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-base font-semibold text-[#FF4650]">
                Why Choose Us
              </span>

              <h2
                id="why-heading"
                className="mt-3 font-extrabold leading-[1.1] text-white"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", maxWidth: "520px" }}
              >
                Choose The Best For Your{" "}
                <span className="text-[#FF4650]">Health</span>
              </h2>

              <p className="mt-4 leading-relaxed text-white/80 max-w-xl" style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.125rem)" }}>
                At Medinova, we are committed to providing high-quality healthcare services with compassion, expertise, and advanced medical technology. Your health and well-being are our top priority.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={cn(
                      "flex gap-4 p-4 sm:p-0",
                      index === 0 && "sm:border-r sm:border-b border-white/10",
                      index === 1 && "sm:border-b border-white/10",
                      index === 2 && "sm:border-r border-white/10",
                    )}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                      <benefit.icon className="h-6 w-6 stroke-[1.5] sm:h-7 sm:w-7" aria-hidden="true" />
                    </span>
                      <div>
                        <h3 className="text-base font-bold text-white sm:text-lg">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">
                          {benefit.description}
                        </p>
                      </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-[560px]">
                <Image
                  src="/images/chooseus-bg.jpg"
                  alt="Professional healthcare team at Medinova"
                  width={560}
                  height={400}
                  priority
                  className="h-auto w-full max-w-[560px] rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics cards - separate section */}
      <section className="relative bg-[#11143F] pt-0 pb-16 md:pb-24" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center rounded-[14px] bg-white px-5 py-5 shadow-card sm:px-8 sm:py-7"
              >
                <p className="text-center font-extrabold text-navy leading-none" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
                  {stat.value}
                </p>
                <span
                  className="mt-3 inline-flex h-[34px] w-full max-w-[145px] items-center justify-center rounded-md bg-[#F5F3F8] text-center text-[11px] font-semibold text-[#FF4650]"
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}