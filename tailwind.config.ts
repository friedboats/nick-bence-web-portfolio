import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        moderno: 'var(--font-moderno)',
        quicksand: 'var(--font-quicksand)',
        serif: 'var(--font-serif)',
      },
      fontSize: {
        display: ['7.5rem', { lineHeight: '1', fontWeight: '300' }],
        h1: ['3.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        h2: ['2.25rem', { lineHeight: '1.2', fontWeight: '300' }],
        h3: ['2rem', { lineHeight: '1.2', fontWeight: '300' }],
        h4: ['1.5rem', { lineHeight: '1.2', fontWeight: '400' }],
        h5: ['1.5rem', { lineHeight: '1.2', fontWeight: '500' }],
        h6: ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        p: ['1.125rem', { lineHeight: '1.6', fontWeight: '500' }],
        'p-bold': ['1.125rem', { lineHeight: '1.6', fontWeight: '700' }],
        small: ['1rem', { lineHeight: '1.8', fontWeight: '500' }],
        'small-bold': ['1rem', { lineHeight: '1.8', fontWeight: '700' }],
        'x-small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'x-small-bold': ['0.875rem', { lineHeight: '1.5', fontWeight: '700' }],
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
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      borderWidth: {
        xs: '1px',
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
      colors: {
        // Semantic Tokens
        text: {
          display: {
            primary: {
              light: 'var(--color-text-display-primary-light)',
              dark: 'var(--color-text-display-primary-dark)',
            },
            secondary: {
              light: 'var(--color-text-display-secondary-light)',
              dark: 'var(--color-text-display-secondary-dark)',
            },
            inverse: {
              light: 'var(--color-text-display-inverse-light)',
              dark: 'var(--color-text-display-inverse-dark)',
            },
          },
          header: {
            primary: {
              light: 'var(--color-text-header-primary-light)',
              dark: 'var(--color-text-header-primary-dark)',
            },
            secondary: {
              light: 'var(--color-text-header-secondary-light)',
              dark: 'var(--color-text-header-secondary-dark)',
            },
            tertiary: {
              light: 'var(--color-text-header-tertiary-light)',
              dark: 'var(--color-text-header-tertiary-dark)',
            },
            inverse: {
              light: 'var(--color-text-header-inverse-light)',
              dark: 'var(--color-text-header-inverse-dark)',
            },
          },
          body: {
            primary: {
              light: 'var(--color-text-body-primary-light)',
              dark: 'var(--color-text-body-primary-dark)',
            },
            secondary: {
              light: 'var(--color-text-body-secondary-light)',
              dark: 'var(--color-text-body-secondary-dark)',
            },
            inverse: {
              light: 'var(--color-text-body-inverse-light)',
              dark: 'var(--color-text-body-inverse-dark)',
            },
          },
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
      },
    },
  },
  plugins: [],
};

export default config;
