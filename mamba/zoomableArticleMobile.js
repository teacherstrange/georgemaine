import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import {
  OpenButton,
  StickyCloseButton,
  CloseIcon,
  calculateScale,
  ArticleText,
} from "./index";

const Container = styled.div`
  display: flex;
  padding: 0 calc((100vw - 414px) / 2);
  height: ${(props) => (props.isZoomed ? "100vh" : "70px")};
  overflow: ${(props) => (props.isZoomed ? "hidden scroll" : "hidden")};
  z-index: ${(props) => (props.isZoomed ? 20 : "initial")};
  margin-bottom: 60px;
  transition-delay: 0s, 0.56s;
  transition: ${(props) =>
    props.isZoomed
      ? "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)"
      : "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), height 0s .56s"};
  transform: matrix(1, 0, 0, 1, 0, ${(props) => props.y});

  @media (max-width: 478px) {
    padding: 0 32px;
  }

  p {
    ${(props) =>
      props.isZoomed &&
      css`
        opacity: 1;
        transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
      `}
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${(props) => (props.isZoomed ? 1 : 0)};
  z-index: -1;
  background: var(--overlay);
  backdrop-filter: blur(30px) saturate(110%);
`;

const Article = styled.article`
  transform-origin: 0 0;
  z-index: ${(props) => (props.isZoomed ? 1 : 0)};
  height: max-content;
  border-radius: ${(props) => (props.isZoomed ? 0 : 6)};
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  transform: matrix(
    ${(props) => props.scale},
    0,
    0,
    ${(props) => props.scale},
    ${(props) => props.x},
    0
  );
`;

const Button = styled(OpenButton)`
  width: calc(100vw - 64px);
  max-width: 414px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 156px;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
`;

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
    <Container isZoomed={isZoomed} y={translateY}>
      <Article isZoomed={isZoomed} scale={currentScale} x={currentX}>
        <StickyCloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => setisZoomed(!isZoomed)}
          isZoomed={isZoomed}
        >
          <CloseIcon />
        </StickyCloseButton>
        <img ref={imageRef} src={props.image} />
        <ArticleText>
          <time>{props.timestamp}</time>
        </ArticleText>
        {props.children}
        <Overlay isZoomed={isZoomed} />
      </Article>
      <Button
        ariaLabel='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => setisZoomed(!isZoomed)}
      >
        <strong>{props.label}</strong>
        <time>{props.timestamp}</time>
      </Button>
    </Container>
  );
}
