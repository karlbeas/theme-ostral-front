import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If user is not authenticated and not on public pages, redirect to welcome
    const publicPages = ["/welcome", "/connexion", "/inscription"];
    if (!isAuthenticated && !publicPages.includes(location.pathname)) {
      navigate("/welcome", { replace: true });
    }
  }, [isAuthenticated, navigate, location.pathname]);

  return <>{children}</>;
}
