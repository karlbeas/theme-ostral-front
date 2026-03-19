import { Link } from "react-router";
import logoFull from "figma:asset/b561e88153eeb2ad35471d69341b6d073fd893f2.png";
import logoIcon from "figma:asset/7b523ffc23db0b931cf5ded3189eb241b52a0cb4.png";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-20 pt-12 pb-8"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoIcon} alt="Ostral" className="h-8 w-8 object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>
              La plateforme de streaming premium qui réunit films, séries et TV live en un seul endroit.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#B3B3B3" }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {["Accueil", "TV Live", "Films", "Séries", "Ma Liste"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#666" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/faq"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/centre-aide"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link
                  to="/signaler-probleme"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Signaler un problème
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibilite"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Légal</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/conditions-utilisation"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  to="/politique-confidentialite"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/presse"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "#666" }}
                >
                  Presse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#444" }}>
            © 2026 Östral Play. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {["Français", "English", "العربية"].map((lang) => (
              <button
                key={lang}
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#444" }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}