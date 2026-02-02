export interface Testimonial {
  id: string;
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Peter de Vries",
    company: "Loodgietersbedrijf De Vries",
    industry: "Loodgieter",
    quote: "Binnen twee dagen had ik een professionele website. Eindelijk krijg ik leads via Google in plaats van alleen via mond-tot-mond. Absoluut de investering waard!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sandra Bakker",
    company: "Kapsalon Bakker",
    industry: "Kapper",
    quote: "Ik had geen tijd om weken te wachten op een website. WebsiteSnelKlaar leverde precies wat ze beloofden: snel, mooi, en betaalbaar. Mijn klanten boeken nu online!",
    rating: 5,
  },
  {
    id: "3",
    name: "Mark Hendriks",
    company: "Coaching & Advies Hendriks",
    industry: "Coach",
    quote: "Als coach wil je een website die vertrouwen uitstraalt. Het team begreep dit meteen en binnen 48 uur stond mijn site online. De maandelijkse kosten zijn heel overzichtelijk.",
    rating: 5,
  },
];
