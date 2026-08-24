import { DownloadCta } from "@/components/layout";
import { Features, Hero, HowItWorks } from "@/views/home";

import { pageMetadata } from "./site";

export const metadata = pageMetadata({
  description:
    "Scooter sharing made simple. Locate the nearest Scoot with the app, unlock it with a tap, and ride away. Now in four cities.",
  path: "/",
});

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HowItWorks />
      <Features />
      <DownloadCta />
    </main>
  );
}
