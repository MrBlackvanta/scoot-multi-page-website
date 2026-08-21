import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "hero",
            "hero-sm",
            "section",
            "section-sm",
            "group",
            "card",
            "card-sm",
            "item",
            "pin-label",
            "badge",
            "badge-note",
            "link",
            "body",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
