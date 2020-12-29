import React from "react";
import { createGlobalStyle } from "styled-components";
import App from "next/app";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
body {
  font-family: TT Interphases, -system-ui, system-ui, sans-serif;
  font-weight: 600;
  font-style: normal;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  font-feature-settings: "kern" 1;
  text-rendering: optimizelegibility;
  font-variant-ligatures: common-ligatures;
  margin: 0;
  padding: 0;
  background-color: var(--primaryFill);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  letter-spacing: -0.023rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--caption);
}

/* Typefaces */
@font-face {
  font-family: TT Interphases;
  font-weight: 600;
  font-style: normal;
  src: url("/fonts/TypeType - TT Interphases DemiBold.woff") format("woff"),
    url("/fonts/TypeType - TT Interphases DemiBold.woff2") format("woff2");
}

/* Variables */
:root {
  --headline: hsla(0, 0%, 8%, 0.96);
  --caption: hsla(0, 0%, 8%, 0.5);
  --primaryFill: hsla(240, 3%, 49%, 0.08);
  --secondaryFill: hsla(240, 3%, 49%, 0.12);
  --tertiaryFill: hsla(240, 3%, 49%, 0.2);
  --overlay: hsla(0, 0%, 98%, 0.92);
  --primaryLabelFill: hsla(240, 6%, 25%, 0.3);
  --secondaryLabelFill: hsla(240, 6%, 25%, 0.6);
  --red: #d5344d;
  --white: #fff;
}
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

// export default function App({ Component, pageProps }) {

//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>
//   );
// }
