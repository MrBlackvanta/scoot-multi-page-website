import { Button } from "@/components";

export default function NotListed() {
  return (
    <section
      aria-labelledby="not-listed-heading"
      className="pt-18 pb-18 text-center md:pt-16 md:pb-30 xl:pt-30 xl:text-left"
    >
      <div className="v-page v-reveal xl:grid xl:grid-cols-12 xl:items-center xl:gap-7.5">
        <h2
          id="not-listed-heading"
          className="mx-auto mb-8 max-w-114 font-display text-section-sm font-bold text-navy md:mb-10 md:text-section xl:col-span-4 xl:mx-0 xl:mb-0 xl:max-w-none"
        >
          Your city not listed?
        </h2>

        <p className="mx-auto mb-8 max-w-xl md:mb-10 xl:col-span-5 xl:mx-0 xl:mb-0 xl:max-w-none">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>

        <Button className="xl:col-span-3 xl:justify-self-end">
          Message Us
        </Button>
      </div>
    </section>
  );
}
