import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";


export const metadata: Metadata = {
  title: "Cargo Indonesia",
  description: "SprintCargo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <SiteHeader />
        <main className="bg-white">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

