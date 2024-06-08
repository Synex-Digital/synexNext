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
        "waveAnimation": "url('/assets/wave_intersect.svg')",
        "waveAnimationBack": "url('/assets/wave_intersect2.svg')",
      },
      colors: {
        body: "#151515",
        primary: "#c2e812",
        theme: "rgb(43, 5, 56)",
      },
      listStyleType: {
        square: "square",
      },
      boxShadow: {
        devHover: "5px 5px 20px 5px rgba(194, 232, 18, 0.2)",
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
