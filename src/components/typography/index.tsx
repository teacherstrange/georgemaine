import styled, { css } from "styled-components";

const largeTitleStyle = css`
  font-size: 2.6rem;
  line-height: 3.2rem;
  letter-spacing: 0.022rem;
`;

const titleStyle = css`
  font-size: 2.2rem;
  line-height: 2.6rem;
  letter-spacing: -0.022rem;
`;

const smallTitleStyle = css`
  font-size: 1.7rem;
  line-height: 2.2rem;
  letter-spacing: -0.043rem;
`;

const bodyStyle = css`
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.023rem;
`;

export const Manifesto = styled.h1`
  ${smallTitleStyle}
  text-align: center;

  @media only screen and (min-width: 540px) {
    ${titleStyle}
  }
  @media only screen and (min-width: 980px) {
    ${largeTitleStyle}
  }
`;

export const Headline = styled.h2`
  ${smallTitleStyle}

  @media only screen and (min-width: 540px) {
    ${titleStyle}
  }
  @media only screen and (min-width: 980px) {
    ${largeTitleStyle}
  }
`;

export const Caption = styled.p`
  ${bodyStyle}
  color: var(--gray3);

  strong {
    color: var(--primaryText);
  }
`;

export const Link = styled.a`
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  display: inline-block;
  transition: all 0.15s ease;

  &:hover {
    border-radius: 6px;
    background-color: var(--gray2);
    padding-left: 4px;
    padding-right: 4px;
    margin-left: -4px;
    margin-right: -4px;
    cursor: pointer;
  }
`;
