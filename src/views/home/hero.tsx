import heroDesktop from "@/assets/images/home/hero-desktop.webp";
import heroMobile from "@/assets/images/home/hero-mobile.webp";
import heroTablet from "@/assets/images/home/hero-tablet.webp";
import { ButtonAnchor, Picture } from "@/components";
import { Circles, RightArrow } from "@/components/patterns";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-162.5 items-center overflow-clip pb-16 md:pb-20 lg:pb-0"
    >
      <Picture
        mobile={heroMobile}
        tablet={heroTablet}
        desktop={heroDesktop}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <RightArrow className="absolute bottom-7 -left-78 -z-10 text-yellow md:bottom-8 md:-left-32 lg:hidden" />
      <RightArrow className="absolute bottom-38 left-1/2 -z-10 -ms-4 hidden text-yellow xl:block" />
      <Circles className="absolute -z-10 hidden text-white md:-right-8 md:bottom-11 md:block lg:-right-12 lg:bottom-41" />

      <div className="v-page">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-125 lg:text-left">
          <h1
            id="hero-heading"
            className="mb-6 font-display text-hero-sm font-bold text-white md:text-hero lg:mb-10"
          >
            Scooter sharing made simple
          </h1>
          <div className="lg:ps-24">
            <p className="relative mb-8 text-white lg:mb-10">
              <span
                aria-hidden="true"
                className="absolute top-1/2 -left-14 hidden h-3.75 w-51 -translate-x-full -translate-y-1/2 bg-yellow lg:block"
              />
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to
              locate the nearest bike, unlock it with a tap, and you&rsquo;re
              away!
            </p>
            <ButtonAnchor href="#download" tone="dark">
              Get Scootin
            </ButtonAnchor>
          </div>
        </div>
      </div>
    </section>
  );
}
