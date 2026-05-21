import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Festa delle Spighe 2026 - Villa Fontana",
  description:
    "44ª Edizione - Sagra parrocchiale di Villa Fontana. 19-20-21 Giugno 2026 - Stand gastronomico, bar, musica, quiz show e tanto divertimento!",
  openGraph: {
    title: "Festa delle Spighe 2026",
    description:
      "Sagra parrocchiale di Villa Fontana - 19-20-21 Giugno 2026",
    url: "https://festadellespighe.parrocchia-villafontana.it",
    siteName: "Festa delle Spighe",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable} ${dancing.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
