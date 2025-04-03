import { Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import '../src/styles/globals.css';

const ThemeDecorator = (Story: any, context: any) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    body.classList.add('bg-surface-background-primary', 'font-primary');

    if (context.globals.theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [context.globals.theme]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        items: [
          { value: 'light', icon: 'sun', title: 'light' },
          { value: 'dark', icon: 'moon', title: 'dark' },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    viewport: { disable: true },
  },
  decorators: [ThemeDecorator],
};

export default preview;
