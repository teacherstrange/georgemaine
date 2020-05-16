import styled, { css } from "styled-components";

const base = css`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-size: var(--fontSizeQuaternary);
  font-weight: var(--fontWeightSecondary);
  justify-content: center;
  padding: var(--spaceXXS) 12px;
  border-radius: 13px;
  transition: color 200ms ease;
  letter-spacing: -0.08px;
  border: none;
  line-height: 1.4285714286;
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

  &:hover {
    background-color: var(--darkerBlue);
  }

  &:active,
  &:focus {
    color: var(--blue);
    background-color: var(--containerBackground);
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
