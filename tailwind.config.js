/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
    },
    screens: {
      sxl: "1180px", // @media (min-width: 1180px)
      xs: "480px", // @media (min-width: 480px)
      sm: "640px", // @media (min-width: 640px)
      md: "768px", // @media (min-width: 768px)
      lg: "1024px", // @media (min-width: 1024px)
      xl: "1280px", // @media (min-width: 1280px)
    },
    fontFamily: {
      mr: ["var(--font-mr)"],
      in: ["var(--font-in)"],
    },
    animation: {
      roll: "roll 24s linear infinite",
    },
    keyframes: {
      roll: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

/*

Explaining technique
Making folders for each separate section

*/
