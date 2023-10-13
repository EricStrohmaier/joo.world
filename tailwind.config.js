/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#1E1E1E",
        primaryDark: "#575758",
        secondaryDark: "#4E4E4E",
        backgroundLight: "#FBFBFB",
        primaryLight: "#F3F4F6",
        secondaryLight: "#EAEAEA",
        textDark: "#E5E5E5",
        textLight: "#333333",
      },
    },
  },
  plugins: [],
};
