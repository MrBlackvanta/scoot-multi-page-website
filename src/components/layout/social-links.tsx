import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "Instagram", Icon: InstagramIcon },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-6 text-yellow">
      {socials.map(({ label, Icon }) => (
        <li key={label} className="flex size-6 items-center justify-center">
          <button
            type="button"
            aria-label={`Scoot on ${label}`}
            className="transition-colors duration-200 hover:text-light-grey motion-reduce:transition-none"
          >
            <Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}
