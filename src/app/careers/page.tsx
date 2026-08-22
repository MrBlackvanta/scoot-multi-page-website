import heroDesktop from "@/assets/images/shared/page-hero-desktop.webp";
import heroMobile from "@/assets/images/shared/page-hero-mobile.webp";
import heroTablet from "@/assets/images/shared/page-hero-tablet.webp";
import { Values } from "@/components";
import { DownloadCta, PageHero } from "@/components/layout";
import { Intro, Openings } from "@/views/careers";

import { pageMetadata } from "../site";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Open roles at Scoot in New York, London, Jakarta and Yokohama — and why the people building urban mobility choose to do it here.",
  path: "/careers",
});

export default function Careers() {
  return (
    <main className="flex-1">
      <PageHero
        title="Careers"
        mobile={heroMobile}
        tablet={heroTablet}
        desktop={heroDesktop}
      />
      <Intro />
      <Values title="Why join us?" />
      <Openings />
      <DownloadCta />
    </main>
  );
}
