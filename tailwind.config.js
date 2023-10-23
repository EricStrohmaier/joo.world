/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#1E1E1E",
        primaryDark: "#575758",
        secondaryDark: "#4E4E4E",

        backgroundLight: "#F8F8F8",
        primaryLight: "#ECECEC",
        secondaryLight: "#E4E4E4",

        textDark: "#E5E5E5",
        textLight: "#333333",
      },
    },
  },
  plugins: [],
};
