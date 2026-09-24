"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight, ArrowRight, UserCheck } from "lucide-react";
import { useState, useRef } from "react";

const doctors = [
  { name: "Dr. Huma", specialty: "Consultant Physician", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. M. Saqib Butt", specialty: "General Surgeon", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Yousaf Dar", specialty: "ENT Specialist", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Javed Niazi", specialty: "Cardiologist", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Shams", specialty: "Dermatologist", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Ehtisham Hafeez", specialty: "Orthopedic Surgeon", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Arzu Yousaf", specialty: "Gynecologist", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Haithem Akash", specialty: "Neurologist", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Qurat Ul Ain", specialty: "Pediatrician", timing: "02:00 PM – 03:00 PM" },
  { name: "Dr. Navid Butt", specialty: "Urologist", timing: "02:00 PM – 03:00 PM" },
];

export default function DoctorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section id="doctors" className="bg-surface-dim py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 inline-block rounded-full bg-tertiary/10 px-4 py-1.5 text-xs font-bold tracking-widest text-tertiary-dark uppercase">
              Meet Our Experts
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral md:text-4xl lg:text-5xl">
              Our <span className="text-primary">Doctors</span> Team
            </h2>
          </div>

          {/* Right Action: Button to Doctors Page & Carousel Controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/doctors"
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              <UserCheck size={16} />
              View All Doctors
              <ArrowRight size={16} />
            </Link>

            {/* Scroll Arrows */}
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-card transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-600"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-card transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-neutral-200 disabled:hover:text-neutral-600"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="group flex w-[300px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Doctor Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary-container to-neutral-100">
                <Image
                  src="/doctor-placeholder.jpg"
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="300px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 text-lg font-bold text-neutral">
                  {doctor.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-secondary">
                  {doctor.specialty}
                </p>

                {/* Timing */}
                <div className="mt-auto rounded-xl bg-surface-container p-3">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock size={14} className="text-primary" />
                    <span className="font-medium">
                      Evening: {doctor.timing}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400">
                    Not available on Sunday
                  </p>
                </div>

                {/* Book Button */}
                <a
                  href="#appointment"
                  className="mt-4 block w-full rounded-xl bg-primary py-2.5 text-center text-sm font-bold text-white transition-all hover:bg-primary-dark"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Doctors Page */}
        <div className="mt-12 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-7 py-3 text-sm font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-white"
          >
            Explore Complete Doctors Directory & Schedules
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
