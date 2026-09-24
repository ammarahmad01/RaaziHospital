import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

/* ── Inline SVG Social Icons ── */
function FacebookIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
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

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Doctors", href: "#doctors" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
  { name: "Feedback", href: "https://alkhidmatraazi.com/feedback/" },
];

const serviceLinks = [
  { name: "Cardiology", href: "#services" },
  { name: "General Surgery", href: "#services" },
  { name: "Radiology", href: "#services" },
  { name: "ENT", href: "#services" },
  { name: "Medicine", href: "#services" },
  { name: "Dental Surgery", href: "#services" },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/AlkhidmatRaaziHospitalrwp/", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/alkhidmatraazi", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/alkhidmat-raazi-hospital-rawalpindi-51849133b/", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/@AlkhidmatRaaziRWP", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <Link href="#home" className="mb-6 inline-block">
              <Image
                src="/logo.png"
                alt="Alkhidmat Raazi Hospital"
                width={160}
                height={54}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              Raazi Hospital is committed to the provision of high quality
              healthcare and patient services to our valued patients from the
              local community and beyond.
            </p>
            <a
              href="https://alkhidmatraazi.com/donate-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary-dark"
            >

              Donate Now
            </a>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="mb-5 text-base font-bold text-white">
              Quick Access
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="mb-5 text-base font-bold text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="mb-5 text-base font-bold text-white">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-primary-light"
                />
                <p className="text-sm text-neutral-400">
                  24-B-1, Chandni Chowk, Satellite Town, Rawalpindi
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="flex-shrink-0 text-primary-light"
                />
                <a
                  href="mailto:info@alkhidmatraazi.com"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  info@alkhidmatraazi.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-primary-light"
                />
                <div className="text-sm text-neutral-400">
                  <a
                    href="tel:051111122333"
                    className="block transition-colors hover:text-white"
                  >
                    051 111 122 333
                  </a>
                  <a
                    href="tel:03005551943"
                    className="block transition-colors hover:text-white"
                  >
                    0300 5551943
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-neutral-400 transition-all hover:bg-primary hover:text-white"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-neutral-500 md:flex-row lg:px-8">
          <p>
            Copyright © Alkhidmat Raazi Rawalpindi {new Date().getFullYear()}.
            All rights reserved.
          </p>
          <p>
            Managed by{" "}
            <a
              href="https://sitedigicraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-400 transition-colors hover:text-primary-light"
            >
              SiteDigiCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
