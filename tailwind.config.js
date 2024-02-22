/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1110px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: "#4A4A4A",
      secondary: "#8A8A8A",
      grey: {
        light: "#AFAFAF",
        DEFAULT: "#DDDDDD",
        dark: "#2D2D2D",
        package: {
          dark: "#343434",
          light: "#EEEEEE",
        },
      },
      body: "#FAFAFA",
    },
    fontSize: {
      icon: ["22px", 1],
      "icon-small": ["8px", 1],
      small: ["0.8125rem", 1.38461],
      row: ["0.6875rem", 1.27272],
      normal: "0.9375rem",
      "font-body": "1rem",
      h1: "1.9375rem",
      h2: "1.6875rem",
      h3: "1.1875rem",
      h4: "1.0625rem",
      h6: "0.8125rem",
      CTA: "0.6875rem",
      "CTA-small": "0.625rem",
    },
    lineHeight: {
      button: 1,
      tabs: "1.3333",
      normal: "1.4",
      h1: "1.19354",
      h2: '1.1851851852',
      h3: "1.1578947368",
      h4: "1.176470",
      h6: "1.1538461",
    },
    letterSpacing: {
      DEFAULT: "normal",
      h1: "-0.6px",
      h2: "-0.5px",
      h3: "-0.2px",
      h4: "-0.1px",
      "CTA-small": "1.5px",
      CTA: "1px",
      row: "1px",
    },
    borderRadius: {
      small: "4px",
      DEFAULT: "7px",
      flag: "12px",
    },
    boxShadow: {
      DEFAULT: "0 10px 30px 0 rgba(0,0,0,0.15)",
      flag: "0 5px 15px 0 rgba(0,0,0,0.3)",
    },
    extend: {
      height: {
        icon: "22px",
      },
      width: {
        icon: "22px",
      },
      gap: {
        7.5: "30px",
      },
    },
  },
  plugins: [],
};
