/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    // add additional paths if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["rubik-regular", "sans-serif"],
        rubikMedium: ["rubik-medium", "sans-serif"],
        rubikBold: ["rubik-bold", "sans-serif"],
        rubikLight: ["rubik-light", "sans-serif"],
        rubikSemiBold: ["rubik-semibold", "sans-serif"],
        rubikExtraBold: ["rubik-extrabold", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#111111",
        tertiary: "#222222",
        quaternary: "#333333",
        quinary: "#444444",
      },
    },
  },
  plugins: [],
}