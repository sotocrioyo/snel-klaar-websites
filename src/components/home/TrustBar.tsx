import { Clock, Euro, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Clock,
    title: "Binnen 48 uur online",
    description: "Snel online met bewezen templates",
  },
  {
    icon: Euro,
    title: "Vaste prijs (excl. btw)",
    description: "Geen verrassingen achteraf",
  },
  {
    icon: Server,
    title: "Hosting + e-mail inbegrepen",
    description: "Alles geregeld in één pakket",
  },
  {
    icon: Wrench,
    title: "Onderhoud inbegrepen",
    description: "Updates en kleine wijzigingen",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
