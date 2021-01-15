import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  FigCaption,
  Link,
  CloseIcon,
  CloseButton,
  OpenButton,
  Overlay,
  calculateScale,
  Image,
} from "./index";

export function MobileMorphBox(props) {
  const gallerySize = props.gallerySize;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendMorphstate = props.sendMorphstate;
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);
  const [isMorphed, setIsMorphed] = useState(false);
  const [captionY, updateCaptionY] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(0.14652014652014653);

  function handleMorph(event) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    const container = {
      width: isMorphed ? window.innerWidth * props.scale : props.smallWidth,
      height: isMorphed ? window.innerHeight * props.scale : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const imageY = imageRef.current.getBoundingClientRect().y;
    const screenHeight = window.innerHeight;
    const textHeightOffset = captionRef.current.scrollHeight;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textBaseY = 285;

    // Calculate scale
    const scale = calculateScale(container, content);

    // 1. Scale sizes
    const imageHeight = content.height * scale;
    const verticalWhitespace = screenHeight - (imageHeight + textHeightOffset);

    // 2.1 Calculate positions
    const imageMorphY = imageY - verticalWhitespace / 2;
    const textMorphY = textY - imageHeight - textBaseY - verticalWhitespace / 2;

    // Update values
    updateTranslateY(isMorphed ? -imageMorphY : 0);
    setCurrentScale(scale);
    updateCaptionY(isMorphed ? -textMorphY : textBaseY);
  }, [isMorphed]);

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
      : document.body.removeAttribute("style");
  }, [isMorphed]);

  return (
    <Container
      isMorphed={isMorphed}
      galleryIndex={galleryIndex}
      gallerySize={gallerySize}
      activeIndex={activeIndex}
      ref={bodyRef}
      onClick={(event) => handleMorph(event)}
    >
      <Overlay isMorphed={isMorphed}>
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
          isMorphed={isMorphed}
        >
          <CloseIcon />
        </CloseButton>
      </Overlay>
      <Image
        ref={imageRef}
        width={props.width}
        height={props.height}
        src={props.image}
        currentScale={currentScale}
        isMorphed={isMorphed}
        style={{
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, 0, ${translateY})`,
        }}
      />
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isMorphed ? 1 : 0.65}, 0, 0, ${
            isMorphed ? 1 : 0.65
          }, 0, ${captionY})`,
        }}
        className={isMorphed && "is-morphed"}
      >
        <strong>{props.project}. </strong>
        {props.description}
        {props.href && (
          <>
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
          </>
        )}
      </FigCaption>
      <OpenButton ariaLabel='Open' type='button' isMorphed={isMorphed}>
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
