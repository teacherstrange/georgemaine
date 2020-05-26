import * as React from "react";
import { SvgWrapper, InlineSvg } from "./style";
import { Glyph } from "./Glyph";

interface Props {
  size?: number;
  margin?: string;
  glyph: string;
}

export default function Icon({ size = 20, margin, glyph }: Props) {
  return (
    <SvgWrapper svgWrapperSize={size} svgWrapperMargin={margin}>
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={glyph}
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <title>{glyph}</title>
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  );
}
