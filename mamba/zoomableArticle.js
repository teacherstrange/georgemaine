import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Article,
  ArticleContainerDesktop,
  ArticleOpenButton,
  ArticleOverlay,
  ArticleText,
  calculateScale,
  CloseIcon,
  ArticleCloseButtonDesktop,
} from "./index";

const ArticleContentContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(25vw);
`;

export function ZoomableArticle(props) {
  const imageRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [translateY, updateTranslateY] = useState(0);
  const [currentX, updateCurrentX] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  useEffect(() => {
    const image = imageRef.current;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const thumbnailScale = screenHeight / props.height;
    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    image.width = content.width;
    image.height = content.height;

    const container = {
      width: isZoomed ? screenWidth * 1.5 : 242,
      height: isZoomed ? screenHeight : 121,
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
    isZoomed
      ? (document.body.style = "overflow: hidden")
      : document.body.removeAttribute("style");
  }, [isZoomed]);

  useEffect(() => {
    const image = imageRef.current;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const thumbnailScale = screenHeight / props.height;
    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    image.width = content.width;
    image.height = content.height;
    const container = {
      width: isZoomed ? screenWidth * 1.5 : 242,
      height: isZoomed ? screenHeight : 142,
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
    <ArticleContainerDesktop isZoomed={isZoomed} y={translateY}>
      <Article isZoomed={isZoomed} scale={currentScale} x={currentX}>
        <img ref={imageRef} src={props.image} />
        <ArticleContentContainer>
          <ArticleCloseButtonDesktop
            ariaLabel='Close'
            type='button'
            onClick={() => setisZoomed(!isZoomed)}
            isZoomed={isZoomed}
          >
            <CloseIcon />
          </ArticleCloseButtonDesktop>
          <ArticleText>
            <time>{props.timestamp}</time>
          </ArticleText>
          {props.children}
          <ArticleOverlay isZoomed={isZoomed} />
        </ArticleContentContainer>
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
    </ArticleContainerDesktop>
  );
}
