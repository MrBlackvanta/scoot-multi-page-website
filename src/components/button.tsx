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
