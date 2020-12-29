import React, { useState } from "react";
import styled from "styled-components";
import {
  SmallMorphBox,
  LargeMorphBox,
  PreviousArrowIcon,
  NextArrowIcon,
} from "./index";

const galleryHeight = 314;
const fade = "opacity 0.3s ease 0.5s";
const imageHeight = 250;

const GalleryWrapper = styled.div`
  width: 100%;
`;

const GallerySmall = styled.div`
  width: 100%;
  height: ${galleryHeight}px;
  position: relative;

  @media (min-width: 980px) {
    display: none;
  }
`;

const GalleryLarge = styled.div`
  width: 100%;
  height: ${galleryHeight}px;
  position: relative;

  @media (max-width: 979px) {
    display: none;
  }
`;

const ItemContainer = styled.ul`
  height: 100%;
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1), ${fade};
`;

const GalleryLargeItem = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  opacity: 1;
  transition: ${fade};
`;

const PreviousButton = styled.button`
  position: absolute;
  top: calc(${imageHeight}px / 2 - 20px);
  left: -20px;
  height: 52px;
  width: 52px;
  border-radius: 32px;
  background-color: var(--secondaryFill);
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.25s background-color linear, 0.25s opacity linear;
  outline: none;

  svg path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    svg path {
      stroke: var(--secondaryLabelFill);
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: calc(${imageHeight}px / 2 - 20px);
  right: -20px;
  height: 52px;
  width: 52px;
  border-radius: 32px;
  background-color: var(--secondaryFill);
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: background-color 0.25s linear, opacity 0.25s linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    path {
      stroke: var(--secondaryLabelFill);
    }
  }
`;

function SmallGallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [morphstate, sendMorphstate] = useState(false);

  return (
    <GallerySmall>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - pageIndex) * 100}%, 0, 0)`,
        }}
      >
        {Array(4)
          .fill("")
          .map(function (value, index) {
            return (
              <SmallMorphBox
                key={index}
                backgroundImage={"url(/images/mobile.png)"}
                width={1582}
                height={1638}
                captionRightEdge={820}
                pageIndex={pageIndex}
                galleryIndex={index}
                sendMorphstate={sendMorphstate}
                caption={[
                  <strong>Mollie Apps.</strong>,
                  "During the last quarter of 2019 I designed Mollie’s mobile apps to enable people to quickly manage payments and watch their business grow.",
                  <br />,
                  <br />,
                  <strong>Enjoy managing payments on mobile. </strong>,
                ]}
                href={"https://apps.apple.com/us/app/mollie/id1473455257?ls=1"}
                label={"Download Mollie for Mobile ↗"}
                project={"Mollie Apps"}
              />
            );
          })}
      </ItemContainer>

      <PreviousButton
        style={{
          opacity: pageIndex >= 1 ? 1 : 0,
          zIndex: morphstate && -1,
        }}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>

      <NextButton
        style={{
          opacity: pageIndex <= 2 ? 1 : 0,
          zIndex: morphstate && -1,
        }}
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GallerySmall>
  );
}

function LargeGallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [morphstate, sendMorphstate] = useState();

  return (
    <GalleryLarge>
      <ItemContainer
        style={{
          transform: `translate3d( ${(0 - pageIndex) * 100}%, 0, 0)`,
        }}
      >
        {Array(2)
          .fill("")
          .map(function (value, index) {
            return (
              <GalleryLargeItem
                style={{
                  transform: `translate3d( ${(0 + index) * 100}%, 0, 0)`,
                  opacity: index - pageIndex === 0 ? 1 : 0,
                }}
              >
                {Array(2)
                  .fill("")
                  .map(function (value, index) {
                    return (
                      <LargeMorphBox
                        key={index}
                        backgroundImage={"url(/images/mobile.png)"}
                        width={1582}
                        height={1638}
                        captionRightEdge={820}
                        pageIndex={pageIndex}
                        galleryIndex={index}
                        sendMorphstate={sendMorphstate}
                        caption={[
                          <strong>Mollie Apps.</strong>,
                          "During the last quarter of 2019 I designed Mollie’s mobile apps to enable people to quickly manage payments and watch their business grow.",
                          <br />,
                          <br />,
                          <strong>Enjoy managing payments on mobile. </strong>,
                        ]}
                        href={
                          "https://apps.apple.com/us/app/mollie/id1473455257?ls=1"
                        }
                        label={"Download Mollie for Mobile ↗"}
                        project={"Mollie Apps"}
                      />
                    );
                  })}
              </GalleryLargeItem>
            );
          })}
      </ItemContainer>
      <PreviousButton
        style={{
          opacity: pageIndex === 1 ? 1 : 0,
          zIndex: morphstate && -1,
          left: -44,
        }}
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
      >
        <PreviousArrowIcon />
      </PreviousButton>
      <NextButton
        style={{
          opacity: pageIndex === 0 ? 1 : 0,
          zIndex: morphstate && -1,
          right: -44,
        }}
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
      >
        <NextArrowIcon />
      </NextButton>
    </GalleryLarge>
  );
}

export function Gallery() {
  return (
    <GalleryWrapper>
      <SmallGallery />
      <LargeGallery />
    </GalleryWrapper>
  );
}
