import { useEffect, useRef, useState } from "react";
import { OpenButton, calculateScale } from "./index";

export function ZoomableThumbnailMobile(props) {
  const imageRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [translateY, updateTranslateY] = useState(0);
  const [currentX, updateCurrentX] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const thumbnailScale = screenHeight / 2 / props.height;
    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    imageRef.current.width = content.width;
    imageRef.current.height = content.height;

    const container = {
      width: isZoomed ? screenWidth * 1.5 : props.smallWidth,
      height: isZoomed ? screenHeight * 0.5 : props.smallHeight,
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
  }, [isZoomed]);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const thumbnailScale = screenHeight / 2 / props.height;
    const content = {
      width: props.width * thumbnailScale,
      height: props.height * thumbnailScale,
    };
    imageRef.current.width = content.width;
    imageRef.current.height = content.height;

    const container = {
      width: isZoomed ? screenWidth * 2 : props.smallWidth,
      height: isZoomed ? screenHeight * 0.5 : props.smallHeight,
    };
    const scale = calculateScale(container, content);
    const dissmissModal = () => {
      setisZoomed(false);
      setCurrentScale(isZoomed ? 1 : scale);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  useEffect(() => {
    isZoomed
      ? (document.body.style = "overflow: hidden")
      : document.body.removeAttribute("style");
  }, [isZoomed]);

  return (
    <>
      <img
        ref={imageRef}
        src={props.image}
        style={{
          transformOrigin: "0 0",
          borderRadius: isZoomed ? 0 : 6,
          transition: "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, ${currentX}, ${translateY})`,
        }}
      />

      <OpenButton
        ariaLabel='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => setisZoomed(!isZoomed)}
      ></OpenButton>
    </>
  );
}
