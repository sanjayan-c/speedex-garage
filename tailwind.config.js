/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // default body font
        heading: ["Days One", "sans-serif"], // header font
      },
      colors: {
        primary: "#B3261E",
        // 20% opacity of primary
        secondary: "rgb(179 38 30 / 0.20)",
        // keep Tailwind’s gray/black; alias if you want:
        ink: "#111111",
      },
      maxWidth: {
        container: "1200px",
      },
      letterSpacing: {
        tighter: "-0.02em",
        normal: "0",
        wide: "0.02em",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
      },
    },
  },
  plugins: [],
};
