import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    max-width: 0;
  }
  to {
    max-width: 600px;
  }
`;

const Base = css`
  background-color: rgba(38, 38, 38, 0.73);
  border-radius: 18px;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  -webkit-filter: saturate(140%);
  filter: saturate(140%);
`;

const ItemBase = css`
  position: absolute;
  height: 28px;
  background-color: #fff;
  border-radius: 14px;
  transition: left 0.3s cubic-bezier(0.1, 0, 0, 1);
  z-index: 1;
`;

export const Container = styled.ul`
  ${Base}
  display: none;
  justify-content: center;
  position: relative;
  flex: 1;
  max-width: 620px;
  justify-content: center;
  align-items: center;
  padding: 4px;
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
  height: 36px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: 648px) {
    margin: 0 auto;
  }
`;

export const ActiveItemBackground = styled.div`
  ${ItemBase}
  width: 25%;
  left: ${(props) =>
    props.currentPosition === 0
      ? "4px"
      : props.currentPosition === props.maxItems - 1
      ? "calc(75% - 4px)"
      : `calc(${props.currentPosition} * 25%)`};
`;

export const MobileActiveItemBackground = styled.div`
  ${ItemBase}
  width: 148px;

  left: ${(props) =>
    props.currentPosition === 0
      ? "4px"
      : props.currentPosition === props.maxItems - 1
      ? "calc(100% -152px)"
      : `calc(${props.currentPosition} * 148px)`};
`;
