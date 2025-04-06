import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#spinner_svg__a)">
      <path
        fill="#fff"
        d="M24 11.512c0 3.31-1.264 6.484-3.515 8.825-2.25 2.34-5.302 3.655-8.485 3.655s-6.235-1.315-8.485-3.655S0 14.822 0 11.512C0 6.592 2.747 2.11 7 .08a.89.89 0 0 1 1.012.168.992.992 0 0 1 .05 1.357.9.9 0 0 1-.292.22c-3.599 1.718-5.924 5.52-5.924 9.687 0 2.8 1.07 5.487 2.974 7.467s4.487 3.093 7.18 3.093 5.276-1.112 7.18-3.093 2.974-4.666 2.974-7.467c0-4.167-2.325-7.969-5.924-9.687a.95.95 0 0 1-.48-.54 1 1 0 0 1 .027-.734.94.94 0 0 1 .518-.499A.9.9 0 0 1 17 .08C21.253 2.109 24 6.592 24 11.512"
      />
    </g>
    <defs>
      <clipPath id="spinner_svg__a">
        <path fill="#fff" d="M0-.008h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpinner;
