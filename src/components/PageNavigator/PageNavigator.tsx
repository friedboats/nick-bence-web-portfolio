'use client';

import usePageNavigationStore from '@/stores';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../Button';
import { ArrowLeft, ArrowRight } from '../SVGComponents';

const PageNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { currentPageList, currentPageIndex, setPageIndex } =
    usePageNavigationStore();

  useEffect(() => {
    if (!currentPageList.length) return;

    const foundIndex = currentPageList.findIndex((path) => path === pathname);
    if (foundIndex !== -1 && foundIndex !== currentPageIndex) {
      setPageIndex(foundIndex);
    }
  }, [pathname, currentPageList, currentPageIndex, setPageIndex]);

  if (!currentPageList.length) return null;

  const handleNext = () => {
    const nextIndex = (currentPageIndex + 1) % currentPageList.length;
    setPageIndex(nextIndex);
    router.push(currentPageList[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentPageIndex - 1 + currentPageList.length) % currentPageList.length;
    setPageIndex(prevIndex);
    router.push(currentPageList[prevIndex]);
  };

  return (
    <div className="flex justify-between w-full mt-8">
      <Button
        onClick={handlePrevious}
        variant="link"
        iconLeft={<ArrowLeft />}
        className="justify-start"
      >
        <span className="hidden md:flex">Previous project</span>
        <span className="flex md:hidden">Previous</span>
      </Button>

      <Button
        onClick={handleNext}
        variant="link"
        iconRight={<ArrowRight />}
        className="justify-end"
      >
        <span className="hidden md:flex">Next project</span>
        <span className="flex md:hidden">Next</span>
      </Button>
    </div>
  );
};

export default PageNavigator;
