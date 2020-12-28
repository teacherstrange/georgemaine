import React, { useState } from "react";
import styled from "styled-components";
import { MorphBox } from "./index";

const GalleryWrapper = styled.div`
  width: 100%;
`;

const GallerySmall = styled.div`
  width: 100%;
  height: 314px;
  display: none;

  @media (max-width: 979px) {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`;

const ItemContainer = styled.ul`
  height: 100%;
  transition: transform 1s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.3s ease 0.5s;
`;

const PreviousButton = styled.button`
  position: absolute;
  top: calc(250px / 2 - 20px);
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

  svg path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    svg path {
      stroke: var(--secondaryLabelFill);
    }
  }
`;

function PreviousArrowIcon() {
  return (
    <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.5 2.5l-8 9.5 8 9.5'
        stroke='var(--primaryLabelFill)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function NextArrowIcon() {
  return (
    <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.5 2.5l8 9.5-8 9.5'
        stroke='var(--primaryLabelFill)'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

const NextButton = styled.button`
  position: absolute;
  top: calc(250px / 2 - 20px);
  right: -20px;
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
  transition: background-color 0.25s linear, opacity 0.25s linear;

  path {
    color: var(--primaryLabelFill);
    transition: stroke 0.25s linear;
  }

  &:hover {
    background-color: var(--tertiaryFill);
    color: var(--secondaryLabelFill);

    path {
      stroke: var(--secondaryLabelFill);
    }
  }
`;

export function Gallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [morphstate, sendMorphstate] = useState();
  return (
    <GalleryWrapper>
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
                <MorphBox
                  key={index}
                  backgroundImage={"url(/images/mobile.png)"}
                  width={1582}
                  height={1638}
                  captionRightEdge={820}
                  pageIndex={pageIndex}
                  currentIndex={index}
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
    </GalleryWrapper>
  );
}
