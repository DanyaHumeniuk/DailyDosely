/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neu: '10px 10px 20px #a3b1c6, -10px -10px 20px #ffffff',
      },
    },
  },
  plugins: [],
}

