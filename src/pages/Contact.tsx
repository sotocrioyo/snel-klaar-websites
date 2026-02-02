import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const companyTypes = [
  "Kapper / Barbershop",
  "Loodgieter / Installateur",
  "Coach / Therapeut",
  "Restaurant / Horeca",
  "Aannemer / Bouwbedrijf",
  "Makelaar",
  "Fysiotherapie",
  "Schoonheidssalon",
  "Anders",
];

const pageOptions = [
  "Homepage",
  "Diensten",
  "Over ons",
  "Contact",
  "Portfolio/Projecten",
  "Team",
  "FAQ",
  "Blog",
];

const integrationOptions = [
  "Google Maps",
  "Calendly / Afspraken",
  "WhatsApp button",
  "Social media links",
  "Nieuwsbriefinschrijving",
];

const packageOptions = [
  { value: "subscription", label: "Abonnement (€45/maand)" },
  { value: "onetime", label: "Eenmalig (€450 + €125/jaar)" },
  { value: "unsure", label: "Weet ik nog niet" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState<"contact" | "quote">("quote");
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);

  const handlePageToggle = (page: string) => {
    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  const handleIntegrationToggle = (integration: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(integration) ? prev.filter((i) => i !== integration) : [...prev, integration]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Bericht verzonden!",
      description: "We nemen binnen 24 uur contact met je op.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setSelectedPages([]);
    setSelectedIntegrations([]);
  };

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
              Contact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Vraag vrijblijvend een offerte aan of neem contact met ons op.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-6 text-xl font-bold">Contactgegevens</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a
                      href="mailto:info@websitesnelklaar.nl"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      info@websitesnelklaar.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefoon</p>
                    <a
                      href="tel:+31612345678"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +31 6 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Regio</p>
                    <p className="text-sm text-muted-foreground">Noord-Brabant, Nederland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Reactietijd</p>
                    <p className="text-sm text-muted-foreground">Binnen 24 uur</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-semibold">Waarom kiezen voor ons?</h3>
                <ul className="space-y-3">
                  {[
                    "Binnen 48 uur online",
                    "Vaste prijs, geen verrassingen",
                    "Hosting & e-mail inbegrepen",
                    "Persoonlijke service",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {/* Form Type Toggle */}
              <div className="mb-8 flex gap-2">
                <button
                  onClick={() => setFormType("quote")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                    formType === "quote"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  Offerte aanvragen
                </button>
                <button
                  onClick={() => setFormType("contact")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                    formType === "contact"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  Algemene vraag
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic fields */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Jouw naam"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Bedrijfsnaam *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      placeholder="Jouw bedrijf"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jouw@email.nl"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+31 6 12345678"
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Quote-specific fields */}
                {formType === "quote" && (
                  <>
                    <div>
                      <Label htmlFor="companyType">Type bedrijf *</Label>
                      <Select name="companyType" required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecteer je branche" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Gewenste pagina's</Label>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Selecteer de pagina's die je website moet hebben.
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {pageOptions.map((page) => (
                          <div key={page} className="flex items-center gap-2">
                            <Checkbox
                              id={`page-${page}`}
                              checked={selectedPages.includes(page)}
                              onCheckedChange={() => handlePageToggle(page)}
                            />
                            <Label
                              htmlFor={`page-${page}`}
                              className="text-sm font-normal"
                            >
                              {page}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Gewenste integraties</Label>
                      <p className="mb-3 text-sm text-muted-foreground">
                        Optioneel: welke extra functies wil je?
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {integrationOptions.map((integration) => (
                          <div key={integration} className="flex items-center gap-2">
                            <Checkbox
                              id={`integration-${integration}`}
                              checked={selectedIntegrations.includes(integration)}
                              onCheckedChange={() => handleIntegrationToggle(integration)}
                            />
                            <Label
                              htmlFor={`integration-${integration}`}
                              className="text-sm font-normal"
                            >
                              {integration}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="package">Voorkeur pakket</Label>
                      <Select name="package">
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecteer een pakket" />
                        </SelectTrigger>
                        <SelectContent>
                          {packageOptions.map((pkg) => (
                            <SelectItem key={pkg.value} value={pkg.value}>
                              {pkg.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="deadline">Gewenste deadline</Label>
                      <Select name="deadline" defaultValue="48h">
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecteer deadline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="48h">Binnen 48 uur (standaard)</SelectItem>
                          <SelectItem value="1week">Binnen 1 week</SelectItem>
                          <SelectItem value="2weeks">Binnen 2 weken</SelectItem>
                          <SelectItem value="flexible">Flexibel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="message">
                    {formType === "quote" ? "Extra opmerkingen" : "Je bericht *"}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required={formType === "contact"}
                    placeholder={
                      formType === "quote"
                        ? "Vertel ons meer over je wensen, huidige website, of andere relevante informatie..."
                        : "Waar kunnen we je mee helpen?"
                    }
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent-hover sm:w-auto"
                >
                  {isSubmitting ? (
                    "Verzenden..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {formType === "quote" ? "Offerte aanvragen" : "Verstuur bericht"}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
