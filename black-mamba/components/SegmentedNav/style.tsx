import styled, { css } from "styled-components";
import { OpaqueButton } from "../Button";
import { motion } from "framer-motion";

const segmentNavItemHeight = "32px";
const segmentNavItemWidth = [125, 119, 139, 144, 72];
const segmentNavMaxWidth =
  segmentNavItemWidth[0] +
  segmentNavItemWidth[1] +
  segmentNavItemWidth[2] +
  segmentNavItemWidth[3] +
  segmentNavItemWidth[4];
const segmentNavItemXPosition = [
  0,
  segmentNavItemWidth[0],
  segmentNavItemWidth[0] + segmentNavItemWidth[1],
  segmentNavItemWidth[0] + segmentNavItemWidth[1] + segmentNavItemWidth[2],
  segmentNavItemWidth[0] +
    segmentNavItemWidth[1] +
    segmentNavItemWidth[2] +
    segmentNavItemWidth[3],
];

export const SegmentNavSelectionBackgroundVariants = {
  first: {
    x: segmentNavItemXPosition[0],
    width: segmentNavItemWidth[0],
  },
  second: {
    x: segmentNavItemXPosition[1],
    width: segmentNavItemWidth[1],
  },
  third: {
    x: segmentNavItemXPosition[2],
    width: segmentNavItemWidth[2],
  },
  fourth: {
    x: segmentNavItemXPosition[3],
    width: segmentNavItemWidth[3],
  },
  fifth: {
    x: segmentNavItemXPosition[4],
    width: segmentNavItemWidth[4],
  },
};

const Base = css`
  background-color: var(--blurBg);
  border-radius: 18px;
  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  -webkit-filter: var(--saturate);
  filter: var(--saturate);
  font-family: inherit;
  font-weight: 600;
  height: ${segmentNavItemHeight};
  border: 2px solid transparent;
  display: flex;
`;

export const SegmentNavDesktopTabList = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    ${Base}
    position: relative;
    align-items: center;
    padding: 0;
    overflow: hidden;
  }
`;

export const SegmentNavContainer = styled.footer`
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 24px;
  height: 36px;
  padding: 0 24px;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SegmentNavTabList = styled.div`
  ${Base}
  -webkit-overflow-scrolling: touch;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  max-width: ${segmentNavMaxWidth};

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 648px) {
    margin: 0 auto;
  }
`;

export const SegmentNavSelectionBackground = styled(motion.div)`
  position: absolute;
  z-index: 1;
  height: ${segmentNavItemHeight};
  border-radius: 16px;

  @media screen and (prefers-color-scheme: dark) {
    background-color: var(--white);
  }

  @media screen and (prefers-color-scheme: light) {
    background-color: var(--black);
  }

  @media only screen and (min-width: 1024px) {
    height: ${segmentNavItemHeight};
  }
`;

export const SegmentNavDesktopItem = styled(OpaqueButton)`
  max-width: fit-content;
  line-height: 1.2307692308;

  @media screen and (prefers-color-scheme: light) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextLight)" : "primaryTextDark"};
  }

  @media screen and (prefers-color-scheme: dark) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextDark)" : "var(--primaryTextLight)"};
  }
`;

export const SegmentNavMobileItem = styled(OpaqueButton)`
  min-width: initial;
  line-height: 1.2307692308;

  @media screen and (prefers-color-scheme: light) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextLight)" : "primaryTextDark"};
  }

  @media screen and (prefers-color-scheme: dark) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextDark)" : "var(--primaryTextLight)"};
  }
`;
