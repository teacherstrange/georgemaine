import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases Regular.woff2'
            as='font'
            crossOrigin='anonymous'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases Regular.woff'
            as='font'
            crossOrigin='anonymous'
            type='font/woff'
          />
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases Medium.woff2'
            as='font'
            crossOrigin='anonymous'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases Medium.woff'
            as='font'
            crossOrigin='anonymous'
            type='font/woff'
          />
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases DemiBold.woff2'
            as='font'
            crossOrigin='anonymous'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/TypeType - TT Interphases DemiBold.woff'
            as='font'
            crossOrigin='anonymous'
            type='font/woff'
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
