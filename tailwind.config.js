module.exports = {
  prefix: "tw-",
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"]
    },
    extend: {
      colors: {
        // Primary
        primary: "#FD901C",
        secondary: "#515C6F",
        "secondary-200": "#263041",
        "accent-100": "#ED6657",
        "accent-200": "#FFB669",
        "accent-300": "#FFC607",
        "gray-100": "#F1F1F1",
        "gray-200": "#E9E9E9",
        "gray-300": "#C1C1C1",
        "gray-400": "#8B95A6",
        "off-white": "#F8F8F8",
        "border-1": "0.5px solid rgba(81, 92, 111, 0.12)",

        white: "#ffffff",

        black: "#000000",
        "black-light": "#222222"
      },
      height: {
        "20": "5rem",
        "24": "6rem",
        "28": "7rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "52": "14rem",
        "64": "16rem",
        "70": "18rem",
        "76": "24rem",
        "80": "26rem",
        "84": "28rem",
        "88": "32rem",
        "1/2": "50%",
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        "6/7": "90%",
        full: "100%",
        screen: "100vh"
      },
      width: {
        auto: "auto",
        px: "1px",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "48": "12rem",
        "64": "16rem",
        "72": "18rem",
        "76": "19rem",
        "80": "20rem",
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "94": "24rem",
        "100": "25rem",
        "1/2": "50%",
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "1/7": "10%",
        "5/6": "83.33333%",
        full: "100%",
        screen: "100vw"
      },
      margin: {
        // "96": "24rem",
        // "128": "32rem"
      },
      customForms: theme => ({
        default: {
          radio: {
            icon:
              '<svg fill="#fff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>'
          }
        }
      }),

      zIndex: {
        auto: "auto",
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "60": "60"
      }
    }
  },
  variants: {
    tableLayout: ["responsive", "hover", "focus"]
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
