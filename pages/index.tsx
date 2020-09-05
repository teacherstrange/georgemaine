import { Wrapper } from "../black-mamba/components/Layouts/";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  A,
  InlineA,
} from "../black-mamba/components/Typography/index";

export default () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <H1>Headline 1</H1>
      <H2>Headline 2</H2>
      <H3>Headline 3</H3>
      <H4>Headline 4</H4>
      <H5>Headline 5</H5>
      <H6>Headline 6</H6>
      <P>Paragraph</P>
      <A>Link</A>
      <InlineA>InlineA</InlineA>
    </div>
  );
};
