/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  // plugins: [require("../src/index.js")],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#FF5722",
          foreground: "#FFF",
          hover: "#DD5722",
        },
      },
    },
  },
};
