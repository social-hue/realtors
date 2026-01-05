"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Lightbox from "./Lightbox";
import { galleryItems } from "../data/gallery";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Left title */}
        <h3 className="text-4xl font-bold tracking-wide text-gray-800">
          Gallery
        </h3>

        {/* Right controls */}
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Gallery track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll py-2 scroll-smooth scrollbar-hide"
      >
        {galleryItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className="relative min-w-[260px] h-[160px] rounded-xl overflow-hidden shadow-md hover:scale-[1.03] transition-transform flex-shrink-0"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                className="object-cover"
              />
            ) : (
              <video
                src={item.src}
                poster={item.poster}
                className="w-full h-full object-cover"
                muted
              />
            )}

            {item.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black/30">
                ▶
              </span>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
