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
          <meta charSet='utf-8' />
          <meta property='og:type' content='website' />
          <meta name='description'></meta>
          <meta
            property='og:title'
            content='Georgemaine Lourens'
            key='ogtitle'
          />
          <meta
            property='og:description'
            content="Hi, I’m Georgemaine—A product designer currently working on Pitch.com, the next-gen presentation tool. I enjoy making digital tools so simple and fun to use that you'll want to use them all the time. I also like tinkering with software projects and animation videos on the side. If you have one and think I can help or simply want to chat—reach out."
            key='ogdesc'
          />
          <meta
            property='og:url'
            content='https://georgemaine.com'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='/images/og-image.png'
            key='ogimage'
          />
          <meta
            property='og:site_name'
            content='Georgemaine Lourens'
            key='ogsitename'
          />
          <meta
            name='twitter:card'
            content='summary_large_image'
            key='twcard'
          />
          <meta name='twitter:creator' content='@georgemaine' key='twhandle' />
          <meta name='twitter:site' content='@georgemaine' key='twhandle' />

          <link rel='icon' type='image/svg+xml' href='/fav-icon.svg' />
          <link rel='apple-touch-icon' href='/fav-icon.png' />
          <link rel='mask-icon' href='/fav-icon.svg' color='#8A8A8E' />
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
