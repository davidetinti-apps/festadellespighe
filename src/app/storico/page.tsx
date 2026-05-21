import type { Metadata } from "next";
import StoricoGallery from "@/components/StoricoGallery";

export const metadata: Metadata = {
  title: "Storico Locandine - Festa delle Spighe",
  description: "Le locandine di tutte le edizioni della Festa delle Spighe di Villa Fontana",
};

export default function StoricoPage() {
  return (
    <div className="bg-warm min-h-screen">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-olive mb-3">
            Storico Locandine
          </h1>
          <p className="text-center text-text-light text-lg mb-12 max-w-2xl mx-auto">
            Un viaggio attraverso le edizioni della Festa delle Spighe,
            dalla prima edizione del 2014 ad oggi.
          </p>

          <StoricoGallery />

          <div className="mt-12 text-center text-text-light">
            <p className="text-sm italic">
              Le edizioni 2020 e 2021 non si sono svolte a causa della pandemia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
