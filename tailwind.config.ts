import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    textColor: {
      // Header text
      'header-primary': 'var(--text-header-primary)',
      'header-secondary': 'var(--text-header-secondary)',
      'header-tertiary': 'var(--text-header-tertiary)',
      'header-inverse': 'var(--text-header-inverse)',

      // Body text
      'body-primary': 'var(--text-body-primary)',
      'body-secondary': 'var(--text-body-secondary)',
      'body-inverse': 'var(--text-body-inverse)',

      // Button text
      'button-primary-default': 'var(--text-button-primary-default)',
      'button-primary-hover': 'var(--text-button-primary-hover)',
      'button-primary-active': 'var(--text-button-primary-active)',

      'button-secondary-default': 'var(--text-button-secondary-default)',
      'button-secondary-hover': 'var(--text-button-secondary-hover)',
      'button-secondary-active': 'var(--text-button-secondary-active)',

      'button-link-default': 'var(--text-button-link-default)',
      'button-link-hover': 'var(--text-button-link-hover)',
      'button-link-active': 'var(--text-button-link-active)',
    },
    fontFamily: {
      heading: 'var(--font-heading)',
      primary: 'var(--font-primary)',
      serif: 'var(--font-serif)',
    },
    fontSize: {
      'display-size': [
        'var(--font-size-display-desktop)',
        {
          lineHeight: 'var(--line-height-display-desktop)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      'display-size-mobile': [
        'var(--font-size-display-mobile)',
        {
          lineHeight: 'var(--line-height-display-mobile)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      h1: [
        'var(--font-size-heading-xxl-desktop)',
        {
          lineHeight: 'var(--line-height-heading-xxl-desktop)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      'h1-mobile': [
        'var(--font-size-heading-xxl-mobile)',
        {
          lineHeight: 'var(--line-height-heading-xxl-mobile)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      h2: [
        'var(--font-size-heading-xl-desktop)',
        {
          lineHeight: 'var(--line-height-heading-xl-desktop)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      'h2-mobile': [
        'var(--font-size-heading-xl-mobile)',
        {
          lineHeight: 'var(--line-height-heading-xl-mobile)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      h3: [
        'var(--font-size-heading-lg-desktop)',
        {
          lineHeight: 'var(--line-height-heading-lg-desktop)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      'h3-mobile': [
        'var(--font-size-heading-lg-mobile)',
        {
          lineHeight: 'var(--line-height-heading-lg-mobile)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      h4: [
        'var(--font-size-heading-md-desktop)',
        {
          lineHeight: 'var(--line-height-heading-md-desktop)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'h4-mobile': [
        'var(--font-size-heading-md-mobile)',
        {
          lineHeight: 'var(--line-height-heading-md-mobile)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      h5: [
        'var(--font-size-heading-sm-desktop)',
        {
          lineHeight: 'var(--line-height-heading-sm-desktop)',
          fontWeight: 'var(--font-weight-regular)',
        },
      ],
      'h5-mobile': [
        'var(--font-size-heading-sm-mobile)',
        {
          lineHeight: 'var(--line-height-heading-sm-mobile)',
          fontWeight: 'var(--font-weight-regular)',
        },
      ],
      h6: [
        'var(--font-size-heading-xs-desktop)',
        {
          lineHeight: 'var(--line-height-heading-xs-desktop)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'h6-mobile': [
        'var(--font-size-heading-xs-mobile)',
        {
          lineHeight: 'var(--line-height-heading-xs-mobile)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      p: [
        'var(--font-size-text-md-desktop)',
        {
          lineHeight: 'var(--line-height-text-md-desktop)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'p-mobile': [
        'var(--font-size-text-md-mobile)',
        {
          lineHeight: 'var(--line-height-text-md-mobile)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'p-bold': [
        'var(--font-size-text-md-desktop)',
        {
          lineHeight: 'var(--line-height-text-md-desktop)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      'p-bold-mobile': [
        'var(--font-size-text-md-mobile)',
        {
          lineHeight: 'var(--line-height-text-md-mobile)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      small: [
        'var(--font-size-text-sm-desktop)',
        {
          lineHeight: 'var(--line-height-text-sm-desktop)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'small-mobile': [
        'var(--font-size-text-sm-mobile)',
        {
          lineHeight: 'var(--line-height-text-sm-mobile)',
          fontWeight: 'var(--font-weight-medium)',
        },
      ],
      'small-bold': [
        'var(--font-size-text-sm-desktop)',
        {
          lineHeight: 'var(--line-height-text-sm-desktop)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      'small-bold-mobile': [
        'var(--font-size-text-sm-mobile)',
        {
          lineHeight: 'var(--line-height-text-sm-mobile)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      'x-small': [
        'var(--font-size-text-xs-desktop)',
        {
          lineHeight: 'var(--line-height-text-xs-desktop)',
          fontWeight: 'var(--font-weight-regular)',
        },
      ],
      'x-small-mobile': [
        'var(--font-size-text-xs-mobile)',
        {
          lineHeight: 'var(--line-height-text-xs-mobile)',
          fontWeight: 'var(--font-weight-regular)',
        },
      ],
      'x-small-bold': [
        'var(--font-size-text-xs-desktop)',
        {
          lineHeight: 'var(--line-height-text-xs-desktop)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      'x-small-bold-mobile': [
        'var(--font-size-text-xs-mobile)',
        {
          lineHeight: 'var(--line-height-text-xs-mobile)',
          fontWeight: 'var(--font-weight-bold)',
        },
      ],
      'block-quote': [
        'var(--font-size-block-quote-desktop)',
        {
          lineHeight: 'var(--line-height-block-quote-desktop)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
      'block-quote-mobile': [
        'var(--font-size-block-quote-mobile)',
        {
          lineHeight: 'var(--line-height-block-quote-mobile)',
          fontWeight: 'var(--font-weight-light)',
        },
      ],
    },
    spacing: {
      0: 'var(--spacing-0)',
      1: 'var(--spacing-1)',
      2: 'var(--spacing-2)',
      3: 'var(--spacing-3)',
      4: 'var(--spacing-4)',
      5: 'var(--spacing-5)',
      6: 'var(--spacing-6)',
      7: 'var(--spacing-7)',
      8: 'var(--spacing-8)',
      9: 'var(--spacing-9)',
      10: 'var(--spacing-10)',
      11: 'var(--spacing-11)',
      12: 'var(--spacing-12)',
      13: 'var(--spacing-13)',
      14: 'var(--spacing-14)',
      15: 'var(--spacing-15)',
      16: 'var(--spacing-16)',
      17: 'var(--spacing-17)',
    },
    extend: {
      colors: {
        'btn-border-secondary-default':
          'var(--border-button-secondary-default)',
        'btn-border-secondary-hover': 'var(--border-button-secondary-hover)',
        'btn-border-secondary-active': 'var(--border-button-secondary-active)',
        'border-primary': 'var(--border-primary)',
      },
      borderRadius: {
        '3xl': 'var(--border-radius-3xl)',
      },
      backgroundColor: {
        'surface-background-primary': 'var(--surface-primary)',
        'surface-button-primary-default':
          'var(--surface-button-primary-default)',
        'surface-button-primary-hover': 'var(--surface-button-primary-hover)',
        'surface-button-primary-active': 'var(--surface-button-primary-active)',
        'surface-button-secondary-default':
          'var(--surface-button-secondary-default)',
        'surface-button-secondary-hover':
          'var(--surface-button-secondary-hover)',
        'surface-button-secondary-active':
          'var(--surface-button-secondary-active)',
      },
    },
  },

  plugins: [],
};

export default config;
