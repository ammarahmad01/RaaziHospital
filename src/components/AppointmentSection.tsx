"use client";

import { Phone, Calendar, HeartHandshake } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section id="appointment" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-neutral" />

      {/* Decorative Elements */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />
      <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-sm">
              Book Your Visit
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Get an
              <br />
              <span className="text-primary-light">Appointment</span>
            </h2>
            <p className="mb-8 max-w-md text-lg text-white/70">
              Schedule your consultation with our expert medical professionals.
              We&apos;re here to provide you with the best possible healthcare.
            </p>

            {/* Phone Number */}
            <a
              href="tel:051111122333"
              className="group mb-6 flex items-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/60">
                  Call us anytime
                </p>
                <p className="text-2xl font-extrabold text-white md:text-3xl">
                  051 111 122 333
                </p>
              </div>
            </a>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://alkhidmatraazi.com/get-a-appointment/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-primary shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <Calendar size={18} />
                Make an Appointment
              </a>
              <a
                href="https://alkhidmatraazi.com/donate-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                <HeartHandshake size={18} />
                Donate Now
              </a>
            </div>
          </div>

          {/* Right - Appointment Quick Info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Why Choose Raazi Hospital?
            </h3>
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Affordable Healthcare",
                  desc: "Quality medical care at not-for-profit costs accessible to all communities.",
                },
                {
                  number: "02",
                  title: "Expert Medical Team",
                  desc: "130+ experienced consultants and specialists across 17+ departments.",
                },
                {
                  number: "03",
                  title: "24/7 Emergency Services",
                  desc: "Round-the-clock emergency care with modern diagnostic facilities.",
                },
                {
                  number: "04",
                  title: "Modern Facilities",
                  desc: "ISO certified hospital with state-of-the-art medical equipment.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light/20 text-sm font-extrabold text-primary-light">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
