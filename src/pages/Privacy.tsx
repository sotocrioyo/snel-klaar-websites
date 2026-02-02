import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-3xl font-bold md:text-4xl"
            >
              Privacybeleid
            </motion.h1>

            <div className="prose prose-gray max-w-none">
              <p className="lead text-lg text-muted-foreground">
                WebsiteSnelKlaar.nl respecteert de privacy van alle gebruikers van onze website 
                en diensten. Wij zorgen ervoor dat de persoonlijke informatie die je ons verschaft 
                vertrouwelijk wordt behandeld.
              </p>

              <p className="text-sm text-muted-foreground">
                Laatst bijgewerkt: februari 2026
              </p>

              <h2 className="mt-8 text-xl font-semibold">1. Welke gegevens verzamelen wij?</h2>
              <p className="text-muted-foreground">
                Wij verzamelen de volgende persoonsgegevens wanneer je contact met ons opneemt 
                of een offerte aanvraagt:
              </p>
              <ul className="text-muted-foreground">
                <li>Naam</li>
                <li>Bedrijfsnaam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer (optioneel)</li>
                <li>Inhoud van je bericht of offerte-aanvraag</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold">2. Waarvoor gebruiken wij deze gegevens?</h2>
              <p className="text-muted-foreground">
                Wij gebruiken je gegevens uitsluitend voor:
              </p>
              <ul className="text-muted-foreground">
                <li>Het beantwoorden van je vragen of verzoeken</li>
                <li>Het opstellen en versturen van offertes</li>
                <li>Het uitvoeren van onze dienstverlening</li>
                <li>Het versturen van facturen</li>
                <li>Contact over de voortgang van je project</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold">3. Delen met derden</h2>
              <p className="text-muted-foreground">
                Wij verkopen of verhuren je gegevens nooit aan derden. Wij delen je gegevens 
                alleen met derden wanneer dit noodzakelijk is voor onze dienstverlening:
              </p>
              <ul className="text-muted-foreground">
                <li>Hostingprovider (voor het hosten van websites)</li>
                <li>E-mailprovider (voor zakelijke e-mail)</li>
                <li>Boekhoudsoftware (voor facturatie)</li>
              </ul>
              <p className="text-muted-foreground">
                Met alle partijen hebben wij verwerkersovereenkomsten afgesloten om een 
                zorgvuldige omgang met je gegevens te waarborgen.
              </p>

              <h2 className="mt-8 text-xl font-semibold">4. Bewaartermijn</h2>
              <p className="text-muted-foreground">
                Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is om de 
                doelen te realiseren waarvoor je gegevens worden verzameld. Voor zakelijke 
                administratie geldt de wettelijke bewaartermijn van 7 jaar.
              </p>

              <h2 className="mt-8 text-xl font-semibold">5. Beveiliging</h2>
              <p className="text-muted-foreground">
                Wij nemen de bescherming van je gegevens serieus en hebben passende technische 
                en organisatorische maatregelen genomen om misbruik, verlies, onbevoegde 
                toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
              </p>

              <h2 className="mt-8 text-xl font-semibold">6. Jouw rechten</h2>
              <p className="text-muted-foreground">
                Je hebt het recht om:
              </p>
              <ul className="text-muted-foreground">
                <li>Inzage te vragen in je persoonsgegevens</li>
                <li>Je gegevens te laten corrigeren of verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking van je gegevens</li>
                <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold">7. Contact</h2>
              <p className="text-muted-foreground">
                Heb je vragen over dit privacybeleid of wil je gebruik maken van je rechten? 
                Neem dan contact met ons op via{" "}
                <a href="mailto:info@websitesnelklaar.nl" className="text-primary hover:underline">
                  info@websitesnelklaar.nl
                </a>
                .
              </p>

              <div className="mt-12">
                <Link to="/" className="text-primary hover:underline">
                  ← Terug naar home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
