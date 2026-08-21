import { RouteTransitions } from "@/components/effects";
import type { Metadata, Viewport } from "next";
import { Lexend_Deca, Space_Mono } from "next/font/google";

import { siteUrl } from "./site";

import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Scoot — Scooter sharing made simple";
const description =
  "Scoot takes the hassle out of urban mobility. Locate the nearest scooter with the app, unlock it with a tap, and you're away — a Frontend Mentor challenge built with Next.js, TypeScript and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s — Scoot" },
  description,
  openGraph: {
    title,
    description,
    siteName: "Scoot",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
        {children}
      </body>
    </html>
  );
}
