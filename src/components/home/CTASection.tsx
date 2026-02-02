import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
              <Clock className="h-4 w-4" />
              Binnen 48 uur online
            </div>

            {/* Heading */}
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Klaar voor een professionele website?
            </h2>

            {/* Subheading */}
            <p className="mb-8 text-lg text-white/80">
              Vraag vrijblijvend een offerte aan. We reageren binnen 24 uur.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-hover hover:shadow-xl"
              >
                <Link to="/contact">
                  Offerte aanvragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-2 border-white/30 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href="tel:+31612345678">
                  <Phone className="mr-2 h-5 w-5" />
                  Bel direct
                </a>
              </Button>
            </div>

            {/* Trust text */}
            <p className="mt-8 text-sm text-white/60">
              Geen verplichtingen • Gratis adviesgesprek • Vaste prijs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
