import { LocateIcon, RideIcon, ScooterIcon } from "@/components/icons";

const steps = [
  {
    Icon: LocateIcon,
    title: "Locate with app",
    body: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    Icon: ScooterIcon,
    title: "Pick your scooter",
    body: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    Icon: RideIcon,
    title: "Enjoy the ride",
    body: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative isolate overflow-clip pt-30 lg:pt-40">
      <div className="v-page">
        <ol className="mx-auto flex max-w-xl flex-col gap-12 md:gap-10 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-7.5">
          {steps.map(({ Icon, title, body }, index) => (
            <li
              key={title}
              className="relative flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-20 md:text-left lg:flex-col lg:items-start lg:gap-10"
            >
              <Icon className="size-14 shrink-0 md:size-24" />
              <div>
                <h2 className="mb-6 font-display text-card-sm font-bold text-navy md:mb-7 md:text-card">
                  {title}
                </h2>
                <p>{body}</p>
              </div>
              {index === steps.length - 1 && <ConnectorRail />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ConnectorRail() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute top-12 left-12 -z-10 hidden h-screen w-3.75 -translate-x-1/2 -translate-y-full bg-light-grey md:block lg:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute top-12 left-12 -z-10 hidden h-3.75 w-screen -translate-x-full -translate-y-1/2 bg-light-grey lg:block"
      />
    </>
  );
}
