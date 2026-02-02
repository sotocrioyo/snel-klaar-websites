import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Info, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = [
  {
    id: "subscription",
    name: "Abonnement",
    price: "45",
    period: "per maand",
    description: "Laagdrempelig starten zonder grote investering vooraf",
    highlight: "Populairste keuze",
    features: [
      { text: "Professionele responsive website", included: true },
      { text: "Hosting op snelle Nederlandse servers", included: true },
      { text: "E-mailadres op jouw domein", included: true },
      { text: "SSL-certificaat (https)", included: true },
      { text: "Basis SEO-optimalisatie", included: true },
      { text: "Onderhoud & kleine wijzigingen", included: true },
      { text: "2 revisierondes bij oplevering", included: true },
      { text: "Telefonische support", included: true },
    ],
    notes: ["Minimale looptijd: 12 maanden", "Maandelijks opzegbaar na eerste jaar"],
    cta: "Start met abonnement",
    popular: true,
  },
  {
    id: "onetime",
    name: "Eenmalig + jaarlijks",
    price: "450",
    period: "eenmalig",
    yearlyFee: "125",
    description: "Direct eigenaar van je website, lagere jaarlijkse kosten",
    features: [
      { text: "Professionele responsive website", included: true },
      { text: "Hosting op snelle Nederlandse servers", included: true },
      { text: "E-mailadres op jouw domein", included: true },
      { text: "SSL-certificaat (https)", included: true },
      { text: "Basis SEO-optimalisatie", included: true },
      { text: "Onderhoud & kleine wijzigingen", included: true },
      { text: "2 revisierondes bij oplevering", included: true },
      { text: "Telefonische support", included: true },
    ],
    notes: ["Eenmalige betaling bij oplevering", "Daarna €125/jaar voor hosting & onderhoud"],
    cta: "Kies eenmalig",
    popular: false,
  },
];

const comparison = [
  { feature: "Professionele website", subscription: true, onetime: true },
  { feature: "Responsive (mobiel-vriendelijk)", subscription: true, onetime: true },
  { feature: "Hosting inbegrepen", subscription: true, onetime: true },
  { feature: "E-mail op jouw domein", subscription: true, onetime: true },
  { feature: "SSL-certificaat", subscription: true, onetime: true },
  { feature: "Basis SEO", subscription: true, onetime: true },
  { feature: "Onderhoud", subscription: true, onetime: true },
  { feature: "Kleine wijzigingen (30 min/maand)", subscription: true, onetime: true },
  { feature: "2 revisierondes", subscription: true, onetime: true },
  { feature: "Telefonische support", subscription: true, onetime: true },
  { feature: "Lage startkosten", subscription: true, onetime: false },
  { feature: "Lage jaarlijkse kosten", subscription: false, onetime: true },
];

const addons = [
  { name: "Extra pagina", price: "vanaf €50", description: "Aanvullende pagina met eigen content" },
  { name: "Extra taal", price: "vanaf €150", description: "Volledige website in tweede taal" },
  { name: "Extra formulier", price: "vanaf €35", description: "Contactformulier of offerte-aanvraag" },
  { name: "Calendly integratie", price: "€45", description: "Online afspraken boeken" },
  { name: "Google Maps integratie", price: "€25", description: "Interactieve locatiekaart" },
  { name: "Professionele fotoshoot", price: "op aanvraag", description: "Bedrijfsfotografie ter plaatse" },
  { name: "Copywriting", price: "op aanvraag", description: "Professionele webteksten" },
];

const maintenanceDetails = [
  "Technische updates van het CMS en plugins",
  "Security patches en malware-scans",
  "Monitoring van uptime (24/7)",
  "Backups (wekelijks)",
  "Kleine tekstwijzigingen (max 30 min/maand)",
  "Telefonische support tijdens kantooruren",
];

export default function Prijzen() {
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
              Transparante prijzen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Kies het pakket dat bij jou past. Geen verborgen kosten, geen verrassingen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border bg-card p-8 shadow-card ${
                  pkg.popular ? "border-primary" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                      {pkg.highlight}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold">{pkg.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">€</span>
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                  {pkg.yearlyFee && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      + €{pkg.yearlyFee}/jaar voor hosting & onderhoud
                    </p>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground">excl. btw</p>
                </div>

                <ul className="mb-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {pkg.notes && (
                  <div className="mb-6 rounded-lg bg-muted/50 p-3">
                    {pkg.notes.map((note) => (
                      <p key={note} className="text-xs text-muted-foreground">
                        {note}
                      </p>
                    ))}
                  </div>
                )}

                <Button
                  asChild
                  className={`w-full rounded-full ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent-hover"
                      : "bg-primary text-primary-foreground hover:bg-primary-hover"
                  }`}
                >
                  <Link to="/contact">
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl bg-destructive/5 border border-destructive/20 p-4">
            <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <p className="text-sm text-muted-foreground">
              <strong>Let op:</strong> Wij maken geen webshops of e-commerce sites. Onze focus 
              ligt op lead-genererende websites voor dienstverleners.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Vergelijk de pakketten</h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-4 text-left text-sm font-medium">Functie</th>
                    <th className="p-4 text-center text-sm font-medium">Abonnement</th>
                    <th className="p-4 text-center text-sm font-medium">Eenmalig</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index !== comparison.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.subscription ? (
                          <Check className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.onetime ? (
                          <Check className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What's included in maintenance */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold">Wat zit er in het onderhoud?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {maintenanceDetails.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold">Extra opties</h2>
              <p className="text-muted-foreground">
                Wil je meer dan het standaard pakket? Geen probleem.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="font-semibold">{addon.name}</h3>
                    <span className="text-sm font-medium text-primary">{addon.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-xl bg-muted/50 p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Alle prijzen zijn exclusief btw.</strong>
                  </p>
                  <p className="mb-2">
                    Domeinregistratie is niet inbegrepen (meestal €10-15/jaar). Wij helpen je 
                    met de registratie.
                  </p>
                  <p>
                    Prijzen kunnen wijzigen. Voor bestaande klanten gelden de prijzen uit 
                    hun contract.
                  </p>
                </div>
              </div>
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
              Wil je weten wat wij voor jou kunnen doen?
            </h2>
            <p className="mb-6 text-white/80">
              Vraag vrijblijvend een offerte aan. We reageren binnen 24 uur.
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
