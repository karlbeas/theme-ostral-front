import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AuthWrapper } from "./AuthWrapper";

export function Layout() {
  return (
    <AuthWrapper>
      <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthWrapper>
  );
}