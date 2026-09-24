"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Clock,
} from "lucide-react";

/* ── Inline SVG Social Icons ── */
function FacebookIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

const services = [
  { name: "Diagnostic Center", href: "/services" },
  { name: "Cardiology", href: "/services" },
  { name: "General Surgery", href: "/services" },
  { name: "Dental Surgery", href: "/services" },
  { name: "Radiology", href: "/services" },
  { name: "Obs & Gynaecology", href: "/services" },
  { name: "ENT", href: "/services" },
  { name: "Medicine", href: "/services" },
  { name: "View All Services →", href: "/services" },
];

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Doctors", href: "/doctors" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* ── Top Bar ── */}
      <div
        className={`transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
          } bg-neutral text-white`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-primary-light" />
              <span className="hidden sm:inline">
                24-B-1, Chandni Chowk, Satellite Town, Rawalpindi
              </span>
              <span className="sm:hidden">Rawalpindi</span>
            </span>
            <a
              href="tel:051111122333"
              className="flex items-center gap-2 transition-colors hover:text-primary-light"
            >
              <Phone size={14} className="text-primary-light" />
              051 111 122 333
            </a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xs font-medium text-neutral-400 mr-1">Follow Us:</span>
            <a
              href="https://www.facebook.com/AlkhidmatRaaziHospitalrwp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#1877F2] hover:scale-110"
            >
              <FacebookIcon size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/alkhidmat-raazi-hospital-rawalpindi-51849133b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#0A66C2] hover:scale-110"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href="https://www.instagram.com/alkhidmatraazi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110"
            >
              <InstagramIcon size={14} />
            </a>
            <a
              href="https://www.youtube.com/@AlkhidmatRaaziRWP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#FF0000] hover:scale-110"
            >
              <YoutubeIcon size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? "glass shadow-card border-b border-neutral-200"
          : "bg-white shadow-sm"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Alkhidmat Raazi Hospital"
              width={180}
              height={60}
              className="h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:drop-shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </a>
                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full z-50 mt-1 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-modal transition-all duration-200 ${isServicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                        }`}
                    >
                      <div className="p-2">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-neutral-600 transition-colors hover:bg-secondary-container hover:text-secondary"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              className="hidden items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md sm:flex"
            >
              <Clock size={16} />
              Doctor Timings
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-xl p-2 text-neutral-700 transition-colors hover:bg-neutral-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="border-t border-neutral-200 bg-white px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setIsMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white"
            >
              <Clock size={16} />
              Doctor Timings
            </a>
            <div className="mt-4 flex items-center justify-center gap-4 border-t border-neutral-200 pt-4">
              <a href="https://www.facebook.com/AlkhidmatRaaziHospitalrwp/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary"><FacebookIcon size={20} /></a>
              <a href="https://www.linkedin.com/in/alkhidmat-raazi-hospital-rawalpindi-51849133b/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary"><LinkedinIcon size={20} /></a>
              <a href="https://www.instagram.com/alkhidmatraazi" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary"><InstagramIcon size={20} /></a>
              <a href="https://www.youtube.com/@AlkhidmatRaaziRWP" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary"><YoutubeIcon size={20} /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
