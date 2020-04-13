import { H1, Caption } from "../black-mamba/Typograhy";
import { InterpolatingLogo } from "../black-mamba/components/InterpolatingLogo";
import { Link } from "../black-mamba/components/Link";
import { Header } from "../black-mamba/components/Header";
import { Wrapper } from "../black-mamba/components/Layout";

export default () => {
  return (
    <Wrapper>
      <Header>
        <InterpolatingLogo />
        <H1>Hello, my name is Georgemaine</H1>
        <Caption>
          I’m currently designing financial products at Mollie in Amsterdam.
          Previously I was a designer at Framer, where I designed tools and
          resources for designers. My current areas of interest include
          well-crafted products, code, plants, and motion design.
        </Caption>
        <Link
          href="mailto:georgemaine.lourens@gmail.com?Subject=Hello!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </Link>
        <Link
          href="https://dribbble.com/georgemaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </Link>
        <Link
          href="https://twitter.com/georgemaine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
      </Header>
    </Wrapper>
  );
};
