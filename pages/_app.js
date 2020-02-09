import Global from "../styles/global.js";
import Variables from "../styles/variables.js";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Global />
      <Variables />
    </React.Fragment>
  );
}
