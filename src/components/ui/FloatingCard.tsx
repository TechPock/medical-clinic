"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

interface FloatingCardProps {
  icon: ElementType;
  value?: string;
  label: string;
  className?: string;
  delay?: number;
}

export function FloatingCard({
  icon: Icon,
  value,
  label,
  className,
  delay = 0,
}: FloatingCardProps) {
  const reduce = useReducedMotion() ?? false;
  const enter = reduce
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 24, scale: 0.95 };
  const target = { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      className={cn(
        "w-fit",
        !reduce && "animate-drift",
        "motion-reduce:animate-none"
      )}
      style={{ animationDuration: "9s", animationDelay: `${delay * 0.5}s` }}
    >
      <motion.div
        initial={enter}
        animate={target}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: reduce ? 0 : 0.55,
          ease: "easeOut",
          delay: delay * 0.2,
        }}
        whileHover={{ scale: 1.04 }}
        className={cn(
          "flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2.5 text-sm text-slate-700 shadow-card ring-1 ring-black/5",
          "hover:shadow-floating",
          className
        )}
      >
         <Icon className="h-4 w-4 shrink-0 text-brand sm:h-5 sm:w-5" />
        {value ? (
          <>
            <span className="font-semibold text-navy">{value}</span>
            <span className="text-slate-500">{label}</span>
          </>
        ) : (
          <span className="text-slate-600">{label}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
