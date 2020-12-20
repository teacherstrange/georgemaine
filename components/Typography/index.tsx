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

export const Year = styled.h1`
  font-size: 51.8rem;
  letter-spacing: -0.04rem;
  text-align: center;
  line-height: 61.8rem;
  color: rgba(122, 122, 122, 0.19);
  margin: 0 auto;
`;

export const Manifesto = styled.h1<Props>`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 24px auto 42px;
  width: calc(100% - 60px);
  text-align: left;

  @media only screen and (min-width: 768px) {
    font-size: 2.1rem;
    line-height: 2.8rem;
    margin: 0 auto;
    width: ${(props) => (props.width ? props.width : "initial")};
  }

  strong {
    display: inline;
    color: #000;
  }
`;

export const Caption = styled.p<Props>`
  font-size: 1.3rem;
  line-height: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.002rem;
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  margin: 0 auto;
  max-width: ${(props) => (props.mobileWidth ? props.mobileWidth : "initial")};

  strong,
  a {
    font-weight: 600;
    display: inline;
    color: #000;
  }
`;
