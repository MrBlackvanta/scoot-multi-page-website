import mapDesktop from "@/assets/images/locations/world-map-desktop.webp";
import mapMobile from "@/assets/images/locations/world-map-mobile.webp";
import mapTablet from "@/assets/images/locations/world-map-tablet.webp";
import { Picture } from "@/components";

const cities = [
  { name: "New York", x: 22.3, y: 28.3 },
  { name: "London", x: 44, y: 19.4 },
  { name: "Jakarta", x: 78.5, y: 62.2 },
  { name: "Yokohama", x: 85.6, y: 30.9 },
];

export default function CityMap() {
  return (
    <section
      aria-labelledby="cities-heading"
      className="pt-18 md:pt-36 lg:pt-30"
    >
      <div className="v-page">
        <h2 id="cities-heading" className="sr-only">
          Cities we serve
        </h2>

        <div className="relative">
          <Picture
            mobile={mapMobile}
            tablet={mapTablet}
            desktop={mapDesktop}
            alt=""
            className="w-full"
          />

          <ul
            role="list"
            className="mt-10 flex flex-col gap-4 md:absolute md:inset-0 md:mt-0 md:block"
          >
            {cities.map(({ name, x, y }) => (
              <li
                key={name}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="md:absolute md:-translate-x-1/2 md:-translate-y-full"
              >
                <span className="flex h-18 items-center justify-center bg-light-yellow font-display text-card font-bold text-navy md:h-8 md:w-30 md:bg-yellow md:text-pin-label md:text-navy-deep lg:h-18 lg:w-48 lg:text-card lg:text-navy">
                  {name}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-auto hidden h-2 w-4 bg-yellow v-pin-tail md:block lg:h-4 lg:w-8"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
