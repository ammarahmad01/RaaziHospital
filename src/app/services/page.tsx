"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Search,
  ArrowUpRight,
  Clock,
  Activity,
  CheckCircle2,
  CalendarPlus,
  PhoneCall,
  ChevronRight,
  Home,
  X,
} from "lucide-react";

type Category =
  | "All"
  | "Critical & Emergency"
  | "Specialized Medicine"
  | "Maternal & Pediatrics"
  | "Surgical Specialties"
  | "Diagnostics & Labs";

interface ServiceItem {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  highlights: string[];
  availability: string;
  isFeatured?: boolean;
}

const servicesList: ServiceItem[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    category: "Critical & Emergency",
    image: "/services/cardiology.jpg",
    description:
      "Expert cardiac evaluations, management of hypertension, ischemic heart diseases, ECG & Echocardiography, and 24-hour emergency resuscitation.",
    highlights: ["ECG & Echocardiography", "Cardiac Monitoring", "Chest Pain Clinic"],
    availability: "Daily & 24/7 Emergency",
    isFeatured: true,
  },
  {
    id: "diagnostics",
    name: "Diagnostic Center",
    category: "Diagnostics & Labs",
    image: "/services/diagnostics.jpg",
    description:
      "Fully automated biochemistry, hematology, immunology, and microbiology diagnostics with same-day accurate clinical reporting.",
    highlights: ["Automated Analyzers", "Same-Day Reports", "Home Sampling"],
    availability: "24/7 Available",
    isFeatured: true,
  },
  {
    id: "obs-gynae",
    name: "Obs & Gynaecology",
    category: "Maternal & Pediatrics",
    image: "/services/maternal-consultation.jpg",
    description:
      "Complete antenatal care, safe normal and caesarean deliveries, fertility consultation, and advanced laparoscopic gynecological surgery.",
    highlights: ["Labour & Delivery Suites", "Antenatal OPD", "Infertility Clinic"],
    availability: "Daily (Morning & Evening)",
    isFeatured: true,
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    category: "Maternal & Pediatrics",
    image: "/services/pediatrics.jpg",
    description:
      "Specialized pediatric inpatient care, neonatal intensive care unit (NICU) support, developmental screenings, and national immunization.",
    highlights: ["NICU Support", "EPI Vaccination", "Growth Monitoring"],
    availability: "Mon – Sat (Morning & Evening)",
  },
  {
    id: "neurology",
    name: "Neurology",
    category: "Specialized Medicine",
    image: "/services/neurology.jpg",
    description:
      "Diagnosis and advanced clinical management of acute stroke, epilepsy, chronic migraines, Parkinson's disease, and neuropathies.",
    highlights: ["Stroke Protocol", "Epilepsy Clinic", "Headache Management"],
    availability: "Consultant Scheduled",
  },
  {
    id: "orthopedic",
    name: "Orthopedic & Trauma",
    category: "Surgical Specialties",
    image: "/services/orthopedic.jpg",
    description:
      "Trauma fracture care, joint replacement surgeries, arthroscopy, spine health, and comprehensive musculoskeletal rehabilitation.",
    highlights: ["Fracture & Trauma Unit", "Joint Replacement", "Spine Care"],
    availability: "Daily OPD & Emergency",
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    category: "Surgical Specialties",
    image: "/services/surgery.jpg",
    description:
      "Modern laparoscopic and open surgical interventions for hernia, gallbladder, appendectomy, gastrointestinal, and trauma procedures.",
    highlights: ["Laparoscopic Surgery", "Minor & Major OT", "Post-Op Recovery"],
    availability: "Elective & 24/7 Emergency",
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    category: "Diagnostics & Labs",
    image: "/services/radiology.jpg",
    description:
      "High-resolution digital X-rays, 3D/4D ultrasound color Doppler, and computerized radiography with quick diagnostic turnarounds.",
    highlights: ["Digital X-Ray", "Color Doppler Ultrasound", "Quick Imaging"],
    availability: "24/7 Available",
  },
  {
    id: "urology",
    name: "Urology & Renal Care",
    category: "Surgical Specialties",
    image: "/services/urology.jpg",
    description:
      "Modern treatment for kidney stones, prostate enlargement, urinary tract infections, and endourological laser procedures.",
    highlights: ["Kidney Stone Care", "Prostate Clinic", "Endourology"],
    availability: "Mon – Sat Scheduled",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology (Eye Care)",
    category: "Specialized Medicine",
    image: "/services/ophthalmology.jpg",
    description:
      "Comprehensive eye exams, sutureless Phaco cataract surgeries, glaucoma management, and pediatric vision screening.",
    highlights: ["Phaco Cataract Surgery", "Glaucoma Clinic", "Vision Testing"],
    availability: "Mon – Sat (Morning)",
  },
  {
    id: "ent",
    name: "ENT (Ear, Nose, Throat)",
    category: "Specialized Medicine",
    image: "/services/ent.jpg",
    description:
      "Endoscopic sinus surgery, tympanoplasty, tonsillectomy, allergy management, and digital hearing assessment.",
    highlights: ["Endoscopic Sinus Care", "Audiometry Lab", "Microsurgery"],
    availability: "Mon – Sat OPD",
  },
  {
    id: "dermatology",
    name: "Dermatology & Skin",
    category: "Specialized Medicine",
    image: "/services/dermatology.jpg",
    description:
      "Clinical therapy for eczema, psoriasis, acne, hair disorders, allergy patch tests, and minor dermatological procedures.",
    highlights: ["Clinical Dermatology", "Allergy Management", "Acne Clinics"],
    availability: "Tue, Thu, Sat",
  },
  {
    id: "diabetology",
    name: "Diabetology & Endocrine",
    category: "Specialized Medicine",
    image: "/services/diabetology.jpg",
    description:
      "Holistic diabetes management, insulin therapy protocols, thyroid disorders, and preventive diabetic foot care clinics.",
    highlights: ["Glucose Monitoring", "Diabetic Foot Care", "Thyroid Clinic"],
    availability: "Mon – Sat OPD",
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    category: "Critical & Emergency",
    image: "/services/medicine.jpg",
    description:
      "Comprehensive management of infectious diseases, chronic lifestyle illnesses, respiratory disorders, and complex multi-system conditions.",
    highlights: ["Inpatient Care", "Fever & Infection Clinic", "Senior Care"],
    availability: "Daily (Morning & Evening)",
  },
  {
    id: "psychiatry",
    name: "Psychiatry & Wellness",
    category: "Specialized Medicine",
    image: "/services/psychiatry.jpg",
    description:
      "Compassionate, confidential psychiatric assessments, mood disorder management, stress clinics, and psychological counseling.",
    highlights: ["Counseling Services", "Mood & Anxiety Care", "Confidential OPD"],
    availability: "Mon – Fri Scheduled",
  },
  {
    id: "pain-clinic",
    name: "Pain Clinic & Rehab",
    category: "Specialized Medicine",
    image: "/services/pain-clinic.jpg",
    description:
      "Interventional procedures for chronic back and neck pain, sciatica, arthritis relief, and post-surgical pain rehabilitation.",
    highlights: ["Nerve Block Therapies", "Spine Pain Relief", "Physical Rehab"],
    availability: "Wed, Fri Scheduled",
  },
  {
    id: "dental-surgery",
    name: "Dental Surgery",
    category: "Surgical Specialties",
    image: "/services/dental.jpg",
    description:
      "Complete dental treatments including root canal therapy, painless tooth extractions, scaling, crowns, and oral prosthetics.",
    highlights: ["Root Canal Therapy", "Scaling & Polishing", "Crowns & Bridges"],
    availability: "Mon – Sat (Morning & Evening)",
  },
];

const categories: Category[] = [
  "All",
  "Critical & Emergency",
  "Specialized Medicine",
  "Maternal & Pediatrics",
  "Surgical Specialties",
  "Diagnostics & Labs",
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return servicesList.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.highlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredServices = servicesList.filter((s) => s.isFeatured);

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
              <span className="text-white">Medical Services</span>
            </nav>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-container px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                  <Activity size={14} />
                  17 Specialized Departments
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Our Medical <span className="text-primary-light">Services</span>
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                  Comprehensive inpatient, outpatient, surgical, and diagnostic care
                  powered by 130+ senior consultants across 17 specialized departments.
                </p>
              </div>
              <a
                href="/#appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary-dark"
              >
                <CalendarPlus size={18} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-8">
          {/* ── Centers of Excellence (Featured Flagship) ── */}
          {selectedCategory === "All" && !searchQuery && (
            <div className="mb-14">
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
                          href="/#appointment"
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
          )}

          {/* ── Search & Filter Controls ── */}
          <div className="mb-8 space-y-4 rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 md:text-sm ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "border border-neutral-200/80 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
                      }`}
                    >
                      {cat}
                      {cat === "All" && ` (${servicesList.length})`}
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                />
                <input
                  type="text"
                  placeholder="Search specialty, procedure..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-surface-dim py-2.5 pl-10 pr-9 text-xs font-medium text-neutral placeholder:text-neutral-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Results count info */}
            {(searchQuery || selectedCategory !== "All") && (
              <p className="text-xs font-semibold text-neutral-500">
                Showing {filteredServices.length}{" "}
                {filteredServices.length === 1 ? "department" : "departments"}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            )}
          </div>

          {/* ── All Services Grid ── */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-card-hover"
                >
                  {/* Department Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {service.isFeatured && (
                      <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      {/* Category badge */}
                      <span className="mb-2 inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                        {service.category}
                      </span>

                      {/* Service Name */}
                      <h3 className="text-lg font-bold text-neutral transition-colors group-hover:text-primary">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="inline-block rounded-md border border-neutral-100 bg-neutral-50 px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <span className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {service.availability}
                      </span>
                      <a
                        href="/#appointment"
                        className="inline-flex items-center gap-1 text-xs font-bold text-secondary transition-all hover:text-primary"
                      >
                        Book Visit
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-white py-14 text-center">
              <Search size={36} className="mx-auto mb-3 text-neutral-400" />
              <p className="text-base font-bold text-neutral">
                No matching medical services found
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Try adjusting your search keyword or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 cursor-pointer rounded-xl bg-primary px-5 py-2 text-xs font-bold text-white transition-all hover:bg-primary-dark"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ── 24/7 Emergency & Ambulance Callout ── */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50/50 p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20">
                  <PhoneCall size={26} />
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
                  <PhoneCall size={16} />
                  051 111 122 333
                </a>
                <a
                  href="/#appointment"
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3.5 text-sm font-bold text-neutral-700 transition-all hover:bg-neutral-50"
                >
                  Schedule Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
