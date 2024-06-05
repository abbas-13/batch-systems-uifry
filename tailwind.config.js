/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          "text-shadow": "0px 3px 2px rgba(0, 0, 0, 0.15)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
