import community from "@/assets/images/shared/values-community.webp";
import integrity from "@/assets/images/shared/values-integrity.webp";
import tech from "@/assets/images/shared/values-tech.webp";

const values = [
  {
    image: tech,
    title: "Our tech",
    body: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    image: integrity,
    title: "Our integrity",
    body: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    image: community,
    title: "Our community",
    body: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

export default function Values() {
  return (
    <section aria-labelledby="values-heading" className="pt-30">
      <div className="v-page">
        <h2
          id="values-heading"
          className="mb-16 text-center font-display text-section-sm font-bold text-navy md:mb-26 md:text-section"
        >
          Our values
        </h2>

        <ol
          role="list"
          className="flex flex-col gap-14 lg:grid lg:grid-cols-3 lg:gap-7.5"
        >
          {values.map(({ image, title, body }, index) => (
            <li key={title} className="mx-auto max-w-114 text-center">
              <div className="relative mx-auto mb-16 w-60 md:mb-22">
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
                  className="absolute -bottom-12 left-1/2 flex size-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow font-display text-card font-bold text-navy md:-bottom-14"
                >
                  {`0${index + 1}`}
                </span>
              </div>
              <h3 className="mb-7 font-display text-card font-bold text-navy">
                {title}
              </h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
