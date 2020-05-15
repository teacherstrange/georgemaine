import styled from "styled-components";

export const ContentGalleryContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const ContentGallery = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
`;

export const ContentDescription = styled.div`
  width: 620px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 48px 0;
  height: 100%;
  z-index: 1;
  position: relative;
`;

export const GalleryItem = styled.div`
  opacity: ${(props) => props.currentGalleryItem && "0"};
  pointer-events: ${(props) => props.currentGalleryItem && "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1s;
`;

export const VideoCaption = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 0px 48px 0px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const VideoCaptionList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const VideoCaptionListItem = styled.li`
  position: relative;
  list-style: none;

  :not(:first-of-type) {
    margin-left: 28px;
  }
  :not(:first-of-type)::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -16px;
    margin: 16px auto 0;
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: #999;
  }
`;
