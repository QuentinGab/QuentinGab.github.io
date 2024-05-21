/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      margin: {
        container: "calc((100% - 768px) / 2)",
      },
    },
  },
  plugins: [],
};
