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

  const [viewportHeight, setViewportHeight] = useState(480);
  const [viewportWidth, setViewportWidth] = useState(314);
  const [isMorphed, setIsMorphed] = useState(false);

  const [captionX, setCaptionX] = useState(0);
  const [translateX, updateTranslateX] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(0);

  function handleMorph(event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
    setViewportWidth(isMorphed ? screenWidth : event.target.clientWidth);
    setViewportHeight(isMorphed ? screenHeight : event.target.clientHeight);
  }

  useEffect(() => {
    // Set width
    const overlayWidth = isMorphed ? window.innerWidth * 0.8 : 303;
    const overlayHeight = isMorphed ? window.innerHeight * 0.8 : 314;

    // Calculate scale
    const scale =
      overlayWidth / overlayHeight > contentWidth / contentHeight
        ? overlayHeight / contentHeight
        : overlayWidth / contentWidth;

    // Get positions and sizes
    const x = shapeRef.current.getBoundingClientRect().x;
    const y = shapeRef.current.getBoundingClientRect().y;

    const scaledWidth = contentWidth * scale;
    const scaledHeight = contentHeight * scale;
    const scaledRightEdge = captionRightEdge * scale;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate positions
    const horizontalWhitespace = screenWidth - scaledWidth;
    const verticalWhitespace = screenHeight - scaledHeight;
    const calculatedY = verticalWhitespace / 2;
    const xOffset = x - horizontalWhitespace / 2;
    const yOffset = y - calculatedY;
    const captionX = scaledWidth / 2.0 + scaledRightEdge;
    const centeredX =
      scaledWidth / 2.0 + horizontalWhitespace / 2 - x + scaledRightEdge;

    // Add caption offset
    const imageX = xOffset + 275 / 2;
    const morphedCaptionX = centeredX - 275 / 2;
    console.log("This is imageX:", imageX);
    console.log("This is xOffset:", xOffset);

    // Translate to percentage
    const translateX = (imageX / scaledWidth) * 100;
    const translateY = (yOffset / scaledHeight) * 100;

    // Update values
    updateTranslateX(isMorphed ? -translateX : 0);
    updateTranslateY(isMorphed ? -translateY : 0);
    setCurrentScale(scale);

    setCaptionX(isMorphed ? morphedCaptionX : captionX);
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
          transform: `translate3d(${captionX}px, 0, 0)`,
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
