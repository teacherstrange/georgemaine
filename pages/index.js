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
        <img width={120} src='/images/memoji.png' alt='Memoji portait of me' />
        <Manifesto>
          Hi, I’m Georgemaine—A product designer currently working on{" "}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://pitch.com/'
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

  &.is-morphed {
    top: 10vh;
    left: 3vh;
    right: 3vh;
    bottom: 35vh;
  }

  @media only screen and (min-width: 980px) {
    &.is-morphed {
      left: 10vh;
      right: 50vh;
      top: 10vh;
      bottom: 10vh;
    }
  }
`;

const MorphBox = styled.li`
  display: inline-block;
  height: 322px;
  width: 100%;
  z-index: 0;
  position: absolute;
  overflow: hidden;
  background-color: hsla(0, 0%, 98%, 0);

  &.is-morphed {
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

const MorphContentContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 72px;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  figcaption {
    transform: scale(0.93);
  }

  &.is-morphed {
    bottom: 0;

    figcaption {
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 980px) {
    &.is-morphed {
      left: 10vh;
      right: 40vh;
      top: 10vh;
      bottom: 10vh;
    }
  }
`;

const MorphImage = styled.figure`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  @media only screen and (max-width: 979px) {
    &.is-morphed {
      top: 16vh;
      bottom: 42vh;
      left: 4vh;
      right: 4vh;
    }
  }
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

const MorphButton = styled.button`
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
  font: inherit;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  strong {
    color: var(--primaryText);
  }
`;

const MorphBoxButton = styled.button`
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
  z-index: 1;
  opacity: 0;

  &.is-morphed {
    opacity: 1;
    transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
  }
`;

function WorkSection() {
  const imageWidths = [1492, 968];
  const imageHeights = [1636, 1864];
  const captionBottomEdges = [751, 580];
  const morphImageRef = useRef(null);
  const captionRef = useRef(null);
  const morphBoxRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMorphed, setIsMorphed] = useState(false);
  const [morphBoxTop, setMorphBoxTop] = useState(0);
  const [morphBoxLeft, setMorphBoxLeft] = useState(0);

  //
  function calculateContentScaleForIndex(i) {
    var contentWidth = imageWidths[i];
    var contentHeight = imageHeights[i];

    var scale =
      viewportWidth / viewportHeight > contentWidth / contentHeight
        ? viewportHeight / contentHeight
        : viewportWidth / contentWidth;
    return scale;
  }

  function handleIsMorphed(top, left) {
    setIsMorphed(!isMorphed);
    setMorphBoxTop(-top);
    setMorphBoxLeft(-left);
  }

  function layoutCaptions() {
    const scale = calculateContentScaleForIndex(0);
    const morphedScale = isMorphed ? 1 : 0.8;
    const yPos = (viewportHeight / 2.0 - captionBottomEdges[0] * scale) * -1;

    const y = captionRef.current.clientHeight + 32 + Math.round(yPos);
    console.log("this is scale:", scale);

    captionRef.current.style["webkitTransform"] =
      "translate3d(0px, " + y + "px, 0) scale(" + morphedScale + ")";
    captionRef.current.style["MozTransform"] =
      "translate3d(0px, " + y + "px, 0) scale(" + morphedScale + ")";
  }

  function renderRefs() {
    return morphBoxRef.current, morphImageRef.current, captionRef.current;
  }

  // Render ref to avoid error
  useEffect(() => {
    renderRefs();
    setViewportHeight(morphImageRef.current.clientHeight);
    setViewportWidth(morphImageRef.current.clientWidth);
    layoutCaptions();
  }, [renderRefs]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsMorphed(false);
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
        <MorphBox
          style={{
            top: isMorphed ? morphBoxTop : 0,
            left: isMorphed ? morphBoxLeft : 0,
          }}
          ref={morphBoxRef}
          className={isMorphed ? "is-morphed" : ""}
        >
          <MorphBoxButton
            onClick={() => setIsMorphed(false)}
            className={isMorphed ? "is-morphed" : ""}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.05273 4L15.9881 15.9485'
                stroke='var(--secondaryLabelFill)'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M16 4.05176L4 16.0002'
                stroke='var(--secondaryLabelFill)'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </MorphBoxButton>
          <MorphContentContainer className={isMorphed ? "is-morphed" : ""}>
            <MorphImage
              ref={morphImageRef}
              style={{
                backgroundImage: `url(/images/mobile.png)`,
              }}
              className={isMorphed ? "is-morphed" : ""}
            >
              <FigCaption ref={captionRef}>
                <strong>Mollie’s Mobile Apps.</strong> During the last quarter
                of 2019 I designed Mollie’s mobile apps to enable people to
                quickly manage payments and watch their business grow.
                <br></br>
                <br></br>
                <strong>Enjoy managing payments on mobile. </strong>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "var(--red)" }}
                  href='https://apps.apple.com/us/app/mollie/id1473455257?ls=1'
                >
                  Download Mollie for Mobile ↗
                </Link>
              </FigCaption>
            </MorphImage>
          </MorphContentContainer>
          {/* <MorphVideo ref={morphImageRef} className={isZoomed ? 'is-zoomed' : ''}>
            <video
              playsInline
              muted
              src={
                'https://www.apple.com/105/media/us/apple-tv-4k/2018/cb4271b6_0F8b_4c21_a567_73f8699d143c/animation/dolby/small.mp4'
              }
            />
          </MorphVideo> */}
          {/* <MorphBox
            ref={morphImageRef}
            style={{
              backgroundImage: `url(/images/checkout.png)`,
            }}
            className={isZoomed ? 'is-zoomed' : ''}
          /> */}
          {!isMorphed && (
            <MorphButton
              onClick={() =>
                handleIsMorphed(
                  morphImageRef.current.getBoundingClientRect().top,
                  morphImageRef.current.getBoundingClientRect().left
                )
              }
            >
              <strong>Mollie Mobile Apps</strong>
              Learn more
            </MorphButton>
          )}
        </MorphBox>
      </ul>
    </StyledSection>
  );
}
