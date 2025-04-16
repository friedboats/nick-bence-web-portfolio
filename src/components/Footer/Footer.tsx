'use client';

import Contact from './Contact';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <div>
      <Contact />
      <div className="flex justify-center items-center w-full px-3 py-4 text-center">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
