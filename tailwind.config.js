/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "raleway-Bold": ["Raleway-Bold", "sans-serif"],
        "raleway-ExtraBold": ["Raleway-ExtraBold", "sans-serif"],
        "raleway-Light": ["Raleway-Light", "sans-serif"],
        "raleway-Medium": ["Raleway-Medium", "sans-serif"],
        "raleway-Regular": ["Raleway-Regular", "sans-serif"],
        "raleway-SemiBold": ["Raleway-SemiBold", "sans-serif"],
      },

      colors: {
        white: "#ffffff",
        "sky-blue": "#00afec",
        "dark-gray": "#303030",
        "gunmetal-gray": "#262626",
        "graphite-gray": "#3d3d3d",
        "charcol-gray": "#9d9d9d",
        'blue-100': "#1a77b9",
        "gray-100": "#818181",
        'gray-200': "#eceef0",
        'gray-300': "#bfbfbf",
        'gray-400': "#eaeaea",
        'gray-500': "#999999",
        "black-400": "#252525",
        "black-700": "#777777",
      },
      maxWidth: {
        'xxl': "1300px",
      },
      screens: {
        'base': "992px",
        'xs': "400px",
      },
    },
  },
  plugins: [],
};
