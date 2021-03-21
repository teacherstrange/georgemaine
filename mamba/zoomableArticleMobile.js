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
  const articleRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [translateY, updateTranslateY] = useState(0);
  const [currentX, updateCurrentX] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  useEffect(() => {
    const image = imageRef.current;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const mobileScreen = window.matchMedia("(max-width: 768px)");
    const desktopScreen = window.matchMedia("(min-width: 1024px)");
    const thumbnailScale = mobileScreen.matches
      ? screenHeight / 2 / props.height
      : desktopScreen.matches
      ? screenHeight / props.height
      : 530 / props.height;

    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    image.width = content.width;
    image.height = content.height;

    const container = {
      width: isZoomed
        ? screenWidth * 1.5
        : desktopScreen.matches
        ? 300
        : props.smallWidth,
      height: isZoomed
        ? mobileScreen.matches
          ? screenHeight * 0.5
          : desktopScreen.matches
          ? screenHeight
          : 530
        : desktopScreen.matches
        ? 150
        : props.smallHeight,
    };
    const imageZoomY = image.getBoundingClientRect().y;
    const imageX = image.getBoundingClientRect().x;

    // Calculate scale
    const scale = calculateScale(container, content);
    const imageZoomX = imageX - (screenWidth - content.width) / 2;

    // Update values
    updateTranslateY(isZoomed ? -imageZoomY : 0);
    updateCurrentX(isZoomed ? -imageZoomX : 0);
    setCurrentScale(isZoomed ? 1 : scale);
    !isZoomed ? (articleRef.current.scrollTop = 0) : null;
    isZoomed
      ? (document.body.style = "overflow: hidden")
      : document.body.removeAttribute("style");
  }, [isZoomed]);

  useEffect(() => {
    const image = imageRef.current;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const mobileScreen = window.matchMedia("(max-width: 768px)");
    const desktopScreen = window.matchMedia("(min-width: 1024px)");
    const thumbnailScale = mobileScreen.matches
      ? screenHeight / 2 / props.height
      : desktopScreen.matches
      ? screenHeight / props.height
      : 530 / props.height;

    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    image.width = content.width;
    image.height = content.height;

    const container = {
      width: isZoomed
        ? screenWidth * 1
        : desktopScreen.matches
        ? 300
        : props.smallWidth,
      height: isZoomed
        ? mobileScreen.matches
          ? screenWidth * 0.5
          : desktopScreen.matches
          ? screenHeight
          : 530
        : desktopScreen.matches
        ? 150
        : props.smallHeight,
    };
    console.log("Container:", container);
    // Calculate scale
    const scale = calculateScale(container, content);
    const dismissModal = () => {
      setCurrentScale(scale);
      setisZoomed(false);
    };

    window.addEventListener("resize", dismissModal);
    return () => window.removeEventListener("resize", dismissModal);
  }, []);

  return (
    <ArticleContainer isZoomed={isZoomed} y={translateY} ref={articleRef}>
      <Article
        style={{
          height: "max-content",
        }}
        isZoomed={isZoomed}
        scale={currentScale}
        x={currentX}
      >
        <ArticleCloseButton
          aria-label='Close'
          type='button'
          onClick={() => setisZoomed(!isZoomed)}
          isZoomed={isZoomed}
        >
          <CloseIcon />
        </ArticleCloseButton>
        <img alt={props.alt} ref={imageRef} src={props.image} />
        <ArticleText>
          <time>{props.timestamp}</time>
        </ArticleText>
        {props.children}
        <ArticleOverlay
          style={{
            minHeight: "initial",
          }}
          isZoomed={isZoomed}
        />
      </Article>
      <ArticleOpenButton
        aria-label='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => setisZoomed(!isZoomed)}
      >
        <strong>{props.label.mobile}</strong>
        <time>{props.timestamp}</time>
      </ArticleOpenButton>
    </ArticleContainer>
  );
}
