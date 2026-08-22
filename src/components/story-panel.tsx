import type { StaticImageData } from "next/image";

import { LeftDownwardArrow, LeftUpwardArrow } from "@/components/patterns";
import { cn } from "@/lib";

const sides = {
  right: { column: "lg:order-last", backdrop: "left-full ms-16" },
  left: { column: "", backdrop: "right-full me-16" },
};

const arrows = { down: LeftDownwardArrow, up: LeftUpwardArrow };

type Props = {
  image: StaticImageData;
  title: string;
  body: string;
  imageOn: keyof typeof sides;
  arrow: { turn: keyof typeof arrows; at: string };
  reveal?: boolean;
  children?: React.ReactNode;
};

export default function StoryPanel({
  image,
  title,
  body,
  imageOn,
  arrow,
  reveal = true,
  children,
}: Props) {
  const Arrow = arrows[arrow.turn];

  return (
    <div className="flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-55">
      <div
        className={cn(
          "relative mx-auto w-full max-w-111 lg:max-w-none",
          sides[imageOn].column,
        )}
      >
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          loading="lazy"
          className="w-full rounded-full"
        />
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-0 -z-10 hidden size-full rounded-full bg-light-grey md:block",
            sides[imageOn].backdrop,
          )}
        />
        <Arrow
          className={cn("absolute text-yellow", reveal && "v-draw", arrow.at)}
        />
      </div>
      <div className={cn("text-center lg:text-left", reveal && "v-reveal")}>
        <h2 className="mx-auto mb-8 max-w-114 font-display text-section-sm font-bold text-navy md:mb-10 md:text-section lg:mx-0 lg:mb-6 lg:max-w-none">
          {title}
        </h2>
        <p className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">{body}</p>
        {children && <div className="mt-8 md:mt-10">{children}</div>}
      </div>
    </div>
  );
}
