/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "2xl": "4.5rem",
        },
        screens: {
          xs: "100%",
          sm: "100%",
          // md: "720px",
          // lg: "960px",
          xl: "1140px",
          // "2xl": "1320px",
        },
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#c2e812",
        theme: "rgb(43, 5, 56)",
      },
      listStyleType: {
        square: "square",
      },
      boxShadow: {
        "404btn": "0 0 15px 0px rgba(194, 232, 18, 0.05)",
        "devHover": "5px 5px 20px 5px rgba(194, 232, 18, 0.2)",
      },
      scale: {
        '190': '1.90',
        '205': '2.05',
      }
    },
  },
  plugins: [],
};
