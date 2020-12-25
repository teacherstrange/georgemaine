import { useEffect, useRef, useState } from "react";
import {
  FigCaption,
  Manifesto,
  Link,
  Headline,
} from "../src/components/typography";
import styled from "styled-components";
import { Header } from "../src/components/header";
import { SocialLinks } from "../src/components/social-links";

function HomePage() {
  return (
    <main
      style={{
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <Header>
        <img width={120} src="/images/memoji.png" alt="Memoji portait of me" />
        <Manifesto>
          Hi, I’m Georgemaine—A product designer currently working on{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://pitch.com/"
            style={{ color: "var(--red)" }}
          >
            Pitch
          </Link>
          , the next-gen presentation tool. I enjoy making digital tools so
          simple and fun to use that you'll want to use them all the time. I
          also like tinkering with software projects and animation videos on the
          side. If you have one and think I can help or simply want to
          chat—reach out.
        </Manifesto>
        <SocialLinks />
      </Header>
      <WorkSection />
    </main>
  );
}

export default HomePage;

const StyledSection = styled.section`
  margin: 60px auto 0;
  width: calc(100% - 64px);
  max-width: 414px;

  @media only screen and (min-width: 980px) {
    width: calc(100% - 100px);
    max-width: 960px;
  }
`;
const MorphVideo = styled.div`
  height: auto;
  position: absolute;
  left: calc((100% - 240px) / 2);
  top: 0;
  right: calc((100% - 240px) / 2);
  bottom: 72px;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    right: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  }

  &.is-zoomed {
    top: 10vh;
    left: 3vh;
    right: 3vh;
    bottom: 35vh;
  }

  @media only screen and (min-width: 980px) {
    &.is-zoomed {
      left: 10vh;
      right: 50vh;
      top: 10vh;
      bottom: 10vh;
    }
  }
`;

const MorphBox = styled.figure`
  overflow: hidden;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 72px;

  &.is-zoomed {
    top: 16vh;
    bottom: 42vh;
    left: 4vh;
    right: 4vh;
    overflow: visible;
  }

  @media only screen and (min-width: 980px) {
    &.is-zoomed {
      left: 10vh;
      right: 40vh;
      top: 10vh;
      bottom: 10vh;
      overflow: visible;
    }
  }
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

const ZoomBox = styled.li`
  display: inline-block;
  height: 322px;
  width: 100%;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  background-color: hsla(0, 0%, 98%, 0);

  &.is-zoomed {
    width: 100vw;
    height: 100vh;
    background-color: var(--tertiaryFill);
    backdrop-filter: blur(20px) saturate(50%);
  }

  @media only screen and (min-width: 980px) {
    width: 50%;
  }
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

const ZoomButton = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ZoomBoxButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  height: 36px;
  width: 36px;
  border-radius: 32px;
  text-align: center;
  background-color: var(--secondaryFill);
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: grid;
  place-items: center;
  opacity: 0;

  &.is-zoomed {
    opacity: 1;
    transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
  }
`;

function WorkSection() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  var imageWidths = [1492, 968];
  var imageHeights = [1636, 1864];

  var captionBottomEdges = [751, 580];

  // Create helpers
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomBoxTop, setZoomBoxTop] = useState(0);
  const [zoomBoxLeft, setZoomBoxLeft] = useState(0);

  const morphImageRef = useRef(null);
  const captionRef = useRef(null);
  const morphBoxRef = useRef(null);

  //
  function calculateContentScaleForIndex(i) {
    var contentWidth = imageWidths[i];
    var contentHeight = imageHeights[i];
    console.log("contentWidth", contentWidth);

    var scale =
      viewportWidth / viewportHeight > contentWidth / contentHeight
        ? viewportHeight / contentHeight
        : viewportWidth / contentWidth;
    return scale;
  }

  function layoutCaptions() {
    const scale = calculateContentScaleForIndex(0);
    const yPos = (viewportHeight / 2.0 - captionBottomEdges[0] * scale) * -1;

    const y = captionRef.current.clientHeight + 16 + Math.round(yPos);
    console.log("this is scale:", scale);

    captionRef.current.style["webkitTransform"] =
      "translate3d(0px, " + y + "px, 0)";
    captionRef.current.style["MozTransform"] =
      "translate3d(0px, " + y + "px, 0)";
  }

  function renderRefs() {
    return morphBoxRef.current, morphImageRef.current, captionRef.current;
  }

  // Helper to set Zoombox coordinates
  function handleIsZoomed(top, left) {
    setIsZoomed(!isZoomed);
    setZoomBoxTop(-top);
    setZoomBoxLeft(-left);
  }

  // Render ref to avoid error
  useEffect(() => {
    renderRefs();
    setViewportHeight(morphImageRef.current.clientHeight);
    setViewportWidth(morphImageRef.current.clientWidth);
    layoutCaptions();
    console.log("viewportHeight:", viewportHeight);
    console.log("viewportWidth:", viewportWidth);
  }, [renderRefs]);

  // Disable modal on resize
  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsZoomed(false);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <StyledSection>
      <Headline>Work</Headline>
      <ul
        style={{
          height: 314,
          position: "relative",
        }}
      >
        <ZoomBox
          style={{
            top: isZoomed ? zoomBoxTop : 0,
            left: isZoomed ? zoomBoxLeft : 0,
          }}
          ref={morphBoxRef}
          className={isZoomed ? "is-zoomed" : ""}
        >
          <ZoomBoxButton
            onClick={() => setIsZoomed(false)}
            className={isZoomed ? "is-zoomed" : ""}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.05273 4L15.9881 15.9485"
                stroke="var(--secondaryLabelFill)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 4.05176L4 16.0002"
                stroke="var(--secondaryLabelFill)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </ZoomBoxButton>
          <MorphBox
            ref={morphImageRef}
            style={{
              backgroundImage: `url(/images/mobile.png)`,
            }}
            className={isZoomed ? "is-zoomed" : ""}
          >
            <FigCaption ref={captionRef}>
              <strong>Mollie’s Mobile Apps.</strong> During the last quarter of
              2019 I designed Mollie’s mobile apps to enable people to quickly
              manage payments and watch their business grow.
              <br></br>
              <br></br>
              <strong>Enjoy managing payments on mobile. </strong>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)" }}
                href="https://apps.apple.com/us/app/mollie/id1473455257?ls=1"
              >
                Download Mollie for Mobile ↗
              </Link>
            </FigCaption>
          </MorphBox>
          {/* <MorphVideo ref={morphImageRef} className={isZoomed ? "is-zoomed" : ""}>
            <video
              playsInline
              muted
              src={
                "https://www.apple.com/105/media/us/apple-tv-4k/2018/cb4271b6_0F8b_4c21_a567_73f8699d143c/animation/dolby/small.mp4"
              }
            />
          </MorphVideo> */}
          {/* <MorphBox
            ref={morphImageRef}
            style={{
              backgroundImage: `url(/images/checkout.png)`,
            }}
            className={isZoomed ? "is-zoomed" : ""}
          /> */}
          <ZoomButton
            onClick={() =>
              handleIsZoomed(
                morphBoxRef.current.getBoundingClientRect().top,
                morphBoxRef.current.getBoundingClientRect().left
              )
            }
          />
        </ZoomBox>
      </ul>
    </StyledSection>
  );
}
