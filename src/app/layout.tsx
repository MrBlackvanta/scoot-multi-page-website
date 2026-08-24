import { RouteTransitions } from "@/components/effects";
import { SiteFooter, SiteHeader } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Space_Mono } from "next/font/google";

import { openGraphBase, siteTitle, siteUrl } from "./site";

import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Locate the nearest scooter with the app, unlock it with a tap, and ride away. Scoot runs in New York, London, Jakarta and Yokohama.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Scoot" },
  description,
  openGraph: { ...openGraphBase, title: siteTitle, description },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
    images: openGraphBase.images,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${lexendDeca.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <RouteTransitions />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
