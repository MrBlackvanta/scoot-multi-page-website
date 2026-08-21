export default function Circles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="234"
      height="63"
      viewBox="0 0 234 63"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="31"
        cy="31.5"
        r="29.5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="117"
        cy="31.5"
        r="29.5"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle cx="203" cy="31.5" r="31" fill="currentColor" />
    </svg>
  );
}
