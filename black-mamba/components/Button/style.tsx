import styled, { css } from "styled-components";

const base = css`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-size: var(--fontSizeQuaternary);
  font-weight: var(--fontWeightPrimary);
  justify-content: center;
  padding: 4px 12px;
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
  color: var(--primaryText);
  background-color: var(--blue);
  width: max-content;
  text-align: center;

  &:hover {
    background-color: #08f;
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
    color: ${(props: { isAnimated: Boolean }) =>
      props.isAnimated ? "#111" : "var(--primaryText)"};
  border-radius: 18px;
  position: relative;
  z-index: 2;
  flex: 1;
  background-color: transparent;
  white-space: nowrap;
  min-width: 152px;

`;

export const PopUpButtonChevron = styled.span`
  transform: ${(props: { animated: boolean }) =>
    props.animated ? "rotate(180deg)" : ""};
  margin: 0 0 0 8px;
  transition: transform 100ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
