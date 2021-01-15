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
  calculateScale,
} from "./index";

export function MobileMorphVideo(props) {
  const gallerySize = props.gallerySize;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
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
    const container = {
      width: isMorphed ? window.innerWidth * 0.8 : 310,
      height: isMorphed ? window.innerHeight * 0.8 : 174,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const screenHeight = window.innerHeight;
    const textBaseY = 285;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textHeightOffset = captionRef.current.scrollHeight / 2;
    const tvY = tvRef.current.getBoundingClientRect().y;

    // Calculate scale
    const scale = calculateScale(container, content);
    const reverseScale = 1 / scale;

    // Scale sizes
    const tvHeight = content.height * scale;
    const verticalWhitespace = screenHeight - (tvHeight + textHeightOffset);

    // 2.1 Image position
    const tvCenterYOffset = tvY - verticalWhitespace / 2;
    const textOffsetY = textY - tvHeight - textBaseY - verticalWhitespace / 2;

    updateTvY(isMorphed ? -tvCenterYOffset : 30);
    updateTextY(isMorphed ? -textOffsetY : textBaseY);
    setReverseScale(reverseScale);
    setTvScale(scale);

    isMorphed
      ? (document.body.style = "overflow: hidden")
      : (document.body.style = `overflow: ""`);
  }, [isMorphed]);

  return (
    <Container
      isMorphed={isMorphed}
      activeIndex={activeIndex}
      gallerySize={gallerySize}
      galleryIndex={galleryIndex}
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
      <Tv ref={tvRef} tvScale={tvScale} tvY={tvY}>
        <MobileVideo
          preload='metadata'
          poster={props.poster}
          reverseScale={reverseScale}
          src={props.src}
          isMorphed={isMorphed}
        />
      </Tv>
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isMorphed ? 1 : 0.65}, 0, 0, ${
            isMorphed ? 1 : 0.65
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
