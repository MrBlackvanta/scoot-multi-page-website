"use client";

import { navLinks } from "@/data";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Variant = "header" | "footer" | "drawer";

const variants: Record<Variant, string> = {
  header: "flex gap-8 text-body text-muted",
  footer:
    "flex flex-col items-center gap-4 text-body text-muted-inverse md:flex-row md:gap-8",
  drawer: "flex flex-col gap-6 text-link text-light-grey",
};

export default function NavLinks({ variant }: { variant: Variant }) {
  const pathname = usePathname();

  return (
    <ul className={cn("font-display font-bold", variants[variant])}>
      {navLinks.map(({ href, label }) => {
        const current = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={current ? "page" : undefined}
              className={cn(
                "transition-colors duration-200 hover:text-yellow motion-reduce:transition-none",
                current && "text-yellow",
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
