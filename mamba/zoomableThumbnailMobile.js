import { useEffect, useRef, useState } from "react";
import { OpenButton, calculateScale, Thumbnail } from "./index";

export function ZoomableThumbnailMobile(props) {
  const imageRef = useRef(null);
  const [isZoomed, setisZoomed] = useState(false);
  const [translateY, updateTranslateY] = useState(0);
  const [currentX, updateCurrentX] = useState(0);
  const [currentScale, setCurrentScale] = useState(props.scale.initialMobile);

  function handleZoom() {
    setisZoomed(!isZoomed);
    console.log("triggered");
  }

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const container = {
      width: isZoomed ? screenWidth * 2 : props.smallWidth,
      height: isZoomed ? screenHeight * 0.54 : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const imageZoomY = imageRef.current.getBoundingClientRect().y;
    const imageX = imageRef.current.getBoundingClientRect().x;

    // Calculate scale
    const scale = calculateScale(container, content);
    const imageZoomX = imageX - (screenWidth - content.width * scale) / 2;

    // Update values
    updateTranslateY(isZoomed ? -imageZoomY : 0);
    updateCurrentX(isZoomed ? -imageZoomX : 0);
    setCurrentScale(scale);
  }, [isZoomed]);

  useEffect(() => {
    const dissmissModal = () => {
      setisZoomed(false);
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
      <Thumbnail
        ref={imageRef}
        width={props.width}
        height={props.height}
        src={props.image}
        currentScale={currentScale}
        isZoomed={isZoomed}
        style={{
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, ${currentX}, ${translateY})`,
        }}
      />

      <OpenButton
        ariaLabel='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => handleZoom()}
      ></OpenButton>
    </>
  );
}
