import nearYou from "@/assets/images/home/near-you.webp";
import payments from "@/assets/images/home/payments.webp";
import telemetry from "@/assets/images/home/telemetry.webp";
import { Button } from "@/components";
import { LeftDownwardArrow } from "@/components/patterns";
import { cn } from "@/lib";

const sides = {
  right: { column: "lg:order-last", backdrop: "left-full ms-16" },
  left: { column: "", backdrop: "right-full me-16" },
};

const panels = [
  {
    image: telemetry,
    title: "Easy to use riding telemetry",
    body: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you’ve been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    imageOn: "right",
    arrow: "top-41 -left-2 md:top-75 md:-left-33",
  },
  {
    image: nearYou,
    title: "Coming to a city near you",
    body: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    imageOn: "left",
    arrow: "-top-2 left-56 md:-top-8 md:left-45",
  },
  {
    image: payments,
    title: "Zero hassle payments",
    body: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    imageOn: "right",
    arrow: "top-0 left-31 md:top-19 md:left-62",
  },
] as const;

export default function Features() {
  return (
    <section className="relative isolate overflow-clip pt-30 pb-30 md:pt-36 md:pb-26 lg:py-50">
      <div className="v-page flex flex-col gap-30 md:gap-32 lg:gap-40">
        {panels.map(({ image, title, body, imageOn, arrow }) => (
          <div
            key={title}
            className="flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-55"
          >
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
              <LeftDownwardArrow
                className={cn("absolute text-yellow", arrow)}
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="mx-auto mb-8 max-w-114 font-display text-section-sm font-bold text-navy md:mb-10 md:text-section lg:mx-0 lg:mb-6 lg:max-w-none">
                {title}
              </h2>
              <p className="mx-auto mb-8 max-w-xl md:mb-10 lg:mx-0 lg:max-w-none">
                {body}
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
