import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Search, Bell, User, Menu, X, Tv, Film, PlayCircle, List, Home } from "lucide-react";
import logoFull from "figma:asset/b561e88153eeb2ad35471d69341b6d073fd893f2.png";
import logoIcon from "figma:asset/7b523ffc23db0b931cf5ded3189eb241b52a0cb4.png";

const navItems = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "TV Live", path: "/live", icon: Tv },
  { label: "Films", path: "/films", icon: Film },
  { label: "Séries", path: "/series", icon: PlayCircle },
  { label: "Ma Liste", path: "/ma-liste", icon: List },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.95)"
            : "linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src={logoIcon} alt="Ostral" className="h-8 w-8 object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg"
                  style={{
                    color: isActive(item.path) ? "#F7941D" : "#B3B3B3",
                    fontWeight: isActive(item.path) ? "600" : "400",
                  }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#F7941D" }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <Link
                to="/recherche"
                className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10"
                style={{ color: "#B3B3B3" }}
              >
                <Search size={20} />
              </Link>
              <button
                className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10 relative hidden sm:flex"
                style={{ color: "#B3B3B3" }}
              >
                <Bell size={20} />
                <span
                  className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                  style={{ background: "#F7941D" }}
                />
              </button>
              <Link
                to="/profil"
                className="flex items-center gap-2 ml-1 p-1.5 rounded-full transition-colors duration-200 hover:bg-white/10"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #F7941D, #e67e22)" }}
                >
                  OP
                </div>
              </Link>
              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-full transition-colors duration-200 hover:bg-white/10"
                style={{ color: "#B3B3B3" }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(10,10,10,0.98)", paddingTop: "64px" }}
        >
          <nav className="flex flex-col p-6 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors duration-200"
                  style={{
                    background: isActive(item.path) ? "rgba(247,148,29,0.12)" : "transparent",
                    color: isActive(item.path) ? "#F7941D" : "#B3B3B3",
                  }}
                >
                  <Icon size={20} />
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/profil"
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors duration-200"
                style={{ color: "#B3B3B3" }}
              >
                <User size={20} />
                <span className="text-base font-medium">Mon Profil</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}