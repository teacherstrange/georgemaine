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

const MorphBox = styled.figure`
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
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
    top: 10vh;
    bottom: 30vh;
    left: 0;
    right: 0;
  }

  @media only screen and (min-width: 980px) {
    &.is-zoomed {
      left: 10vh;
      right: 40vh;
      top: 10vh;
      bottom: 10vh;
    }
  }
`;

const ZoomBox = styled.li`
  height: 322px;
  width: 100%;
  text-align: center;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
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
`;

const ZoomButton = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  width: 311px;
  height: 100%;
  z-index: 1;
  position: relative;
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
  var viewportWidth = 0;
  var viewportHeight = 0;
  // Create helpers
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomBoxTop, setZoomBoxTop] = useState(0);
  const [zoomBoxLeft, setZoomBoxLeft] = useState(0);

  const morphboxRef = useRef(null);
  const captionRef = useRef(null);
  const ZoomBoxRef = useRef(null);

  function calculateContentScaleForIndex() {
    var contentWidth = 1580;
    var contentHeight = 1640;

    var scale =
      viewportWidth / viewportHeight > contentWidth / contentHeight
        ? viewportHeight / contentHeight
        : viewportWidth / contentWidth;
    return scale;
  }

  function renderRefs() {
    return ZoomBoxRef.current, morphboxRef.current, captionRef.current;
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
        <ZoomButton
          onClick={() =>
            handleIsZoomed(
              ZoomBoxRef.current.getBoundingClientRect().top,
              ZoomBoxRef.current.getBoundingClientRect().left
            )
          }
        />
        <ZoomBox
          style={{
            top: isZoomed ? zoomBoxTop : 0,
            left: isZoomed ? zoomBoxLeft : 0,
          }}
          ref={ZoomBoxRef}
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
            ref={morphboxRef}
            style={{
              backgroundImage: `url(/images/mollie-mobile.png)`,
            }}
            className={isZoomed ? "is-zoomed" : ""}
          >
            {/* <FigCaption style={{ opacity: 0 }} ref={captionRef}>
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
            </FigCaption> */}
          </MorphBox>
        </ZoomBox>
      </ul>
    </StyledSection>
  );
}
