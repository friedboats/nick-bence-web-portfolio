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
    /* colors: {
        // Semantic Tokens
        text: {
          button: {
            close: {
              light: 'var(--color-text-button-close-light)',
              dark: 'var(--color-text-button-close-dark)',
            },
            primary: {
              default: {
                light: 'var(--color-text-button-primary-default-light)',
                dark: 'var(--color-text-button-primary-default-dark)',
              },
              hover: {
                light: 'var(--color-text-button-primary-hover-light)',
                dark: 'var(--color-text-button-primary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-text-button-primary-pressed-light)',
                dark: 'var(--color-text-button-primary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-text-button-primary-focus-light)',
                dark: 'var(--color-text-button-primary-focus-dark)',
              },
            },
            secondary: {
              default: {
                light: 'var(--color-text-button-secondary-default-light)',
                dark: 'var(--color-text-button-secondary-default-dark)',
              },
              hover: {
                light: 'var(--color-text-button-secondary-hover-light)',
                dark: 'var(--color-text-button-secondary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-text-button-secondary-pressed-light)',
                dark: 'var(--color-text-button-secondary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-text-button-secondary-focus-light)',
                dark: 'var(--color-text-button-secondary-focus-dark)',
              },
            },
            link: {
              default: {
                light: 'var(--color-text-button-link-default-light)',
                dark: 'var(--color-text-button-link-default-dark)',
              },
              hover: {
                light: 'var(--color-text-button-link-hover-light)',
                dark: 'var(--color-text-button-link-hover-dark)',
              },
              pressed: {
                light: 'var(--color-text-button-link-pressed-light)',
                dark: 'var(--color-text-button-link-pressed-dark)',
              },
              focus: {
                light: 'var(--color-text-button-link-focus-light)',
                dark: 'var(--color-text-button-link-focus-dark)',
              },
            },
          },
          placeholder: {
            primary: {
              default: {
                light: 'var(--color-text-placeholder-primary-default-light)',
                dark: 'var(--color-text-placeholder-primary-default-dark)',
              },
              hover: {
                light: 'var(--color-text-placeholder-primary-hover-light)',
                dark: 'var(--color-text-placeholder-primary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-text-placeholder-primary-pressed-light)',
                dark: 'var(--color-text-placeholder-primary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-text-placeholder-primary-focus-light)',
                dark: 'var(--color-text-placeholder-primary-focus-dark)',
              },
            },
          },
        },

        border: {
          primary: {
            light: 'var(--color-border-primary-light)',
            dark: 'var(--color-border-primary-dark)',
          },
          secondary: {
            light: 'var(--color-border-secondary-light)',
            dark: 'var(--color-border-secondary-dark)',
          },
          positive: {
            light: 'var(--color-border-positive-light)',
            dark: 'var(--color-border-positive-dark)',
          },
          warning: {
            light: 'var(--color-border-warning-light)',
            dark: 'var(--color-border-warning-dark)',
          },
          negative: {
            light: 'var(--color-border-negative-light)',
            dark: 'var(--color-border-negative-dark)',
          },
          info: {
            light: 'var(--color-border-info-light)',
            dark: 'var(--color-border-info-dark)',
          },
          button: {
            primary: {
              default: {
                light: 'var(--color-border-button-primary-default-light)',
                dark: 'var(--color-border-button-primary-default-dark)',
              },
              hover: {
                light: 'var(--color-border-button-primary-hover-light)',
                dark: 'var(--color-border-button-primary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-border-button-primary-pressed-light)',
                dark: 'var(--color-border-button-primary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-border-button-primary-focus-light)',
                dark: 'var(--color-border-button-primary-focus-dark)',
              },
            },
            secondary: {
              default: {
                light: 'var(--color-border-button-secondary-default-light)',
                dark: 'var(--color-border-button-secondary-default-dark)',
              },
              hover: {
                light: 'var(--color-border-button-secondary-hover-light)',
                dark: 'var(--color-border-button-secondary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-border-button-secondary-pressed-light)',
                dark: 'var(--color-border-button-secondary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-border-button-secondary-focus-light)',
                dark: 'var(--color-border-button-secondary-focus-dark)',
              },
            },
            link: {
              default: {
                light: 'var(--color-border-button-link-default-light)',
                dark: 'var(--color-border-button-link-default-dark)',
              },
              hover: {
                light: 'var(--color-border-button-link-hover-light)',
                dark: 'var(--color-border-button-link-hover-dark)',
              },
              pressed: {
                light: 'var(--color-border-button-link-pressed-light)',
                dark: 'var(--color-border-button-link-pressed-dark)',
              },
              focus: {
                light: 'var(--color-border-button-link-focus-light)',
                dark: 'var(--color-border-button-link-focus-dark)',
              },
            },
          },
          input: {
            default: {
              light: 'var(--color-border-input-default-light)',
              dark: 'var(--color-border-input-default-dark)',
            },
            hover: {
              light: 'var(--color-border-input-hover-light)',
              dark: 'var(--color-border-input-hover-dark)',
            },
            pressed: {
              light: 'var(--color-border-input-pressed-light)',
              dark: 'var(--color-border-input-pressed-dark)',
            },
            focus: {
              light: 'var(--color-border-input-focus-light)',
              dark: 'var(--color-border-input-focus-dark)',
            },
          },
        },

        icon: {
          primary: {
            light: 'var(--color-icon-primary-light)',
            dark: 'var(--color-icon-primary-dark)',
          },
        },

        surface: {
          primary: {
            light: 'var(--color-surface-primary-light)',
            dark: 'var(--color-surface-primary-dark)',
          },
          secondary: {
            light: 'var(--color-surface-secondary-light)',
            dark: 'var(--color-surface-secondary-dark)',
          },
          tertiary: {
            light: 'var(--color-surface-tertiary-light)',
            dark: 'var(--color-surface-tertiary-dark)',
          },
          info: {
            light: 'var(--color-surface-info-light)',
            dark: 'var(--color-surface-info-dark)',
          },
          supplemental: {
            light: 'var(--color-surface-supplemental-light)',
            dark: 'var(--color-surface-supplemental-dark)',
          },
          button: {
            primary: {
              default: {
                light: 'var(--color-surface-button-primary-default-light)',
                dark: 'var(--color-surface-button-primary-default-dark)',
              },
              hover: {
                light: 'var(--color-surface-button-primary-hover-light)',
                dark: 'var(--color-surface-button-primary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-surface-button-primary-pressed-light)',
                dark: 'var(--color-surface-button-primary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-surface-button-primary-focus-light)',
                dark: 'var(--color-surface-button-primary-focus-dark)',
              },
            },
            secondary: {
              default: {
                light: 'var(--color-surface-button-secondary-default-light)',
                dark: 'var(--color-surface-button-secondary-default-dark)',
              },
              hover: {
                light: 'var(--color-surface-button-secondary-hover-light)',
                dark: 'var(--color-surface-button-secondary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-surface-button-secondary-pressed-light)',
                dark: 'var(--color-surface-button-secondary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-surface-button-secondary-focus-light)',
                dark: 'var(--color-surface-button-secondary-focus-dark)',
              },
            },
            link: {
              default: {
                light: 'var(--color-surface-button-link-default-light)',
                dark: 'var(--color-surface-button-link-default-dark)',
              },
              hover: {
                light: 'var(--color-surface-button-link-hover-light)',
                dark: 'var(--color-surface-button-link-hover-dark)',
              },
              pressed: {
                light: 'var(--color-surface-button-link-pressed-light)',
                dark: 'var(--color-surface-button-link-pressed-dark)',
              },
              focus: {
                light: 'var(--color-surface-button-link-focus-light)',
                dark: 'var(--color-surface-button-link-focus-dark)',
              },
            },
          },
          dot: {
            primary: {
              default: {
                light: 'var(--color-surface-dot-primary-default-light)',
                dark: 'var(--color-surface-dot-primary-default-dark)',
              },
              hover: {
                light: 'var(--color-surface-dot-primary-hover-light)',
                dark: 'var(--color-surface-dot-primary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-surface-dot-primary-pressed-light)',
                dark: 'var(--color-surface-dot-primary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-surface-dot-primary-focus-light)',
                dark: 'var(--color-surface-dot-primary-focus-dark)',
              },
            },
            secondary: {
              default: {
                light: 'var(--color-surface-dot-secondary-default-light)',
                dark: 'var(--color-surface-dot-secondary-default-dark)',
              },
              hover: {
                light: 'var(--color-surface-dot-secondary-hover-light)',
                dark: 'var(--color-surface-dot-secondary-hover-dark)',
              },
              pressed: {
                light: 'var(--color-surface-dot-secondary-pressed-light)',
                dark: 'var(--color-surface-dot-secondary-pressed-dark)',
              },
              focus: {
                light: 'var(--color-surface-dot-secondary-focus-light)',
                dark: 'var(--color-surface-dot-secondary-focus-dark)',
              },
            },
          },
          input: {
            default: {
              light: 'var(--color-surface-input-default-light)',
              dark: 'var(--color-surface-input-default-dark)',
            },
            hover: {
              light: 'var(--color-surface-input-hover-light)',
              dark: 'var(--color-surface-input-hover-dark)',
            },
            pressed: {
              light: 'var(--color-surface-input-pressed-light)',
              dark: 'var(--color-surface-input-pressed-dark)',
            },
            focus: {
              light: 'var(--color-surface-input-focus-light)',
              dark: 'var(--color-surface-input-focus-dark)',
            },
          },
        },

        overlay: {
          50: {
            light: 'var(--color-overlay-50-light)',
            dark: 'var(--color-overlay-50-dark)',
          },
          85: {
            light: 'var(--color-overlay-85-light)',
            dark: 'var(--color-overlay-85-dark)',
          },
          'inverse-50': {
            light: 'var(--color-overlay-inverse-50-light)',
            dark: 'var(--color-overlay-inverse-50-dark)',
          },
          'inverse-85': {
            light: 'var(--color-overlay-inverse-85-light)',
            dark: 'var(--color-overlay-inverse-85-dark)',
          },
        },
      }, */
    extend: {
      colors: {
        'btn-border-secondary-default':
          'var(--border-button-secondary-default)',
        'btn-border-secondary-hover': 'var(--border-button-secondary-hover)',
        'btn-border-secondary-active': 'var(--border-button-secondary-active)',
      },
      borderRadius: {
        '3xl': 'var(--border-radius-3xl)',
      },
      backgroundColor: {
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
