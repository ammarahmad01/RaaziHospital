"use client";

import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["24-B-1, Chandni Chowk,", "Satellite Town, Rawalpindi"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@alkhidmatraazi.com"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["051 111 122 333", "0300 5551943"],
    color: "bg-tertiary/10 text-tertiary-dark",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-surface-dim py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary-container px-4 py-1.5 text-xs font-bold tracking-widest text-secondary uppercase">
            Reach Out
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral md:text-4xl lg:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>

        {/* Contact Info Cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${info.color}`}
              >
                <info.icon size={24} />
              </div>
              <h3 className="mb-2 text-base font-bold text-neutral">
                {info.title}
              </h3>
              {info.lines.map((line) => (
                <p key={line} className="text-sm text-neutral-500">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map + Form Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Google Map */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9988274952248!2d73.0708298!3d33.6312724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94dbedc63c77%3A0xe154899b615a6372!2sAlkhidmat%20Raazi%20hospital%20Rawalpindi!5e0!3m2!1sen!2s!4v1790164806604!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="min-h-[350px] lg:min-h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Alkhidmat Raazi Hospital Location"
            />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card md:p-8"
          >
            <h3 className="mb-6 text-xl font-bold text-neutral">
              Send us a Message
            </h3>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-semibold text-neutral-600"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-semibold text-neutral-600"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-sm font-semibold text-neutral-600"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                    placeholder="0300 1234567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-semibold text-neutral-600"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
