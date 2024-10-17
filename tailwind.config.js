/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#E3E8EF",
          200: "#BCC9DB",
          300: "#8AA7C1",
          400: "#5D89AA",
          500: "#2E6B93", 
          600: "#26587A",
          700: "#1E4662",
          800: "#16334B",
          900: "#0F2233",
        },
        secondary: {
          100: "#FFF7EB",
          200: "#FDEACC",
          300: "#FCD9A3",
          400: "#FBC87A",
          500: "#F8B54D", 
          600: "#D59A43",
          700: "#A87936",
          800: "#7B592A",
          900: "#4E391D",
        },
        metallic: {
          100: "#ECECEC",
          200: "#D9D9D9",
          300: "#B3B3B3",
          400: "#8C8C8C",
          500: "#666666", 
          600: "#4D4D4D",
          700: "#333333",
          800: "#1A1A1A",
          900: "#000000",
        },
        accent: {
          100: "#F6F5F4",
          200: "#ECE9E8",
          300: "#DCD2CF",
          400: "#BFB3AD",
          500: "#A2968F", 
          600: "#82776F",
          700: "#625A50",
          800: "#423D34",
          900: "#211F1A",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#EBEBEB",
          300: "#D6D6D6",
          400: "#BEBEBE",
          500: "#A6A6A6",
          600: "#8E8E8E",
          700: "#757575",
          800: "#5C5C5C",
          900: "#434343",
        },
        general: {
          100: "#CED1DD",
          200: "#858585",
          300: "#EEEEEE",
          400: "#0CC25F",
          500: "#F6F8FA",
          600: "#E6F3FF",
          700: "#EBEBEB",
          800: "#ADADAD",
        },
      },
    },
  },
  plugins: [],
};
