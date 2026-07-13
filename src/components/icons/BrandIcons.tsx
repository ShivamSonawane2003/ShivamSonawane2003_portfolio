import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/** Kaggle logo (simple-icons path) — sized/colored like a lucide icon. */
export const SiKaggle = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M19.005 23.011a.318.318 0 0 1-.232-.098l-5.36-5.36-1.512 1.435v3.75c0 .193-.075.268-.268.268H9.775c-.193 0-.268-.075-.268-.268V8.262c0-.193.075-.268.268-.268h1.858c.193 0 .268.075.268.268v9.108l6.505-6.583c.135-.135.25-.174.44-.174h2.396c.155 0 .25.058.29.174.04.135.02.232-.078.33l-6.35 6.137 6.72 6.72c.097.098.116.213.077.33-.04.116-.135.174-.29.174z" />
  </svg>
);

/** Generic colored language dot used in the GitHub showcase. */
export const LanguageDot = ({ color }: { color: string }) => (
  <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
);
