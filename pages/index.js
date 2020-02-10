import Head from "next/head";

import {
  Wrapper,
  CopySection,
  ContactNavigation,
  ContactList
} from "../blocks/layout";
import Logo from "../blocks/logo";
import {
  Headline,
  Caption,
  Link,
  DribbbleLink,
  TwitterLink,
  Headline2
} from "../blocks/typograhy";

export default () => {
  return (
    <Wrapper>
      <Head>
        <title>Georgemaine Lourens</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I’m currently designing financial products at Mollie in Amsterdam. Previously I was a designer at Framer, where I designed tools and resources for designers. My current areas
          of interest include well-crafted products, code, plants, and motion design."
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W6ZMGPB');`
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZMGPB" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
        }}
      />
      <Logo />
      <CopySection>
        <Headline>Hello, my name is Georgemaine&nbsp;Lourens</Headline>
        <Caption>
          I’m currently designing financial products at{" "}
          <Link
            href="https://mollie.com"
            target="blank"
            rel="noopener norefererrer"
          >
            Mollie
          </Link>{" "}
          in Amsterdam. Previously I was a designer at{" "}
          <Link
            href="https://framer.com"
            target="blank"
            rel="noopener norefererrer"
          >
            Framer
          </Link>
          , where I designed tools and resources for designers. My current areas
          of interest include well-crafted products, code, plants, and motion
          design.
        </Caption>
      </CopySection>

      <ContactNavigation>
        <ContactList>
          <li>
            <Headline2>Get in touch</Headline2>
          </li>
          <li>
            <Link href="mailto:georgemaine.lourens@gmail.com" target="blank">
              Email
            </Link>
          </li>
          <li>
            <DribbbleLink
              href="https://dribbble.com/georgemaine"
              target="blank"
              rel="noopener norefererrer"
            >
              Dribbble
            </DribbbleLink>
          </li>
          <li>
            <TwitterLink
              href="https://twitter.com/georgemaine"
              target="blank"
              rel="noopener norefererrer"
            >
              Twitter
            </TwitterLink>
          </li>
        </ContactList>
      </ContactNavigation>
    </Wrapper>
  );
};
