/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,mdx}","./components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: { anoma: { red:"#ef4444", red2:"#f43f5e" } }
    }
  },
  plugins: []
};
