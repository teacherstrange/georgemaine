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

const smallBodyStyle = css`
  font-size: 1.3rem;
  line-height: 3.6rem;
  letter-spacing: -0.008rem;
  color: var(--white);
`;

export const Manifesto = styled.h1`
  ${titleStyle}
  font-weight: 600;
  text-align: center;
  color: var(--headline);
  margin: 2.2rem 0 2.6rem;

  @media (min-width: 1024px) {
    ${largeTitleStyle}
  }
`;

export const Headline = styled.h2`
  ${titleStyle}
  font-weight: 600;
  margin: 0 auto 30px;
  color: var(--headline);
  max-width: 414px;

  @media (max-width: 539px) {
    padding: 0 7%;
  }

  @media (min-width: 1024px) {
    ${largeTitleStyle}
    width: 960px;
    max-width: unset;
  }
`;

export const SmallCaption = styled.p`
  ${smallBodyStyle}
  color: var(--white);
`;

export const ArticleText = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.2rem;
  width: 86vw;
  opacity: 0;

  @media (min-width: 540px) {
    width: 62.5vw;
  }

  @media (min-width: 1024px) {
    width: 72%;

    &:first-of-type {
      margin-top: 154px;
    }
  }
`;

export const FigCaption = styled.p`
  width: 276px;
  position: absolute;
  transform-origin: center 0;
  top: 0;
  opacity: 0;
  display: inline;
  user-select: none;
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1),
    opacity 0.229s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.03s;

  &.is-zoomed {
    opacity: 1;
  }

  @media (min-width: 1024px) {
    transition: opacity 0.32244s cubic-bezier(0.32, 0.08, 0.24, 1) 0.05s,
      transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

    &.is-zoomed {
      transition: opacity 0.3345s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.2s,
        transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    }
  }
`;

export const Link = styled.a`
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  display: inline-block;
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
  animation: ${woosh} 0.4s cubic-bezier(0.33, 1, 0.68, 1) forwards;

  :first-of-type {
    margin-left: 0;
    animation-delay: 0.04s;
  }

  :nth-of-type(2) {
    animation-delay: 0.08s;
  }
  :nth-of-type(3) {
    animation-delay: 0.12s;
  }
  :nth-of-type(4) {
    animation-delay: 0.16s;
  }

  &:hover {
    cursor: pointer;
  }
`;
