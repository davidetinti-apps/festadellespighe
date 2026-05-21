"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const years = [2026, 2025, 2024, 2023, 2022, 2019, 2018, 2017, 2016, 2015, 2014];

export default function StoricoGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelected(year)}
            className="bg-white rounded-2xl shadow-sm border border-cream overflow-hidden hover:shadow-md transition-shadow group text-left cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={`/locandine/${year}.png`}
                alt={`Locandina Festa delle Spighe ${year}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-olive">
                {year}
              </h2>
              {year === 2026 && (
                <span className="inline-block mt-1 text-xs bg-terracotta text-white px-2 py-0.5 rounded-full">
                  Quest&apos;anno
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gold transition-colors z-10"
            onClick={() => setSelected(null)}
            aria-label="Chiudi"
          >
            ×
          </button>
          <div
            className="relative max-w-2xl w-full max-h-[90vh] aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/locandine/${selected}.png`}
              alt={`Locandina Festa delle Spighe ${selected}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="absolute bottom-6 text-white text-lg font-bold">
            {selected}
          </p>
        </div>
      )}
    </>
  );
}
