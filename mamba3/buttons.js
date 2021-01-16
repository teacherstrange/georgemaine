import styled, { css } from "styled-components";

const imageHeight = 250;

const baseStyle = css`
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  cursor: pointer;
  font: inherit;

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0;
  }
`;

export const Button = styled.button`
  ${baseStyle}
  letter-spacing: -0.023rem;
  padding: 8px 24px;
  border-radius: 32px;
  text-align: center;
  color: var(--white);
  background-color: var(--red);

  &:active {
    transform: none;
  }
`;

export const CloseButton = styled.button`
  ${baseStyle}
  position: absolute;
  right: 16px;
  top: 16px;
  height: 36px;
  width: 36px;
  border-radius: 32px;
  background-color: var(--secondaryFill);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  transition: background-color 0.25s linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    path {
      stroke: var(--secondaryLabelFill);
    }
  }
  ${(props) =>
    props.isZoomed &&
    css`
      opacity: 1;
      transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s,
        background-color 0.25s linear;
    `}
`;

export const PreviousButton = styled.button`
  ${baseStyle}
  position: absolute;
  top: calc(${imageHeight}px / 2 - 20px);
  left: -20px;
  height: 52px;
  width: 52px;
  border-radius: 32px;
  background-color: var(--secondaryFill);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: transform 0.2s ease, background-color 0.3s ease, opacity 0.3s ease;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    path {
      stroke: var(--secondaryLabelFill);
    }
  }

  @media (min-width: 414px) {
    left: -44px;
  }
`;

export const NextButton = styled.button`
  ${baseStyle}
  position: absolute;
  top: calc(${imageHeight}px / 2 - 20px);
  right: -20px;
  height: 52px;
  width: 52px;
  border-radius: 32px;
  background-color: var(--secondaryFill);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: transform 0.2s ease, background-color 0.3s ease, opacity 0.3s ease;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    path {
      stroke: var(--secondaryLabelFill);
    }
  }

  @media (min-width: 414px) {
    right: -44px;
  }
`;

export const OpenButton = styled.button`
  ${baseStyle}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  color: inherit;
  transition: opacity 0.229s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  &:active {
    transform: none;
  }

  ${(props) =>
    props.isZoomed &&
    css`
      opacity: 0;
      transition: opacity 0.129s cubic-bezier(0.52, 0.16, 0.24, 1);

      @media (max-width: 1023px) {
        transition: opacity 0.24s cubic-bezier(0.52, 0.16, 0.24, 1);
      }
    `}
`;

export const MuteButton = styled.button`
  ${baseStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.3s ease;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 1;
  }
`;

export const ExpandButton = styled.button`
  ${baseStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.3s ease;
  transform: scale(1);

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 1;
  }
`;

export const PlayPauseButton = styled.button`
  ${baseStyle}
  width: 100%;
  height: calc(100% + 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  opacity: 0.75;
  transition: transform 0.2s ease, opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.9);
  }
`;
