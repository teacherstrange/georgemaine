import styled, { css, keyframes } from "styled-components";

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
  margin: 20px 0 24px;
  transition: all 0.15s ease;

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

const woosh = keyframes`
    0% {
        opacity: 0;
    }

    30% {
        opacity: 0;
    }

    80% {
        opacity: 1;
        visibility:visible
    }

    to {
        opacity: 1;
        visibility: visible;
        transform:translateX(0)
    }
`;

export const SocialLink = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: var(--red);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transform: translatex(-100%);
  margin-left: 16px;

  :first-of-type {
    margin-left: 0;
    animation: ${woosh} 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: 0.04s;
  }

  :nth-of-type(2) {
    animation: ${woosh} 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: 0.08s;
  }
  :nth-of-type(3) {
    animation: ${woosh} 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: 0.12s;
  }
  :nth-of-type(4) {
    animation: ${woosh} 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;
    animation-delay: 0.16s;
  }

  &:hover {
    cursor: pointer;
  }
`;
