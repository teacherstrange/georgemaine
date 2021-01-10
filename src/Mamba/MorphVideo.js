import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  FigCaption,
  CloseIcon,
  CloseButton,
  OpenButton,
  Video,
  Overlay,
} from "./index";

export function LargeMorphVideo(props) {
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRef = useRef(null);
  const tvRef = useRef(null);
  const overlayRef = useRef(null);
  const [isMorphed, setIsMorphed] = useState(false);
  const [tvScale, setTvScale] = useState(0.1640625);
  const [reverseScale, setReverseScale] = useState(0);
  const [tvX, updateTvX] = useState(0);
  const [tvY, updateTvY] = useState(30);
  const [textY, updateTextY] = useState(0);
  const [textX, updateTextX] = useState(0);
  const [overlayY, updateOverlayY] = useState(0);
  const [overlayX, updateOverlayX] = useState(0);

  function handleMorph() {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    const dissmissModal = () => {
      setIsMorphed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  useEffect(() => {
    const containerWidth = isMorphed ? window.innerWidth * 0.6 : 315;
    const containerHeight = isMorphed ? window.innerHeight * 0.6 : 180;
    const videoWidth = 1920;
    const videoHeight = 1080;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textHeightOffset = captionRef.current.scrollHeight / 2;
    const tvY = tvRef.current.getBoundingClientRect().y;
    const tvX = tvRef.current.getBoundingClientRect().x;
    const tvWidthOffset = tvRef.current.getBoundingClientRect().width / 2;
    const tvCenterX = tvX + tvWidthOffset;
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;
    const overlayY = overlayRef.current.getBoundingClientRect().y;
    const overlayX =
      Math.abs(overlayRef.current.getBoundingClientRect().x) - 480;

    // Calculate scale
    const scale =
      containerWidth / containerHeight > videoWidth / videoHeight
        ? containerHeight / videoHeight
        : containerWidth / videoWidth;
    const reverseScale = 1 / scale;

    // Scale sizes
    const tvHeight = videoHeight * scale;
    const verticalWhitespace = (window.innerHeight - tvHeight) / 2;
    const videoOffsetX = (videoWidth * scale) / 2;

    // 2.1 Image position
    const tvCenterXOffset = screenCenterX - tvCenterX - 160;
    const tvCenterYOffset = tvY - verticalWhitespace;
    const textOffsetY = textY - screenCenterY + textHeightOffset;
    const textOffsetX = videoOffsetX - (480 - 375) * 1 - 110;
    console.log("This is overlayX:", overlayX);
    console.log("This is overlayY:", overlayY);
    updateOverlayX(isMorphed ? overlayX : 0);
    updateOverlayY(isMorphed ? -overlayY : 0);
    updateTvX(isMorphed ? tvCenterXOffset : 0);
    updateTvY(isMorphed ? -tvCenterYOffset : 30);
    updateTextY(isMorphed ? -textOffsetY : 0);
    updateTextX(isMorphed ? textOffsetX : 0);
    setReverseScale(reverseScale);
    setTvScale(scale);

    isMorphed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isMorphed]);

  return (
    <Container isMorphed={isMorphed} galleryIndex={galleryIndex}>
      <Overlay
        ref={overlayRef}
        isMorphed={isMorphed}
        overlayX={overlayX}
        overlayY={overlayY}
      >
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
          isMorphed={isMorphed}
        >
          <CloseIcon />
        </CloseButton>
      </Overlay>
      <div
        ref={tvRef}
        style={{
          borderRadius: 4,
          border: "3px solid #111",
          position: "absolute",
          transform: `matrix(${tvScale}, 0, 0, ${tvScale}, ${tvX}, ${tvY})`,
          transformOrigin: "center 0",
          transition: "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
        }}
      >
        <Video
          reverseScale={reverseScale}
          preload='metadata'
          poster={props.poster}
          src={props.src}
          isMorphed={isMorphed}
          className={isMorphed && "is-morphed"}
        />
      </div>
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isMorphed ? 1 : 0.6}, 0, 0, ${
            isMorphed ? 1 : 0.6
          }, ${textX}, ${textY})`,
        }}
        className={isMorphed && "is-morphed"}
      >
        <strong>{props.project}. </strong>
        {props.description}
      </FigCaption>

      <OpenButton
        ariaLabel='Open'
        type='button'
        onClick={() => handleMorph()}
        isMorphed={isMorphed}
      >
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}

export function SmallMorphVideo(props) {
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const transformedIndex = props.galleryIndex - props.currentIndex;
  const captionRightEdges = props.captionRightEdge;

  const contentRef = useRef(null);
  const captionRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [captionX, setCaptionX] = useState(0);

  function layoutCaptions() {
    const scale =
      viewportWidth / viewportHeight > contentWidth / contentHeight
        ? viewportHeight / contentHeight
        : viewportWidth / contentWidth;
    const xPos = viewportWidth / 2.0 + captionRightEdges * scale;
    const x = Math.round(xPos);
    setCaptionX(x);
  }

  function handleMorph() {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    layoutCaptions();
  }, [layoutCaptions]);

  useEffect(() => {
    const dissmissModal = () => {
      setIsMorphed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  useEffect(() => {
    isMorphed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isMorphed]);

  return (
    <Container
      isMorphed={isMorphed}
      galleryIndex={galleryIndex}
      style={{
        opacity: transformedIndex === 0 ? 1 : 0,
      }}
    >
      <CloseButton
        ariaLabel='Close'
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <Video
        preload='metadata'
        isMorphed={isMorphed}
        poster={props.poster}
        src={props.src}
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
      </FigCaption>

      <OpenButton
        ariaLabel='Open'
        type='button'
        onClick={() => handleMorph(contentRef)}
        isMorphed={isMorphed}
      >
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
