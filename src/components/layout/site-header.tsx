import { ButtonAnchor } from "@/components";
import { Logo } from "@/components/icons";
import Link from "next/link";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="bg-white">
      <div className="v-page grid h-16 grid-cols-3 items-center md:flex md:h-24 md:gap-14.5">
        <MobileMenu />
        <Link
          href="/"
          aria-label="Scoot home"
          className="justify-self-center text-navy"
        >
          <Logo className="h-5 w-auto md:h-7.25" />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks variant="header" />
        </nav>
        <ButtonAnchor
          href="#download"
          className="hidden md:ms-auto md:inline-flex"
        >
          Get Scootin
        </ButtonAnchor>
      </div>
    </header>
  );
}
