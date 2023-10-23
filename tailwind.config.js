/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Open Sans"', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#e2e8f0',
        'light': "#fff",
      },
    },
  },
  plugins: [],
}

