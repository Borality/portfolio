/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg_color: "#fffefb",
      heading_color: "#13325f",
      subheading_color: "#1d82f9",
      paragraph_color: "#13325f",
      button_color: "#1d82f9"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

