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
