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
  color: var(--primaryText);
  margin: 20px 0 24px;

  @media only screen and (min-width: 540px) {
    ${titleStyle}
  }
  @media only screen and (min-width: 980px) {
    ${largeTitleStyle}
  }
`;

export const Headline = styled.h2`
  ${smallTitleStyle}
  margin-bottom: 60px;
  color: var(--primaryText);

  @media only screen and (min-width: 540px) {
    ${titleStyle}
  }
  @media only screen and (min-width: 980px) {
    ${largeTitleStyle}
  }
`;

export const Caption = styled.p`
  ${bodyStyle}

  strong {
    color: var(--primaryText);
  }

  &:nth-child(2) {
    margin-top: 24px;
  }
`;

export const FigCaption = styled.figcaption`
  ${bodyStyle}
  max-width: 275px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  strong {
    color: var(--primaryText);
  }

  &:nth-child(2) {
    margin-top: 8px;
  }
`;

export const Link = styled.a`
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  display: inline-block;
  transition: all 0.15s ease;
  border-radius: 16px;

  &:hover {
    background-color: var(--secondaryFill);
    padding-left: 8px;
    padding-right: 8px;
    margin-left: -8px;
    margin-right: -8px;
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
  display: grid;
  place-items: center;
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
