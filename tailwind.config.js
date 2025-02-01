
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    safelist: [
      'from-[#F8CCFB]', 'to-[#ACD2FD]'
    ]
  },
  plugins: [],
}
