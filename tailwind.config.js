/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'timer-grad': 'linear-gradient(to bottom, #302D55, #2D3248)',
        'upvote-grad': 'linear-gradient(to bottom, #1E293B, #0F172A)',
      },
      colors:{
        blueBG: "#0F172A",
        darkOrange: "#EA580C",
        lightOrange:"#F97316",
        greyBG: "#1E293B",
        glassBG:"#151E31",
        custom:"#05080f",
      }
    },
  },
  plugins: [],
};
