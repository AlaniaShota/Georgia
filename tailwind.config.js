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
      },
      textColor: {
        darkBlueText: "#1976D2",
        secondColor: "#00000099",
      },
      opacity: {
        5: 0.2,
      },
      // scrollMargin: {
      //   '96': '24rem',
      // },
    },
  },
  plugins: [],
};
