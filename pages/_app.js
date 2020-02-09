import Global from "../styles/global.css";
import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  colors: {
    background: "#0F0F0F",
    primaryText: "#FFF",
    secondaryText: "#CCC",
    primaryColor: "#FFC1A9",
    dribbbleColor: "#FAC",
    twitterColor: "#6CF"
  }
};

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
