import React from "react";
import { createGlobalStyle } from "styled-components";
import App from "next/app";

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 62.5%;
}

strong {
    color: var(--headline);
    display: inline;
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
  box-sizing: border-box;
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
@supports (color: color(display-p3 1 1 1)) {
  :root {
    --headline: color(display-p3 0.08 0.08 0.08 / 0.96);
    --caption: color(display-p3 0.08 0.08 0.08 / 0.5);
    --primaryFill: color(display-p3 0.4753 0.4753 0.5021 / 0.08);
    --secondaryFill: color(display-p3 0.4753 0.4753 0.5021 / 0.12);
    --tertiaryFill: color(display-p3 0.4753 0.4753 0.5021 / 0.2);
    --overlay: color(display-p3 0.9801 0.98 0.9799 / 0.92);
    --primaryLabelFill: color(display-p3 0.235 0.235 0.2624 / 0.3);
    --secondaryLabelFill: color(display-p3 0.235 0.235 0.2624 / 0.6);
    --red: color(display-p3 0.7695 0.2608 0.316);
    --white: color(display-p3 1.0001 1 0.9999);
  }
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
