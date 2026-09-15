"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { HeartPulse, Menu, X, Calendar } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className={cn(
        "relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-navy outline-offset-2 transition-colors hover:bg-slate-200 focus-visible:outline-2"
      )}
      whileTap={{ scale: 0.92 }}
    >
      {open ? (
        <X className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Menu className="h-5 w-5" aria-hidden="true" />
      )}
    </motion.button>
  );
}

function MobileMenu({
  open,
  links,
  pathname,
  reduced,
  onLinkClick,
}: {
  open: boolean;
  links: NavLink[];
  pathname: string;
  reduced: boolean;
  onLinkClick: () => void;
}) {
  const transition: Transition = reduced
    ? { duration: 0 }
    : { type: "tween", duration: 0.3, ease: "easeOut" };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onClick={onLinkClick}
          />
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-4 z-50 mx-4 rounded-2xl bg-white p-6 shadow-floating sm:mx-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={transition}
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onLinkClick}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-[#FFE9EC] text-[#FF3344]"
                        : "text-navy hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full shadow-card"
                  asChild
                >
                  <Link href="/appointment" onClick={onLinkClick}>
                    Request Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "flex items-center justify-between gap-4 rounded-full bg-white px-6 py-4 shadow-card transition-shadow duration-300",
            scrolled && "shadow-md"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 outline-none"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF5A55] to-[#3159E8] text-white">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-navy">
              MEDINOVA
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex" role="menubar">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className={cn(
                    "relative py-2 text-sm font-medium transition-all duration-250",
                    active
                      ? "bg-[#FF5A55]/10 text-[#FF5A55] rounded-full"
                      : "text-navy hover:text-[#3159E8] hover:bg-slate-50 rounded-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

{/* Desktop CTA + Mobile trigger */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                className="hidden lg:flex shadow-card hover:shadow-floating gap-2 bg-[#315BEA] text-white hover:bg-[#244ed1] !bg-[#315BEA] !text-white"
                asChild
              >
                <Link href="/appointment" onClick={closeMenu} className="inline-flex items-center justify-center gap-2">
                  <Calendar className="h-4 w-4 text-white" aria-hidden="true" />
                  <span className="font-semibold text-white">Appointment</span>
                </Link>
              </Button>

              <div className="lg:hidden">
                <Hamburger
                  open={menuOpen}
                  onClick={() => setMenuOpen((o) => !o)}
                />
              </div>
            </div>
        </nav>
      </motion.div>

      <MobileMenu
        open={menuOpen}
        links={navLinks}
        pathname={pathname}
        reduced={reduce}
        onLinkClick={closeMenu}
      />
    </header>
  );
}