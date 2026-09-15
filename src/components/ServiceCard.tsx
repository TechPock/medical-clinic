"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/lib/icons";
import type { Service } from "@/data/services";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      id={service.id}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={!reduce ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: reduce ? 0 : 0.55,
        ease: "easeOut",
        delay: delay * 0.08,
      }}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-card p-6 shadow-card",
        "transition-shadow duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand",
          "transition-transform duration-300 group-hover:scale-110"
        )}
      >
        <ServiceIcon name={service.icon} className="h-6 w-6 stroke-[1.5]" />
      </div>

      <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
      <p className="mt-2 text-sm text-slate-500 flex-1">
        {service.description}
      </p>

      <Link
        href={`/services#${service.id}`}
        scroll={false}
        className={cn(
          "mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand",
          "transition-transform duration-300 group-hover:translate-x-1",
          "focus-visible:translate-x-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        )}
      >
        Learn More
        <ChevronRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}
