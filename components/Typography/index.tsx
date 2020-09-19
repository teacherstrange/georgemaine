import styled, { css } from "styled-components";

// Set props
interface Props {
  align: string;
  color: string;
}

// Define styles
export const Manifesto = styled.h1<Props>`
  font-size: 2.3em;
  font-weight: 600;
  line-height: 3.2em;
  letter-spacing: 0.006em;
  color: ${(props) => (props.color ? props.color : "inherit")};
  margin: 0;
`;

export const Caption = styled.p`
  display: inline;
  font-size: 2.4em;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0.002em;
  color: ${(props) => (props.color ? props.color : "inherit")};
  margin: 0;
`;

export const InlineA = styled.a<Props>`
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  text-decoration: none;
  font-weight: 500;
  font-size: inherit;
  transition: opacity 0.2s;
  opacity: 1;

  &:hover {
    opacity: 0.65;
    cursor: pointer;
    text-decoration: underline;
  }
`;
