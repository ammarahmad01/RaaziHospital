"use client";

import Image from "next/image";
import {
  Heart,
  Award,
  BedDouble,
  Stethoscope,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: BedDouble,
    value: "250+",
    label: "Hospital Beds",
    badge: "Inpatient Care",
    desc: "Modern facility & emergency capacity",
    gradient: "from-sky-500 to-blue-600",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-100",
    glowColor: "group-hover:border-sky-200 group-hover:shadow-sky-500/10",
  },
  {
    icon: Stethoscope,
    value: "130+",
    label: "Consultants",
    badge: "Specialists",
    desc: "Expert doctors across 17+ departments",
    gradient: "from-primary to-primary-dark",
    badgeStyle: "bg-red-50 text-primary border-red-100",
    glowColor: "group-hover:border-red-200 group-hover:shadow-primary/10",
  },
  {
    icon: ShieldCheck,
    value: "ISO 9001",
    label: "Quality Certified",
    badge: "Standard",
    desc: "Internationally verified clinical care",
    gradient: "from-emerald-500 to-teal-600",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-100",
    glowColor: "group-hover:border-emerald-200 group-hover:shadow-emerald-500/10",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    label: "Not-for-Profit",
    badge: "Welfare",
    desc: "Zakat funded & subsidized treatment",
    gradient: "from-amber-500 to-orange-600",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-100",
    glowColor: "group-hover:border-amber-200 group-hover:shadow-amber-500/10",
  },
];

const keyFacts = [
  "Established in 2006 under Alkhidmat Foundation Pakistan",
  "One of 57 healthcare facilities nationwide",
  "Serving Rawalpindi, Islamabad and surrounding areas",
  "Transforming Zakat and charitable support into health outcomes",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-surface-dim py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-container px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
            About Us
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral md:text-4xl lg:text-5xl">
            Alkhidmat Raazi Hospital
            <br />
            <span className="text-primary">At a Glance</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card-hover">
              <Image
                src="/hero/4.jpeg"
                alt="Alkhidmat Raazi Hospital — Family Block"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-modal md:-right-8 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10">
                  <Award className="text-tertiary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-neutral">20+</p>
                  <p className="text-sm font-medium text-neutral-500">
                    Years of Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-neutral-600">
              Established in <strong className="text-neutral">2006</strong>,{" "}
              <strong className="text-neutral">
                Alkhidmat Raazi Hospital Rawalpindi
              </strong>{" "}
              is one of the{" "}
              <strong className="text-neutral">57 healthcare facilities</strong>{" "}
              operating under{" "}
              <strong className="text-neutral">
                Alkhidmat Foundation Pakistan
              </strong>
              , dedicated to providing quality healthcare at not-for-profit cost.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              With a capacity of{" "}
              <strong className="text-neutral">250 beds</strong> and a
              professional team of{" "}
              <strong className="text-neutral">
                over 130 consultants and medical specialists
              </strong>
              , the hospital has grown into a trusted institution and a lifeline
              for underprivileged communities.
            </p>

            {/* Key Facts */}
            <div className="mb-8 space-y-3">
              {keyFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 flex-shrink-0 text-tertiary"
                    size={20}
                  />
                  <span className="text-base text-neutral-600">{fact}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://alkhidmatraazi.com/donate-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              <Heart size={18} />
              Donate Us
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.glowColor}`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-90 transition-opacity group-hover:opacity-100`}
              />

              {/* Decorative Subtle Background Watermark Icon */}
              <item.icon
                size={80}
                className="pointer-events-none absolute -bottom-4 -right-4 text-neutral-900/[0.03] transition-all duration-300 group-hover:scale-110 group-hover:text-neutral-900/[0.06]"
              />

              {/* Header: Icon + Badge */}
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  <item.icon size={22} strokeWidth={2.2} />
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${item.badgeStyle}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Stat Metric & Title */}
              <div>
                <p className="text-2xl font-black tracking-tight text-neutral lg:text-3xl">
                  {item.value}
                </p>
                <p className="mt-0.5 text-sm font-bold text-neutral-700">
                  {item.label}
                </p>
                <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
