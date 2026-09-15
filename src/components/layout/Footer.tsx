"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartPulse, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { FacebookIcon, XIcon, InstagramIcon, LinkedInIcon } from "../ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const usefulLinks = [
  { label: "Privacy Policy", href: "/about" },
  { label: "Terms & Condition", href: "/about" },
  { label: "Support", href: "/contact" },
  { label: "Disclaimer", href: "/about" },
  { label: "Faq", href: "/about" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { name: "X", href: "https://x.com", icon: XIcon },
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-[#0F172A] text-slate-300" aria-label="Site footer">
      {/* Floating Newsletter Card */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-14 sm:-top-16 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <div className="mx-auto max-w-[1100px] rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold text-[#111827]">
                <span className="text-[#FF4B4B]">Subscribe</span> for the exclusive updates!
              </h3>
              <div className="flex flex-col gap-3 sm:w-full sm:min-w-0">
                <div className="flex rounded-full bg-slate-100 p-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className="flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-[#111827] placeholder-slate-400 outline-none"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-[#1E56FF] px-5 py-2.5 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
                  >
                    Subscribe Now
                  </button>
                </div>
                <label className="flex items-center gap-2 text-xs text-slate-500">
                  <input type="checkbox" className="rounded border-slate-300" />
                  I agree to the{" "}
                  <Link href="/about" className="underline text-[#1E56FF]">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-24 pb-8 sm:pt-28">
        {/* Decorative dots */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-10 top-20 hidden lg:block">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`left-${i}`}
                className="absolute block h-1 w-1 rounded-full bg-white/10"
                style={{ top: `${i * 20}px`, left: `${i * 15}px` }}
              />
            ))}
          </div>
          <div className="absolute -right-10 top-20 hidden lg:block">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`right-${i}`}
                className="absolute block h-1 w-1 rounded-full bg-white/10"
                style={{ top: `${i * 20}px`, right: `${i * 15}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand */}
            <div className="space-y-5">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF4B4B] to-[#1E56FF] text-white">
                  <HeartPulse className="h-5 w-5" />
                </span>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  MEDINOVA
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Your Health, Our Priority. Compassionate medical care delivered by experienced specialists you can trust.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-250 hover:border-[#1E56FF] hover:bg-[#1E56FF] hover:text-white"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="mb-5 text-base font-bold text-white">Quick Link</h3>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div>
              <h3 className="mb-5 text-base font-bold text-white">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="mb-5 text-base font-bold text-white">Contact us</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1E56FF]" />
                  <span className="text-slate-400">
                    47 Bakery Street, London, UK
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1E56FF]" />
                  <Link href="tel:+15551234567" className="text-slate-400 hover:text-white">
                    (555) 123-4567
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1E56FF]" />
                  <Link href="mailto:hello@medinova.example" className="text-slate-400 hover:text-white">
                    hello@medinova.example
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-12 border-t border-slate-800 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 sm:justify-start">
                <li><Link href="/about" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/about" className="hover:text-white">Terms of Use</Link></li>
                <li><Link href="/about" className="hover:text-white">Sales and Refunds</Link></li>
                <li><Link href="/about" className="hover:text-white">Legal</Link></li>
                <li><Link href="/about" className="hover:text-white">Site Map</Link></li>
              </ul>
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E56FF] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </footer>
  );
}