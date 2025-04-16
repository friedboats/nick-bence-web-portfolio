import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 24"
    aria-hidden="false"
    aria-label="Left arrow, indicating that this icon takes you forward"
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.3 11.201 7.2-7.369a.79.79 0 0 1 1.132 0 .83.83 0 0 1 0 1.159l-5.835 5.97h15.669a.8.8 0 0 1 .565.24.83.83 0 0 1 0 1.158.8.8 0 0 1-.565.24H5.797l5.835 5.971a.83.83 0 0 1 0 1.159.79.79 0 0 1-1.132 0l-7.2-7.37a.82.82 0 0 1-.234-.578.84.84 0 0 1 .234-.58"
    />
  </svg>
);
export default SvgArrowLeft;
