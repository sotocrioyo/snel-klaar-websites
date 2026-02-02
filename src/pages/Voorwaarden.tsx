import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Voorwaarden() {
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
              Algemene Voorwaarden
            </motion.h1>

            <div className="prose prose-gray max-w-none">
              <p className="lead text-lg text-muted-foreground">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, 
                werkzaamheden, overeenkomsten en leveringen van diensten door WebsiteSnelKlaar.nl.
              </p>

              <p className="text-sm text-muted-foreground">
                Laatst bijgewerkt: februari 2026
              </p>

              <h2 className="mt-8 text-xl font-semibold">Artikel 1 - Definities</h2>
              <ul className="text-muted-foreground">
                <li>
                  <strong>Opdrachtnemer:</strong> WebsiteSnelKlaar.nl
                </li>
                <li>
                  <strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die een 
                  overeenkomst aangaat met Opdrachtnemer
                </li>
                <li>
                  <strong>Diensten:</strong> Alle door Opdrachtnemer te leveren diensten, 
                  waaronder het ontwerpen en bouwen van websites, hosting, onderhoud en support
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold">Artikel 2 - Toepasselijkheid</h2>
              <p className="text-muted-foreground">
                Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en 
                leveringen van Opdrachtnemer, tenzij schriftelijk anders is overeengekomen.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Artikel 3 - Offertes en prijzen</h2>
              <ol className="text-muted-foreground">
                <li>Alle offertes zijn vrijblijvend en hebben een geldigheid van 30 dagen.</li>
                <li>Alle genoemde prijzen zijn exclusief btw, tenzij anders vermeld.</li>
                <li>Prijzen kunnen worden gewijzigd. Voor bestaande overeenkomsten gelden de 
                    oorspronkelijk overeengekomen prijzen.</li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 4 - Abonnement en looptijd</h2>
              <ol className="text-muted-foreground">
                <li>
                  Het abonnement heeft een minimale looptijd van 12 maanden, ingaand op de 
                  datum van oplevering van de website.
                </li>
                <li>
                  Na de minimale looptijd wordt het abonnement stilzwijgend verlengd voor 
                  onbepaalde tijd en is maandelijks opzegbaar met een opzegtermijn van 1 maand.
                </li>
                <li>
                  Opzegging dient schriftelijk (per e-mail) te geschieden.
                </li>
                <li>
                  Bij vroegtijdige opzegging binnen de minimale looptijd zijn de resterende 
                  maandtermijnen direct opeisbaar.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 5 - Betalingsvoorwaarden</h2>
              <ol className="text-muted-foreground">
                <li>
                  <strong>Abonnement:</strong> Maandelijkse facturatie vooraf. Betaling binnen 
                  14 dagen na factuurdatum.
                </li>
                <li>
                  <strong>Eenmalig pakket:</strong> 50% bij opdracht, 50% bij oplevering. 
                  Jaarlijkse kosten worden vooraf gefactureerd.
                </li>
                <li>
                  Bij niet-tijdige betaling is Opdrachtnemer gerechtigd de dienstverlening 
                  (inclusief hosting) op te schorten totdat volledige betaling is ontvangen.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 6 - Scope en uitsluitingen</h2>
              <ol className="text-muted-foreground">
                <li>
                  Opdrachtnemer levert uitsluitend lead-genererende websites voor dienstverleners.
                </li>
                <li>
                  <strong>Uitdrukkelijk uitgesloten zijn:</strong> webshops, e-commerce 
                  functionaliteit, online betalingen/checkout, productbeheer, voorraadbeheer, 
                  verzendmodules en vergelijkbare e-commerce functionaliteit.
                </li>
                <li>
                  Meerwerk (extra pagina's, functies, integraties) wordt apart geoffreerd en 
                  gefactureerd.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 7 - Levering en oplevering</h2>
              <ol className="text-muted-foreground">
                <li>
                  De standaard levertijd is 48 uur na ontvangst van alle benodigde content 
                  (logo, teksten, afbeeldingen).
                </li>
                <li>
                  Opdrachtgever ontvangt 2 revisierondes voor feedback en aanpassingen.
                </li>
                <li>
                  De website wordt als opgeleverd beschouwd wanneer deze online is geplaatst 
                  en Opdrachtgever hiervan bericht heeft ontvangen.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 8 - Onderhoud</h2>
              <p className="text-muted-foreground">
                Het onderhoudspakket omvat:
              </p>
              <ul className="text-muted-foreground">
                <li>Technische updates en security patches</li>
                <li>Wekelijkse backups</li>
                <li>Uptime monitoring</li>
                <li>Kleine tekstwijzigingen (max. 30 minuten per maand)</li>
                <li>Telefonische support tijdens kantooruren</li>
              </ul>
              <p className="text-muted-foreground">
                Grotere wijzigingen, nieuwe pagina's of functionaliteiten vallen buiten het 
                onderhoud en worden als meerwerk gefactureerd.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Artikel 9 - Eigendom en licentie</h2>
              <ol className="text-muted-foreground">
                <li>
                  <strong>Abonnement:</strong> De website blijft eigendom van Opdrachtnemer. 
                  Opdrachtgever verkrijgt een gebruikslicentie voor de duur van het abonnement.
                </li>
                <li>
                  <strong>Eenmalig pakket:</strong> Na volledige betaling gaat het eigendom 
                  van de website over naar Opdrachtgever.
                </li>
                <li>
                  Aangeleverde content (teksten, afbeeldingen, logo's) blijft eigendom van 
                  Opdrachtgever.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 10 - Aansprakelijkheid</h2>
              <ol className="text-muted-foreground">
                <li>
                  Opdrachtnemer is niet aansprakelijk voor schade als gevolg van 
                  onjuistheden in door Opdrachtgever aangeleverde content.
                </li>
                <li>
                  De aansprakelijkheid van Opdrachtnemer is beperkt tot het bedrag dat 
                  Opdrachtgever in de 12 maanden voorafgaand aan de schade heeft betaald.
                </li>
              </ol>

              <h2 className="mt-8 text-xl font-semibold">Artikel 11 - Toepasselijk recht</h2>
              <p className="text-muted-foreground">
                Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden 
                voorgelegd aan de bevoegde rechter in het arrondissement van Opdrachtnemer.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Contact</h2>
              <p className="text-muted-foreground">
                Vragen over deze voorwaarden? Neem contact op via{" "}
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
