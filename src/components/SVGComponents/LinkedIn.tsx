import type { SVGProps } from 'react';
const SvgLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#linkedIn_svg__a)">
      <path
        fill="currentColor"
        d="M22.2-.008H1.8a1.8 1.8 0 0 0-1.8 1.8v20.4a1.8 1.8 0 0 0 1.8 1.8h20.4a1.8 1.8 0 0 0 1.8-1.8v-20.4a1.8 1.8 0 0 0-1.8-1.8m-15 20.4H3.6v-10.8h3.6zm-1.8-12.9a2.1 2.1 0 1 1 2.16-2.1 2.136 2.136 0 0 1-2.16 2.1m15 12.9h-3.6v-5.688c0-1.704-.72-2.316-1.656-2.316A2.09 2.09 0 0 0 13.2 14.62a1 1 0 0 0 0 .168v5.604H9.6v-10.8h3.48v1.56a3.73 3.73 0 0 1 3.24-1.68c1.86 0 4.032 1.032 4.032 4.392z"
      />
    </g>
    <defs>
      <clipPath id="linkedIn_svg__a">
        <path fill="currentColor" d="M0-.008h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkedIn;
