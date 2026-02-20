/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kid: ['"kidfont"', "system-ui", "sans-serif"],
      },
      colors: {
        crayon: {
          ink: "#14141A",
          rose: "#F06292",
          sky: "#4AA3DF",
          mint: "#34C6A3",
          lavender: "#7C5CFF",
          peach: "#FF8A5B",
          butter: "#FFC84A",
          cocoa: "#6B4634",
        },
      },
    },
  },
  plugins: [],
}
