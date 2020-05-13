import styled from "styled-components";

export const Btn = styled.button`
  color: var(--primaryText);
  outline: none;
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: var(--spaceS);
  font-weight: var(--fontWeightTertiary);
  transition: 0.11s all ease-out;
  background-color: var(--blue);
  font-size: 1.3em;
  line-height: 2;
  padding: 0 var(--spaceS);
  width: max-content;
  box-shadow: none;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #08f;
    box-shadow: 0px 3px 8px 0px var(--borderRule),
      0px 3px 1px 0px var(--borderRule);
  }

  &:active,
  &:focus {
    color: var(--blue);
    background-color: var(--containerBackground);
    transform: scale(1);
    box-shadow: none;
  }
`;
