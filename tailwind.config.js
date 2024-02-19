/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1C2635",
        lightBlue: { main: "#C3EDFF", secondary: "#5BC1ED" },
      },
    },
  },
  plugins: [],
};
