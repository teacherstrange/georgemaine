import styled from "styled-components";

export const GalleryItem = styled.div`
  opacity: ${(props: { currentGalleryItem: boolean }) =>
    props.currentGalleryItem ? "1" : "0"};
  pointer-events: ${(props: { currentGalleryItem: boolean }) =>
    props.currentGalleryItem && "none"};
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
  padding: 0px 0px 104px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  @media only screen and (min-width: 1024px) {
    padding: 0 0 48px 0;
  }
`;

export const VideoCaptionList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const VideoCaptionListItem = styled.li`
  position: relative;
  list-style: none;

  :not(:last-of-type) {
    margin-right: var(--spaceS);
  }

  :not(:last-of-type)::after {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1px);
    bottom: 0;
    right: -10px;
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: var(--secondaryTextLight);
  }

  @media only screen and (min-width: 768px) {
    :not(:last-of-type)::after {
      top: 50%;
    }
  }
`;
