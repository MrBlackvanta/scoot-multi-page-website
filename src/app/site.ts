import type { Metadata } from "next";

export const siteUrl =
  "https://scoot-multi-page-website.abdelrhman-ahmed8881.workers.dev";

export const siteName = "Scoot";
export const siteTitle = "Scoot | Scooter sharing made simple";

const images = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Scoot, scooter sharing made simple",
  },
];

export const openGraphBase = {
  siteName,
  locale: "en_US",
  type: "website" as const,
  images,
};

type Page = { title?: string; description: string; path: string };

export function pageMetadata({ title, description, path }: Page): Metadata {
  const shared = {
    title: title ? `${title} | ${siteName}` : siteTitle,
    description,
  };

  return {
    title: title ?? { absolute: siteTitle },
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphBase, ...shared, url: path },
    twitter: { ...shared, card: "summary_large_image", images },
  };
}
