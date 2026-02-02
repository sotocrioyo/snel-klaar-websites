import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bedrijfswebsite",
    description:
      "Een complete, professionele website met alle essentiële pagina's: home, diensten, over ons, contact en meer. Perfect voor het genereren van leads.",
    features: [
      "Homepage met sterke call-to-actions",
      "Dienstenpagina met overzicht",
      "Over ons / team pagina",
      "Contactpagina met formulier",
      "Responsive design (mobiel-vriendelijk)",
      "SEO-geoptimaliseerd",
    ],
    price: "Vanaf €45/maand of €450 eenmalig",
  },
  {
    title: "One-page website",
    description:
      "Alle belangrijke informatie op één scrollende pagina. Ideaal voor startende ondernemers of simpele diensten.",
    features: [
      "Alles op één pagina",
      "Snelle laadtijd",
      "Duidelijke secties",
      "Contactformulier",
      "Responsive design",
    ],
    price: "Vanaf €45/maand of €450 eenmalig",
  },
  {
    title: "Landingspagina's",
    description:
      "Gerichte pagina's voor specifieke campagnes, diensten of doelgroepen. Perfect voor Google Ads of social media marketing.",
    features: [
      "Geoptimaliseerd voor conversie",
      "A/B test-vriendelijk",
      "Snelle laadtijd",
      "Call-to-action focus",
      "Analytics integratie",
    ],
    price: "Op aanvraag",
  },
  {
    title: "SEO basis",
    description:
      "Fundamentele zoekmachineoptimalisatie zodat je gevonden wordt in Google. Inbegrepen bij elke website.",
    features: [
      "Technische SEO-basis",
      "Meta titles & descriptions",
      "Snelheidsoptimalisatie",
      "Mobile-first indexatie",
      "Schema markup (basis)",
      "Google Search Console setup",
    ],
    price: "Inbegrepen",
  },
  {
    title: "Onderhoud & support",
    description:
      "Doorlopend onderhoud zodat je website veilig, snel en up-to-date blijft. Inclusief kleine wijzigingen.",
    features: [
      "Technische updates",
      "Security patches",
      "Backups (wekelijks)",
      "Uptime monitoring",
      "Kleine tekstwijzigingen (30 min/maand)",
      "Telefonische support",
    ],
    price: "Inbegrepen",
  },
  {
    title: "E-mail & DNS",
    description:
      "Professioneel e-mailadres op jouw domeinnaam en correcte DNS-instellingen voor betrouwbare e-mailbezorging.",
    features: [
      "E-mail op jouw domein (bijv. info@jouwbedrijf.nl)",
      "Webmail toegang",
      "Spam- en virusfilter",
      "DNS-beheer",
      "SPF/DKIM/DMARC records",
    ],
    price: "Inbegrepen",
  },
];

const notOffered = [
  {
    title: "Webshops / E-commerce",
    description:
      "Webshops met productbeheer, winkelwagens en checkout-systemen vereisen complexe functionaliteit die niet past bij onze snelle en betaalbare aanpak.",
  },
  {
    title: "Online betalingen",
    description:
      "Betalingssystemen zoals iDEAL, creditcards of andere checkout-oplossingen bieden we niet aan.",
  },
  {
    title: "Productbeheer / Voorraadbeheer",
    description:
      "Systemen voor het beheren van producten, voorraad, verzending en bestelverwerking.",
  },
  {
    title: "Complexe boekingsystemen",
    description:
      "Uitgebreide reserveringssystemen met betalingen, beschikbaarheid en automatische bevestigingen.",
  },
];

export default function Diensten() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              Onze diensten
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Alles wat je nodig hebt voor een professionele online aanwezigheid. 
              Gefocust op dienstverleners.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 shadow-card"
                >
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>

                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg bg-muted/50 px-4 py-2">
                    <span className="text-sm font-medium text-primary">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not Offered */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold">Wat wij niet aanbieden</h2>
              <p className="text-muted-foreground">
                We focussen op wat we goed doen. Deze diensten passen niet bij onze aanpak.
              </p>
            </div>

            <div className="space-y-4">
              {notOffered.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 rounded-xl border border-destructive/20 bg-card p-6"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent-hover">
              <Link to="/prijzen">
                Bekijk onze prijzen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/website-laten-maken-noord-brabant">
                Websites in Noord-Brabant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl bg-gradient-primary p-8 text-center md:p-12"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Klaar om te starten?
            </h2>
            <p className="mb-6 text-white/80">
              Vraag vrijblijvend een offerte aan. Binnen 48 uur online!
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent-hover"
            >
              <Link to="/contact">
                Offerte aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
