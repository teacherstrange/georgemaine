import styled, { css } from "styled-components";

const h1Style = css`
  font-size: var(--h1);
  line-height: 1.19;
  letter-spacing: -0.02em;
`;

const h2Style = css`
  font-size: var(--h2);
  font-weight: 700;
  line-height: 1.28;
  letter-spacing: -0.005em;
  margin: 0 0 var(--spaceXXS);
`;

const h3Style = css`
  font-size: var(--h3);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.002em;
  margin: 0 0 var(--spaceXXS);
`;

const h4Style = css`
  font-size: var(--h4);
  line-height: 1.1428571429;
  font-weight: 700;
  margin: 0 0 var(--spaceXXS);
  letter-spacing: -0.01em;
`;

export const H1 = styled.h1`
  ${h2Style}
  color: var(--primaryText);
  text-align: center;

  @media only screen and (min-width: 768px) {
    ${h1Style}
  }
`;

export const H2 = styled.h2`
  ${h3Style}
  color: var(--primaryText);

  @media only screen and (min-width: 768px) {
    ${h2Style}
  }
`;

export const H3 = styled.h3`
  ${h3Style}
`;

export const H4 = styled.h4`
  ${h4Style}
`;

export const H5 = styled.h5`
  font-size: var(--h5);
  font-weight: 700;
  color: var(--primaryText);
  line-height: 1.2;
  margin: 0 0 var(--spaceXS);
  letter-spacing: 0.005em;
`;

export const H6 = styled.h6`
  font-size: var(--h6);
  font-weight: 700;
  color: var(--primaryText);
  line-height: 1.4117647059;
  margin: 0 0 var(--spaceXS);
  letter-spacing: 0.005em;
`;

export const P = styled.p`
  color: var(--secondaryText);
  font-weight: 400;
  font-size: 1.9em;
  line-height: 1.58;
  margin: 0 0 var(--spaceXS);
`;

export const A = styled.a`
  color: var(--primaryText);
  font-size: var(--h6);
  line-height: 1.5384615385;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  padding: var(--spaceXS) var(--spaceS);
  border-radius: var(--spaceL);

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: var(--opaqueHover);
  }
`;

export const InlineA = styled.a`
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  opacity: 1;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    text-decoration: underline;
  }
`;
