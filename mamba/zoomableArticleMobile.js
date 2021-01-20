import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { OpenButton, calculateScale } from "./index";
import { Caption } from "./text";

const Item = styled.li`
  display: flex;
  position: relative;
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
    <Item
      style={{
        height: isZoomed ? "100vh" : 70,
        overflowY: isZoomed ? "scroll" : "hidden",
        zIndex: isZoomed ? 20 : "initial",
        width: "calc(100% - 64px)",
        marginBottom: 60,
        padding: "0 32px",
        transitionDelay: "0s, 0.56s",
        transition: isZoomed
          ? "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)"
          : "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), height 0s .56s",
        transform: `matrix(1, 0, 0, 1, 0, ${translateY})`,
      }}
    >
      <div
        style={{
          transformOrigin: "0 0",
          borderRadius: isZoomed ? 0 : 6,
          transition: "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)",
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, ${currentX}, 0)`,
        }}
      >
        <img ref={imageRef} src={props.image} />
        <Caption
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 60,
            width: 275,
          }}
        >
          Hello world. As you may or may not be aware, I like to tinker with
          software, and tools,. Ever since I was a young kid, I was fascinated
          with how things worked. Can I remake it differently? Would people like
          that better? The part I hated was actually showing my version to
          people. Go figure. Strangely enough, the vicious cycle above is
          ongoing, which I don't mind personally. I make things—it makes me feel
          better. Software, photo's, tree houses, food, urban jungles, video's,
          clothes just as long as its useful to me or others. I design—it's my
          job. Currently, I design products at Pitch. I taught myself the basics
          by copying other's work until I got stuck and needed help. I never
          liked the idea of learning craft from a book or going to school, so
          the only alternative was to reach out to people better than me and ask
          them to teach me. I'm aware this is weird. But it’s the way I am; I've
          met wonderful people that made me a better person and taught me so
          much. But it's still weird, I know. Anyway, enough about me—onto the
          manifesto. From here on out, this is my site for my thoughts. If you
          like them, reach out, or not. If you feel it's stupid, that's
          fine—sometimes the feeling is mutual. Either way, it's refreshing to
          have a corner on the web that I can call my own. Welcome, everyone.
        </Caption>
      </div>
      <OpenButton
        ariaLabel='Open'
        type='button'
        isZoomed={isZoomed}
        onClick={() => setisZoomed(!isZoomed)}
      ></OpenButton>
    </Item>
  );
}
