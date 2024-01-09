/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-1-bg": "#3A4663",
        "theme-2-bg": "#E6E6E6",
        "theme-3-bg": "#17062A",
        "very-dark-blue-gray": "#181F33",
        "dark-blue-gray": "#242D44",
        "medium-blue-gray": "#647198",
        "light-grey": "#D2CDCD",
        "light-greyish": "#E5E4E1",
        "dark-purple": "#1E0936",
        "deep-purple": "#56077C",
        "midnight-purple": "#331C4D",
        teal: "#378187",
        red: "#d03f2f",
        orange: "#C85402",
        yellow: "#FFE53D",
        cyan: "#00DED0",
      },
      boxShadow: {
        "theme-1-grey-sh": "0px -4px 0px 0px #414E73 inset",
        "theme-1-white-sh": "0px -4px 0px 0px #B3A497 inset",
        "theme-1-red-sh": "0px -4px 0px 0px #93261A inset",
        "theme-2-teal-sh": "0px -4px 0px 0px #1B6066 inset",
        "theme-2-orange-sh": "0px -4px 0px 0px #873901 inset",
        "theme-2-grey-sh": "0px -4px 0px 0px #A79E91 inset",
        "theme-3-purple-sh": "0px -4px 0px 0px #BE15F4 inset",
        "theme-3-cyan-sh": "0px -4px 0px 0px #6CF9F1 inset",
        "theme-3-mid-purple-sh": " 0px -4px 0px 0px #881C9E inset",
        "theme-3-error-purple-sh": " 0px -4px 0px 0px #c0c0c0 inset",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        mobile: { max: "31.25em" },
      },
    },
  },
  plugins: [],
};
