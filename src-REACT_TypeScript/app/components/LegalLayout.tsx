import { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import logoIcon from "figma:asset/7b523ffc23db0b931cf5ded3189eb241b52a0cb4.png";

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#FFFFFF" }}>
      {/* Header noir */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: "#0A0A0A",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={logoIcon} alt="Östral Play" className="h-7 w-7 object-contain" />
              </Link>
              <Link
                to="/"
                className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ color: "#B3B3B3" }}
              >
                <ArrowLeft size={16} />
                Retour
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu sur fond blanc */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <h1 className="text-4xl font-black mb-8" style={{ color: "#0A0A0A" }}>
            {title}
          </h1>
          <div className="prose prose-lg max-w-none" style={{ color: "#333" }}>
            {children}
          </div>
        </div>
      </main>

      {/* Footer minimaliste */}
      <footer
        className="py-8 px-4 sm:px-6 lg:px-10 border-t"
        style={{ borderColor: "#E5E5E5", background: "#F9F9F9" }}
      >
        <div className="max-w-4xl mx-auto text-center text-sm" style={{ color: "#666" }}>
          © 2026 Östral Play. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
