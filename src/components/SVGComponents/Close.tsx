import type { SVGProps } from 'react';
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M1.168.494c.67-.67 1.755-.67 2.424 0l9.074 9.074L21.74.494a1.714 1.714 0 1 1 2.424 2.425l-9.074 9.073 9.074 9.074a1.714 1.714 0 1 1-2.424 2.424l-9.074-9.073-9.074 9.073a1.714 1.714 0 0 1-2.424-2.424l9.074-9.074L1.168 2.92a1.714 1.714 0 0 1 0-2.425"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClose;
