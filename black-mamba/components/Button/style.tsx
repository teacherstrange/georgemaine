import styled, { css } from "styled-components";

const base = css`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-family: "TT Interphases";
  font-size: 1.5rem;
  line-height: 1.2307692308;
  font-weight: 600;
  justify-content: center;
  padding: var(--spaceXS) var(--spaceM);
  border-radius: var(--spaceL);
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
  background-color: var(--red);
  width: max-content;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    background-color: var(--redOnHover);
  }

  &:active,
  &:focus {
    color: var(--red);
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
