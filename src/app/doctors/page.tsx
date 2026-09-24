"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Search,
  Clock,
  Calendar,
  Phone,
  ArrowRight,
  UserCheck,
  Stethoscope,
  ChevronRight,
  Home,
  CheckCircle2,
  X,
} from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  department: string;
  qualification: string;
  timing: string;
  days: string;
  experience?: string;
  room?: string;
}

const allDoctors: Doctor[] = [
  {
    name: "Dr. Huma",
    specialty: "Consultant Physician",
    department: "Medicine",
    qualification: "MBBS, FCPS (Medicine)",
    timing: "02:00 PM – 05:00 PM",
    days: "Mon, Wed, Fri",
    experience: "12+ Years",
    room: "Room 102",
  },
  {
    name: "Dr. M. Saqib Butt",
    specialty: "General & Laparoscopic Surgeon",
    department: "General Surgery",
    qualification: "MBBS, FCPS (Surgery)",
    timing: "02:00 PM – 04:00 PM",
    days: "Mon – Sat",
    experience: "15+ Years",
    room: "Room 105",
  },
  {
    name: "Dr. Yousaf Dar",
    specialty: "ENT & Head Neck Surgeon",
    department: "ENT",
    qualification: "MBBS, DLO, FCPS (ENT)",
    timing: "02:00 PM – 04:00 PM",
    days: "Tue, Thu, Sat",
    experience: "14+ Years",
    room: "Room 108",
  },
  {
    name: "Dr. Javed Niazi",
    specialty: "Consultant Cardiologist",
    department: "Cardiology",
    qualification: "MBBS, FCPS (Cardiology)",
    timing: "03:00 PM – 06:00 PM",
    days: "Daily (Mon – Sat)",
    experience: "18+ Years",
    room: "Cardio OPD 1",
  },
  {
    name: "Dr. Shams",
    specialty: "Consultant Dermatologist & Cosmetologist",
    department: "Dermatology",
    qualification: "MBBS, MCPS, FCPS (Dermatology)",
    timing: "02:00 PM – 04:00 PM",
    days: "Mon, Wed, Fri",
    experience: "10+ Years",
    room: "Room 110",
  },
  {
    name: "Dr. Ehtisham Hafeez",
    specialty: "Orthopedic & Trauma Surgeon",
    department: "Orthopedics",
    qualification: "MBBS, FCPS (Orthopedics)",
    timing: "02:00 PM – 05:00 PM",
    days: "Mon – Sat",
    experience: "16+ Years",
    room: "Room 112",
  },
  {
    name: "Dr. Arzu Yousaf",
    specialty: "Consultant Gynecologist & Obstetrician",
    department: "Obs & Gynae",
    qualification: "MBBS, FCPS (Obs & Gynae)",
    timing: "02:00 PM – 05:00 PM",
    days: "Daily (Mon – Sat)",
    experience: "15+ Years",
    room: "Gynae OPD 2",
  },
  {
    name: "Dr. Haithem Akash",
    specialty: "Consultant Neurologist",
    department: "Neurology",
    qualification: "MBBS, FCPS (Neurology)",
    timing: "02:00 PM – 04:00 PM",
    days: "Tue, Thu, Sat",
    experience: "11+ Years",
    room: "Room 115",
  },
  {
    name: "Dr. Qurat Ul Ain",
    specialty: "Consultant Pediatrician & Neonatologist",
    department: "Pediatrics",
    qualification: "MBBS, DCH, FCPS (Pediatrics)",
    timing: "02:00 PM – 05:00 PM",
    days: "Daily (Mon – Sat)",
    experience: "13+ Years",
    room: "Peds OPD 1",
  },
  {
    name: "Dr. Navid Butt",
    specialty: "Consultant Urologist & Kidney Specialist",
    department: "Urology",
    qualification: "MBBS, MS (Urology), FRCS",
    timing: "02:00 PM – 04:00 PM",
    days: "Mon, Wed, Fri",
    experience: "17+ Years",
    room: "Room 118",
  },
  {
    name: "Dr. Muhammad Tariq",
    specialty: "Consultant Diabetologist & Endocrine",
    department: "Diabetology",
    qualification: "MBBS, MCPS (Medicine), Dip. Diabetes",
    timing: "03:00 PM – 06:00 PM",
    days: "Mon – Sat",
    experience: "14+ Years",
    room: "Room 104",
  },
  {
    name: "Dr. Asma Bilal",
    specialty: "Consultant Radiologist",
    department: "Radiology",
    qualification: "MBBS, FCPS (Radiology)",
    timing: "09:00 AM – 03:00 PM",
    days: "Mon – Sat",
    experience: "12+ Years",
    room: "Ultrasound & Imaging",
  },
];

const departments = [
  "All",
  "Cardiology",
  "Medicine",
  "General Surgery",
  "Obs & Gynae",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "ENT",
  "Neurology",
  "Urology",
  "Diabetology",
  "Radiology",
];

export default function DoctorsPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doc) => {
      const matchesDept =
        selectedDept === "All" || doc.department === selectedDept;
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.qualification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-dim pt-28 pb-24">
        {/* Breadcrumb & Hero Banner */}
        <div className="bg-neutral py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-white/60">
              <Link href="/" className="flex items-center gap-1 hover:text-white">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-white">Our Doctors Team</span>
            </nav>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary-container px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                  130+ Medical Specialists
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Consultant & <span className="text-primary-light">Doctors Directory</span>
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  Search and find highly qualified consultants, surgeons, and specialists across all departments at Alkhidmat Raazi Hospital Rawalpindi.
                </p>
              </div>
              <a
                href="/#appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary-dark"
              >
                <Calendar size={18} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="mb-8 space-y-4 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search doctor by name, specialty, or qualification..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-surface-dim py-2.5 pl-10 pr-9 text-sm font-medium text-neutral placeholder:text-neutral-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Counter info */}
              <p className="text-xs font-semibold text-neutral-500">
                Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? "specialist" : "specialists"}
              </p>
            </div>

            {/* Department Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {departments.map((dept) => {
                const isActive = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.name}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div>
                    {/* Header with Photo */}
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-secondary-container/40 to-neutral-100">
                      <Image
                        src="/doctor-placeholder.jpg"
                        alt={doc.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Department Tag */}
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-sm">
                        {doc.department}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-neutral transition-colors group-hover:text-primary">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-secondary">
                        {doc.specialty}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">
                        {doc.qualification}
                      </p>

                      {/* OPD Timings Box */}
                      <div className="mt-4 space-y-1.5 rounded-xl bg-surface-container p-3 text-xs text-neutral-600">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="flex-shrink-0 text-primary" />
                          <span className="font-semibold text-neutral-700">
                            {doc.timing}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-neutral-500">
                          <Calendar size={13} className="flex-shrink-0 text-neutral-400" />
                          <span>{doc.days}</span>
                        </div>
                        {doc.room && (
                          <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                            <span>OPD: {doc.room}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0">
                    <a
                      href="/#appointment"
                      className="block w-full rounded-xl bg-primary py-2.5 text-center text-xs font-bold text-white shadow-sm transition-all hover:bg-primary-dark"
                    >
                      Book Consultation
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-neutral-200 bg-white py-16 text-center">
              <UserCheck size={40} className="mx-auto mb-3 text-neutral-400" />
              <h3 className="text-lg font-bold text-neutral">No Doctors Found</h3>
              <p className="mt-1 text-xs text-neutral-500">
                No specialists match your search criteria. Try selecting another department or resetting search.
              </p>
              <button
                onClick={() => {
                  setSelectedDept("All");
                  setSearchQuery("");
                }}
                className="mt-4 rounded-xl bg-primary px-5 py-2 text-xs font-bold text-white transition-all hover:bg-primary-dark"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Helpline Callout */}
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm md:flex-row md:p-8">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-secondary">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral">
                  Need Help Finding a Consultant or Booking an Appointment?
                </h4>
                <p className="text-xs text-neutral-500">
                  Call our 24/7 hospital reception desk for live doctor scheduling and immediate booking.
                </p>
              </div>
            </div>
            <a
              href="tel:051111122333"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-dark"
            >
              <Phone size={16} />
              051 111 122 333
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
