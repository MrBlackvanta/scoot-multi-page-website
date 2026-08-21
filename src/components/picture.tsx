import type { StaticImageData } from "next/image";

type Props = {
  mobile: StaticImageData;
  tablet?: StaticImageData;
  desktop?: StaticImageData;
  alt: string;
} & Omit<React.ComponentPropsWithoutRef<"img">, "src" | "srcSet" | "alt">;

export default function Picture({
  mobile,
  tablet,
  desktop,
  alt,
  ...img
}: Props) {
  return (
    <picture className="contents">
      {desktop && <source media="(width >= 64rem)" srcSet={desktop.src} />}
      {tablet && <source media="(width >= 48rem)" srcSet={tablet.src} />}
      <img
        src={mobile.src}
        alt={alt}
        width={mobile.width}
        height={mobile.height}
        {...img}
      />
    </picture>
  );
}
