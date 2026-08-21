import betterLiving from "@/assets/images/about/better-living.webp";
import digitalEra from "@/assets/images/about/digital-era.webp";
import { StoryPanel } from "@/components";

const panels = [
  {
    image: digitalEra,
    title: "Mobility for the digital era",
    body: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide steamlined, user-friendly urban transportation.",
    imageOn: "right",
    arrow: {
      turn: "down",
      at: "bottom-0.5 -left-2 md:bottom-auto md:top-75 md:-left-33",
    },
  },
  {
    image: betterLiving,
    title: "Better urban living",
    body: "We’re helping connect cities and bring people closer together. Our scooters are also fully electric, so you can breathe easier.",
    imageOn: "left",
    arrow: { turn: "down", at: "-top-2 left-76 md:top-0 md:left-45" },
  },
] as const;

export default function Intro() {
  return (
    <section className="relative isolate overflow-clip pt-18 md:pt-36 lg:pt-30">
      <div className="v-page flex flex-col gap-30">
        {panels.map((panel) => (
          <StoryPanel key={panel.title} {...panel} />
        ))}
      </div>
    </section>
  );
}
