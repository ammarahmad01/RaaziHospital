"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  { src: "/hero/2.jpeg", alt: "Alkhidmat Raazi Hospital — Main Building" },
  { src: "/hero/4.jpeg", alt: "Alkhidmat Raazi Hospital — Family Block" },
  { src: "/hero/3.jpeg", alt: "Alkhidmat Raazi Poly Clinic & Collection Center" },
  { src: "/hero/1.jpeg", alt: "Alkhidmat Raazi Children Hospital" },
  { src: "/hero/5.jpeg", alt: "Alkhidmat Raazi Diagnostics & Blood Bank" },
  { src: "/hero/6.jpeg", alt: "Alkhidmat Raazi Poly Clinic II" },
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const navigate = (dir: "prev" | "next") => {
    setCurrentImage((prev) =>
      dir === "prev"
        ? prev === 0
          ? galleryImages.length - 1
          : prev - 1
        : prev === galleryImages.length - 1
          ? 0
          : prev + 1
    );
  };

  return (
    <section id="gallery" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-primary-container px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
            Our Facility
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral md:text-4xl lg:text-5xl">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Take a virtual tour of our modern healthcare facilities and
            state-of-the-art medical equipment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => openLightbox(i)}
            >
              <div
                className={`relative ${
                  i === 0 ? "h-64 md:h-96" : "h-40 md:h-48"
                } w-full`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/40">
                  <div className="scale-0 rounded-full bg-white/90 p-3 transition-transform duration-300 group-hover:scale-100">
                    <Camera size={24} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-10 text-center">
          <a
            href="https://alkhidmatraazi.com/gallery-full-screen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-neutral-200 px-6 py-3 text-sm font-bold text-neutral-700 transition-all hover:border-primary hover:text-primary"
          >
            View Full Gallery
            <ChevronRight size={16} />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("prev");
            }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              fill
              className="rounded-2xl object-contain"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("next");
            }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {currentImage + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
