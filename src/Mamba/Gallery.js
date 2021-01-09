import React, { useState } from "react";
import styled from "styled-components";
import {
  MorphBox,
  MobileMorphBox,
  PreviousArrowIcon,
  PreviousButton,
  NextArrowIcon,
  NextButton,
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
  const [morphstate, sendMorphstate] = useState(false);

  return (
    <GallerySmall>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - currentIndex) * 100}%, 0, 0)`,
          display: "flex",
        }}
      >
        <MobileMorphBox
          gallerySize='small'
          currentIndex={currentIndex}
          sendMorphstate={sendMorphstate}
          {...Apps}
        />
        <MobileMorphBox
          gallerySize='small'
          currentIndex={currentIndex}
          sendMorphstate={sendMorphstate}
          {...Checkout}
        />
      </ItemContainer>

      <PreviousButton
        ariaLabel='Previous'
        style={{
          zIndex: morphstate && -1,
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
          zIndex: morphstate && -1,
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
  const [morphstate, sendMorphstate] = useState();

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
          <MorphBox
            currentIndex={currentIndex}
            sendMorphstate={sendMorphstate}
            {...Apps}
          />

          {/* <LargeMorphVideo
            currentIndex={currentIndex}
            sendMorphstate={sendMorphstate}
            {...Promo}
          /> */}
        </GalleryLargeItem>

        <GalleryLargeItem
          style={{
            transform: `translate3d( ${1 * 100}%, 0, 0)`,
            opacity: 1 - currentIndex === 0 ? 1 : 0,
          }}
        >
          <MorphBox
            currentIndex={currentIndex}
            sendMorphstate={sendMorphstate}
            {...Checkout}
          />
        </GalleryLargeItem>
      </ItemContainer>

      <PreviousButton
        ariaLabel='Previous'
        type='button'
        style={{
          zIndex: morphstate && -1,
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
          zIndex: morphstate && -1,
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
