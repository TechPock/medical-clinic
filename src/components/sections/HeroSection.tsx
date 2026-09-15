"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Palette, ArrowUp } from "lucide-react";

export function HeroSection() {
  const [rtl, setRtl] = useState(false);

  const toggleRtl = () => {
    setRtl((prev) => !prev);
    document.documentElement.dir = rtl ? "ltr" : "rtl";
  };

  return (
    <section className="relative h-[450px] md:h-[500px] w-full overflow-hidden" aria-label="Hero banner">
      {/* Background image */}
      <Image
        src="/images/chooseus-bg.jpg"
        alt="Medical professionals at Medimart"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#0a1128]/50" aria-hidden="true" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-extrabold text-white" style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}>
          About Us
        </h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex items-center justify-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-[#FF5A55] hover:underline">
                Home
              </Link>
            </li>
            <li className="text-white/60" aria-hidden="true">
              &gt;
            </li>
            <li>
              <span className="font-semibold text-white">About Us</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Floating left buttons */}
      <div className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <button
          type="button"
          onClick={toggleRtl}
          aria-label="Toggle RTL"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3159E8] text-white shadow-lg transition-transform hover:scale-110"
        >
          <span className="text-xs font-bold">RTL</span>
        </button>
        <button
          type="button"
          aria-label="Palette"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3159E8] text-white shadow-lg transition-transform hover:scale-110"
        >
          <Palette className="h-4 w-4" />
        </button>
      </div>

      {/* Go to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
        className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3159E8] text-white shadow-lg transition-transform hover:scale-110 md:right-4 md:top-4"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </section>
  );
}
