'use client';

import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Moon, Sun } from '../SVGComponents';

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
    <Button
      onClick={toggleTheme}
      variant="link"
      aria-label="Toggle light and dark themes"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggle;
