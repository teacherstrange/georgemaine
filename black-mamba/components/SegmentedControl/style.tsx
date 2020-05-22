import styled, { css, keyframes } from "styled-components";
import { OpaqueButton } from "../Button";
import { motion } from "framer-motion";

const slideIn = keyframes`
  from {
    max-width: 0;
  }
  to {
    max-width: 561px;
  }
`;

export const MobileActiveItemVariants = {
  first: {
    x: 0,
    width: 134,
  },
  second: {
    x: 134,
    width: 183,
  },
  third: {
    x: 317,
    width: 152,
  },
  fourth: {
    x: 469,
    width: 159,
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
  transition: left 0.3s cubic-bezier(0.1, 0, 0, 1);
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
  justify-content: center;
  position: relative;
  flex: 1;
  max-width: 672px;
  justify-content: center;
  align-items: center;
  padding: var(--spaceXXS);
  overflow: hidden;

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
  overflow-x: scroll;
  align-items: center;
  width: 100%;
  max-width: 0;
  animation: ${slideIn} 1.1s 1.3s ease 1 forwards;
  height: 32px;
  padding: 2px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 648px) {
    margin: 0 auto;
  }
`;

interface Props {
  currentPosition: number;
  menuList: number;
}

export const ActiveItemBackground = styled.div<Props>`
  ${ItemBase}
  width: 25%;
  left: ${(props) =>
    props.currentPosition === 0
      ? "4px"
      : props.currentPosition === props.menuList - 1
      ? "calc(75% - 4px)"
      : `calc(${props.currentPosition} * 25%)`};
`;

export const MobileActiveItemBackground = styled(motion.div)`
  ${ItemBase}

  height: 32px;
  border-radius: 16px;
`;

export const MobileOpaqueButton = styled(OpaqueButton)`
  padding: 0 12px;
  min-width: initial;
`;
