/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Fixed glob pattern
  theme: {
    extend: {
      colors: {
        primary: "#1B5FC1",
        secondary: "#28BD86",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
