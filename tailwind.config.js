export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      padding: "10rem",
    },

    extend: {
      borderColor: {
        middleBlueBorderColor: "rgba(25, 118, 210, 0.5)",
      },
      backgroundColor: {
        middleBlueHoverColor: "rgb(59 130 246 / 0.1)",
        darkBlueBackground: "#1976D2",
        whiteSecondBackground: "#ffffffcc",
      },
      textColor: {
        darkBlueText: "#1976D2",
        BlackSecondColor: "#00000099",
        whiteSecondText: "#ffffffcc",
      },

      opacity: {
        5: 0.2,
      },
      height: {
        470: "470px",
        630: "630px",
        737: "737px",
      },
      width: {
        497: "497px",
      },
      // scrollMargin: {
      //   '96': '24rem',
      // },
    },
  },
  plugins: [],
};
