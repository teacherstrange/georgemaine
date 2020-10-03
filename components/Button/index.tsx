import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1.38;
  font-weight: 500;
  justify-content: center;
  padding: 3px 9px;
  background: transparent;
  transition: opacity 0.15s;
  letter-spacing: -0.022em;
  border: none;
  margin: 0;
  outline: none;
  color: inherit;
  text-align: center;
  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
