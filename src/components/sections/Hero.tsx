"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Award, Users, CheckCircle } from "lucide-react";

const floatingStats = [
  { icon: CheckCircle, label: "Available Today" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "25K+", label: "Patients" },
];

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const motionTransition: Transition = {
    duration: reduce ? 0 : 0.7,
    ease: "easeOut",
  };

  const headlineInitial = reduce
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 32 };

  return (
    <section
      className="relative bg-[#071B4B] text-slate-50"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 min-h-[50vh] md:min-h-[680px]">
        <div className="grid min-h-[50vh] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[48%_52%] lg:gap-10 lg:py-24 md:min-h-[680px]">

          {/* Left: headline */}
          <motion.div variants={item} className="col-span-1">
            <motion.span
              initial={headlineInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100 ring-1 ring-white/15 backdrop-blur sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-2 w-2 rounded-full bg-[#F0445E]",
                  !reduce && "animate-pulse-slow"
                )}
              />
              Together with you
            </motion.span>

            <motion.h1
              initial={headlineInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition}
              className="mt-6 font-extrabold tracking-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 6vw, 3.75rem)", lineHeight: "1.08" }}
            >
              Take Care of Your{" "}
              <span className="text-[#F0445E]">Health</span> Now.
            </motion.h1>

            <motion.p
              initial={headlineInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition}
              className="mt-6 max-w-xl text-slate-200"
              style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.125rem)" }}
            >
              Professional healthcare services with experienced doctors and modern medical facilities.
            </motion.p>

            <motion.div
              initial={headlineInitial}
              animate={{ opacity: 1, y: 0 }}
              transition={motionTransition}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="bg-[#F0445E] text-white shadow-card hover:shadow-floating hover:bg-[#d93a51]">
                <Link href="/appointment">Make Appointment</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: banner image */}
          <motion.div
            variants={item}
            className="col-span-1 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px]">
              {/* Main banner image */}
              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src="/banner-img-1.png"
                  alt="Doctor with mother and child at Medinova"
                  width={560}
                  height={400}
                  priority
                  className="h-auto w-full max-w-[560px]"
                />
              </div>

              {/* Floating statistics - balanced flex layout */}
              <div className="relative z-20 mt-6 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-center md:gap-4 md:max-w-[520px] md:mx-auto">
                {floatingStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex-1 min-w-[140px] flex justify-center"
                  >
                    <FloatingCard
                      icon={stat.icon}
                      value={stat.value}
                      label={stat.label}
                      delay={i}
                      className="bg-white/95 shadow-card"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved white wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F7F8FC"
          />
        </svg>
      </div>
    </section>
  );
}
