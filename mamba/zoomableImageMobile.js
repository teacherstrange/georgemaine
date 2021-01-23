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

export function ZoomableImageMobile(props) {
  const gallerySize = props.gallerySize;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendZoomState = props.sendZoomState;
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [captionY, updateCaptionY] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  function handleZoom(event) {
    setisZoomed(!isZoomed);
    sendZoomState(!isZoomed);
  }

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const container = {
      width: isZoomed
        ? screenWidth * props.scale.targetMobile
        : props.smallWidth,
      height: isZoomed
        ? screenHeight * props.scale.targetMobile
        : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const imageY = imageRef.current.getBoundingClientRect().y;
    const textHeightOffset = captionRef.current.scrollHeight;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textBaseY = 285;

    // Calculate scale
    const scale = calculateScale(container, content);

    // 1. Scale sizes
    const imageHeight = content.height * scale;
    const screenWhitespace = screenHeight - (imageHeight + textHeightOffset);

    // 2.1 Calculate positions
    const imageZoomY = imageY - screenWhitespace / 2;
    const textZoomY = textY - imageHeight - textBaseY - screenWhitespace / 2;

    // Update values
    updateTranslateY(isZoomed ? -imageZoomY : 0);
    setCurrentScale(scale);
    updateCaptionY(isZoomed ? -textZoomY : textBaseY);
  }, [isZoomed]);

  useEffect(() => {
    const dismissModal = () => {
      setisZoomed(false);
    };
    window.addEventListener("resize", dismissModal);
    return () => window.removeEventListener("resize", dismissModal);
  }, []);

  useEffect(() => {
    isZoomed
      ? (document.body.style = "overflow: hidden")
      : document.body.removeAttribute("style");
  }, [isZoomed]);

  return (
    <Container
      isZoomed={isZoomed}
      galleryIndex={galleryIndex}
      gallerySize={gallerySize}
      activeIndex={activeIndex}
      ref={bodyRef}
      onClick={(event) => handleZoom(event)}
    >
      <Overlay isZoomed={isZoomed}>
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setisZoomed(!isZoomed), sendZoomState(!isZoomed))}
          isZoomed={isZoomed}
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
        isZoomed={isZoomed}
        style={{
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, 0, ${translateY})`,
        }}
      />
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isZoomed ? 1 : 0.65}, 0, 0, ${
            isZoomed ? 1 : 0.65
          }, 0, ${captionY})`,
        }}
        className={isZoomed && "is-zoomed"}
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
      <OpenButton ariaLabel='Open' type='button' isZoomed={isZoomed}>
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
