import StoreBadges from "@/components/store-badges";
import { SemiCircles } from "@/components/patterns";

export default function DownloadCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="relative isolate flex min-h-80 items-center overflow-clip bg-navy md:min-h-75"
    >
      <SemiCircles
        aria-hidden="true"
        className="pointer-events-none absolute -right-44.25 bottom-0 -z-10 h-39.5 w-289.5 text-light-grey opacity-10"
      />
      <div className="v-page flex flex-col items-center gap-9 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
        <h2
          id="download-heading"
          className="max-w-114 font-display text-section-sm font-bold text-white md:text-section lg:max-w-104"
        >
          Sign up and Scoot off today
        </h2>
        <StoreBadges />
      </div>
    </section>
  );
}
