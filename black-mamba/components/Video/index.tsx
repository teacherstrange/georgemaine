import styled from "styled-components";

interface Props {
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  playsInline: boolean;
}

export const Video = styled.video<Props>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
  object-fit: cover;
`;
