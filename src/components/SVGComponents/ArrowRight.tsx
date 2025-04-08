import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m21.7 12.36-7.2 7.369a.79.79 0 0 1-1.132 0 .83.83 0 0 1 0-1.159l5.835-5.97H3.534a.8.8 0 0 1-.565-.24.83.83 0 0 1 0-1.159.8.8 0 0 1 .565-.24h15.669l-5.835-5.97a.83.83 0 0 1 0-1.159.79.79 0 0 1 1.132 0l7.2 7.37a.82.82 0 0 1 .234.578.83.83 0 0 1-.234.58"
    />
  </svg>
);
export default SvgArrowRight;
