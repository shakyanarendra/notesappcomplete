/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        heightWithoutNavbar: 'calc(100vh - 80px)', 
      },
      backgroundImage: {
        mainBgImage: "url('/image/bg-2notes.jpg')",
      },
    },
  },
  plugins: [],
}
