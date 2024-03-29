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
    extend: {
      colors: {
        bg_white: "#fffefb",
        bg_gray: "#f9faf9",
        heading_color: "#13325f",
        subheading_color: "#1d82f9",
        paragraph_color: "#13325f",
        button_color: "#1d82f9"
      },
    },
  },
  plugins: [require("daisyui")],
}

