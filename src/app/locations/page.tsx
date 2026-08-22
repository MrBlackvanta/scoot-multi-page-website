import heroDesktop from "@/assets/images/shared/page-hero-desktop.webp";
import heroMobile from "@/assets/images/shared/page-hero-mobile.webp";
import heroTablet from "@/assets/images/shared/page-hero-tablet.webp";
import { DownloadCta, PageHero } from "@/components/layout";
import { CityMap, NotListed } from "@/views/locations";

import { pageMetadata } from "../site";

export const metadata = pageMetadata({
  title: "Locations",
  description:
    "Scoot runs in New York, London, Jakarta and Yokohama. Your city not listed? Tell us where we should ride next.",
  path: "/locations",
});

export default function Locations() {
  return (
    <main className="flex-1">
      <PageHero
        title="Locations"
        mobile={heroMobile}
        tablet={heroTablet}
        desktop={heroDesktop}
      />
      <CityMap />
      <NotListed />
      <DownloadCta />
    </main>
  );
}
