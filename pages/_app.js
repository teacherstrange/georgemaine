import Global from "../components/global.css";
import React from "react";
import Head from "next/head";
import Router from "next/router";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Georgemaine Lourens</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="description" content="Product designer at Pitch." />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Georgemaine Lourens"
        />
        <meta key="og:image" name="og:image" content="/images/og-image.jpg" />
        <meta
          name="og:description"
          property="og:description"
          content="Product designer at Pitch."
        />
        <meta property="og:site_name" content="Georgemaine Lourens" />
        <meta property="og:url" content="https://www.georgemaine.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Georgemaine Lourens" />
        <meta name="twitter:description" content="Product designer at Pitch." />
        <meta name="twitter:creator" content="@georgemaine" />
        <link rel="icon" href="/favico.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favico.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
