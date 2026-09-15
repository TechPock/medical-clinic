"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Heart, Shield, Clock, BadgeCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Award,
    title: "Board-Certified Specialists",
    desc: "Our physicians are nationally recognized and committed to ongoing education.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "We listen, explain, and involve you in every decision about your health.",
  },
  {
    icon: Shield,
    title: "Advanced Technology",
    desc: "State-of-the-art diagnostics and treatment tools ensure accurate, effective care.",
  },
  {
    icon: Clock,
    title: "Convenient Access",
    desc: "Flexible scheduling, telehealth options, and extended hours fit your life.",
  },
  {
    icon: BadgeCheck,
    title: "Comprehensive Services",
    desc: "From routine checkups to specialized treatments, all under one roof.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    desc: "Proud to serve thousands of families with integrity and compassion since 2010.",
  },
];

export function WhyChooseMedinova() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      className="relative pb-16 pt-12 sm:pt-16 md:pb-28"
      aria-labelledby="why-heading"
    >
      <svg
        className="absolute left-4 top-4 hidden w-52 opacity-20 sm:w-64 md:left-8 md:top-8 lg:block"
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="4" fill="#3159E8" />
        <circle cx="100" cy="30" r="3" fill="#3159E8" />
        <circle cx="160" cy="50" r="4" fill="#3159E8" />
        <circle cx="220" cy="20" r="3" fill="#3159E8" />
        <circle cx="280" cy="40" r="4" fill="#3159E8" />
        <circle cx="30" cy="100" r="3" fill="#3159E8" />
        <circle cx="90" cy="90" r="4" fill="#3159E8" />
        <circle cx="150" cy="80" r="3" fill="#3159E8" />
        <circle cx="210" cy="100" r="4" fill="#3159E8" />
        <circle cx="270" cy="90" r="3" fill="#3159E8" />
        <circle cx="50" cy="160" r="4" fill="#3159E8" />
        <circle cx="110" cy="150" r="3" fill="#3159E8" />
        <circle cx="170" cy="170" r="4" fill="#3159E8" />
        <circle cx="230" cy="140" r="3" fill="#3159E8" />
        <circle cx="290" cy="160" r="4" fill="#3159E8" />
        <circle cx="40" cy="220" r="3" fill="#3159E8" />
        <circle cx="100" cy="210" r="4" fill="#3159E8" />
        <circle cx="160" cy="230" r="3" fill="#3159E8" />
        <circle cx="220" cy="200" r="4" fill="#3159E8" />
        <circle cx="280" cy="220" r="3" fill="#3159E8" />
        <circle cx="20" cy="280" r="3" fill="#3159E8" />
        <circle cx="80" cy="270" r="4" fill="#3159E8" />
        <circle cx="140" cy="290" r="3" fill="#3159E8" />
        <circle cx="200" cy="270" r="4" fill="#3159E8" />
        <circle cx="260" cy="290" r="3" fill="#3159E8" />
      </svg>
      <svg
        className="absolute bottom-4 right-4 hidden w-52 opacity-20 sm:w-64 md:bottom-8 md:right-8 lg:block"
        viewBox="0 0 300 300"
        fill="none"
        transform="rotate(180)"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="4" fill="#3159E8" />
        <circle cx="100" cy="30" r="3" fill="#3159E8" />
        <circle cx="160" cy="50" r="4" fill="#3159E8" />
        <circle cx="220" cy="20" r="3" fill="#3159E8" />
        <circle cx="280" cy="40" r="4" fill="#3159E8" />
        <circle cx="30" cy="100" r="3" fill="#3159E8" />
        <circle cx="90" cy="90" r="4" fill="#3159E8" />
        <circle cx="150" cy="80" r="3" fill="#3159E8" />
        <circle cx="210" cy="100" r="4" fill="#3159E8" />
        <circle cx="270" cy="90" r="3" fill="#3159E8" />
        <circle cx="50" cy="160" r="4" fill="#3159E8" />
        <circle cx="110" cy="150" r="3" fill="#3159E8" />
        <circle cx="170" cy="170" r="4" fill="#3159E8" />
        <circle cx="230" cy="140" r="3" fill="#3159E8" />
        <circle cx="290" cy="160" r="4" fill="#3159E8" />
        <circle cx="40" cy="220" r="3" fill="#3159E8" />
        <circle cx="100" cy="210" r="4" fill="#3159E8" />
        <circle cx="160" cy="230" r="3" fill="#3159E8" />
        <circle cx="220" cy="200" r="4" fill="#3159E8" />
        <circle cx="280" cy="220" r="3" fill="#3159E8" />
        <circle cx="20" cy="280" r="3" fill="#3159E8" />
        <circle cx="80" cy="270" r="4" fill="#3159E8" />
        <circle cx="140" cy="290" r="3" fill="#3159E8" />
        <circle cx="200" cy="270" r="4" fill="#3159E8" />
        <circle cx="260" cy="290" r="3" fill="#3159E8" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <SectionHeading
          id="why-heading"
          title="Why Choose Medinova"
          subtitle="We combine expertise, technology, and compassion to deliver an exceptional healthcare experience."
        />
        <ul className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ zIndex: 2 }}>
          {features.map((item, index) => (
            <motion.li
              key={item.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 pb-6 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-floating sm:p-6 sm:pb-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3159E8]/10 text-[#3159E8]">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 flex-grow text-slate-600">{item.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
