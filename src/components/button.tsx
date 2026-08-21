import Link from "next/link";

import { cn } from "@/lib";

type Tone = "light" | "dark";

const tones: Record<Tone, string> = {
  light: "",
  dark: "hover:text-yellow",
};

type OwnProps = { tone?: Tone };

export default function Button({
  tone = "light",
  className,
  children,
  ...props
}: OwnProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className={cn("v-btn", tones[tone], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  tone = "light",
  className,
  children,
  ...props
}: OwnProps & React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={cn("v-btn", tones[tone], className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  tone = "light",
  className,
  children,
  ...props
}: OwnProps & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a className={cn("v-btn", tones[tone], className)} {...props}>
      {children}
    </a>
  );
}
