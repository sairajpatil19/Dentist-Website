import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar transparentOnTop={transparentNav} />
      <main className={transparentNav ? "" : "pt-[72px]"}>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
