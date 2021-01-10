import React, { useEffect, useRef, useState } from "react";

import {
  Body,
  Container,
  FigCaption,
  CloseIcon,
  CloseButton,
  OpenButton,
  Video,
} from "./index";

export function LargeMorphVideo(props) {
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;

  const captionRef = useRef(null);

  const [isMorphed, setIsMorphed] = useState(false);

  const [currentScale, setCurrentScale] = useState(0.203125);

  function handleMorph() {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    captionRef.current;
  }, []);

  useEffect(() => {
    const dissmissModal = () => {
      setIsMorphed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  useEffect(() => {
    const containerWidth = isMorphed ? window.innerWidth * 0.8 : 427;
    const containerHeight = isMorphed ? window.innerHeight * 0.8 : 240;
    const videoWidth = 1920;
    const videoHeight = 1080;

    // Calculate scale
    const scale =
      containerWidth / containerHeight > videoWidth / videoHeight
        ? containerHeight / videoHeight
        : containerWidth / videoWidth;

    setCurrentScale(scale);
    isMorphed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isMorphed]);

  return (
    <Container isMorphed={isMorphed} galleryIndex={galleryIndex}>
      <CloseButton
        ariaLabel='Close'
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <Video
        currentScale={currentScale}
        preload='metadata'
        poster={props.poster}
        src={props.src}
        isMorphed={isMorphed}
        className={isMorphed && "is-morphed"}
      />

      <FigCaption ref={captionRef} className={isMorphed && "is-morphed"}>
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
      isMorphedTop={isMorphedTop}
      isMorphedLeft={isMorphedLeft}
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
