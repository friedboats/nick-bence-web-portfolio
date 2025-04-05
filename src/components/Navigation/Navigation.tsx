import React from 'react';
import Button from '../Button';
import ThemeToggle from '../ThemeToggle';
import PersonalLogo from '../PersonalLogo';

interface NavigationProps {
  showBackButton?: boolean;
}

const Navigation = ({ showBackButton = true }: NavigationProps) => {
  return (
    <div>
      <div className="flex justify-between align-middle py-[12px]">
        <PersonalLogo />
        <div className="flex flex-end align-items gap-7">
          {showBackButton ? (
            <div className="hidden sm:flex">
              <Button variant="link">See more work</Button>
            </div>
          ) : null}
          <ThemeToggle />
          <Button variant="primary">{"Let's chat!"}</Button>
        </div>
      </div>
      {showBackButton ? (
        <div className="flex sm:hidden mt-2">
          <Button variant="link">See more work</Button>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
