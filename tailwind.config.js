/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        autumn: {
          ...require("daisyui/src/theming/themes")["[data-theme=autumn]"],
          primary: "#fff002",

          accent: "#3f66da",
          secondary: "#738f8c",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
