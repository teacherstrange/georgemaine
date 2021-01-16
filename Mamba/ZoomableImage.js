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

export function ZoomableImage(props) {
  const gallerySize = props.gallerySize;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendZoomState = props.sendZoomState;

  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);

  const [isZoomed, setisZoomed] = useState(false);
  const [captionX, setCaptionX] = useState(0);
  const [captionY, updateCaptionY] = useState(0);
  const [translateX, updateTranslateX] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.desktopScale);

  function handleZoom(event) {
    setisZoomed(!isZoomed);
    sendZoomState(!isZoomed);
  }

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const container = {
      width: isZoomed ? screenWidth * 0.8 : props.smallWidth,
      height: isZoomed ? screenHeight * 0.8 : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const imageY = imageRef.current.getBoundingClientRect().y;
    const textHeightOffset = captionRef.current.scrollHeight / 2;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textWidth = captionRef.current.scrollWidth;

    // Calculate scale
    const scale = calculateScale(container, content);
    const imageHeight = content.height * scale;
    const imageWidth = content.width * scale;
    const captionOffsetX = props.captionRightEdge * scale;

    // 1. Scale sizes
    const imageWhitespaceY = screenHeight - imageHeight;
    const imageWhitespaceX = (screenWidth - imageWidth) / 2;
    const textWhitespaceX = (screenWidth - textWidth) / 2;
    const imageOffsetX = imageWidth / 2 + (captionOffsetX + textWidth);
    const contentWhitespaceX = (screenWidth - imageOffsetX) / 2;

    // 2.1 Image position
    const imageZoomY = imageY - imageWhitespaceY / 2;
    const imageZoomX = 240 - imageWhitespaceX + contentWhitespaceX;
    const textZoomY =
      textY - imageWhitespaceY / 2 - imageHeight / 2 + textHeightOffset;
    const textZoomX =
      240 -
      textWhitespaceX +
      contentWhitespaceX +
      imageWidth / 2 +
      captionOffsetX;

    // Update values
    updateTranslateX(isZoomed ? imageZoomX : 0);
    updateTranslateY(isZoomed ? -imageZoomY : 0);
    setCurrentScale(scale);
    setCaptionX(isZoomed ? textZoomX : 0);
    updateCaptionY(isZoomed ? -textZoomY : 0);
  }, [isZoomed]);

  useEffect(() => {
    const dissmissModal = () => {
      setisZoomed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

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
        isZoomed={isZoomed}
        style={{
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, ${translateX}, ${translateY})`,
        }}
      />
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isZoomed ? 1 : 0.65}, 0, 0, ${
            isZoomed ? 1 : 0.65
          }, ${captionX}, ${captionY})`,
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
