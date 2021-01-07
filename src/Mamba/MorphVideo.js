import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Container,
  FigCaption,
  CloseIcon,
  CloseButton,
  OpenButton,
  Video,
} from "./index";

const MorphTransition = "all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)";

const MorphContent = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 64px;
  display: flex;
  align-items: center;
  transition: ${MorphTransition};

  &.is-morphed {
    left: 10vh;
    right: 50vh;
    top: 10vh;
    bottom: 10vh;
  }

  @media (max-width: 1023px) {
    justify-content: center;

    &.is-morphed {
      top: 16vh;
      bottom: 42vh;
      left: 4vh;
      right: 4vh;
    }

    figcaption {
      padding-top: calc(100% + 32px);
    }
  }
`;

export function LargeMorphVideo(props) {
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRightEdges = props.captionRightEdge;

  const contentRef = useRef(null);
  const captionRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [isMorphedTop, setIsMorphedTop] = useState(0);
  const [isMorphedLeft, setisMorphedLeft] = useState(0);
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

  function handleMorph(ref) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
    const screenWidth = window.innerWidth;
    const screenOffset = screenWidth - viewportWidth;
    const galleryOffset = galleryIndex * screenOffset;
    setIsMorphedTop(-ref.current.getBoundingClientRect().top);
    setisMorphedLeft(-ref.current.getBoundingClientRect().left - galleryOffset);
  }

  useEffect(() => {
    contentRef.current, captionRef.current;
  }, []);

  useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setViewportWidth(entry.contentRect.width);
        setViewportHeight(entry.contentRect.height);
      });
    });

    myObserver.observe(contentRef.current);
  }, []);

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
    >
      <CloseButton
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <MorphContent ref={contentRef} className={isMorphed && "is-morphed"}>
        <Video
          preload='metadata'
          poster={props.poster}
          src={props.src}
          isMorphed={isMorphed}
          className={isMorphed && "is-morphed"}
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
      </MorphContent>

      <OpenButton
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
  const [isMorphedTop, setIsMorphedTop] = useState(0);
  const [isMorphedLeft, setisMorphedLeft] = useState(0);
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

  function handleMorph(ref) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
    const screenWidth = window.innerWidth;
    const screenOffset = screenWidth - viewportWidth;
    const galleryOffset = galleryIndex * screenOffset;
    setIsMorphedTop(-ref.current.getBoundingClientRect().top);
    setisMorphedLeft(-ref.current.getBoundingClientRect().left - galleryOffset);
  }

  useEffect(() => {
    contentRef.current, captionRef.current;
  }, []);

  useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setViewportWidth(entry.contentRect.width);
        setViewportHeight(entry.contentRect.height);
      });
    });

    myObserver.observe(contentRef.current);
  }, []);

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
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <MorphContent ref={contentRef} className={isMorphed && "is-morphed"}>
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
      </MorphContent>

      <OpenButton
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
