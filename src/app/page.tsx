'use client';

import AssetContainer from '@/components/AssetContainer';
import Button from '@/components/Button';
import LinkButton from '@/components/Button/LinkButton';
import CircleImage from '@/components/CircleImage';
import Heading from '@/components/Heading';
import { ArrowDoubleDown, ArrowRight, Figma } from '@/components/SVGComponents';

export default function Home() {
  return (
    <main className="fade-in mx-auto md:max-w-[902px]">
      <div
        className="flex justify-center pt-1 mb-11 flex-col-reverse lg:flex-row
"
      >
        <div className="pr-0 lg:pr-8 pt-0 lg:pt-10 text-center lg:text-left justify-center lg:flex-row lg:block">
          <Heading
            className="text-[2.5rem] sm:text-[64px] text-center lg:text-left"
            as="h1"
          >
            Nick Bence
          </Heading>
          <Heading className="pb-1 text-center lg:text-left" as="h2">
            Senior UI / UX Engineer
          </Heading>
          <Heading
            className="text-header-tertiary mb-3 text-center lg:text-left"
            as="h3"
          >
            Based in Detroit, Mi
          </Heading>
          <Button variant="secondary" iconRight={<ArrowDoubleDown />}>
            See my work
          </Button>
        </div>

        <div className="flex justify-center">
          <CircleImage name="nick-bence" size="large" />
        </div>
      </div>
      <div className=" flex gap-2 justify-center items-center h-6 mt-16 mb-6">
        <div className="w-full bg-border-primary h-1"></div>
        <Heading as="h2" className="w-full text-center whitespace-nowrap">
          Featured Work
        </Heading>
        <div className="w-full bg-border-primary h-1"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AssetContainer
          alt="starbucks for life"
          src="/starbucks-featured.png"
          size="large"
        />
        <AssetContainer
          alt="dynatrace navigation upgrade"
          src="/dynatrace-navigation-featured.png"
          size="large"
        />
        <AssetContainer
          alt="dynatrace platform page"
          src="/dynatrace-platform-featured.png"
          size="large"
        />
        <AssetContainer
          alt="nathans hot dogs"
          src="/nathans-hotdogs-featured.png"
          size="large"
        />
      </div>
      <div className="flex justify-center w-full mt-6 mb-16">
        <LinkButton
          variant="link"
          href={
            'https://www.figma.com/design/BX2uza7zulVKHbu0RyZQOO/nickbence-design-system?node-id=6-746&t=pPvP7BaTcziDOmlw-1'
          }
          iconLeft={<Figma />}
          iconRight={<ArrowRight />}
        >
          <span className="hidden sm:block">
            {"Check out my site's design system"}
          </span>
          <span className="block sm:hidden">
            {'Check out my design system'}
          </span>
        </LinkButton>
      </div>
    </main>
  );
}
