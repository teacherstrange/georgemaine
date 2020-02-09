import styled from "styled-components";

export const Headline = styled.h1`
  font-size: 32px;
  color: inherit;
  letter-spacing: -0.75px;
  line-height: 1.15;
  font-weight: 700;
  margin: 0 0 20px;
`;

export const Headline2 = styled.h2`
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: -0.5px;
  color: inherit;

  @media only screen and (min-width: 600px) {
    font-size: 26px;
    line-height: 1.3;
  }
`;

export const Caption = styled.p`
  color: var(--secondaryText);
  font-size: 19px;
  line-height: 1.5;
  margin: 0;

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

export const Link = styled.a`
  font-size: 19px;
  color: var(--primaryColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

export const DribbbleLink = styled.a`
  font-size: 19px;
  color: var(--dribbbleColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

export const TwitterLink = styled.a`
  font-size: 19px;
  color: var(--twitterColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;
