/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pops: ["Poppins", "sans"],
      },
      colors: {
        lightGreen: "#87DE0C",
        mediumGreen: "#006401",
        darkGreen: "#006401",
      },
      screens: {
        xs: { max: "350px" },
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
            filter: "blur(33px)",
          },
          "100%": { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
          "fade-out": {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
          "fade-in": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-in-out forwards",
        'fade-out': 'fade-out 1s ease-in-out forwards',
        'fade-in': 'fade-in 1s ease-in-out forwards'
      },
      // Adding custom animation delays
      animationDelay: {
        300: "300ms",
        600: "600ms",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-300": {
          "animation-delay": "300ms",
        },
        ".animation-delay-600": {
          "animation-delay": "600ms",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
