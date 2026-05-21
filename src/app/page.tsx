import Link from "next/link";
import Image from "next/image";
import ScrollAnimations from "@/components/ScrollAnimations";

const wheatPhotos = [
  { src: "/strip_1.png", alt: "Tortellini" },
  { src: "/strip_2.png", alt: "Festa" },
  { src: "/strip_3.png", alt: "Grembiuli" },
  { src: "/strip_4.png", alt: "Tortellini" },
  { src: "/strip_5.png", alt: "Calcio balilla umano" },
  { src: "/strip_6.png", alt: "Palco per recita" },
];

export default function Home() {
  return (
    <>
      <ScrollAnimations />

      {/* Hero Section with wheat background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-wheat.jpg"
          alt="Spighe di grano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/70 to-cream/90" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="animate-fade-in-up uppercase tracking-[0.2em] text-olive text-sm font-medium mb-4">
            44ª Edizione · Villa Fontana
          </p>
          <h1 className="animate-fade-in-up delay-200 font-display text-6xl md:text-8xl lg:text-9xl font-black text-olive-dark leading-[0.85] mb-6 drop-shadow-sm">
            FESTA<br />DELLE<br />SPIGHE
          </h1>
          {/* Date badge */}
          <div className="animate-scale-in delay-400 inline-flex items-center justify-center w-36 h-36 rounded-full bg-olive-dark text-white mb-6 shadow-xl">
            <div className="text-center">
              <p className="text-lg font-bold leading-tight">19 · 20 · 21</p>
              <p className="text-xs uppercase tracking-wider">Giugno</p>
              <p className="text-2xl font-bold">2026</p>
            </div>
          </div>
          <p className="animate-fade-in-up delay-500 font-script text-2xl md:text-3xl text-brown italic mb-8">
            Tradizione, divertimento e<br />tante specialità da gustare
          </p>
          <div className="animate-fade-in-up delay-600">
            <a
              href="#programma"
              className="inline-flex items-center gap-2 bg-olive-dark hover:bg-olive text-white font-bold py-3.5 px-9 rounded-full uppercase tracking-wide text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Scopri il programma
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-olive-dark/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-14 bg-warm border-t border-warm-dark">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="scroll-animate text-center" style={{ transitionDelay: "0ms" }}>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-3 border border-warm-dark hover:scale-110 transition-transform">
                <span className="text-2xl">🍺</span>
              </div>
              <h3 className="font-display font-bold text-olive-dark text-sm uppercase tracking-wide">Angolo Bar</h3>
              <p className="text-xs text-text-light mt-1">con piadine, birra, gelati e tanto altro</p>
            </div>
            <div className="scroll-animate text-center" style={{ transitionDelay: "100ms" }}>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-3 border border-warm-dark hover:scale-110 transition-transform">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-display font-bold text-olive-dark text-sm uppercase tracking-wide">Tanti Premi</h3>
              <p className="text-xs text-text-light mt-1">da vincere ogni sera con la lotteria</p>
            </div>
            <div className="scroll-animate text-center" style={{ transitionDelay: "200ms" }}>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-3 border border-warm-dark hover:scale-110 transition-transform">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="font-display font-bold text-olive-dark text-sm uppercase tracking-wide">Esposizione</h3>
              <p className="text-xs text-text-light mt-1">trattori d&apos;epoca</p>
            </div>
            <div className="scroll-animate text-center" style={{ transitionDelay: "300ms" }}>
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-3 border border-warm-dark hover:scale-110 transition-transform">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="font-display font-bold text-olive-dark text-sm uppercase tracking-wide">Attività</h3>
              <p className="text-xs text-text-light mt-1">per grandi e piccoli tutti i giorni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Il Programma */}
      <section className="py-20 bg-warm" id="programma">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-animate font-display text-4xl md:text-5xl font-bold text-center text-olive-dark mb-14 uppercase tracking-wide">
            Il Programma
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Venerdì */}
            <div className="scroll-animate" style={{ transitionDelay: "0ms" }}>
              <div className="text-center mb-6">
                <span className="inline-block bg-terracotta/15 text-terracotta font-bold px-5 py-1 rounded-full text-sm uppercase tracking-wider border border-terracotta/30">
                  Venerdì
                </span>
                <p className="text-5xl font-display font-black text-olive-dark mt-3">19</p>
                <p className="text-terracotta uppercase text-sm font-semibold tracking-wider">Giugno</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-terracotta rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">19:00</span>
                  <p className="text-sm text-text leading-relaxed">Apertura bar con birra, cocktail, piadine e arrosticini</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-terracotta rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">21:00</span>
                  <p className="text-sm text-text leading-relaxed"><strong>&ldquo;QUIZZAMI&rdquo;</strong>, date un nome alla vostra squadra e sfidate le altre come in un vero quiz show a premi! (Gradita prenotazione tramite messaggio sui profili social della festa)</p>
                </div>
              </div>
            </div>

            {/* Sabato */}
            <div className="scroll-animate" style={{ transitionDelay: "150ms" }}>
              <div className="text-center mb-6">
                <span className="inline-block bg-gold/15 text-accent-dark font-bold px-5 py-1 rounded-full text-sm uppercase tracking-wider border border-gold/30">
                  Sabato
                </span>
                <p className="text-5xl font-display font-black text-olive-dark mt-3">20</p>
                <p className="text-accent-dark uppercase text-sm font-semibold tracking-wider">Giugno</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">16:30</span>
                  <p className="text-sm text-text leading-relaxed">Inizio esposizione trattori d&apos;epoca</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">17:30</span>
                  <p className="text-sm text-text leading-relaxed">Saggio di fine anno del polo per l&apos;infanzia &ldquo;S. Angelo Custode&rdquo;</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">18:30</span>
                  <p className="text-sm text-text leading-relaxed">Intrattenimento per bambini con <strong>&ldquo;L&apos;Arcobaleno in Mongolfiera&rdquo;</strong></p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">19:00</span>
                  <p className="text-sm text-text leading-relaxed">Apertura stand gastronomico con menù di carne e pesce</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">21:00</span>
                  <p className="text-sm text-text leading-relaxed">Proiezione foto attività polo per l&apos;infanzia &ldquo;S. Angelo Custode&rdquo;</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-gold rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">21:30</span>
                  <p className="text-sm text-text leading-relaxed">Estrazione della lotteria</p>
                </div>
              </div>
            </div>

            {/* Domenica */}
            <div className="scroll-animate" style={{ transitionDelay: "300ms" }}>
              <div className="text-center mb-6">
                <span className="inline-block bg-olive/15 text-olive-dark font-bold px-5 py-1 rounded-full text-sm uppercase tracking-wider border border-olive/30">
                  Domenica
                </span>
                <p className="text-5xl font-display font-black text-olive-dark mt-3">21</p>
                <p className="text-olive-dark uppercase text-sm font-semibold tracking-wider">Giugno</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">09:30</span>
                  <p className="text-sm text-text leading-relaxed">Santa Messa</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">10:30</span>
                  <p className="text-sm text-text leading-relaxed">Aperitivo e stuzzichini nel cortile parrocchiale</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">17:30</span>
                  <p className="text-sm text-text leading-relaxed">Recita comunitaria dei vespri nel cortile della parrocchia</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">18:00</span>
                  <p className="text-sm text-text leading-relaxed"><strong>&ldquo;Pump Track&rdquo;</strong> circuito ad ostacoli per bimbi in bicicletta</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">19:00</span>
                  <p className="text-sm text-text leading-relaxed">Apertura stand gastronomico con menù di carne e pesce</p>
                </div>
                <div className="flex gap-3 items-start group">
                  <span className="text-xs font-bold text-white bg-olive rounded px-1.5 py-0.5 min-w-[42px] text-center mt-0.5 group-hover:scale-110 transition-transform">20:30</span>
                  <p className="text-sm text-text leading-relaxed">Musica live con <strong>&ldquo;The MamaMusic Live&rdquo;</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Download button */}
          <div className="scroll-animate text-center mt-14">
            <Link
              href="/locandine/2026.png"
              target="_blank"
              className="inline-flex items-center gap-2 border-2 border-olive-dark text-olive-dark font-bold py-3 px-8 rounded-full uppercase tracking-wide text-sm hover:bg-olive-dark hover:text-white transition-all hover:scale-105"
            >
              Scarica il programma completo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="scroll-animate relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-64 md:h-72">
          {wheatPhotos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
          <Link
            href="/menu"
            className="pointer-events-auto inline-flex items-center gap-2 bg-warm/95 backdrop-blur border-2 border-olive-dark text-olive-dark font-bold py-3 px-8 rounded-full uppercase tracking-wide text-sm hover:bg-olive-dark hover:text-white transition-all shadow-lg hover:scale-105"
          >
            Scopri gli stand e le specialità
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Info Utili */}
      <section className="py-16 bg-warm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="scroll-animate bg-white rounded-2xl p-5 border border-warm-dark flex items-start gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "0ms" }}>
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-olive-dark text-sm uppercase">Dove siamo</h3>
                <p className="text-xs text-text-light mt-1">Via Ercole dalla Valle, 15 Parrocchia di Santa Maria in Garda di Villa Fontana</p>
              </div>
            </div>
            <div className="scroll-animate bg-white rounded-2xl p-5 border border-warm-dark flex items-start gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "100ms" }}>
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                <span className="text-lg">🎶</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-olive-dark text-sm uppercase">Musica Live</h3>
                <p className="text-xs text-text-light mt-1">Serate con musica dal vivo e intrattenimento</p>
              </div>
            </div>
            <div className="scroll-animate bg-white rounded-2xl p-5 border border-warm-dark flex items-start gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "200ms" }}>
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                <span className="text-lg">👨‍👩‍👧‍👦</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-olive-dark text-sm uppercase">Per tutta la famiglia</h3>
                <p className="text-xs text-text-light mt-1">Attività e intrattenimento per grandi e piccini</p>
              </div>
            </div>
            <div className="scroll-animate bg-white rounded-2xl p-5 border border-warm-dark flex items-start gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: "300ms" }}>
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                <span className="text-lg">🍽️</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-olive-dark text-sm uppercase">Cibo per tutti</h3>
                <p className="text-xs text-text-light mt-1">Stand gastronomico con specialità di carne e pesce</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
