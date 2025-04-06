'use client';

import React from 'react';
import Button from '../Button';
import ThemeToggle from '../ThemeToggle';
import PersonalLogo from '../PersonalLogo';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const showBackButton = pathname !== '/';

  const router = useRouter();

  const seeMoreWorkClick = () => {
    router.push('/');
  };

  return (
    <div>
      <div className="flex justify-between items-center h-11">
        <PersonalLogo />
        <div className="flex items-center justify-content lg:flex-end gap-2 min-[350px]:gap-4 sm:gap-7">
          {showBackButton ? (
            <div className="hidden sm:block">
              <Button
                className="items-center"
                onClick={seeMoreWorkClick}
                variant="link"
              >
                See more work
              </Button>
            </div>
          ) : null}
          <ThemeToggle />
          <Button variant="primary">{"Let's chat!"}</Button>
        </div>
      </div>
      {showBackButton ? (
        <div className="flex sm:hidden mt-2">
          <Button onClick={seeMoreWorkClick} variant="link">
            See more work
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
