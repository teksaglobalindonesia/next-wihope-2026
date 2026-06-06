/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'var(--background)',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        'neutral-black': 'var(--neutral-black)',
        'neutral-d_grey': 'var(--neutral-d_grey)',
        'neutral-grey': 'var(--neutral-grey)',
        'neutral-l_grey': 'var(--neutral-l_grey)',
        'neutral-grey-blue': 'var(--neutral-grey-blue)',
        'neutral-silver': 'var(--neutral-silver)',
        'neutral-white': 'var(--neutral-white)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'brand-info': 'var(--brand-info)',
        'shade-shade_1': 'var(--shade-shade_1)',
        'shade-shade_2': 'var(--shade-shade_2)',
        'shade-shade_3': 'var(--shade-shade_3)',
        'shade-shade_4': 'var(--shade-shade_4)',
        'shade-shade_5': 'var(--shade-shade_5)',
        'tint-tint_1': 'var(--tint-tint_1)',
        'tint-tint_2': 'var(--tint-tint_2)',
        'tint-tint_3': 'var(--tint-tint_3)',
        'tint-tint_4': 'var(--tint-tint_4)',
        'tint-tint_5': 'var(--tint-tint_5)',
        'action-warning': 'var(--action-warning)',
        'action-error': 'var(--action-error)',
        'action-success': 'var(--action-success)',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontSize: {
        '2xs': ['10px', '16px']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        roboto: 'var(--font-roboto), sans-serif',
        inter: 'var(--font-inter), sans-serif'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/line-clamp')]
};
