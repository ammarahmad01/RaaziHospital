"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  Heart,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ── Slide Data — using images from /hero/ folder ── */
const slides = [
  {
    src: "/hero/2.jpeg",
    alt: "Alkhidmat Raazi Hospital — Main Building",
    headline: "Welcome to",
    highlight: "Alkhidmat Raazi",
    subtitle: "Hospital Rawalpindi",
    description:
      "One of the Best and Affordable Hospitals in Rawalpindi, providing 24-hour healthcare facilities for over a decade.",
  },
  {
    src: "/hero/4.jpeg",
    alt: "Alkhidmat Raazi Hospital — Family Block",
    headline: "Comprehensive",
    highlight: "Family Healthcare",
    subtitle: "Under One Roof",
    description:
      "From emergency services to specialized treatments — trusted by thousands of families across Rawalpindi and beyond.",
  },
  {
    src: "/hero/3.jpeg",
    alt: "Alkhidmat Raazi Hospital — Poly Clinic & Collection Center",
    headline: "Advanced",
    highlight: "Diagnostics Center",
    subtitle: "& Poly Clinic",
    description:
      "State-of-the-art diagnostic facilities with certified labs and imaging for accurate, timely results.",
  },
  {
    src: "/hero/1.jpeg",
    alt: "Alkhidmat Raazi Hospital — Children Hospital",
    headline: "Dedicated",
    highlight: "Children's Hospital",
    subtitle: "& Pediatric Care",
    description:
      "Specialized pediatric ward and child-friendly environment ensuring the best care for your little ones.",
  },
  {
    src: "/hero/5.jpeg",
    alt: "Alkhidmat Raazi Hospital — Diagnostics & Blood Bank",
    headline: "Life-Saving",
    highlight: "Blood Bank",
    subtitle: "& Lab Services",
    description:
      "24/7 blood bank and diagnostics centre serving the community with safe, reliable lab services.",
  },
  {
    src: "/hero/6.jpeg",
    alt: "Alkhidmat Raazi Hospital — Poly Clinic II",
    headline: "Expanding",
    highlight: "Community Care",
    subtitle: "Across Rawalpindi",
    description:
      "Multiple locations serving the community — a project of Alkhidmat Foundation Pakistan.",
  },
];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoPlay]);

  const goTo = (index: number) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    startAutoPlay();
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goPrev = () =>
    goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  const activeSlide = slides[current];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ── Hero Area ── */}
      <div className="relative min-h-screen">
        {/* ── Background Slider with Ken Burns ── */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1000ms] ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}

        {/* ── Dark Gradient Overlay — no red ── */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(2, 6, 23, 0.78) 0%,
                rgba(2, 6, 23, 0.55) 35%,
                rgba(2, 6, 23, 0.3) 60%,
                rgba(2, 6, 23, 0.15) 100%
              )
            `,
          }}
        />


        {/* ── Content ── */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center">
          <div className="mx-auto w-full max-w-7xl px-5 pt-40 pb-28 lg:px-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white/90">
                  24/7 Emergency Services Available
                </span>
              </div>

              {/* Heading — animated per slide */}
              <div
                key={current}
                className="animate-fade-in-up"
              >
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
                  {activeSlide.headline}{" "}
                  <span className="bg-gradient-to-r from-primary-light via-white to-primary-light bg-clip-text text-transparent">
                    {activeSlide.highlight}
                  </span>
                  <br />
                  <span className="text-white">{activeSlide.subtitle}</span>
                </h1>

                <p className="mb-10 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                  {activeSlide.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#appointment"
                  className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Calendar size={20} className="relative z-10" />
                  <span className="relative z-10">Book Appointment</span>
                  <ArrowRight
                    size={16}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="https://alkhidmatraazi.com/donate-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12]"
                >

                  <span>Donate Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── Slider Controls — right side ── */}
          <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
            <button
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* ── Slide Progress Indicators ── */}
          <div className="absolute bottom-10 left-0 z-20 px-5 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group relative flex h-8 items-center"
                  >
                    <div className="relative h-[3px] overflow-hidden rounded-full bg-white/20">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${i === current
                            ? "w-10 bg-white"
                            : "w-5 bg-white/40 group-hover:bg-white/60"
                          }`}
                      />
                      {/* Active slide progress bar */}
                      {i === current && (
                        <div
                          className="absolute inset-y-0 left-0 bg-primary animate-[progress_6s_linear_infinite]"
                          style={{
                            animation: "progress 6s linear",
                          }}
                        />
                      )}
                    </div>
                  </button>
                ))}
                <span className="ml-3 text-xs font-medium text-white/40 tabular-nums">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ── Progress bar animation keyframes ── */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
