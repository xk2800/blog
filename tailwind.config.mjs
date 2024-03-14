/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: '1rem', // 18px mobile
      sm: '1.125rem', // 18px desktop // 20px mobile
      base: '1.25rem', // 20px desktop // 22px mobile
      lg: '1.375rem', // 22px desktop // 36px mobile
      xl: '2.25rem', // 36px desktop // 48px mobile
      '2xl': '3rem', // 48px desktop
    },
    extend: {
      colors: {
        backgroundColor: '#F3F4F6',
        baseTextColor: '#181818',
        baseTextCTAColor: '#0F0F0F',
        subTextColor: '#4E4E4E',
        subTextColorHover: '#6B7280',
        primaryCTAColor: '#9B111A',
        primaryCTAColorHover: '#740C13',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      },
      padding: {
        'xxxxs': '8px',
        'xxxs': '12px',
        'xxs': '16px',
        'xs': '24px',
        's': '36px',
        'm': '48px',
        'l': '56px',
        'xl': '72px',
        'xxl': '96px',
        'xxxl': '120px',
      },
      margin: {
        'xxxxs': '8px',
        'xxxs': '12px',
        'xxs': '16px',
        'xs': '24px',
        's': '36px',
        'm': '48px',
        'l': '56px',
        'xl': '72px',
        'xxl': '96px',
        'xxxl': '120px',
      }

    },
  },
  plugins: [require("tailwindcss-animate")],
};