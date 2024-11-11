/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        "custom-1": "calc(100% + 100px)",
      },
      colors: {
        "primary": "#1C7540",
        "primary-1": "#245601",
        "primary-2": "#FEF8E7",
        "primary-3": "#FCE9B3",
        "primary-4": "#1E1E1E",
        "primary-5": "#686868",
        "primary-6": "#6E3400",
      },
      fontFamily: {
        "lora-regular": ["Lora-Regular", "sans-serif"],
        "lora-medium": ["Lora-Medium", "sans-serif"],
        "lora-semibold": ["Lora-Semibold", "sans-serif"],
        "lora-bold": ["Lora-Bold", "sans-serif"],
        "hanoipho": ["DVN-HaNoiPho", "sans-serif"],
        "mulish": ["Mulish-Regular", "sans-serif"],
        "roboto": ["Roboto-Regular", "sans-serif"],
      },
      backgroundImage: {
        "linear-1":
          "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6))",
        "linear-2": "linear-gradient(180deg, #E4BEB0 0%, #FFFFFF 100%)",
        "linear-3":
          "linear-gradient(0deg, #BD9313 0%, #FCE9B3 54%, #F3BC17 100%)",
        "linear-4":
          "linear-gradient(0deg, #FEF8E7 0%, #4F894C 50%, #FEF8E7 99.99%)",
        "linear-5": "linear-gradient(90deg, #1C7540 0%, #F3BC17 100%)",
        "cloud-1": "url('/src/assets/images/backgrounds/cloud-11.webp')",
        "cloud-2": "url('/src/assets/images/backgrounds/cloud-21.webp')",
        "cloud-3": "url('/src/assets/images/backgrounds/cloud-31.webp')",
        "black-hole": "url('/src/assets/images/backgrounds/black-hole.webp')",
        "radial-glow":
          "radial-gradient(circle, rgba(249, 218, 127, 1) 0%, rgba(249, 218, 127, 0) 70%)",
        "wire": "url('/src/assets/images/icons/wire.svg')",
        "pagoda": "url('/src/assets/images/backgrounds/pagoda.webp')",
        "pagoda-2": "url('/src/assets/images/backgrounds/pagoda-2.webp')",
      },
      boxShadow: {
        "inset-1": "0px 0px 20px 6px #581C0540 inset",
      },
    },
  },
  plugins: [Myclass],
};
