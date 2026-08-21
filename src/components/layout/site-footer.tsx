import { Logo } from "@/components/icons";
import Link from "next/link";

import Attribution from "./attribution";
import NavLinks from "./nav-links";
import SocialLinks from "./social-links";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-0.5">
      <div className="v-page flex flex-col items-center gap-10 pt-16 pb-12 md:h-24 md:flex-row md:gap-14.5 md:pt-0 md:pb-0">
        <Link href="/" aria-label="Scoot home" className="text-white">
          <Logo className="h-7.25 w-auto" />
        </Link>
        <nav aria-label="Footer">
          <NavLinks variant="footer" />
        </nav>
        <div className="max-md:mt-11 md:ms-auto">
          <SocialLinks />
        </div>
      </div>
      <Attribution />
    </footer>
  );
}
