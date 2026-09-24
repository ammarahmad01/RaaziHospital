"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Activity,
  CheckCircle2,
  CalendarPlus,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
  availability: string;
}

const featuredServices: ServiceItem[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    image: "/services/cardiology.jpg",
    description:
      "Expert cardiac evaluations, management of hypertension, ischemic heart diseases, ECG & Echocardiography, and 24-hour emergency resuscitation.",
    highlights: ["ECG & Echocardiography", "Cardiac Monitoring", "Chest Pain Clinic"],
    availability: "Daily & 24/7 Emergency",
  },
  {
    id: "diagnostics",
    name: "Diagnostic Center",
    image: "/services/diagnostics.jpg",
    description:
      "Fully automated biochemistry, hematology, immunology, and microbiology diagnostics with same-day accurate clinical reporting.",
    highlights: ["Automated Analyzers", "Same-Day Reports", "Home Sampling"],
    availability: "24/7 Available",
  },
  {
    id: "obs-gynae",
    name: "Obs & Gynaecology",
    image: "/services/maternal-consultation.jpg",
    description:
      "Complete antenatal care, safe normal and caesarean deliveries, fertility consultation, and advanced laparoscopic gynecological surgery.",
    highlights: ["Labour & Delivery Suites", "Antenatal OPD", "Infertility Clinic"],
    availability: "Daily (Morning & Evening)",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-surface-dim py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-container px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
              <Activity size={14} />
              Clinical Specialties
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral md:text-4xl lg:text-5xl">
              Our Medical <span className="text-primary">Services</span>
            </h2>
            <p className="mt-3 text-base text-neutral-600 md:text-lg">
              Comprehensive inpatient, outpatient, surgical, and diagnostic care
              powered by 130+ senior consultants across 17 specialized departments.
            </p>
          </div>

          <a
            href="#appointment"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            <CalendarPlus size={18} />
            Book Consultation
          </a>
        </div>

        {/* ── Centers of Excellence (3 Featured Services) ── */}
        <div className="mb-10">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-neutral md:text-2xl">
              Centers of Excellence
            </h3>
            <p className="text-xs font-medium text-neutral-500 md:text-sm">
              Key clinical pillars providing round-the-clock specialized care
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((feat) => (
              <div
                key={feat.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Service Image */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={feat.image}
                    alt={feat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-extrabold text-white">
                      {feat.name}
                    </h4>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {feat.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2 border-t border-neutral-100 pt-4">
                      {feat.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2 text-xs font-semibold text-neutral-700"
                        >
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 text-primary"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                      <Clock size={13} />
                      {feat.availability}
                    </span>
                    <a
                      href="#appointment"
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-transform group-hover:translate-x-0.5"
                    >
                      Book Visit
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── View All Services Button ── */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-primary bg-white px-8 py-4 text-sm font-bold text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5"
          >
            View All 17 Departments
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* ── 24/7 Emergency & Ambulance Callout ── */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50/50 p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <span className="inline-block text-xs font-extrabold tracking-widest text-primary uppercase">
                  24/7 Trauma & Emergency Unit
                </span>
                <h3 className="text-lg font-extrabold text-neutral md:text-xl">
                  Need Immediate Medical or Ambulance Assistance?
                </h3>
                <p className="text-xs text-neutral-600 md:text-sm">
                  Our emergency resuscitation rooms, trauma surgeons, and ambulances are available 24 hours a day.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:051111122333"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                051 111 122 333
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-700 transition-all hover:bg-neutral-50"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
