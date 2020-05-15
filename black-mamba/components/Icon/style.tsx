import styled from "styled-components";

interface Props {
  svgWrappersvgWrapperSize?: number;
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
