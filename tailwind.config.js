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
          ink: "#1F1F24",
          rose: "#E98BAA",
          sky: "#6FB7D6",
          mint: "#6FBF9A",
          lavender: "#9B8AE6",
          peach: "#F2A07B",
          butter: "#E7C75B",
          cocoa: "#7A5A4A",
        },
      },
    },
  },
  plugins: [],
}
