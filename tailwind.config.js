export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      padding: "10rem",
    },

    extend: {
      // screens: {
      //   // Добавляем новый breakpoint для устройств с максимальной шириной 640px
      //   "max-sm": { max: "639px" }, // измените эту ширину по вашему усмотрению

      //   // Добавляем новый breakpoint для устройств с максимальной шириной 768px
      //   "max-md": { max: "767px" }, // измените эту ширину по вашему усмотрению

      //   // Добавляем новый breakpoint для устройств с максимальной шириной 1024px
      //   "max-lg": { max: "1023px" }, // измените эту ширину по вашему усмотрению

      //   // Добавляем новый breakpoint для устройств с максимальной шириной 1280px
      //   "max-xl": { max: "1279px" }, // измените эту ширину по вашему усмотрению
      // },
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
        220: "220px",
        470: "470px",
        630: "630px",
        737: "737px",
      },
      width: {
        280: "280px",
        370: "370px",
        497: "497px",
        740: "740px",
      },
      // scrollMargin: {
      //   '96': '24rem',
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
