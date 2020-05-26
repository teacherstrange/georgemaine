import styled from "styled-components";

interface Props {
  svgWrapperSize?: number;
  svgWrapperMargin?: string;
}

export const SvgWrapper = styled.div<Props>`
  display: inline-block;
  flex: 0 0
    ${(props) => (props.svgWrapperSize ? `${props.svgWrapperSize}px` : "18px")};
  width: ${(props) =>
    props.svgWrapperSize ? `${props.svgWrapperSize}px` : "18px"};
  height: ${(props) =>
    props.svgWrapperSize ? `${props.svgWrapperSize}px` : "18px"};
  min-width: ${(props) =>
    props.svgWrapperSize ? `${props.svgWrapperSize}px` : "18px"};
  min-height: ${(props) =>
    props.svgWrapperSize ? `${props.svgWrapperSize}px` : "18px"};
  position: relative;
  color: inherit;
  margin: ${(props) =>
    props.svgWrapperMargin ? `${props.svgWrapperMargin}` : "0"};
`;

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;
