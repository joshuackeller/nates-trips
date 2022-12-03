/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nt-green": "#4e834c",
        "nt-pink": "#db9fc8",
        "nt-latte": "#fbf5e2",
        "nt-gold": "#b59635",
      },
    },
  },
  plugins: [],
};
