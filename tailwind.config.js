const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      fontFamily: {
        // noto:['Noto Sans JP', 'sans-serif'],
        test:['Noto Sans JP'],
      },
      colors: {
        'primary-color': '#f64a49',
        'Secondary-color': '#221638',
        'BG-color': '#212529',
      },
      backgroundImage:{
        "pagetitile-image": "url('/images/Pagetitle/particle-page-title-bg.png')",
        "mission-image": "url('/images/Company/circle-shape.png')",
        "Top-image": "url('/images/Home/zeteoh_slide_app.png')",
        "BG-image": "url('/images/Home/diagonal-lines.svg')",
        "Footer-image": "url('/images/Footer/footer-map.png')",
        
      }
    },
  },
  plugins: [],
};
