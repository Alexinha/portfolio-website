import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const theme = {
  fonts: {
    signature: spaceMono.style.fontFamily,
  },
  //   colors: {
  //     primary: "#6B46C1", // example color
  //     secondary: "#38B2AC",
  //     background: "#18191E",
  //     text: "#FFFFFF",
  //   },
  //   spacing: {
  //     small: "8px",
  //     medium: "16px",
  //     large: "24px",
  //   },
};

export default theme;
