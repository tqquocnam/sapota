/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        40: "40px",
      },
      inset: {
        "-14": "-14px",
      },
      fontFamily: {
        display: ["Source Sans Pro"],
        body: ["Source Sans Pro"],
      },
      lineHeight: {
        "3.5rem": "3.5rem",
        "4.5rem": "4.5rem",
        150: "150% !important",
      },
      width: {
        170: "170px",
      },
      height: {
        65: "65px",
        54: "54px",
        72: "72px",
        442: "442px",
      },
      maxHeight: {
        680: "680px",
      },
      minHeight: {
        165: "165px",
        170: "170px",
        230: "230px",
        380: "380px",
      },
      minWidth: {
        170: "170px",
        200: "200px",
        230: "230px",
        270: "270px",
      },
      maxWidth: {
        270: "270px",
        350: "350px",
        390: "390px",
        450: "450px",
        465: "465px",
        570: "570px",
        1200: "1200px",
      },
      flexBasis: {
        24: "24%",

        22: "22%",
        47: "47%",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      grayBottom: "#b7c2cc",
      branding: "#1E429F",
      primary: "#00886F",
      success: "#20CC69",
      info: "#4196F9",
      danger: "#BB040F",
      warning: "#FF9900",
      ink: "#212B36",
      inkLight: "#454F5B",
      inkLighter: "#637381",
      inkLightest: "#919EAB",
      sky: "#DFE3E8",
      skyLight: "#F3F3F4",
      skyLighter: "#F9FAFB",
      skyDark: "#C4CDD5",
    },
  },
  plugins: [require("flowbite/plugin")],
};
