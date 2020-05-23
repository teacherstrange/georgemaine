import styled from "styled-components";

export const GalleryItem = styled.div`
  opacity: ${(props: { currentGalleryItem: boolean }) =>
    props.currentGalleryItem ? "1" : "0"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.6s;

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    webkit-mask-image: linear-gradient(to bottom, transparent 50%, #000 75%);
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`;

export const VideoCaption = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 48px);
  max-width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 0px 80px 0px;
  position: fixed;
  color: var(--white);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  @media only screen and (min-width: 1024px) {
    padding: 0 0 48px 0;
  }
`;

export const VideoCaptionList = styled.div`
  text-align: center;
`;

export const VideoCaptionListItem = styled.li`
  position: relative;
  list-style: none;
  text-align: center;
`;
