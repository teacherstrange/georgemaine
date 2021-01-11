import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  FigCaption,
  CloseIcon,
  CloseButton,
  OpenButton,
  MobileVideo,
  Overlay,
  Tv,
} from "./index";

export function MobileMorphVideo(props) {
  const galleryIndex = props.galleryIndex;
  const sendMorphstate = props.sendMorphstate;
  const captionRef = useRef(null);
  const tvRef = useRef(null);
  const [isMorphed, setIsMorphed] = useState(false);
  const [tvScale, setTvScale] = useState(0.1640625);
  const [reverseScale, setReverseScale] = useState(0);
  const [tvY, updateTvY] = useState(30);
  const [textY, updateTextY] = useState(0);

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
    const containerWidth = isMorphed ? window.innerWidth * 0.8 : 310;
    const containerHeight = isMorphed ? window.innerHeight * 0.8 : 174;
    const videoWidth = 1920;
    const videoHeight = 1080;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textHeightOffset = captionRef.current.scrollHeight / 2;
    const tvY = tvRef.current.getBoundingClientRect().y;
    const screenCenterY = window.innerHeight / 2;

    // Calculate scale
    const scale =
      containerWidth / containerHeight > videoWidth / videoHeight
        ? containerHeight / videoHeight
        : containerWidth / videoWidth;
    const reverseScale = 1 / scale;

    // Scale sizes
    const tvHeight = videoHeight * scale;
    const tvHeightOffset = tvHeight / 2;

    // 2.1 Image position
    const tvCenterYOffset =
      tvY + tvHeightOffset + textHeightOffset + -screenCenterY;
    const textOffsetY =
      textY - screenCenterY - textHeightOffset - tvHeightOffset - 36;

    updateTvY(isMorphed ? -tvCenterYOffset : 30);
    updateTextY(isMorphed ? -textOffsetY : 240);
    setReverseScale(reverseScale);
    setTvScale(scale);

    isMorphed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isMorphed]);

  return (
    <Container isMorphed={isMorphed} galleryIndex={galleryIndex}>
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
      <Tv ref={tvRef} tvScale={tvScale} tvY={tvY}>
        <MobileVideo
          preload='metadata'
          poster={props.poster}
          reverseScale={reverseScale}
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
          }, 0, ${textY})`,
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
