import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
  Caption,
  FigCaption,
  Link,
  CloseIcon,
  CloseButton,
  OpenButton,
  Video,
  VideoContainer,
} from "./index";

const MorphTransition = "all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)";
const fadeIn = "opacity .3s ease .5s";

const Container = styled.li`
  height: 314px;
  width: 100%;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  background-color: transparent;
  top: 0;
  left: 0;
  transform: translate3d(${(props) => 100 * props.galleryIndex}%, 0, 0);
  ${(props) =>
    props.isMorphed &&
    css`
      top: ${props.isMorphedTop}px;
      left: ${props.isMorphedLeft}px;
      z-index: 2;
      width: 100vw;
      height: 100vh;
      background-color: var(--overlay);
      backdrop-filter: blur(20px) saturate(50%);
    `}

  ${(props) =>
    props.gallerySize &&
    css`
      opacity: ${props.activeIndex === 0 ? 1 : 0};
    `}
  @media (min-width: 1060px) {
    width: 50%;
  }
  transition: ${MorphTransition}, ${fadeIn};
`;

const Body = styled.figure`
  ${(props) =>
    props.image &&
    css`
      background-image: ${props.image};
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    `}
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 64px;
  transition: ${MorphTransition};

  ${(props) =>
    props.isMorphed &&
    css`
      left: 10vh;
      right: 50vh;
      top: 10vh;
      bottom: 10vh;

      @media (max-width: 1023px) {
        top: 16vh;
        bottom: 42vh;
        left: 4vh;
        right: 4vh;
      }
    `}
`;

const Label = styled(Caption)`
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

export function MorphBox(props) {
  const gallerySize = props.gallerySize;
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;

  // Difference — Get index to determine LTR layout
  const activeIndex = props.galleryIndex - props.pageIndex;
  const sendMorphstate = props.sendMorphstate;

  // Distance between the center of the body and its optical right edge in the coordinate system of the native image resolution
  const captionRightEdges = props.captionRightEdge;

  const bodyRef = useRef(null);
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
    setisMorphedLeft(-ref.current.getBoundingClientRect().left - galleryOffset);
    setIsMorphedTop(-ref.current.getBoundingClientRect().top);
  }

  useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setViewportWidth(entry.contentRect.width);
        setViewportHeight(entry.contentRect.height);
      });
    });

    myObserver.observe(bodyRef.current);
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
      gallerySize={gallerySize}
      activeIndex={activeIndex}
    >
      <CloseButton
        type='button'
        onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
        isMorphed={isMorphed}
      >
        <CloseIcon />
      </CloseButton>

      <Body ref={bodyRef} image={props.image} isMorphed={isMorphed}>
        {props.video && (
          <VideoContainer isMorphed={isMorphed}>
            <Video controls preload='metadata' poster={props.poster}>
              <source src={props.video} />
            </Video>
          </VideoContainer>
        )}
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
      </Body>

      <OpenButton
        type='button'
        onClick={() => handleMorph(bodyRef)}
        isMorphed={isMorphed}
      >
        <Label>
          <strong>{props.project}</strong>
          <br />
          Learn more
        </Label>
      </OpenButton>
    </Container>
  );
}
