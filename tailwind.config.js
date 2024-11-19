
/** @type {import('tailwindcss').Config} */
import daisyUi from 'daisyui';
import tailwindTypo from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'lg': '1280px',
    }
  },
  plugins: [
    tailwindTypo,
    daisyUi,
  ],
  daisyui: {
    themes: ["sunset", "cupcake", "night", "dim", "valentine"],
  },
}

