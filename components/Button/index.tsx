import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  justify-content: center;
  padding: 3px var(--spaceXXS);
  background: transparent;
  transition: opacity 0.15s;
  letter-spacing: -0.022em;
  border: none;
  margin: 0;
  outline: none;
  color: inherit;
  font-weight: 500;
  text-align: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const RedButton = styled(Button)`
  background: var(--red);
  color: #fff;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.6;
  padding: var(--spaceXXS) var(--spaceS);
  border-radius: var(--spaceL);
`;
