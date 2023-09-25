/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2395FF",
        secondary: "#414141",
        third: "#F5F5F5",
        fourth: "#6B6B6B",
        fifth: "#A3A3A3",
        sixth: "#F5F6FA",
        seventh: "#595959",
        eighth: "#979797;",
        customRed: "#F24545",
        customGray: "#9B96AB",
        customOrange: "#FF7F23",
        customGreen: "#4FCF4D",
      },
      backgroundImage: {
        city: "/public/images/carouselCity.jpg",
        alley: "/public/images/japanAlley.jpg",
      },
    },
  },
  plugins: [],
};
