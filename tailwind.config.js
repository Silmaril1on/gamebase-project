/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fcf5df",
        valveRed: "#f74843",
      },
      backgroundColor: {
        skew: "rgba(151, 181, 225, 0.215)",
        skewHover: "rgba(151, 181, 225, 0.325)",
        600: "rgba(0, 0, 0, 0.600)",
        400: "rgba(0, 0, 0, 0.400)",
        200: "rgba(0, 0, 0, 0.200)",
        100: "rgba(0, 0, 0, 0.100)",
      },
      backgroundImage: {
        cardGradient:
          "linear-gradient(90deg,rgba(255,253,199,0),rgb(96 165 250) 25%,rgb(96 165 250) 75%,rgba(255,253,199,0))",
        cardGradienth:
          "linear-gradient(180deg,rgba(255,253,199,0),rgb(96 165 250) 25%,rgb(96 165 250) 75%,rgba(255,253,199,0))",
        topBlack:
          "linear-gradient(to bottom,rgba(0, 0, 0, 0.829) 2%,rgba(0, 0, 0, 0.005));",
        parallaxBack:
          "linear-gradient(to bottom,rgba(0, 0, 0, 0.229) 10%,  rgba(0, 0, 0, 0.225)), url('./assets/mid-bg.jpg')",
        radialBlue:
          "radial-gradient(circle, rgb(50, 98, 180) 0%,rgb(17, 53, 139) 100%)",
        neonBlue:
          "radial-gradient(ellipse at center,rgba(45, 163, 237, 0.71) 0%,rgba(68, 178, 243, 0) 50%,rgba(91, 192, 249, 0) 98%);",
        psBack: "url('./assets/background_dark.jpg')",
        news2: "url('./assets/news_2.jpg')",
        arabic: "url('./assets/background.png')",
        scratch: "url('./assets/scratch.png')",
      },
      dropShadow: {
        black: "5px 15px 10px #151515",
        gray: "0 2px 10px #606060",
        blue: "2px 3px 10px rgb(96 165 250)",
      },
      fontFamily: {
        primary: "Yanone Kaffeesatz",
        secondary: "Josefin Sans",
        tetriary: "Cinzel",
      },
      height: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        1000: "1000px",
      },
      width: {
        1000: "2700px",
      },
      textShadow: {
        sm: "1px 1px 5px white",
        smB: "1px 1px 5px black",
        neon: "0 0 20px #2684c3, 0 0 14px #2684c3, 0 0 8px #2684c3,0 0 4px #2684c3",
      },
      skew: {
        45: "45deg",
        110: "110deg",
      },
      zIndex: {
        2: "2",
        4: "4",
        5: "5",
        6: "6",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
