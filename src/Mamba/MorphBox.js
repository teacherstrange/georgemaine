import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Container,
  FigCaption,
  Link,
  CloseIcon,
  CloseButton,
  OpenButton,
} from "./index";

const Image = styled.img`
  transform-origin: center 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  pointer-events: none;
  transform: scale(${(props) => props.currentScale})
    translate(${(props) => props.translateX}%, ${(props) => props.translateY}%);
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

export function MorphBox(props) {
  const gallerySize = props.gallerySize;
  const contentWidth = props.width;
  const contentHeight = props.height;
  const smallWidth = props.smallWidth;
  const smallHeight = props.smallHeight;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendMorphstate = props.sendMorphstate;

  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);

  const [isMorphed, setIsMorphed] = useState(false);
  const [captionX, setCaptionX] = useState(0);
  const [captionY, updateCaptionY] = useState(0);
  const [translateX, updateTranslateX] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(0.14652014652014653);

  function handleMorph(event) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    // Get positions and sizes
    const overlayWidth = isMorphed ? window.innerWidth * 0.8 : smallWidth;
    const overlayHeight = isMorphed ? window.innerHeight * 0.8 : smallHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const captionWidthOffset =
      captionRef.current.getBoundingClientRect().width / 2;
    const imageWidthOffset = imageRef.current.getBoundingClientRect().width / 2;
    const captionHeight = 140 / 2;
    const x = imageRef.current.getBoundingClientRect().x;
    const y = imageRef.current.getBoundingClientRect().y;
    const imageCenterX = x + imageWidthOffset;
    const screenCenterX = screenWidth / 2;

    // Calculate scale
    const scale =
      overlayWidth / overlayHeight > contentWidth / contentHeight
        ? overlayHeight / contentHeight
        : overlayWidth / contentWidth;

    // 1. Scale sizes
    const scaledWidth = contentWidth * scale;
    const scaledHeight = contentHeight * scale;
    const verticalWhitespace = (screenHeight - scaledHeight) / 2;
    const scaledWidthOffset = scaledWidth / 2;

    // 2.1 Image position
    const screenCenterXOffset =
      screenCenterX - imageCenterX - captionWidthOffset;
    const screenCenterYOffset = y - verticalWhitespace;

    // 2.2 Caption position
    const captionCenterX =
      scaledWidthOffset +
      (galleryIndex === 2
        ? captionWidthOffset
        : captionWidthOffset + captionWidthOffset);

    const captionY = scaledHeight / 2 - captionHeight;
    const morphedCaptionY =
      scaledHeight / 2 - captionHeight - y + verticalWhitespace / 2;

    // Translate to percentage
    const translateX = (screenCenterXOffset / scaledWidth) * 100;
    const translateY = (screenCenterYOffset / scaledHeight) * 100;

    // Update values
    updateTranslateX(isMorphed ? translateX : 0);
    updateTranslateY(isMorphed ? -translateY : 0);
    setCurrentScale(scale);
    setCaptionX(isMorphed ? captionCenterX : 253);
    updateCaptionY(isMorphed ? morphedCaptionY : captionY);
  }, [isMorphed]);

  useEffect(() => {
    const dissmissModal = () => {
      setIsMorphed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  return (
    <Container
      isMorphed={isMorphed}
      galleryIndex={galleryIndex}
      gallerySize={gallerySize}
      activeIndex={activeIndex}
      ref={bodyRef}
      onClick={(event) => handleMorph(event)}
    >
      <CloseButton
        ariaLabel='Close'
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <Image
        ref={imageRef}
        width={props.width}
        height={props.height}
        src={props.image}
        currentScale={currentScale}
        isMorphed={isMorphed}
        translateX={translateX}
        translateY={translateY}
      />
      <FigCaption
        ref={captionRef}
        style={{
          transform: `translate3d(${captionX}px, ${captionY}px, 0)`,
        }}
        className={isMorphed && "is-morphed"}
      >
        <strong>{props.project}. </strong>
        {props.description}
        <br />
        <br />
        <Link
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: "var(--red)" }}
          href={props.href}
        >
          {props.label}
        </Link>
      </FigCaption>

      <OpenButton ariaLabel='Open' type='button' isMorphed={isMorphed}>
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
