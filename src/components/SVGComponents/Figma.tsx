import type { SVGProps } from 'react';
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="false"
    aria-label="Figma icon, indicating that this icon represents Figma"
    {...props}
  >
    <path fill="#24CB71" d="M4 19.992a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0" />
    <path fill="#FF7237" d="M12-.008v8h4a4 4 0 1 0 0-8z" />
    <path fill="#00B6FF" d="M15.967 15.993a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    <path fill="#FF3737" d="M4 3.992a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4" />
    <path fill="#874FFF" d="M4 11.993a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4" />
  </svg>
);
export default SvgFigma;
