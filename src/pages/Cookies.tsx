import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Cookies() {
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
              Cookiebeleid
            </motion.h1>

            <div className="prose prose-gray max-w-none">
              <p className="lead text-lg text-muted-foreground">
                WebsiteSnelKlaar.nl maakt gebruik van cookies om de website goed te laten 
                functioneren en om uw gebruikerservaring te verbeteren.
              </p>

              <p className="text-sm text-muted-foreground">
                Laatst bijgewerkt: februari 2026
              </p>

              <h2 className="mt-8 text-xl font-semibold">Wat zijn cookies?</h2>
              <p className="text-muted-foreground">
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of telefoon 
                worden geplaatst wanneer u onze website bezoekt. Ze helpen ons om de website 
                goed te laten werken en om inzicht te krijgen in hoe bezoekers de website gebruiken.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Welke cookies gebruiken wij?</h2>

              <h3 className="mt-6 text-lg font-medium">Functionele cookies (noodzakelijk)</h3>
              <p className="text-muted-foreground">
                Deze cookies zijn nodig om de website te laten functioneren. Ze onthouden 
                bijvoorbeeld uw voorkeuren en zorgen dat formulieren correct werken. Deze 
                cookies kunt u niet uitschakelen.
              </p>

              <h3 className="mt-6 text-lg font-medium">Analytische cookies</h3>
              <p className="text-muted-foreground">
                Wij kunnen analytische cookies gebruiken om te begrijpen hoe bezoekers onze 
                website gebruiken. Hiervoor kunnen wij gebruik maken van diensten zoals 
                Google Analytics. Deze gegevens zijn geanonimiseerd en worden niet gedeeld 
                met derden voor commerciële doeleinden.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Cookies beheren</h2>
              <p className="text-muted-foreground">
                U kunt uw cookievoorkeuren op elk moment wijzigen via uw browserinstellingen. 
                Hieronder vindt u instructies voor de meest gebruikte browsers:
              </p>
              <ul className="text-muted-foreground">
                <li>
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold">Cookies van derden</h2>
              <p className="text-muted-foreground">
                Onze website kan content bevatten van externe partijen (zoals embedded video's 
                of social media knoppen). Deze partijen kunnen hun eigen cookies plaatsen. 
                Wij hebben geen controle over deze cookies. Raadpleeg het privacybeleid van 
                deze partijen voor meer informatie.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Wijzigingen in dit beleid</h2>
              <p className="text-muted-foreground">
                Wij kunnen dit cookiebeleid van tijd tot tijd wijzigen. De meest recente 
                versie is altijd beschikbaar op onze website.
              </p>

              <h2 className="mt-8 text-xl font-semibold">Vragen?</h2>
              <p className="text-muted-foreground">
                Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via{" "}
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
