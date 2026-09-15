import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header
      id={id}
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-block text-3xl font-bold tracking-tighter text-navy leading-tight md:text-4xl",
          textAlign
        )}
      >
        {title}
        <span
          aria-hidden="true"
          className="mt-3 block h-1.5 w-14 rounded-full bg-gradient-to-r from-brand to-accent"
        />
      </div>
      {subtitle && (
        <p className={cn("mt-4 max-w-2xl text-slate-500", textAlign)}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
