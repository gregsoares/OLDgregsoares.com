module.exports = {
  purge: ["../public/*.html", "../public/*.js", "./public/*.css"],
  theme: {
    zIndex: {
      "-10": "-10",
    },
    screens: {
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        "64": "16rem",
        "72": "18rem",
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
