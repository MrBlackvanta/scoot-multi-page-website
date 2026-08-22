import { Button } from "@/components";

const openings = [
  { role: "General Manager", location: "Jakarta, Indonesia" },
  { role: "UI/UX Designer", location: "Yokohama, Japan" },
  { role: "Blog Content Copywriter", location: "New York, United States" },
  { role: "Graphic Designer", location: "New York, United States" },
  { role: "Fleet Supervisor", location: "Jakarta, Indonesia" },
  { role: "UX Analyst", location: "London, United Kingdom" },
];

export default function Openings() {
  return (
    <section
      aria-labelledby="openings-heading"
      className="pt-36 pb-30 md:pt-30 lg:pb-40"
    >
      <div className="v-page">
        <h2 id="openings-heading" className="sr-only">
          Open positions
        </h2>

        <ul role="list" className="flex flex-col gap-4 lg:gap-6">
          {openings.map(({ role, location }) => (
            <li
              key={role}
              className="flex min-h-47.5 v-reveal flex-col items-center justify-center gap-4 bg-snow px-8 py-8 text-center md:min-h-32 md:flex-row md:justify-between md:gap-6 md:px-12 md:py-4 md:text-left lg:ps-10 lg:pe-16"
            >
              <div>
                <h3 className="font-display text-item font-bold text-navy md:text-card">
                  {role}
                </h3>
                <p className="mt-1 text-navy md:mt-2">{location}</p>
              </div>
              <Button
                aria-label={`Apply for ${role}`}
                className="w-full md:w-45"
              >
                Apply
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
