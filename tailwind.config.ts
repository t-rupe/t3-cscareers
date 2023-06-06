import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme: Function) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
          },
          h1: {
            color: theme('colors.white'),
          },
          h2: {
            color: theme('colors.white'),
          },
          h3: {
            color: theme('colors.white'),
          },
          h4: {
            color: theme('colors.white'),
          },
          h5: {
            color: theme('colors.white'),
          },
          h6: {
            color: theme('colors.white'),
          },
          strong: {
            color: theme('colors.white'),
          },
          li: {
            color: theme('colors.white'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
