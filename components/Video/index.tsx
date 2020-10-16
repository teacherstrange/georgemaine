import styled from "styled-components";

interface videoProps {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const Video = styled.video<videoProps>`
  vertical-align: middle;
  user-select: none;
  object-fit: contain;
  height: calc(100% - 142px);
  margin-top: 36px;
  margin-bottom: 18px;
  background: #111;
  border: 3px solid #111;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.18), 9px 9px 9px rgba(0, 0, 0, 0.06),
    12px 12px 12px rgba(0, 0, 0, 0.06), 18px 24px 24px rgba(0, 0, 0, 0.06),
    24px 30px 30px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  width: initial;

  @media only screen and (max-width: 767px) {
    width: calc(100% - 60px);
    height: initial;
    margin-top: 84px;
  }
`;
