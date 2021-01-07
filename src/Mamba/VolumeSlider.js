import styled from "styled-components";

const VolumeBar = styled.input`
  &[type="range"][orient="vertical"] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 100%;
    padding: 0 5px;
    opacity: 0;
    cursor: pointer;
  }
`;

const VolumeFill = styled.div`
  border-radius: 4px;
  width: 4px;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  pointer-events: none;
`;

const VolumeThumb = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: scale(0.3333);
  transform-origin: 50% 50%;
  background-color: var(--white);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  pointer-events: none;
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease 0.25s;
`;

const VolumeContainer = styled.div`
  border-radius: 4px;
  position: absolute;
  bottom: 36px;
  height: 0;
  opacity: 0;
  transition: height 0.335s cubic-bezier(0.4, 0, 0.6, 1),
    opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1) 0.335s;
`;

const VolumeControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 36px;
  height: 100px;
  position: relative;

  &:hover ${VolumeThumb} {
    transform: scale(0.8333);
    opacity: 1;
  }

  &:hover ${VolumeContainer} {
    height: 64px;
    opacity: 1;
    transition: height 0.335s cubic-bezier(0.4, 0, 0.6, 1),
      opacity 0.067s cubic-bezier(0.4, 0, 0.6, 1);
  }
`;

export function VolumeSlider(props) {
  return (
    <VolumeControls>
      <VolumeContainer>
        <VolumeFill ref={props.volumeFillRef} />
        <VolumeBar
          ref={props.volumeBarRef}
          type='range'
          min='0'
          max='1'
          step='0.01'
          onChange={props.onChange}
          orient='vertical'
        />
        <VolumeThumb ref={props.volumeThumbRef} />
      </VolumeContainer>
      {props.children}
    </VolumeControls>
  );
}
