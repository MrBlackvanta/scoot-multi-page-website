import { DownloadCta } from "@/components/layout";
import { Features, Hero, HowItWorks } from "@/views/home";

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
