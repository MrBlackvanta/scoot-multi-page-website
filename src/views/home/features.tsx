import nearYou from "@/assets/images/home/near-you.webp";
import payments from "@/assets/images/home/payments.webp";
import telemetry from "@/assets/images/home/telemetry.webp";
import { Button, StoryPanel } from "@/components";

const panels = [
  {
    image: telemetry,
    title: "Easy to use riding telemetry",
    body: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you’ve been using the scooter, your traveling distance, and many more things all in an easy to use app.",
    imageOn: "right",
    arrowAt: "bottom-0.5 -left-2 md:bottom-auto md:top-75 md:-left-33",
  },
  {
    image: nearYou,
    title: "Coming to a city near you",
    body: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
    imageOn: "left",
    arrowAt: "-top-2 left-56 md:-top-8 md:left-45",
  },
  {
    image: payments,
    title: "Zero hassle payments",
    body: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
    imageOn: "right",
    arrowAt: "top-0 left-31 md:top-19 md:left-62",
  },
] as const;

export default function Features() {
  return (
    <section className="relative isolate overflow-clip pt-30 pb-30 md:pt-36 md:pb-26 lg:py-50">
      <div className="v-page flex flex-col gap-30 md:gap-32 lg:gap-40">
        {panels.map((panel) => (
          <StoryPanel key={panel.title} {...panel}>
            <Button>Learn More</Button>
          </StoryPanel>
        ))}
      </div>
    </section>
  );
}
