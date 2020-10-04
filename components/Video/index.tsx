import styled from "styled-components";

interface videoProps {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const Video = styled.video<videoProps>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
  object-fit: cover;
`;

export const MobileVideo = styled.video<videoProps>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  vertical-align: middle;
  user-select: none;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
