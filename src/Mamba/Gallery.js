import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MorphBox,
  SmallMorphVideo,
  LargeMorphVideo,
  PreviousArrowIcon,
  PreviousButton,
  NextArrowIcon,
  NextButton,
} from "./index";
import { Apps, Promo, Checkout, ApplePay } from "../Data";

// Variables
const galleryHeight = 314;
const fade = "opacity 0.3s ease 0.5s";

const GallerySmall = styled.div`
  height: ${galleryHeight}px;
  position: relative;

  @media (min-width: 1060px) {
    display: none;
  }
`;

const GalleryLarge = styled.div`
  height: ${galleryHeight}px;
  position: relative;

  @media (max-width: 1059px) {
    display: none;
  }
`;

const ItemContainer = styled.ul`
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1), ${fade};
`;

const GalleryLargeItem = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  transition: ${fade};
`;

export function SmallGallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [morphstate, sendMorphstate] = useState(false);

  return (
    <GallerySmall>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - pageIndex) * 100}%, 0, 0)`,
        }}
      >
        <MorphBox
          gallerySize='small'
          pageIndex={pageIndex}
          sendMorphstate={sendMorphstate}
          {...Apps}
        />
        <SmallMorphVideo
          pageIndex={pageIndex}
          sendMorphstate={sendMorphstate}
          {...Promo}
        />
        <MorphBox
          gallerySize='small'
          pageIndex={pageIndex}
          sendMorphstate={sendMorphstate}
          {...Checkout}
        />

        <SmallMorphVideo
          pageIndex={pageIndex}
          sendMorphstate={sendMorphstate}
          {...ApplePay}
        />
      </ItemContainer>

      <PreviousButton
        style={{
          opacity: pageIndex >= 1 ? 1 : 0,
          visibility: pageIndex >= 1 ? "visible" : "hidden",
          pointerEvents: pageIndex >= 1 ? "auto" : "none",
          zIndex: morphstate && -1,
        }}
        disabled={pageIndex >= 1 ? false : true}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>

      <NextButton
        style={{
          opacity: pageIndex <= 2 ? 1 : 0,
          visibility: pageIndex <= 2 ? "visible" : "hidden",
          pointerEvents: pageIndex <= 2 ? "auto" : "none",
          zIndex: morphstate && -1,
        }}
        disabled={pageIndex <= 2 ? false : true}
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GallerySmall>
  );
}

export function LargeGallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [morphstate, sendMorphstate] = useState();

  return (
    <GalleryLarge>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - pageIndex) * 100}%, 0, 0)`,
        }}
      >
        <GalleryLargeItem
          style={{
            transform: `translate3d( ${0 * 100}%, 0, 0)`,
            opacity: 0 - pageIndex === 0 ? 1 : 0,
          }}
        >
          <MorphBox
            pageIndex={pageIndex}
            sendMorphstate={sendMorphstate}
            {...Apps}
          />
          <LargeMorphVideo
            pageIndex={pageIndex}
            sendMorphstate={sendMorphstate}
            {...Promo}
          />
        </GalleryLargeItem>

        <GalleryLargeItem
          style={{
            transform: `translate3d( ${1 * 100}%, 0, 0)`,
            opacity: 1 - pageIndex === 0 ? 1 : 0,
          }}
        >
          <MorphBox
            pageIndex={pageIndex}
            sendMorphstate={sendMorphstate}
            {...Checkout}
            galleryIndex={0}
          />
          <LargeMorphVideo
            pageIndex={pageIndex}
            sendMorphstate={sendMorphstate}
            {...ApplePay}
            galleryIndex={1}
          />
        </GalleryLargeItem>
      </ItemContainer>

      <PreviousButton
        type='button'
        style={{
          opacity: pageIndex === 1 ? 1 : 0,
          zIndex: morphstate && -1,
          visibility: pageIndex >= 1 ? "visible" : "hidden",
          pointerEvents: pageIndex >= 1 ? "auto" : "none",
          left: -44,
        }}
        disabled={pageIndex === 1 ? false : true}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>
      <NextButton
        type='button'
        style={{
          opacity: pageIndex === 0 ? 1 : 0,
          zIndex: morphstate && -1,
          visibility: pageIndex <= 2 ? "visible" : "hidden",
          pointerEvents: pageIndex <= 2 ? "auto" : "none",
          right: -44,
        }}
        disabled={pageIndex === 0 ? false : true}
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GalleryLarge>
  );
}
