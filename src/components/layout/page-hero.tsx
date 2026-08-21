import type { StaticImageData } from "next/image";

import { Picture } from "@/components";
import { Circles } from "@/components/patterns";

type Props = {
  title: string;
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
};

export default function PageHero({ title, mobile, tablet, desktop }: Props) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate flex h-40 items-center overflow-clip md:h-50"
    >
      <Picture
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-veil/75" />
      <Circles className="absolute top-1/2 -right-8 -z-10 hidden -translate-y-1/2 text-white md:block" />

      <div className="v-page">
        <h1
          id="page-heading"
          className="mx-auto max-w-xl text-center font-display text-hero-sm font-bold text-white md:text-left md:text-hero lg:max-w-none"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
