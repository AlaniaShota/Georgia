export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      padding: "10rem",
    },
    extend: {
      borderColor: {
        buttonBorder: "rgba(25, 118, 210, 0.5)",
      },
      backgroundColor: {
        buttonHover: "rgb(59 130 246 / 0.1)",
        whiteBackground:'#fff'
      },
      textColor: {
        buttonColor: "#1976D2",
        textSecondColor: "#00000099",
      },
    },
  },
  plugins: [],
};
