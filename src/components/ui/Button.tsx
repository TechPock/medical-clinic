"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium outline-offset-2 transition-all duration-250 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none";

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand to-accent text-white shadow-card hover:shadow-floating hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "border border-accent/30 bg-accent-light text-navy hover:bg-accent hover:text-white hover:scale-[1.03] active:scale-[0.98]",
  outline:
    "border border-brand/30 text-brand hover:bg-brand hover:text-white hover:scale-[1.03] active:scale-[0.98]",
  ghost: "text-navy hover:bg-navy/5 hover:text-brand active:scale-[0.98]",
};

export const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-8 text-base font-semibold tracking-tight",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const classes = cn(
      baseStyles,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild) {
      const child = props.children as React.ReactElement<{
        className?: string;
      }>;
      return React.cloneElement(child, {
        className: cn(child.props.className, classes),
      });
    }

    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";
