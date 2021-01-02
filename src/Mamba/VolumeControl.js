import styled from "styled-components";

const RangeInput = styled.input``;

export function VolumeControl(props) {
  return <RangeInput type='range' min='0' max='100' {...props} />;
}
