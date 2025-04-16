import type { SVGProps } from 'react';
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 25 24"
    aria-hidden="false"
    aria-label="Instagram icon, indicating that this icon represents Instagram"
    {...props}
  >
    <g clipPath="url(#instagram_svg__a)">
      <path
        fill="currentColor"
        d="M12.666 6.454a5.538 5.538 0 1 0 0 11.076 5.538 5.538 0 0 0 0-11.076m0 9.23a3.692 3.692 0 1 1 0-7.384 3.692 3.692 0 0 1 0 7.384M18.204-.008H7.128A6.47 6.47 0 0 0 .666 6.454V17.53a6.47 6.47 0 0 0 6.462 6.461h11.077a6.47 6.47 0 0 0 6.461-6.461V6.454a6.47 6.47 0 0 0-6.462-6.462m4.616 17.539a4.615 4.615 0 0 1-4.616 4.615H7.128a4.615 4.615 0 0 1-4.616-4.615V6.454a4.615 4.615 0 0 1 4.616-4.616h11.077a4.615 4.615 0 0 1 4.615 4.616zM20.05 5.992a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0"
      />
    </g>
    <defs>
      <clipPath id="instagram_svg__a">
        <path fill="currentColor" d="M.666-.008h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInstagram;
