/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "rsm": "375px",
        "sm": "512px"
      },
    },
  },
  plugins: [],
}

