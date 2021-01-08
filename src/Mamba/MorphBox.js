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

const Shape = styled.img`
  width: 1582px;
  height: 1638px;
  transform-origin: 0 0;
  pointer-events: none;
  transform: scale(${(props) => props.currentScale})
    translate(${(props) => props.translateX}%, ${(props) => props.translateY}%);
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

export function MorphBox(props) {
  const gallerySize = props.gallerySize;
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRightEdge = props.captionRightEdge;

  const shapeRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);

  const [isMorphed, setIsMorphed] = useState(false);
  const [captionX, setCaptionX] = useState(0);
  const [captionY, updateCaptionY] = useState(0);
  const [translateX, updateTranslateX] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(0);

  function handleMorph(event) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    // Get positions and sizes
    const overlayWidth = isMorphed ? window.innerWidth * 0.8 : 303;
    const overlayHeight = isMorphed ? window.innerHeight * 0.8 : 314;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const x = shapeRef.current.getBoundingClientRect().x;
    const y = shapeRef.current.getBoundingClientRect().y;

    // Calculate scale
    const scale =
      overlayWidth / overlayHeight > contentWidth / contentHeight
        ? overlayHeight / contentHeight
        : overlayWidth / contentWidth;

    // Scale sizes
    const scaledWidth = contentWidth * scale;
    const scaledHeight = contentHeight * scale;
    const scaledRightEdge = captionRightEdge * scale;
    const captionHeight = 140 / 2;

    // Calculate scaled positions
    const horizontalWhitespace = screenWidth - scaledWidth;
    const verticalWhitespace = screenHeight - scaledHeight;

    const imageYOffset = verticalWhitespace / 2;
    const scaledImgX = x - horizontalWhitespace / 2;
    const imageY = y - imageYOffset;

    const captionX = scaledWidth / 2 + scaledRightEdge;
    const captionY = scaledHeight / 2 - captionHeight;
    const morphedCaptionY =
      scaledHeight / 2 - captionHeight - y + verticalWhitespace / 2;
    const centeredX =
      scaledWidth / 2.0 + horizontalWhitespace / 2 - x + scaledRightEdge;

    // Optically align image and caption
    const imageX = scaledImgX + 275 / 2;
    const morphedCaptionX = centeredX - 275 / 2;

    // Translate to percentage
    const translateX = (imageX / scaledWidth) * 100;
    const translateY = (imageY / scaledHeight) * 100;

    // Update values
    updateTranslateX(isMorphed ? -translateX : 0);
    updateTranslateY(isMorphed ? -translateY : 0);
    setCurrentScale(scale);
    setCaptionX(isMorphed ? morphedCaptionX : captionX);
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

      <Shape
        ref={shapeRef}
        src={"images/apps.png"}
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
