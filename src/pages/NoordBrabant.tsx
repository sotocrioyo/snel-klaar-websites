import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cities = [
  { name: "Tilburg", description: "Website laten maken in Tilburg" },
  { name: "Breda", description: "Website laten maken in Breda" },
  { name: "Eindhoven", description: "Website laten maken in Eindhoven" },
  { name: "'s-Hertogenbosch", description: "Website laten maken in Den Bosch" },
  { name: "Helmond", description: "Website laten maken in Helmond" },
  { name: "Oss", description: "Website laten maken in Oss" },
  { name: "Roosendaal", description: "Website laten maken in Roosendaal" },
  { name: "Bergen op Zoom", description: "Website laten maken in Bergen op Zoom" },
];

const regionFaqs = [
  {
    id: "1",
    question: "Werken jullie alleen in Noord-Brabant?",
    answer:
      "Nee, wij werken landelijk. Hoewel we gevestigd zijn in Noord-Brabant en veel klanten in deze regio hebben, kunnen we ondernemers in heel Nederland helpen. Alles verloopt digitaal, dus locatie is geen beperking.",
  },
  {
    id: "2",
    question: "Komen jullie langs voor een kennismakingsgesprek?",
    answer:
      "Het intake gesprek doen we meestal telefonisch of via videobellen. Dit is efficiënter en houdt de kosten laag. Uiteraard kunnen we in Noord-Brabant in uitzonderingsgevallen een persoonlijke afspraak maken.",
  },
  {
    id: "3",
    question: "Waarom kiezen voor een lokale partij?",
    answer:
      "Als lokale partij kennen we de markt en spreken we de taal van Brabantse ondernemers. Je hebt direct contact met de makers van je website, geen callcenter of lange wachttijden. En als het nodig is, zijn we snel ter plaatse.",
  },
  {
    id: "4",
    question: "Hoe snel kan mijn website online staan?",
    answer:
      "Binnen 48 uur na het aanleveren van je content (logo, teksten, foto's) staat je website online. Dit geldt voor alle klanten, ongeacht locatie.",
  },
];

export default function NoordBrabant() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
            >
              <MapPin className="h-4 w-4" />
              Noord-Brabant
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              Website laten maken in Noord-Brabant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Betaalbare websites voor dienstverleners in Tilburg, Breda, Eindhoven, 
              Den Bosch en omstreken. Binnen 48 uur online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent-hover"
              >
                <Link to="/contact">
                  Offerte aanvragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-8">
                <Link to="/prijzen">Bekijk prijzen</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-card py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Binnen 48 uur online</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Vaste prijs (excl. btw)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Voor dienstverleners</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Hosting & e-mail inbegrepen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Waarom een website laten maken in Noord-Brabant?
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Als ondernemer in Noord-Brabant wil je een website die werkt. Geen gedoe met 
                buitenlandse bureaus of lange wachttijden. Bij WebsiteSnelKlaar.nl krijg je 
                direct contact met de makers van je website.
              </p>
              <p>
                Wij begrijpen de Brabantse markt. Of je nu kapper bent in Tilburg, loodgieter in 
                Breda, of coach in Eindhoven — we weten wat lokale klanten zoeken en hoe je online 
                vindbaar wordt.
              </p>
              <p>
                Met onze snelle aanpak staat je website binnen 48 uur online. Zo kun jij je 
                focussen op wat je het beste doet: je klanten helpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Websites voor ondernemers in heel Noord-Brabant
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <div className="mb-2 flex items-center justify-center gap-2 text-primary">
                    <MapPin className="h-4 w-4" />
                    <span className="font-semibold">{city.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{city.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Dit bieden wij aan ondernemers in Noord-Brabant
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Professionele bedrijfswebsite",
                "One-page websites",
                "Landingspagina's",
                "SEO-optimalisatie voor lokale vindbaarheid",
                "E-mail op jouw domein",
                "Hosting op Nederlandse servers",
                "Doorlopend onderhoud",
                "Persoonlijke service",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Veelgestelde vragen</h2>
            <Accordion type="single" collapsible className="w-full">
              {regionFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="mb-3 rounded-xl border border-border bg-card px-6 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl bg-gradient-primary p-8 text-center md:p-12"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Klaar om online te gaan?
            </h2>
            <p className="mb-6 text-white/80">
              Vraag vandaag nog een offerte aan. Binnen 48 uur staat jouw website online.
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
