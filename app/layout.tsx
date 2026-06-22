import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import FloatingButtons from "@/components/FloatingButtons";
import MetaPixel from "@/components/MetaPixel";
import CinematicScroll from "@/components/CinematicScroll";

export const metadata: Metadata = {
  title: "Prestige Bin Services — Miami's Premier Bin Cleaning",
  description:
    "Professional trash bin cleaning in Miami-Dade. Sanitized, deodorized, done — starting at $25. Book your appointment online instantly.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20500%20500%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20rx%3D%2280%22%20fill%3D%22%23112240%22/%3E%3Cpath%20d%3D%22M250%2080L370%20130V230C370%20310%20318%20370%20250%20390C182%20370%20130%20310%20130%20230V130L250%2080Z%22%20fill%3D%22%231D9E75%22%20opacity%3D%220.15%22/%3E%3Cpath%20d%3D%22M250%2080L370%20130V230C370%20310%20318%20370%20250%20390C182%20370%20130%20310%20130%20230V130L250%2080Z%22%20stroke%3D%22%231D9E75%22%20stroke-width%3D%226%22%20fill%3D%22none%22%20stroke-linejoin%3D%22round%22/%3E%3Crect%20x%3D%22190%22%20y%3D%22155%22%20width%3D%2232%22%20height%3D%22160%22%20rx%3D%229%22%20fill%3D%22%231D9E75%22/%3E%3Cpath%20d%3D%22M222%20155H292C310%20155%20325%20170%20325%20188C325%20206%20310%20221%20292%20221H222V155Z%22%20fill%3D%22%231D9E75%22/%3E%3Cpath%20d%3D%22M222%20221H294C312%20221%20327%20236%20327%20254C327%20272%20312%20287%20294%20287H222V221Z%22%20fill%3D%22%231D9E75%22%20opacity%3D%220.45%22/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MetaPixel />
        <div className="scroll-progress"></div>
        <Nav />
        {children}
        <FloatingButtons />
        <CinematicScroll />
      </body>
    </html>
  );
}
