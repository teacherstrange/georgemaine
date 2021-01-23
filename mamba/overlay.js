import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const OverlayContainer = styled.div`
  position: fixed;
  opacity: ${(props) => (props.isZoomed ? 1 : 0)};
  pointer-events: ${(props) => (props.isZoomed ? "auto" : "none")};
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  background-color: var(--overlay);
  backdrop-filter: blur(20px) saturate(110%);
  transform: translate3d(
    ${(props) => props.overlayX}px,
    ${(props) => props.overlayY}px,
    0
  );
  transition: ${(props) =>
    props.isZoomed
      ? "opacity 0.36s cubic-bezier(0.32, 0.08, 0.24, 1)"
      : "opacity .44s cubic-bezier(0.52, 0.16, 0.24, 1) .2s, transform .1s .64s"};
`;

export function Overlay(props) {
  const overlayRef = useRef(null);
  const [overlayY, updateOverlayY] = useState(0);
  const [overlayX, updateOverlayX] = useState(0);

  useEffect(() => {
    const overlayY = overlayRef.current.getBoundingClientRect().y;
    const overlayX = props.video
      ? Math.abs(overlayRef.current.getBoundingClientRect().x) - 480
      : Math.abs(overlayRef.current.getBoundingClientRect().x);
    updateOverlayX(props.isZoomed ? overlayX : 0);
    updateOverlayY(props.isZoomed ? -overlayY : 0);
  }, [props.isZoomed]);

  return (
    <OverlayContainer
      ref={overlayRef}
      isZoomed={props.isZoomed}
      overlayX={overlayX}
      overlayY={overlayY}
    >
      {props.children}
    </OverlayContainer>
  );
}
