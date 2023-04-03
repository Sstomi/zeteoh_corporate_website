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
        test: ["Noto Sans JP"],
      },
      colors: {
        "primary-color": "#f64a49",
        "Secondary-color": "#221638",
        "BG-color": "#212529",
      },
      backgroundImage: {
        "hero-background": "url('/images/Home/diagonal-lines.svg')",
        "team-background": "url('/images/Home/bg.svg')",
        "Footer-image": "url('/images/Footer/footer-map.png')",
        "particle-background": "url('/images/Background_particle.svg')",
        "earth-background": "url('/images/earth_image.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
