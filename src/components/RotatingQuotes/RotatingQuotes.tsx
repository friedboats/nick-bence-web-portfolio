'use client';

import { useEffect, useState } from 'react';
import BodyContent from '../BodyContent';

type Quote = {
  quote: string;
  author: string;
  title: string;
};

type RotatingQuotesProps = {
  quotes: readonly Quote[];
  duration?: number; // seconds per slide
};

const RotatingQuotes = ({ quotes, duration = 7 }: RotatingQuotesProps) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeDuration = 500;

    // Start fade-in on mount
    const initialFade = setTimeout(() => {
      setFade(true);
    }, 50); // short delay to allow transition to apply

    // Start rotation after full first display
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, fadeDuration);
    }, duration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialFade);
    };
  }, [quotes.length, duration]);

  const { quote, author, title } = quotes[index];

  return (
    <div className="text-center px-4 sm:px-11 py-9 bg-surface-background-info rounded-xl">
      <div
        className={`transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <BodyContent
          className="mb-5"
          variant="quote"
          color={'text-body-inverse'}
        >
          “{quote}”
        </BodyContent>
        <BodyContent variant="p-bold" color={'text-body-inverse'}>
          {author}
        </BodyContent>
        <BodyContent variant="small" color={'text-body-inverse'}>
          {title}
        </BodyContent>
      </div>
    </div>
  );
};

export default RotatingQuotes;
