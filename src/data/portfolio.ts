export interface PortfolioProject {
  id: string;
  title: string;
  industry: string;
  industrySlug: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export const industries = [
  { slug: "alle", label: "Alle" },
  { slug: "kapper", label: "Kapper" },
  { slug: "loodgieter", label: "Loodgieter" },
  { slug: "coach", label: "Coach" },
  { slug: "restaurant", label: "Restaurant" },
  { slug: "aannemer", label: "Aannemer" },
  { slug: "makelaar", label: "Makelaar" },
  { slug: "fysiotherapie", label: "Fysiotherapie" },
  { slug: "schoonheidssalon", label: "Schoonheidssalon" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Kapsalon De Schaar",
    industry: "Kapper",
    industrySlug: "kapper",
    description: "Moderne website voor een kapsalon in Tilburg met online afspraken en portfolio.",
    imageUrl: "/placeholder.svg",
    features: ["Online afspraken", "Portfolio galerij", "Prijslijst", "Contactformulier"],
  },
  {
    id: "2",
    title: "Loodgietersbedrijf Van Dam",
    industry: "Loodgieter",
    industrySlug: "loodgieter",
    description: "Professionele bedrijfswebsite voor een loodgietersbedrijf in Breda.",
    imageUrl: "/placeholder.svg",
    features: ["Diensten overzicht", "Spoedhulp sectie", "Werkgebied kaart", "Offerte formulier"],
  },
  {
    id: "3",
    title: "Life Coach Martine",
    industry: "Coach",
    industrySlug: "coach",
    description: "Persoonlijke website voor een life coach met focus op eerste sessie boeken.",
    imageUrl: "/placeholder.svg",
    features: ["Over mij pagina", "Coaching trajecten", "Testimonials", "Calendly integratie"],
  },
  {
    id: "4",
    title: "Trattoria Bella",
    industry: "Restaurant",
    industrySlug: "restaurant",
    description: "Sfeervol restaurant website met menu en reserveringsmogelijkheid.",
    imageUrl: "/placeholder.svg",
    features: ["Digitaal menu", "Reserveren", "Locatie & openingstijden", "Foto galerij"],
  },
  {
    id: "5",
    title: "Bouwbedrijf Janssen",
    industry: "Aannemer",
    industrySlug: "aannemer",
    description: "Zakelijke website voor een aannemersbedrijf met projecten portfolio.",
    imageUrl: "/placeholder.svg",
    features: ["Projecten showcase", "Diensten", "Over ons", "Offerte aanvragen"],
  },
  {
    id: "6",
    title: "Makelaarskantoor De Woning",
    industry: "Makelaar",
    industrySlug: "makelaar",
    description: "Elegante website voor een makelaarskantoor met woningaanbod integratie.",
    imageUrl: "/placeholder.svg",
    features: ["Woningaanbod", "Verkoop diensten", "Team pagina", "Contact"],
  },
  {
    id: "7",
    title: "Fysiotherapie Eindhoven",
    industry: "Fysiotherapie",
    industrySlug: "fysiotherapie",
    description: "Heldere website voor een fysiotherapiepraktijk met behandelingen overzicht.",
    imageUrl: "/placeholder.svg",
    features: ["Behandelingen", "Team", "Afspraak maken", "Locatie info"],
  },
  {
    id: "8",
    title: "Beauty Studio Rosa",
    industry: "Schoonheidssalon",
    industrySlug: "schoonheidssalon",
    description: "Luxe uitstraling voor een schoonheidssalon met online boeken.",
    imageUrl: "/placeholder.svg",
    features: ["Behandelingen", "Prijslijst", "Online boeken", "Cadeaubonnen"],
  },
];
