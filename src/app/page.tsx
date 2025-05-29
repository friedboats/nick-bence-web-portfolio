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
    <div className="pt-5 md:pt-0">
      <div className="flex justify-between mb-11 flex-col-reverse lg:flex-row">
        <div className="pt-0 lg:pt-10 text-center lg:text-left lg:flex-row lg:block">
          <Heading
            className="text-[2.5rem] sm:text-[64px] text-center lg:text-left"
            as="h1"
          >
            {HomeCopy.intro.name}
          </Heading>
          <div className="pb-1">
            <Heading
              className="text-header-tertiary text-center lg:text-left"
              as="h3"
            >
              {HomeCopy.intro.title}
            </Heading>
          </div>
          <div className=" mb-3 ">
            <Heading className="text-center lg:text-left" as="h4">
              {HomeCopy.intro.location}
            </Heading>
          </div>
          <Button
            variant="secondary"
            iconRight={<ArrowDoubleDown />}
            onClick={scrollToFeaturedWork}
          >
            {GlobalCopy.buttons.myWork}
          </Button>
        </div>

        <div className="flex justify-center px-4 pb-4 lg:pb-0">
          <CircleImage name="nick-bence" size="large" />
        </div>
      </div>

      <div className="mt-16">
        <FeaturedSection
          ref={featuredWorkRef}
          heading={FeaturedCopy.heading}
          data={FeaturedCopy.projects}
        />
      </div>

      <div className="flex justify-center w-full mt-6 mb-16">
        <LinkButton
          variant="link"
          href={GlobalCopy.urls.figma}
          iconLeft={<Figma />}
          iconRight={<ArrowRight />}
        >
          <span className="hidden sm:block">{HomeCopy.figmaLabel}</span>
          <span className="block sm:hidden">{HomeCopy.figmaLabelMobile}</span>
        </LinkButton>
      </div>
      <BlockQuote quote={GlobalCopy.quotes.goToGuys} />
    </div>
  );
}
