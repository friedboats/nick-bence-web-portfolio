'use client';

import { useEffect, useState } from 'react';
import Button from '../Button';

const ThemeToggle = () => {
  const isStorybook =
    typeof window !== 'undefined' && window.__STORYBOOK_PREVIEW__;

  const [isDark, setIsDark] = useState<boolean | null>(null);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    // Ensure we are on the client before accessing localStorage
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Apply the dark class on body when theme changes
    if (isDark !== null) {
      if (!isStorybook) {
        document.body.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    }
  }, [isDark, isStorybook]);

  if (isDark === null) {
    return null; // Return null or a loading state until the theme is set
  }

  return (
    <Button onClick={toggleTheme} variant="link" aria-label="Toggle Dark Mode">
      {isDark ? (
        <svg
          role="img"
          aria-hidden="true"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 30C25.6667 30 27.0833 29.4167 28.25 28.25C29.4167 27.0833 30 25.6667 30 24C30 22.3333 29.4167 20.9167 28.25 19.75C27.0833 18.5833 25.6667 18 24 18C22.3333 18 20.9167 18.5833 19.75 19.75C18.5833 20.9167 18 22.3333 18 24C18 25.6667 18.5833 27.0833 19.75 28.25C20.9167 29.4167 22.3333 30 24 30ZM24 34C21.2333 34 18.875 33.025 16.925 31.075C14.975 29.125 14 26.7667 14 24C14 21.2333 14.975 18.875 16.925 16.925C18.875 14.975 21.2333 14 24 14C26.7667 14 29.125 14.975 31.075 16.925C33.025 18.875 34 21.2333 34 24C34 26.7667 33.025 29.125 31.075 31.075C29.125 33.025 26.7667 34 24 34ZM10 26H2V22H10V26ZM46 26H38V22H46V26ZM22 10V2H26V10H22ZM22 46V38H26V46H22ZM12.8 15.5L7.75 10.65L10.6 7.7L15.4 12.7L12.8 15.5ZM37.4 40.3L32.55 35.25L35.2 32.5L40.25 37.35L37.4 40.3ZM32.5 12.8L37.35 7.75L40.3 10.6L35.3 15.4L32.5 12.8ZM7.7 37.4L12.75 32.55L15.5 35.2L10.65 40.25L7.7 37.4Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          role="img"
          aria-hidden="true"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 42C19 42 14.75 40.25 11.25 36.75C7.75 33.25 6 29 6 24C6 19 7.75 14.75 11.25 11.25C14.75 7.75 19 6 24 6C24.4667 6 24.925 6.01667 25.375 6.05C25.825 6.08333 26.2667 6.13333 26.7 6.2C25.3333 7.16667 24.2417 8.425 23.425 9.975C22.6083 11.525 22.2 13.2 22.2 15C22.2 18 23.25 20.55 25.35 22.65C27.45 24.75 30 25.8 33 25.8C34.8333 25.8 36.5167 25.3917 38.05 24.575C39.5833 23.7583 40.8333 22.6667 41.8 21.3C41.8667 21.7333 41.9167 22.175 41.95 22.625C41.9833 23.075 42 23.5333 42 24C42 29 40.25 33.25 36.75 36.75C33.25 40.25 29 42 24 42ZM24 38C26.9333 38 29.5667 37.1917 31.9 35.575C34.2333 33.9583 35.9333 31.85 37 29.25C36.3333 29.4167 35.6667 29.55 35 29.65C34.3333 29.75 33.6667 29.8 33 29.8C28.9 29.8 25.4083 28.3583 22.525 25.475C19.6417 22.5917 18.2 19.1 18.2 15C18.2 14.3333 18.25 13.6667 18.35 13C18.45 12.3333 18.5833 11.6667 18.75 11C16.15 12.0667 14.0417 13.7667 12.425 16.1C10.8083 18.4333 10 21.0667 10 24C10 27.8667 11.3667 31.1667 14.1 33.9C16.8333 36.6333 20.1333 38 24 38Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Button>
  );
};

export default ThemeToggle;
