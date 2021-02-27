import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  FigCaption,
  CloseIcon,
  CloseButton,
  OpenButton,
  Video,
  Overlay,
  Tv,
  calculateScale,
} from "./index";

export function ZoomableVideo(props) {
  const galleryIndex = props.galleryIndex;
  const sendZoomState = props.sendZoomState;
  const captionRef = useRef(null);
  const tvRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [tvScale, setTvScale] = useState(props.scale.initial);
  const [reverseScale, setReverseScale] = useState(props.scale.reverse);
  const [tvX, updateTvX] = useState(0);
  const [tvY, updateTvY] = useState(30);
  const [textY, updateTextY] = useState(0);
  const [textX, updateTextX] = useState(0);

  function handleZoom() {
    setisZoomed(!isZoomed);
    sendZoomState(!isZoomed);
  }

  useEffect(() => {
    const dismissModal = () => {
      setisZoomed(false);
      sendZoomState(false);
    };
    window.addEventListener("resize", dismissModal);
    return () => window.removeEventListener("resize", dismissModal);
  }, []);

  useEffect(() => {
    const dismissModal = (e) => {
      e.keyCode === 27 && setisZoomed(false), sendZoomState(false);
    };
    window.addEventListener("keydown", dismissModal);
    return () => window.removeEventListener("keydown", dismissModal);
  }, []);

  useEffect(() => {
    const container = {
      width: isZoomed
        ? window.innerWidth * props.scale.target
        : props.smallWidth,
      height: isZoomed
        ? window.innerHeight * props.scale.target
        : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const textY = captionRef.current.getBoundingClientRect().y;
    const textOffsetHeight = captionRef.current.scrollHeight / 2;
    const tvY = tvRef.current.getBoundingClientRect().y;
    const tvX = tvRef.current.getBoundingClientRect().x;
    const textOffsetWidth = tvRef.current.getBoundingClientRect().width / 2;
    const tvCenterX = tvX + textOffsetWidth;
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    // Calculate scale
    const scale = calculateScale(container, content);
    const reverseScale = 1 / scale;

    // Scale sizes
    const tvHeight = content.height * scale;
    const screenOffsetHeight = (window.innerHeight - tvHeight) / 2;
    const videoOffsetX = (content.width * scale) / 2;

    // 2.1 Image position
    const tvIsZoomedX = screenCenterX - tvCenterX - 160;
    const tvIsZoomedY = tvY - screenOffsetHeight;
    const textIsZoomedY = textY - screenCenterY + textOffsetHeight;
    const textIsZoomedX = videoOffsetX - (480 - 375) * 1 - 110;

    updateTvX(isZoomed ? tvIsZoomedX : 0);
    updateTvY(isZoomed ? -tvIsZoomedY : 30);
    updateTextY(isZoomed ? -textIsZoomedY : 0);
    updateTextX(isZoomed ? textIsZoomedX : 0);
    setReverseScale(reverseScale);
    setTvScale(scale);

    isZoomed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isZoomed]);

  return (
    <Container isZoomed={isZoomed} galleryIndex={galleryIndex}>
      <Overlay isZoomed={isZoomed} video>
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setisZoomed(!isZoomed), sendZoomState(!isZoomed))}
          isZoomed={isZoomed}
        >
          <CloseIcon />
        </CloseButton>
      </Overlay>
      <Tv ref={tvRef} tvScale={tvScale} tvX={tvX} tvY={tvY}>
        <Video
          reverseScale={reverseScale}
          preload='metadata'
          poster={props.poster}
          src={props.src}
          isZoomed={isZoomed}
        />
      </Tv>
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isZoomed ? 1 : 0.6}, 0, 0, ${
            isZoomed ? 1 : 0.6
          }, ${textX}, ${textY})`,
        }}
        className={isZoomed && "is-zoomed"}
      >
        <strong>{props.project}. </strong>
        {props.description}
      </FigCaption>

      <OpenButton
        ariaLabel='Open'
        type='button'
        onClick={() => handleZoom()}
        isZoomed={isZoomed}
      >
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
