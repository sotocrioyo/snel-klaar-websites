import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  diensten: [
    { href: "/diensten", label: "Bedrijfswebsite" },
    { href: "/diensten", label: "One-page site" },
    { href: "/diensten", label: "Landingspagina's" },
    { href: "/diensten", label: "SEO basis" },
    { href: "/diensten", label: "Onderhoud & support" },
  ],
  informatie: [
    { href: "/prijzen", label: "Prijzen" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/website-laten-maken-noord-brabant", label: "Noord-Brabant" },
    { href: "/betaalbare-website-laten-maken", label: "Betaalbare websites" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacybeleid" },
    { href: "/voorwaarden", label: "Algemene voorwaarden" },
    { href: "/cookies", label: "Cookiebeleid" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="WebsiteSnelKlaar.nl" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Betaalbare websites voor dienstverleners. Binnen 48 uur online, zonder gedoe.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@websitesnelklaar.nl"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@websitesnelklaar.nl
              </a>
              <a
                href="tel:+31612345678"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +31 6 12 34 56 78
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Noord-Brabant, Nederland
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Diensten</h3>
            <ul className="space-y-2">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Informatie</h3>
            <ul className="space-y-2">
              {footerLinks.informatie.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Juridisch</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WebsiteSnelKlaar.nl. Alle rechten voorbehouden.
          </p>
          <p className="text-sm text-muted-foreground">
            Alle prijzen zijn exclusief btw. Prijzen kunnen wijzigen.
          </p>
        </div>
      </div>
    </footer>
  );
}
