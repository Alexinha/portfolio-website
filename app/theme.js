import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const themeMain = {
  fonts: {
    signature: spaceMono.style.fontFamily,
  },
  colors: {
    // primary: "#6B46C1", // example color
    // secondary: "#38B2AC",
    background: "#121212",
    borderPrimary: "#33353F",
    // text: "#FFFFFF",
  },
};

export const textBoxStyle = {
  borderWidth: "1px",
  borderColor: themeMain.colors.borderPrimary,
  backgroundColor: "#18191E",
  //placeHolderColor: "#9CA2A9",
  color: "#f3f4f6",
};
