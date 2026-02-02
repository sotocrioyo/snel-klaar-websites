import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    id: "subscription",
    name: "Abonnement",
    price: "45",
    period: "per maand",
    description: "Laagdrempelig starten, alles inbegrepen",
    highlight: "Populairste keuze",
    features: [
      "Professionele website",
      "Hosting inbegrepen",
      "E-mail op jouw domein",
      "Onderhoud inbegrepen",
      "SSL-certificaat",
      "Minimale looptijd: 12 maanden",
    ],
    cta: "Start met abonnement",
    popular: true,
  },
  {
    id: "onetime",
    name: "Eenmalig + jaarlijks",
    price: "450",
    period: "eenmalig",
    yearlyFee: "125",
    description: "Direct eigenaar, lagere jaarlijkse kosten",
    features: [
      "Professionele website",
      "Hosting inbegrepen",
      "E-mail op jouw domein",
      "Onderhoud inbegrepen",
      "SSL-certificaat",
      "Daarna €125/jaar",
    ],
    cta: "Kies eenmalig",
    popular: false,
  },
];

export default function PricingHighlight() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Transparante prijzen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Twee eenvoudige pakketten
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Kies wat het beste bij jou past. Geen verborgen kosten, geen gedoe.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border bg-card p-8 shadow-card transition-shadow hover:shadow-card-hover ${
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
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">€</span>
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">/{pkg.period}</span>
                </div>
                {pkg.yearlyFee && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    + €{pkg.yearlyFee}/jaar voor hosting & onderhoud
                  </p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">excl. btw</p>
              </div>

              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl bg-muted/50 p-4"
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            <strong>Geen webshop / geen checkout.</strong> Wij focussen op lead-genererende websites 
            voor dienstverleners. Meer weten?{" "}
            <Link to="/prijzen" className="font-medium text-primary underline-offset-4 hover:underline">
              Bekijk alle details
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
