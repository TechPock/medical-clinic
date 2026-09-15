"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Microscope, UserRound } from "lucide-react";

const services = [
  {
    icon: Brain,
    image: "/images/equipment.jpg",
    title: "Neurology",
    description:
      "Advanced neurological care and treatment for brain, spine, and nervous system disorders.",
  },
  {
    icon: Microscope,
    image: "/images/consult.jpg",
    title: "Modern Laboratory",
    description:
      "State-of-the-art diagnostic laboratory with cutting-edge technology for accurate results.",
  },
  {
    icon: UserRound,
    image: "/images/doctor1.jpg",
    title: "Experienced Doctors",
    description:
      "Our team of board-certified specialists brings years of expertise to every patient.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#3159E8]">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mt-3 text-4xl font-extrabold leading-tight text-navy sm:text-[48px]"
            style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}
          >
            We Offer For You Medical &amp; Saving Lives
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="group h-full overflow-hidden rounded-[18px] border border-[#E8E8E8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Image area */}
                <div className="relative h-[160px] w-full overflow-hidden rounded-t-[18px] sm:h-[180px] md:h-[205px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Floating icon box */}
                  <span
                    className="absolute bottom-4 -left-2 flex h-[55px] w-[55px] items-center justify-center bg-[#3159E8] shadow-lg sm:bottom-[30px] sm:-left-[10px] sm:h-[75px] sm:w-[75px]"
                    style={{ borderRadius: "4px" }}
                  >
                    <service.icon className="h-[28px] w-[28px] text-white sm:h-[38px] sm:w-[38px]" aria-hidden="true" />
                    <span
                      className="absolute -bottom-1 -left-1 h-2.5 w-2.5 bg-[#2446E8] sm:h-3 sm:w-3"
                      style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Content area */}
                <div className="px-5 pb-5 pt-8 sm:px-7 sm:pb-7 sm:pt-10">
                  <h3 className="text-lg font-bold text-navy sm:text-xl" style={{ marginBottom: "10px" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#73798C]" style={{ lineHeight: "1.6" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
