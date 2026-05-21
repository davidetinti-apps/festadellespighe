import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menù - Festa delle Spighe 2026",
  description: "Menù della Villa Summer Party, stand gastronomico e bar - Festa delle Spighe 2026",
};

interface MenuItem {
  nome: string;
  prezzo?: string;
  nota?: string;
}

interface MenuCategory {
  categoria: string;
  piatti: MenuItem[];
}

const menuVillaSummerParty: MenuCategory[] = [
  { categoria: "Piadine", piatti: [
    { nome: "Vuota", prezzo: "1.00" },
    { nome: "Salame", prezzo: "4.00" },
    { nome: "Salsiccia", prezzo: "4.00" },
    { nome: "Ciccioli", prezzo: "4.00" },
    { nome: "Prosciutto Crudo", prezzo: "4.00" },
    { nome: "Squacquerone e Rucola", prezzo: "3.00" },
    { nome: "Salame, Squacquerone e Rucola", prezzo: "4.50" },
    { nome: "Prosciutto Crudo, Squacquerone e Rucola", prezzo: "4.50" },
    { nome: "Nutella", prezzo: "3.00" },
    { nome: "Senza glutine", nota: "+ €1.00" },
  ]},
  { categoria: "Stuzzichini", piatti: [
    { nome: "Arrosticini (6 pezzi)", prezzo: "5.00" },
    { nome: "Patatine Fritte", prezzo: "3.00" },
  ]},
  { categoria: "Bevande", piatti: [
    { nome: "Acqua Naturale", prezzo: "1.00" },
    { nome: "Acqua Frizzante", prezzo: "1.00" },
    { nome: "Coca Cola 0.33 LT", prezzo: "2.00" },
    { nome: "Fanta 0.33 LT", prezzo: "2.00" },
    { nome: "Birra piccola 0.33 LT", prezzo: "3.00" },
    { nome: "Birra media 0.50 LT", prezzo: "4.50" },
  ]},
  { categoria: "Drinks", piatti: [
    { nome: "Aperol Spritz", prezzo: "5.00" },
    { nome: "Hugo", prezzo: "5.00" },
    { nome: "Gin Tonic", prezzo: "6.00" },
  ]},
  { categoria: "Gelati", piatti: [
    { nome: "Cornetto", prezzo: "2.00" },
    { nome: "Ghiacciolo", prezzo: "1.00" },
  ]},
  { categoria: "Altro", piatti: [
    { nome: "Caffè", prezzo: "1.00" },
    { nome: "Sorbetto", prezzo: "2.00" },
    { nome: "Limoncello", prezzo: "2.00" },
  ]},
];

const menuStandGastronomico: MenuCategory[] = [
  { categoria: "Primi Piatti", piatti: [
    { nome: "Bis di minestre (Tortellini alla panna + Garganelli)" },
    { nome: "Tortellini al ragù" },
    { nome: "Tortellini alla panna" },
    { nome: "Risotto alla marinara" },
    { nome: "Garganelli alla boscaiola" },
  ]},
  { categoria: "Secondi e Contorni", piatti: [
    { nome: "Spiedini di pesce" },
    { nome: "Fritto misto di pesce" },
    { nome: "Fiorentina" },
    { nome: "Castrato" },
    { nome: "Salsiccia" },
    { nome: "Patatine Fritte" },
    { nome: "Insalata Mista" },
  ]},
  { categoria: "Dolci", piatti: [
    { nome: "Torta ricotta e pistacchio" },
    { nome: "Torta cheese-cake con fragoline" },
    { nome: "Torta semifreddo al mascarpone" },
    { nome: "Sorbetto al limone" },
  ]},
];

const menuBar: MenuCategory[] = [
  { categoria: "Piadine", piatti: [
    { nome: "Vuota", prezzo: "1.00" },
    { nome: "Salame", prezzo: "4.00" },
    { nome: "Ciccioli", prezzo: "4.00" },
    { nome: "Prosciutto Crudo", prezzo: "4.00" },
    { nome: "Squacquerone e Rucola", prezzo: "3.00" },
    { nome: "Salame, Squacquerone e Rucola", prezzo: "4.50" },
    { nome: "Prosciutto Crudo, Squacquerone e Rucola", prezzo: "4.50" },
    { nome: "Nutella", prezzo: "3.00" },
    { nome: "Senza glutine", nota: "+ €1.00" },
  ]},
  { categoria: "Bevande", piatti: [
    { nome: "Acqua Naturale", prezzo: "1.00" },
    { nome: "Acqua Frizzante", prezzo: "1.00" },
    { nome: "Coca Cola 0.33 LT", prezzo: "2.00" },
    { nome: "Fanta 0.33 LT", prezzo: "2.00" },
    { nome: "Birra piccola 0.33 LT", prezzo: "3.00" },
    { nome: "Birra media 0.50 LT", prezzo: "4.50" },
  ]},
  { categoria: "Drinks", piatti: [
    { nome: "Aperol Spritz", prezzo: "5.00" },
    { nome: "Hugo", prezzo: "5.00" },
    { nome: "Gin Tonic", prezzo: "6.00" },
  ]},
  { categoria: "Gelati", piatti: [
    { nome: "Cornetto", prezzo: "2.00" },
    { nome: "Ghiacciolo", prezzo: "1.00" },
  ]},
  { categoria: "Altro", piatti: [
    { nome: "Caffè", prezzo: "1.00" },
    { nome: "Sorbetto", prezzo: "2.00" },
    { nome: "Limoncello", prezzo: "2.00" },
  ]},
];

function MenuSection({ title, subtitle, menu }: { title: string; subtitle: string; menu: MenuCategory[] }) {
  return (
    <div className="mb-14">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-olive">{title}</h2>
        <p className="text-terracotta font-medium text-sm mt-1">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((categoria) => (
          <div key={categoria.categoria} className="bg-white rounded-2xl p-5 shadow-sm border border-cream">
            <h3 className="text-lg font-bold text-terracotta mb-3 border-b border-terracotta/20 pb-2">
              {categoria.categoria}
            </h3>
            <ul className="space-y-2">
              {categoria.piatti.map((piatto) => (
                <li key={piatto.nome} className="flex justify-between items-center">
                  <span className="text-text text-sm">{piatto.nome}</span>
                  {/*
                  {piatto.prezzo && (
                    <span className="font-semibold text-olive ml-3 text-sm whitespace-nowrap">€{piatto.prezzo}</span>
                  )}
                    */}
                  {piatto.nota && (
                    <span className="text-text-light ml-3 text-sm italic whitespace-nowrap">{piatto.nota}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-warm min-h-screen">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-olive mb-3">
            Menù
          </h1>
          <p className="text-center text-text-light mb-12">
            Tutti i menù della Festa delle Spighe 2026
          </p>

          <MenuSection
            title="Villa Summer Party"
            subtitle="Venerdì 19 Giugno"
            menu={menuVillaSummerParty}
          />

          <MenuSection
            title="Stand Gastronomico"
            subtitle="Sabato 20 e Domenica 21 Giugno"
            menu={menuStandGastronomico}
          />

          <MenuSection
            title="Bar"
            subtitle="Sabato 20 e Domenica 21 Giugno"
            menu={menuBar}
          />

          <div className="text-center">
            <p className="text-sm text-text-light italic">
              I prezzi e la disponibilità dei piatti potrebbero subire variazioni.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
