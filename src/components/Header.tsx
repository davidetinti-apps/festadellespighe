"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#programma", label: "Programma" },
    { href: "/menu", label: "Stand e Specialità" },
    { href: "/storico", label: "Le Edizioni" },
  ];

  return (
    <header className="bg-warm/95 backdrop-blur-sm border-b border-warm-dark sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            <span className="font-display font-bold text-olive-dark text-lg leading-tight hidden sm:block">
              FESTA<br className="hidden lg:block" /> DELLE SPIGHE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brown hover:text-terracotta transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/festadellespighe/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-olive-dark hover:bg-olive text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide transition-colors flex items-center gap-1.5"
            >
              Seguici
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-brown"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-1 border-t border-warm-dark pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-3 rounded-lg text-brown hover:bg-warm-dark transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/festadellespighe/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-3 text-terracotta text-sm font-medium"
            >
              Seguici su Instagram →
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
