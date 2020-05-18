import styled, { css } from "styled-components";

const base = css`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-family: "GT Haptik";
  font-size: var(--fontSizeQuaternary);
  font-weight: 700;
  justify-content: center;
  padding: var(--spaceXXS) 12px;
  border-radius: 13px;
  transition: color 0.2s;
  letter-spacing: 0.012em;
  border: none;
  line-height: 1.5384615385;
  margin: 0;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
  }
`;

export const Button = styled.button`
  ${base}
  color: var(--primaryTextLight);
  background-color: var(--blue);
  width: max-content;
  text-align: center;
  transition: all 0.2s;
  line-height: 2.1538461538;
  border-radius: 24px;
  padding: var(--spaceXXS) 16px;

  &:hover {
    background-color: var(--darkerBlue);
    transform: scale(0.96);
  }

  &:active,
  &:focus {
    color: var(--blue);
    background-color: var(--blurBg);
    transform: scale(1);
    box-shadow: none;
  }
`;

export const OpaqueButton = styled.button`
  ${base}
  border-radius: 18px;
  position: relative;
  z-index: 2;
  flex: 1;
  background-color: transparent;
  white-space: nowrap;
  min-width: 152px;

  @media screen and (prefers-color-scheme: dark) {
    color: ${(props: { isAnimated: Boolean }) =>
      props.isAnimated ? "var(--primaryTextDark)" : "var(--primaryTextLight)"};
  }

  @media screen and (prefers-color-scheme: light) {
    color: ${(props: { isAnimated: Boolean }) =>
      props.isAnimated ? "var(--primaryTextLight)" : "var(--primaryTextDark)"};
  }
`;

export const PopUpButtonChevron = styled.span`
  transform: ${(props: { animated: boolean }) =>
    props.animated ? "rotate(180deg)" : ""};
  margin: 0 0 0 var(--spaceXS);
  transition: transform 100ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
