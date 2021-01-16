import React, { useState } from "react";
import styled from "styled-components";
import {
  ZoomableImage,
  ZoomableVideoMobile,
  PreviousArrowIcon,
  PreviousButton,
  NextArrowIcon,
  NextButton,
  ZoomableVideo,
  ZoomableImageMobile,
} from "./index";
import { Apps, Promo, Checkout, ApplePay } from "../Data";

const GallerySmall = styled.div`
  height: 314px;
  position: relative;

  @media (min-width: 1060px) {
    display: none;
  }
`;

const GalleryLarge = styled.div`
  height: 314px;
  position: relative;

  @media (max-width: 1059px) {
    display: none;
  }
`;

const ItemContainer = styled.ul`
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.3s ease 0.5s;
`;

const GalleryLargeItem = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  transition: opacity 0.3s ease 0.5s; ;
`;

export function SmallGallery() {
  const [currentIndex, setCurrentindex] = useState(0);
  const [zoomState, sendZoomState] = useState(false);

  return (
    <GallerySmall>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - currentIndex) * 100}%, 0, 0)`,
          display: "flex",
        }}
      >
        <ZoomableImageMobile
          gallerySize='small'
          currentIndex={currentIndex}
          sendZoomState={sendZoomState}
          {...Apps}
        />
        <ZoomableVideoMobile
          currentIndex={currentIndex}
          gallerySize='small'
          sendZoomState={sendZoomState}
          {...Promo}
        />
        <ZoomableImageMobile
          gallerySize='small'
          currentIndex={currentIndex}
          sendZoomState={sendZoomState}
          {...Checkout}
        />
        <ZoomableVideoMobile
          currentIndex={currentIndex}
          gallerySize='small'
          sendZoomState={sendZoomState}
          {...ApplePay}
        />
      </ItemContainer>

      <PreviousButton
        ariaLabel='Previous'
        style={{
          zIndex: zoomState && -1,
        }}
        disabled={currentIndex >= 1 ? false : true}
        onClick={() => {
          setCurrentindex(currentIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>

      <NextButton
        ariaLabel='Next'
        style={{
          zIndex: zoomState && -1,
        }}
        disabled={currentIndex <= 2 ? false : true}
        onClick={() => {
          setCurrentindex(currentIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GallerySmall>
  );
}

export function LargeGallery() {
  const [currentIndex, setCurrentindex] = useState(0);
  const [zoomState, sendZoomState] = useState();

  return (
    <GalleryLarge>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - currentIndex) * 100}%, 0, 0)`,
        }}
      >
        <GalleryLargeItem
          style={{
            transform: `translate3d( ${0 * 100}%, 0, 0)`,
            opacity: 0 - currentIndex === 0 ? 1 : 0,
          }}
        >
          <ZoomableImage
            currentIndex={currentIndex}
            sendZoomState={sendZoomState}
            {...Apps}
          />

          <ZoomableVideo
            currentIndex={currentIndex}
            sendZoomState={sendZoomState}
            {...Promo}
          />
        </GalleryLargeItem>

        <GalleryLargeItem
          style={{
            transform: `translate3d( ${1 * 100}%, 0, 0)`,
            opacity: 1 - currentIndex === 0 ? 1 : 0,
          }}
        >
          <ZoomableImage
            currentIndex={currentIndex}
            sendZoomState={sendZoomState}
            {...Checkout}
          />
          <ZoomableVideo
            currentIndex={currentIndex}
            sendZoomState={sendZoomState}
            {...ApplePay}
          />
        </GalleryLargeItem>
      </ItemContainer>

      <PreviousButton
        ariaLabel='Previous'
        type='button'
        style={{
          zIndex: zoomState && -1,
        }}
        disabled={currentIndex === 1 ? false : true}
        onClick={() => {
          setCurrentindex(currentIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>
      <NextButton
        ariaLabel='Next'
        type='button'
        style={{
          zIndex: zoomState && -1,
        }}
        disabled={currentIndex === 0 ? false : true}
        onClick={() => {
          setCurrentindex(currentIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GalleryLarge>
  );
}
