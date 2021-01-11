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
} from "./index";

export function LargeMorphVideo(props) {
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRef = useRef(null);
  const tvRef = useRef(null);
  const [isMorphed, setIsMorphed] = useState(false);
  const [tvScale, setTvScale] = useState(0.1640625);
  const [reverseScale, setReverseScale] = useState(0);
  const [tvX, updateTvX] = useState(0);
  const [tvY, updateTvY] = useState(30);
  const [textY, updateTextY] = useState(0);
  const [textX, updateTextX] = useState(0);

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
    const containerWidth = isMorphed ? window.innerWidth * 0.8 : 315;
    const containerHeight = isMorphed ? window.innerHeight * 0.8 : 180;
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
      <Overlay isMorphed={isMorphed} video>
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
          isMorphed={isMorphed}
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
          isMorphed={isMorphed}
          className={isMorphed && "is-morphed"}
        />
      </Tv>
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
