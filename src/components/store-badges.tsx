import { AppleIcon, GooglePlayIcon } from "@/components/icons";

const badges = [
  { note: "Available on the", name: "AppStore", Glyph: AppleIcon },
  { note: "Get it on", name: "GooglePlay", Glyph: GooglePlayIcon },
];

export default function StoreBadges() {
  return (
    <ul className="flex gap-3.25 lg:gap-4.5">
      {badges.map(({ note, name, Glyph }) => (
        <li key={name}>
          <button type="button" className="v-badge">
            <Glyph className="h-[1.4em] w-auto" />
            <span className="text-left">
              <span className="block text-[0.5em] leading-normal tracking-display">
                {note}
              </span>
              <span className="block leading-[1.2]">{name}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
