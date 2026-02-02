export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Hoe kan mijn website echt binnen 48 uur online staan?",
    answer: "We werken met bewezen templates die we snel aanpassen aan jouw huisstijl. Zodra jij je content aanlevert (logo, teksten, foto's), gaan wij direct aan de slag. Bij complete aanlevering staat je site binnen 48 uur live. Heb je nog niet alles? Dan starten we met placeholders en vullen we later aan.",
  },
  {
    id: "2",
    question: "Wat is er inbegrepen bij de prijs?",
    answer: "Bij beide pakketten is inbegrepen: een volledig responsive website, hosting, e-mailadres(sen) op jouw domein, SSL-certificaat (https), basis SEO-optimalisatie, en doorlopend onderhoud. Je hoeft nergens anders te betalen.",
  },
  {
    id: "3",
    question: "Hoe werkt het met e-mail?",
    answer: "Je krijgt een professioneel e-mailadres op jouw domeinnaam, bijvoorbeeld info@jouwbedrijf.nl. Dit is inbegrepen in beide pakketten. Extra e-mailadressen kunnen we op aanvraag toevoegen.",
  },
  {
    id: "4",
    question: "Wat houdt de hosting in?",
    answer: "Wij regelen betrouwbare hosting in Nederland. Je site is snel, veilig (SSL) en altijd online. Je hoeft zelf niets te regelen of te betalen bij een andere hostingpartij.",
  },
  {
    id: "5",
    question: "Wat valt onder onderhoud?",
    answer: "Onderhoud omvat: technische updates, security patches, kleine tekstwijzigingen (tot 30 min/maand), en monitoring van uptime. Grotere wijzigingen of nieuwe pagina's zijn tegen meerprijs.",
  },
  {
    id: "6",
    question: "Moet ik zelf een domeinnaam regelen?",
    answer: "Als je al een domein hebt, koppelen we die. Heb je nog geen domein? Dan regelen we de registratie voor je. De jaarlijkse domeinkosten (meestal €10-15/jaar) zijn niet inbegrepen maar we helpen je met de registratie.",
  },
  {
    id: "7",
    question: "Hoeveel revisierondes krijg ik?",
    answer: "Bij oplevering krijg je 2 revisierondes voor feedback en aanpassingen. Meestal is één ronde al genoeg, maar we zorgen dat je 100% tevreden bent voordat we live gaan.",
  },
  {
    id: "8",
    question: "Waarom een minimale looptijd van 12 maanden bij het abonnement?",
    answer: "We investeren vooraf tijd in het bouwen van jouw website. De minimale looptijd van 12 maanden zorgt dat we deze investering kunnen terugverdienen en jou blijvend goed kunnen ondersteunen.",
  },
  {
    id: "9",
    question: "Waarom bieden jullie geen webshops aan?",
    answer: "Webshops vereisen complexe functionaliteit: betalingen, voorraadbeheer, verzending, etc. Dit past niet bij onze snelle en betaalbare aanpak. Wij focussen op lead-genererende websites voor dienstverleners.",
  },
  {
    id: "10",
    question: "Kan ik extra pagina's of features laten toevoegen?",
    answer: "Ja, dat kan altijd. Extra pagina's, formulieren, of integraties (zoals Calendly, Google Maps) kunnen we op aanvraag toevoegen. Je krijgt vooraf een prijsopgave zodat je weet waar je aan toe bent.",
  },
  {
    id: "11",
    question: "Wat als ik mijn content nog niet compleet heb?",
    answer: "Geen probleem! We starten met placeholders voor tekst en afbeeldingen. Zodra je de definitieve content hebt, passen we alles aan. Zo hoef je niet te wachten en staat je site alvast online.",
  },
];
