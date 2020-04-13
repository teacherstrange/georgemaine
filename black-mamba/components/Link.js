import styled from "styled-components";

export const Link = styled.a`
  color: var(--primaryText);
  outline: none;
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: var(--spaceXS);
  font-weight: var(--fontWeightTertiary);
  transition: 0.11s all ease-out;
  background-color: var(--containerBackground);
  font-size: var(--fontSizeQuaternary);
  line-height: 1.3;
  padding: var(--spaceXS) var(--spaceS);
  width: max-content;
  box-shadow: none;
  text-align: center;
  margin: 0 var(--spaceS) 0 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: var(--containerBackgroundHover);
    box-shadow: 0px 3px 8px 0px var(--borderRule),
      0px 3px 1px 0px var(--borderRule);
  }

  &:active {
    color: var(--blue);
    background-color: var(--containerBackground);
    transform: scale(1);
    box-shadow: none;
  }

  :nth-last-of-type() {
    margin: 0;
  }
`;
