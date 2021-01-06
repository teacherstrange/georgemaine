import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Caption, FigCaption, CloseIcon, Video } from "./index";

const MorphTransition = "all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)";
const fadeIn = "opacity .3s ease .5s";

const MorphContainer = styled.li`
  height: 314px;
  width: 100%;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  background-color: transparent;
  transition: ${MorphTransition}, ${fadeIn};
  top: 0;
  left: 0;

  &.is-morphed {
    width: 100vw;
    height: 100vh;
    background-color: var(--overlay);
    backdrop-filter: blur(20px) saturate(50%);
  }

  @media (min-width: 1060px) {
    width: 50%;
  }
`;

const MorphContent = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 64px;
  display: flex;
  transition: ${MorphTransition};

  &.is-morphed {
    left: 10vh;
    right: 50vh;
    top: 10vh;
    bottom: 10vh;
  }

  @media (max-width: 1023px) {
    &.is-morphed {
      top: 16vh;
      bottom: 42vh;
      left: 4vh;
      right: 4vh;
    }
  }
`;

const MorphCloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  height: 36px;
  width: 36px;
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
  opacity: 0;
  transition: background-color 0.25s linear;

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

  &.is-morphed {
    opacity: 1;
    transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s,
      background-color 0.25s linear;
  }
`;

const MorphOpenButton = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 1;
  font: inherit;
  color: inherit;
  transition: opacity 0.229s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
  opacity: 1;

  &.is-morphed {
    opacity: 0;
    transition: opacity 0.129s cubic-bezier(0.52, 0.16, 0.24, 1);
    pointer-events: none;
  }

  @media (max-width: 1023px) {
    &.is-morphed {
      transition: opacity 0.24s cubic-bezier(0.52, 0.16, 0.24, 1);
    }
  }
`;

const MorphCaption = styled(Caption)`
  position: absolute;
  bottom: 0;
  left: calc((100% - 90px) / 2);
  transition: ${MorphTransition};

  @media (min-width: 540px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

// Video added

export function LargeMorphVideo(props) {
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;

  // Distance between the center of the image and its optical right edge in the coordinate system of the native image resolution
  const captionRightEdges = props.captionRightEdge;

  const contentRef = useRef(null);
  const captionRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [morphTop, setMorphTop] = useState(0);
  const [morphLeft, setMorphLeft] = useState(0);
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
    setMorphTop(-ref.current.getBoundingClientRect().top);
    setMorphLeft(-ref.current.getBoundingClientRect().left - galleryOffset);
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
    <MorphContainer
      style={{
        top: isMorphed ? morphTop : null,
        left: isMorphed ? morphLeft : null,
        transform: `translate3d( ${100 * galleryIndex}%, 0, 0)`,
        zIndex: isMorphed ? 20 : null,
      }}
      className={isMorphed && "is-morphed"}
    >
      <MorphCloseButton
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        className={isMorphed && "is-morphed"}
      >
        <CloseIcon />
      </MorphCloseButton>

      <MorphContent ref={contentRef} className={isMorphed && "is-morphed"}>
        <Video preload='metadata' className={isMorphed && "is-morphed"} />

        <FigCaption
          ref={captionRef}
          style={{
            transform: `translate3d(${captionX}px, 0, 0)`,
          }}
          className={isMorphed && "is-morphed"}
        >
          {props.children}
        </FigCaption>
      </MorphContent>

      <MorphOpenButton
        type='button'
        onClick={() => handleMorph(contentRef)}
        className={isMorphed && "is-morphed"}
      >
        <MorphCaption className={isMorphed && "is-morphed"}>
          <strong>{props.project}</strong>
          <br />
          Learn more
        </MorphCaption>
      </MorphOpenButton>
    </MorphContainer>
  );
}

export function SmallMorphVideo(props) {
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const transformedIndex = props.galleryIndex - props.pageIndex;

  // Distance between the center of the image and its optical right edge in the coordinate system of the native image resolution
  const captionRightEdges = props.captionRightEdge;

  const contentRef = useRef(null);
  const captionRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [morphTop, setMorphTop] = useState(0);
  const [morphLeft, setMorphLeft] = useState(0);
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
    setMorphTop(-ref.current.getBoundingClientRect().top);
    setMorphLeft(-ref.current.getBoundingClientRect().left - galleryOffset);
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
    <MorphContainer
      style={{
        top: isMorphed ? morphTop : null,
        left: isMorphed ? morphLeft : null,
        transform: `translate3d( ${100 * galleryIndex}%, 0, 0)`,
        opacity: transformedIndex === 0 ? 1 : 0,
        zIndex: isMorphed ? 20 : null,
      }}
      className={isMorphed && "is-morphed"}
    >
      <MorphCloseButton
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        className={isMorphed && "is-morphed"}
      >
        <CloseIcon />
      </MorphCloseButton>

      <MorphContent ref={contentRef} className={isMorphed && "is-morphed"}>
        <Video preload='metadata' poster={props.poster} src={props.src} />
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

      <MorphOpenButton
        type='button'
        onClick={() => handleMorph(contentRef)}
        className={isMorphed && "is-morphed"}
      >
        <MorphCaption className={isMorphed && "is-morphed"}>
          <strong>{props.project}</strong>
          <br />
          Learn more
        </MorphCaption>
      </MorphOpenButton>
    </MorphContainer>
  );
}
