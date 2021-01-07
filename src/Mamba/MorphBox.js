import React, { useEffect, useRef, useState } from "react";
import {
  Body,
  Container,
  FigCaption,
  Link,
  CloseIcon,
  CloseButton,
  OpenButton,
} from "./index";

export function MorphBox(props) {
  const gallerySize = props.gallerySize;
  const contentWidth = props.width;
  const contentHeight = props.height;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRightEdges = props.captionRightEdge;

  const bodyRef = useRef(null);
  const captionRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [isMorphedTop, setIsMorphedTop] = useState(0);
  const [isMorphedLeft, setisMorphedLeft] = useState(0);
  const [captionX, setCaptionX] = useState(0);

  function layoutCaptions(setCaptionX) {
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
    const observeViewportSize = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setViewportWidth(entry.contentRect.width);
        setViewportHeight(entry.contentRect.height);
      });
    });

    observeViewportSize.observe(bodyRef.current);
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
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
