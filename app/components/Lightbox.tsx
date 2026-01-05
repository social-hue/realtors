"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { GalleryItem } from "../data/gallery";
// import { GalleryItem } from "@/data/gallery";

interface Props {
  items: GalleryItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onClose: () => void;
}

export default function Lightbox({
  items,
  activeIndex,
  setActiveIndex,
  onClose,
}: Props) {
  const item = items[activeIndex];

  const prev = () =>
    setActiveIndex((activeIndex - 1 + items.length) % items.length);

  const next = () =>
    setActiveIndex((activeIndex + 1) % items.length);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:opacity-70"
      >
        <X size={32} />
      </button>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-6 text-white hover:opacity-70"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Content */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center px-6">
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            width={1600}
            height={1000}
            className="object-contain max-h-[85vh] w-auto rounded-lg"
            priority
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[85vh] w-full rounded-lg"
          />
        )}
      </div>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-6 text-white hover:opacity-70"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
}
