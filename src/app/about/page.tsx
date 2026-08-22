import heroDesktop from "@/assets/images/about/hero-desktop.webp";
import heroMobile from "@/assets/images/about/hero-mobile.webp";
import heroTablet from "@/assets/images/about/hero-tablet.webp";
import { Values } from "@/components";
import { DownloadCta, PageHero } from "@/components/layout";
import { Faqs, Intro } from "@/views/about";

import { pageMetadata } from "../site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "How Scoot works, what we stand for, and answers to the questions riders ask most — from helmets and licences to finding a scooter near you.",
  path: "/about",
});

export default function About() {
  return (
    <main className="flex-1">
      <PageHero
        title="About"
        mobile={heroMobile}
        tablet={heroTablet}
        desktop={heroDesktop}
      />
      <Intro />
      <Values title="Our values" />
      <Faqs />
      <DownloadCta />
    </main>
  );
}
