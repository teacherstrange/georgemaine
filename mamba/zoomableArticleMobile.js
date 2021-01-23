import { useEffect, useRef, useState } from "react";
import {
  Article,
  ArticleContainer,
  ArticleOpenButton,
  ArticleOverlay,
  ArticleText,
  calculateScale,
  CloseIcon,
  ArticleCloseButton,
} from "./index";

export function ZoomableArticleMobile(props) {
  const imageRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [translateY, updateTranslateY] = useState(0);
  const [currentX, updateCurrentX] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const mobileScreen = window.matchMedia("(max-width: 768px)");
    const thumbnailScale = mobileScreen.matches
      ? screenHeight / 2 / props.height
      : 480 / props.height;

    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    imageRef.current.width = content.width;
    imageRef.current.height = content.height;

    const container = {
      width: isZoomed ? screenWidth * 1.5 : props.smallWidth,
      height: isZoomed
        ? mobileScreen.matches
          ? screenHeight * 0.5
          : 480
        : props.smallHeight,
    };
    const imageZoomY = imageRef.current.getBoundingClientRect().y;
    const imageX = imageRef.current.getBoundingClientRect().x;

    // Calculate scale
    const scale = calculateScale(container, content);
    const imageZoomX = imageX - (screenWidth - content.width) / 2;

    // Update values
    updateTranslateY(isZoomed ? -imageZoomY : 0);
    updateCurrentX(isZoomed ? -imageZoomX : 0);
    setCurrentScale(isZoomed ? 1 : scale);
    isZoomed
      ? (document.body.style = "overflow: hidden")
      : document.body.removeAttribute("style");
  }, [isZoomed]);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const mobileScreen = window.matchMedia("(max-width: 768px)");
    const thumbnailScale = mobileScreen.matches
      ? screenHeight / 2 / props.height
      : 480 / props.height;
    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    imageRef.current.width = content.width;
    imageRef.current.height = content.height;
    const container = {
      width: isZoomed ? screenWidth * 1.5 : props.smallWidth,
      height: isZoomed
        ? mobileScreen.matches
          ? screenHeight * 0.5
          : 480
        : props.smallHeight,
    };
    const scale = calculateScale(container, content);
    const dismissModal = () => {
      setisZoomed(false);
      setCurrentScale(isZoomed ? 1 : scale);
    };

    window.addEventListener("resize", dismissModal);
    return () => window.removeEventListener("resize", dismissModal);
  }, []);

  return (
    <ArticleContainer isZoomed={isZoomed} y={translateY}>
      <Article isZoomed={isZoomed} scale={currentScale} x={currentX}>
        <ArticleCloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => setisZoomed(!isZoomed)}
          isZoomed={isZoomed}
        >
          <CloseIcon />
        </ArticleCloseButton>
        <img ref={imageRef} src={props.image} />
        <ArticleText>
          <time>{props.timestamp}</time>
        </ArticleText>
        {props.children}
        <ArticleOverlay isZoomed={isZoomed} />
      </Article>
      <ArticleOpenButton
        ariaLabel='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => setisZoomed(!isZoomed)}
      >
        <strong>{props.label}</strong>
        <time>{props.timestamp}</time>
      </ArticleOpenButton>
    </ArticleContainer>
  );
}
