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
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "5.5xl": "3.5rem",
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
        devHover: "5px 5px 20px 5px rgba(194, 232, 18, 0.2)",
        custom: 'rgba(194, 232, 18, .2) 0 -25px 18px -14px inset, rgba(194, 232, 18, .15) 0 1px 2px, rgba(194, 232, 18, .15) 0 2px 4px, rgba(194, 232, 18, .15) 0 4px 8px, rgba(194, 232, 18, .15) 0 8px 16px, rgba(194, 232, 18, .15) 0 16px 32px',
        'custom-hover': 'rgba(194, 232, 18,.35) 0 -25px 18px -14px inset, rgba(194, 232, 18,.25) 0 1px 2px, rgba(194, 232, 18,.25) 0 2px 4px, rgba(194, 232, 18,.25) 0 4px 8px, rgba(194, 232, 18,.25) 0 8px 16px, rgba(194, 232, 18,.25) 0 16px 32px',
        glow: " 0 0 40px 30px #c2e812, 0 0 100px 40px #c2e812, 0 0 120px 90px #c2e812",
      },
      
      scale: {
        170: "1.70",
        205: "2.05",
      },
    },
  },
  plugins: [],
};
