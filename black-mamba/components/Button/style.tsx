import styled, { css } from "styled-components";

const base = css`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-family: "GT Haptik";
  font-size: var(--h6);
  line-height: 1.1764705882;
  font-weight: 600;
  justify-content: center;
  padding: var(--spaceXS) 20px;
  border-radius: 18px;
  transition: all 0.2s;
  letter-spacing: 0.005em;
  border: none;
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

  &:hover {
    background-color: var(--blueOnHover);
  }

  &:active,
  &:focus {
    color: var(--blue);
    background-color: var(--blurBg);
  }
`;

export const OpaqueButton = styled.button`
  ${base}
  position: relative;
  z-index: 2;
  flex: 1;
  background-color: transparent;
  white-space: nowrap;
  line-height: 1.6470588235;
  color: var(--primaryText);
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
