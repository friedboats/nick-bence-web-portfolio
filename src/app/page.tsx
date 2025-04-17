'use client';

import BlockQuote from '@/components/BlockQuote';
import Button from '@/components/Button';
import LinkButton from '@/components/Button/LinkButton';
import CircleImage from '@/components/CircleImage';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import Heading from '@/components/Heading';
import { ArrowDoubleDown, ArrowRight, Figma } from '@/components/SVGComponents';
import FeaturedCopy from '@/copydeck/FeaturedCopy';
import GlobalCopy from '@/copydeck/GlobalCopy';
import HomeCopy from '@/copydeck/HomeCopy';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Home() {
  const featuredWorkRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // We want to check URL params and scroll to featured work if that was the intention from the route action
  useEffect(() => {
    if (searchParams?.get('scrollToFeaturedWork') === 'true') {
      scrollToFeaturedWork();
    }
  }, [searchParams]);

  const scrollToFeaturedWork = () => {
    if (featuredWorkRef.current) {
      const topPosition =
        featuredWorkRef.current.getBoundingClientRect().top +
        window.pageYOffset;
      const offset = 28;

      window.scrollTo({
        top: topPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="fade-in">
      <div className="pt-5 md:pt-0 mx-auto md:max-w-[902px]">
        <div
          className="flex justify-between mb-11 flex-col-reverse lg:flex-row
"
        >
          <div className="pt-0 lg:pt-10 text-center lg:text-left lg:flex-row lg:block">
            <Heading
              className="text-[2.5rem] sm:text-[64px] text-center lg:text-left"
              as="h1"
            >
              {HomeCopy.intro.name}
            </Heading>
            <Heading className="pb-1 text-center lg:text-left" as="h2">
              {HomeCopy.intro.title}
            </Heading>
            <Heading
              className="text-header-tertiary mb-3 text-center lg:text-left"
              as="h3"
            >
              {HomeCopy.intro.location}
            </Heading>
            <Button
              variant="secondary"
              iconRight={<ArrowDoubleDown />}
              onClick={scrollToFeaturedWork}
            >
              {GlobalCopy.buttons.myWork}
            </Button>
          </div>

          <div className="flex justify-center pb-4 lg:pb-0">
            <CircleImage name="nick-bence" size="large" />
          </div>
        </div>

        <FeaturedSection
          ref={featuredWorkRef}
          heading={FeaturedCopy.heading}
          data={FeaturedCopy.projects}
        />

        <div className="flex justify-center w-full mt-6 mb-16">
          <LinkButton
            variant="link"
            href={
              'https://www.figma.com/design/BX2uza7zulVKHbu0RyZQOO/nickbence-design-system?node-id=6-746&t=pPvP7BaTcziDOmlw-1'
            }
            iconLeft={<Figma />}
            iconRight={<ArrowRight />}
          >
            <span className="hidden sm:block">{HomeCopy.figmaLabel}</span>
            <span className="block sm:hidden">{HomeCopy.figmaLabelMobile}</span>
          </LinkButton>
        </div>
        <BlockQuote
          quote={`I'd say, without question, he is one of my top "go to" guys for any questions on development. A trusted and 
enthusiastic source.`}
        />
      </div>
    </main>
  );
}
