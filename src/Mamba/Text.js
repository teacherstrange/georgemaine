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
  color: var(--headline);
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
  color: var(--headline);

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
    color: var(--headline);
  }

  &:nth-child(2) {
    margin-top: 24px;
  }
`;

export const FigCaption = styled.figcaption`
  ${bodyStyle}
  width: 275px;
  text-align: left;
  position: absolute;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1),
    opacity 0.229s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.03s;
  top: 100%;

  left: calc((100% - 275px) / 2);
  opacity: 0;

  strong {
    color: var(--headline);
  }

  &.is-morphed {
    opacity: 1;
  }

  @media only screen and (min-width: 980px) {
    left: unset;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: opacity 0.32244s cubic-bezier(0.32, 0.08, 0.24, 1) 0.05s,
      transform cubic-bezier(0.52, 0.16, 0.24, 1);

    &.is-morphed {
      left: unset;
      transition: opacity 0.3345s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.15s,
        transform cubic-bezier(0.52, 0.16, 0.24, 1);
    }
  }

  @media only screen and (max-width: 979px) {
    transform: scale(0.93) !important;
    padding-top: 24px;

    &.is-morphed {
      transform: scale(1) !important;
    }
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
