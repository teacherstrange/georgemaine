import * as style from "./style";
import { H1 } from "../Typograhy";

interface Props {
  headline: string;
}
export default function ContentContainer(props: Props) {
  const { headline } = props;
  return (
    <style.ContentDescription>
      <H1>{headline}</H1>
    </style.ContentDescription>
  );
}
