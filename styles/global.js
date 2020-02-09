import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ::selection {
    color: var(--primaryText);
    background: var(--primaryColor);
  }

  ::-moz-selection {
    color: var(--primaryText);
    background: var(--primaryColor);
  }
  @font-face {
    font-family:"Söhne";
    font-weight: 500;
    font-style: normal;
    src: url('../assets/Sohne-Kraftig.woff');
  }
  @font-face {
    font-family:"Söhne";
    font-weight: normal;
    font-style: normal;
    src: url('../assets/Sohne-Kraftig.woff');
  }
  @font-face {
    font-family:"Söhne";
    font-weight: 700;
    font-style: normal;
    src: url('../assets/Sohne-Fett.woff');
  }
  body {
    font-family: "Söhne", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    background: var(--background);
    color: var(--primaryText);
    font-weight: 400;
    word-wrap: break-word;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    margin: 0;
    padding: 0;
  }
`;
