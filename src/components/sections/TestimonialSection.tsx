"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The care and professionalism I experienced at Medinova were exceptional. The doctors were friendly, attentive, and made the entire process comfortable and stress-free.",
    name: "Robert Fox",
    role: "Dog Trainer",
    image: "/images/doctor1.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Outstanding medical team! The specialists took time to explain everything clearly and the facilities are top-notch. Highly recommend for families seeking quality care.",
    name: "Sarah Johnson",
    role: "Patient",
    image: "/images/doctor2.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "From appointment booking to follow-up care, every step was smooth and professional. The pediatric team was amazing with my children.",
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/images/doctor3.jpg",
    rating: 5,
  },
  {
    id: 4,
    text: "I have been a patient at Medinova for over three years. The consistency in care and the genuine concern for patient wellbeing is what keeps me coming back.",
    name: "Emily Davis",
    role: "Teacher",
    image: "/images/doctor4.jpg",
    rating: 4,
  },
  {
    id: 5,
    text: "The emergency care I received was swift and life-saving. The entire staff worked seamlessly together. Forever grateful for their dedication and expertise.",
    name: "James Wilson",
    role: "Business Owner",
    image: "/images/doctor5.jpg",
    rating: 5,
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const reduce = useReducedMotion() ?? false;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-white" aria-labelledby="testimonials-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Full-height image */}
        <motion.div
          initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative min-h-[400px] lg:min-h-[520px]"
        >
          <Image
             src="/images/testimonial-bg.jpg"
            alt="Medical professionals reviewing patient data at Medinova"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-[#F8FAFC] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
        >
          {/* Geometric pattern background */}
          <div
            className="pointer-events-none absolute right-0 top-0 hidden lg:block"
            aria-hidden="true"
            style={{
              width: "320px",
              height: "320px",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />

          <div className="relative max-w-xl">
            {/* Sub-heading */}
            <span className="text-sm font-bold uppercase tracking-wider text-[#3B82F6]">
              Testimonials
            </span>

            {/* Main heading */}
            <h2
              id="testimonials-heading"
              className="font-extrabold leading-tight text-navy"
              style={{ fontSize: "clamp(1.25rem, 5vw, 2rem)" }}
            >
              What Our Client Say About Medinova
            </h2>

            {/* Testimonial slider */}
            <div className="relative mt-10">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full shrink-0 px-0 sm:px-1"
                    >
                       <div className="relative rounded-2xl bg-white p-6 shadow-card sm:p-8 md:p-10">
                        {/* Quotation mark */}
                        <span
                          className="pointer-events-none absolute bottom-4 right-6 text-7xl font-serif leading-none text-slate-200"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>

                        {/* Review text */}
                        <p className="relative text-base leading-relaxed text-[#64748B] italic">
                          {testimonial.text}
                        </p>

                        {/* User profile */}
                        <div className="relative mt-8 flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < testimonial.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300"
                                  }`}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="mt-1 text-base font-bold text-navy">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-[#EF4444]">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6] focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6] focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Dot pagination */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-6 bg-[#3B82F6]"
                          : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
