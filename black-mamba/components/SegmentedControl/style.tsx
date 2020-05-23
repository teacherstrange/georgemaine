import styled, { css, keyframes } from "styled-components";
import { OpaqueButton } from "../Button";
import { motion } from "framer-motion";

export const MobileActiveItemVariants = {
  first: {
    x: 0,
    width: 150,
  },
  second: {
    x: 150,
    width: 199,
  },
  third: {
    x: 349,
    width: 168,
  },
  fourth: {
    x: 517,
    width: 175,
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
`;

const ItemBase = css`
  position: absolute;
  height: 28px;
  border-radius: 14px;
  z-index: 1;

  @media screen and (prefers-color-scheme: dark) {
    background-color: var(--white);
  }

  @media screen and (prefers-color-scheme: light) {
    background-color: var(--black);
  }
`;

export const Container = styled.ul`
  ${Base}
  display: none;
  position: relative;
  align-items: center;
  flex: 1;
  max-width: 684px;
  padding: var(--spaceXXS);
  overflow: hidden;
  height: 28px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const MobileContainer = styled.footer`
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 32px;
  height: 36px;
  padding: 0 24px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileTabsContainer = styled.div`
  ${Base}
  -webkit-overflow-scrolling: touch;
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 2px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 648px) {
    margin: 0 auto;
  }
`;

export const ActiveItemBackground = styled(motion.div)`
  ${ItemBase}

  height: 32px;
  border-radius: 16px;
`;

export const MobileActiveItemBackground = styled(motion.div)`
  ${ItemBase}

  height: 32px;
  border-radius: 16px;
`;

export const DesktopOpaqueButton = styled(OpaqueButton)`
  max-width: fit-content;
  line-height: 1.1764705882;
  @media screen and (prefers-color-scheme: light) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextLight)" : "primaryTextDark"};
  }

  @media screen and (prefers-color-scheme: dark) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextDark)" : "var(--primaryTextLight)"};
  }
`;

export const MobileOpaqueButton = styled(OpaqueButton)`
  min-width: initial;

  @media screen and (prefers-color-scheme: light) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextLight)" : "primaryTextDark"};
  }

  @media screen and (prefers-color-scheme: dark) {
    color: ${(props) =>
      props.isAnimated ? "var(--primaryTextDark)" : "var(--primaryTextLight)"};
  }
`;
