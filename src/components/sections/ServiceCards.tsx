"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Microscope,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Qualified Doctor",
    description:
      "Our team consists of highly qualified and experienced doctors dedicated to providing the best medical care.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Help",
    description:
      "We provide 24/7 emergency medical services to ensure you get urgent care whenever you need it.",
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    description:
      "State-of-the-art medical equipment and technology for accurate diagnosis and effective treatment.",
  },
  {
    icon: Users,
    title: "Family Medicine",
    description:
      "Comprehensive healthcare services for the entire family, from pediatrics to geriatric care.",
  },
];

export function ServiceCards() {
  return (
    <section className="relative z-10 -mt-20 bg-transparent py-8" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="group h-full rounded-[18px] border border-white/20 bg-white/95 p-5 shadow-floating backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3159E8]/10 text-[#3159E8] transition-colors group-hover:bg-[#3159E8] group-hover:text-white sm:h-14 sm:w-14">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#73798C] sm:mt-3">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
