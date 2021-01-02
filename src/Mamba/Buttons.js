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
    transform: scale(0.9);
  }

  transition: transform 0.2s ease;
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
  transition: transform 0.2s ease, background-color 0.25s linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:active {
    transform: scale(0.9);
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
    props.isMorphed &&
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
  transition: transform 0.2s ease, 0.25s background-color linear,
    0.25s opacity linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:active {
    transform: scale(0.9);
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
  transition: transform 0.2s ease, background-color 0.25s linear,
    opacity 0.25s linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:active {
    transform: scale(0.9);
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
`;

export const OpenButton = styled.button`
  ${baseStyle}
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: inherit;
  transition: opacity 0.229s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
  opacity: 1;

  ${(props) =>
    props.isMorphed &&
    css`
      opacity: 0;
      transition: opacity 0.129s cubic-bezier(0.52, 0.16, 0.24, 1);

      @media (max-width: 1023px) {
        transition: opacity 0.24s cubic-bezier(0.52, 0.16, 0.24, 1);
      }
    `}
`;

export const PlayPauseButton = styled.button`
  ${baseStyle}
  width: 52px;
  height: 52px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: 0 0;
  transition: transform 0.2s ease, opacity 0.3s ease;
  background: none;

  &:active {
    transform: scale(0.9) translate3d(-50%, -50%, 0);
  }
`;

export const MuteButton = styled.button`
  ${baseStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 36px;
  height: 36px;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.5s ease;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    opacity: 1;
  }
`;
