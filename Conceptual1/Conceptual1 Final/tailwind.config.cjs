/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2f45a",
        
"secondary": "#f2ff00",
        
"accent": "#868fd8",
        
"neutral": "#291B2C",
        
"base-100": "#F9F8FB",
        
"info": "#3E74D0",
        
"success": "#24948A",
        
"warning": "#F9B924",
        
"error": "#EF6777",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
