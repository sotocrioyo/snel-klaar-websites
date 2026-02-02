import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const suitableFor = [
  "Kappers & barbershops",
  "Loodgieters & installateurs",
  "Coaches & therapeuten",
  "Restaurants (zonder webshop)",
  "Aannemers & bouwbedrijven",
  "Makelaars",
  "Fysiotherapeuten",
  "Schoonheidssalons",
  "Tandartsen & huisartsen",
  "Advocaten & notarissen",
  "Fotografen",
  "Rijscholen",
];

const notSuitableFor = [
  "Webshops / e-commerce",
  "Online betalingen / checkout",
  "Productbeheer systemen",
  "Complexe boekingsystemen",
];

export default function ForWho() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Voor wie is dit?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              Websites voor dienstverleners
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Wij helpen ondernemers die hun diensten aanbieden aan lokale klanten.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Suitable For */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-primary">
                <Check className="h-5 w-5" />
                Perfect voor
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Suitable For */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-destructive">
                <X className="h-5 w-5" />
                Niet geschikt voor
              </h3>
              <ul className="space-y-3">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-destructive/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Webshops vereisen complexe functionaliteit die niet past bij onze snelle, 
                betaalbare aanpak. Wij focussen op wat we goed doen: lead-genererende websites.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
