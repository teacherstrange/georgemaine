import styled, { css } from "styled-components";

const RangeInput = styled.input`
  &[type="range"] {
    position: absolute;
    bottom: 48px;
    left: -32px;
    margin: 20px;
    appearance: none;
    outline: none;
    width: 60px;
    height: 3px;
    border-radius: 5px;
    background-color: transparent;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    background-image: linear-gradient(
      to right,
      var(--white),
      var(--white) 50%,
      rgba(255, 255, 255, 0.32) 50%
    );
    transform: rotate(-90deg);

    transition: transform 0.201s cubic-bezier(0.4, 0, 0.6, 1) 0.201s,
      opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1) 0.335s,
      width 0.335s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &::-webkit-slider-runnable-track {
    background-color: transparent;

    transition: transform 0.201s cubic-bezier(0.4, 0, 0.6, 1) 0.201s,
      opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1) 0.335s,
      width 0.335s cubic-bezier(0.4, 0, 0.6, 1);
  }
  &::-webkit-slider-thumb {
    background: #fafafa;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0.4);

    transition: transform 0.201s cubic-bezier(0.4, 0, 0.6, 1) 0.201s,
      opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1) 0.335s,
      width 0.335s cubic-bezier(0.4, 0, 0.6, 1);
    ${(props) =>
      props.isVisible &&
      css`
        opacity: 1;
        transform: scale(1);
      `}

    &:hover,
    &:active {
      transform: scale(1.2);
    }
  }
`;

export function VolumeControl(props) {
  return <RangeInput type='range' min='0' max='100' {...props} />;
}
