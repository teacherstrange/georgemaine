import styled from "styled-components";

// Set props
interface Props {
  align?: string;
  color?: string;
  width?: string;
  margin?: string;
  mobileWidth?: string;
}

// Define styles
export const Manifesto = styled.h1<Props>`
  font-size: 1.5rem;
  letter-spacing: 0.012rem;
  font-weight: 600;
  line-height: 2rem;
  color: ${(props) => (props.color ? props.color : "inherit")};
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: 600px) {
    font-size: 2.1rem;
    line-height: 3rem;
    width: ${(props) => (props.width ? props.width : "initial")};
  }
`;

export const Caption = styled.p<Props>`
  font-size: 1.3rem;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.002rem;
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: 24px auto 90px;
  max-width: ${(props) => (props.mobileWidth ? props.mobileWidth : "initial")};

  strong,
  a {
    font-weight: 600;
    display: inline;
  }

  @media only screen and (min-width: 600px) {
    font-size: 1.7rem;
    line-height: 2.6rem;
    width: ${(props) => (props.width ? props.width : "initial")};
    margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  }
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
