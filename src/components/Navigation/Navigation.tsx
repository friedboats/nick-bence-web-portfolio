'use client';

import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button';
import LinkButton from '../Button/LinkButton';
import PersonalLogo from '../PersonalLogo';
import { ArrowLeft, LinkedIn } from '../SVGComponents';
import ThemeToggle from '../ThemeToggle';

const Navigation = () => {
  const pathname = usePathname();

  const showBackButton = pathname !== '/';

  const router = useRouter();

  const seeMoreWorkClick = () => {
    router.push('/?scrollToFeaturedWork=true');
  };

  return (
    <div>
      <div className="flex justify-between items-center h-11">
        <PersonalLogo />
        <div className="flex items-center justify-content lg:flex-end pl-2 gap-5 sm:gap-7">
          {showBackButton ? (
            <div className="hidden sm:flex">
              <Button
                className="items-center"
                onClick={seeMoreWorkClick}
                variant="link"
                iconLeft={<ArrowLeft />}
              >
                See more work
              </Button>
            </div>
          ) : null}
          <ThemeToggle />
          <LinkButton
            variant="primary"
            href="https://www.linkedin.com/in/nicholasbence/"
            iconRight={<LinkedIn />}
            className="whitespace-nowrap hidden sm:flex"
          >
            {"Let's chat!"}
          </LinkButton>
          <LinkButton
            variant="primary"
            href="https://www.linkedin.com/in/nicholasbence/"
            iconRight={<LinkedIn />}
            isIconOnly={true}
            aria-label={`Redirects to Nick Bence's LinkedIn page`}
            className="whitespace-nowrap block sm:hidden"
          ></LinkButton>
        </div>
      </div>
      {showBackButton ? (
        <div className="flex sm:hidden mt-2">
          <Button
            onClick={seeMoreWorkClick}
            variant="link"
            iconLeft={<ArrowLeft />}
          >
            See more work
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
