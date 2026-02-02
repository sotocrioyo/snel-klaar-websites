import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Euro } from "lucide-react";
import { motion } from "framer-motion";

const whyAffordable = [
  {
    title: "Bewezen templates",
    description:
      "We starten niet vanaf nul. Door bewezen templates te gebruiken en aan te passen aan jouw huisstijl, besparen we tijd en kosten.",
  },
  {
    title: "Gefocuste scope",
    description:
      "We maken geen webshops of complexe systemen. Door te focussen op lead-genererende websites voor dienstverleners, zijn we super efficiënt.",
  },
  {
    title: "Snelle doorlooptijd",
    description:
      "Binnen 48 uur online betekent minder uren, minder kosten. Jij profiteert daarvan met een lagere prijs.",
  },
  {
    title: "Alles inbegrepen",
    description:
      "Hosting, e-mail, onderhoud — je betaalt één prijs. Geen aparte facturen van hostingbedrijven of extra kosten achteraf.",
  },
];

const included = [
  "Professionele responsive website",
  "Hosting op Nederlandse servers",
  "E-mail op jouw domein",
  "SSL-certificaat (https)",
  "Basis SEO-optimalisatie",
  "Doorlopend onderhoud",
  "Kleine wijzigingen (30 min/maand)",
  "Telefonische support",
];

const notIncluded = [
  "Webshop functionaliteit",
  "Online betalingen / checkout",
  "Productbeheer systemen",
  "Complexe boekingsystemen",
];

export default function BetaalbareWebsite() {
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
              <Euro className="h-4 w-4" />
              Vanaf €45/maand
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              Betaalbare website laten maken
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-muted-foreground"
            >
              Professionele websites voor dienstverleners zonder de hoge prijzen. 
              Binnen 48 uur online voor een vaste prijs.
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

      {/* Why affordable */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
              Hoe houden we het betaalbaar?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {whyAffordable.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Twee transparante opties</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Subscription */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border-2 border-primary bg-card p-8"
              >
                <div className="mb-4">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Populairste
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Abonnement</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">€45</span>
                  <span className="text-muted-foreground">/maand</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Laag instapbedrag, alles inbegrepen. Minimaal 12 maanden.
                </p>
                <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent-hover">
                  <Link to="/contact">Kies abonnement</Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">excl. btw</p>
              </motion.div>

              {/* One-time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="mb-2 text-xl font-bold">Eenmalig</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">€450</span>
                  <span className="text-muted-foreground"> eenmalig</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Direct eigenaar, daarna €125/jaar voor hosting & onderhoud.
                </p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link to="/contact">Kies eenmalig</Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">excl. btw</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            {/* Included */}
            <div>
              <h2 className="mb-6 text-xl font-bold">Dit krijg je voor deze prijs</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div>
              <h2 className="mb-6 text-xl font-bold">Dit bieden we niet aan</h2>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Wij focussen op lead-genererende websites voor dienstverleners. 
                Dit houdt onze prijzen laag en onze kwaliteit hoog.
              </p>
            </div>
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
              Betaalbaar hoeft niet goedkoop te zijn
            </h2>
            <p className="mb-6 text-white/80">
              Vraag een vrijblijvende offerte aan en ontdek wat we voor jou kunnen doen.
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
