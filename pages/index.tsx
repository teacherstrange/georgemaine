import { Wrapper } from "../components/Layouts/";
import { InlineA, Manifesto, Label } from "../components/Typography/index";
import styled from "styled-components";
import { Button } from "../components/Button";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default () => {
  return (
    <Wrapper>
      <HeroSection>
        <Logo />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 auto 10%",
            maxWidth: "828px",
          }}
        >
          <Manifesto
            style={{
              color: "rgba(255,255,255,.95)",
              marginBottom: "48px",
            }}
          >
            I'm Georgemaine, a product designer. I'm currently working on{" "}
            <InlineA
              href="https://pitch.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              color="#7A7AFF"
            >
              Pitch
            </InlineA>
            , a next-gen presentation tool. I enjoy making tools so simple and
            fun to use that you'll want to use them all the time. I also like
            making animation videos from time to time.
          </Manifesto>
          <Button>Get in touch</Button>
        </div>
      </HeroSection>
      <section
        style={{
          width: "100%",
          position: "relative",
          background: "#131313",
        }}
      >
        <Project
          src="/videos/mollie-mobile.mp4"
          yOpacityRange={[0.18, 0.2, 0.29, 0.34]}
          yScaleRange={[0, 0.3]}
          opacityRange={[1, 0.3, 0.3, 0]}
          scaleRange={[1, 1.25]}
          headline="Q4 2020"
          copyMarginTop="0"
          caption="Designed Mollie’s iOS and Android apps to make your phone a place where you can quickly manage payments and watch your business grow."
          mobile
        />
        <Project
          copyMarginTop={"0"}
          mollieVideo
          zIndex={5}
          src="/videos/mollie-video.mp4"
          yOpacityRange={[0.3, 0.34, 0.4, 0.48]}
          yScaleRange={[0.3, 0.48]}
          opacityRange={[0, 0.8, 0.8, 0]}
          scaleRange={[1, 1.25]}
          marginTop="-100vh"
          headline="Q3 2020"
          caption="To help Marketing showcase Mollie at events, I created an engaging video that shows how Mollie works in a website."
        />
        <Project
          copyMarginTop={"0"}
          mollieCheckout
          zIndex={5}
          src="/videos/mollie-checkout.mp4"
          yOpacityRange={[0.48, 0.52, 0.58, 0.66]}
          yScaleRange={[0.48, 0.66]}
          opacityRange={[0, 0.8, 0.8, 0]}
          scaleRange={[1, 1.25]}
          marginTop="-100vh"
          headline="Q2 2019"
          caption="Redesigned and developed the Mollie Checkout so that people can efficiently pay for products with confidence."
        />
        <Project
          copyMarginTop={"0"}
          zIndex={5}
          mollieVideo
          src="/videos/mollie-apple-pay.mp4"
          yOpacityRange={[0.66, 0.7, 0.76, 0.84]}
          yScaleRange={[0.66, 0.84]}
          opacityRange={[0, 0.8, 0.8, 0]}
          scaleRange={[1, 1.25]}
          marginTop="-100vh"
          headline="Q1 2019"
          caption="To help launch Apple Pay at Mollie, I created an engaging promotional video that inspired merchants to integrate Apple Pay."
        />
      </section>
      <Router
        yOpacityRange={[0.9, 1]}
        opacityRange={[0, 1]}
        marginTop="-100vh"
        manifesto={
          "In my spare time, I enjoy tinkering on software projects. If you have one and think I can help—or—want to have a chat? Reach out!"
        }
      />
    </Wrapper>
  );
};

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #000;
  text-align: center;
  min-height: 660px;
  height: 93vh;
`;

function Router(props) {
  const {
    yOpacityRange,
    opacityRange,
    manifesto,
    marginTop,
    zIndex,
    copyMarginTop,
  } = props;
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, yOpacityRange, opacityRange);

  return (
    <div
      style={{
        position: "relative",
        zIndex: zIndex ? zIndex : 6,
        marginTop: marginTop || "",
      }}
    >
      <motion.div
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          position: "sticky",
          overflow: "hidden",
          opacity,
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(/images/router-gradient-background.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "saturate(130%)",
        }}
      ></motion.div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: copyMarginTop ? copyMarginTop : "-20vh",
          textAlign: "center",
          paddingBottom: "calc(50vh - 210px)",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 570,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={"/images/router-memoji.png"}
          style={{
            maxWidth: 175,
            marginBottom: 36,
          }}
        />
        <Manifesto
          style={{
            color: "var(--primaryText)",
            marginBottom: 36,
          }}
        >
          {manifesto}
        </Manifesto>
        <Button>Get in touch</Button>
      </div>
    </div>
  );
}

function Project(props) {
  const {
    yOpacityRange,
    opacityRange,
    yScaleRange,
    scaleRange,
    mobile = false,
    mollieVideo = false,
    mollieCheckout = false,
    src,
    headline,
    caption,
    marginTop,
    zIndex,
    copyMarginTop,
  } = props;
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, yScaleRange, scaleRange);
  const opacity = useTransform(scrollYProgress, yOpacityRange, opacityRange);

  return (
    <div
      style={{
        position: "relative",
        zIndex: zIndex ? zIndex : 6,
        marginTop: marginTop || "",
      }}
    >
      <motion.div
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          position: "sticky",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            opacity: "0",
            zIndex: 3,
          }}
        />
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            background: "rgba(255,255,255)",
            opacity: "0",
            zIndex: 3,
          }}
        />
        <motion.div
          style={{
            opacity: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            background: "rgba(255,255,255,0.4)",
            zIndex: 0,
          }}
        />
        {mobile && (
          <motion.div
            style={{
              opacity,
              position: "relative",
              width: 365,
              height: 736,
              backgroundImage: "url(/images/mobile-phone.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              overflow: "visible",
              borderRadius: 54,
              zIndex: 1,
              marginLeft: "auto",
              marginRight: "auto",
              scaleY: scale,
              scaleX: scale,
            }}
          ></motion.div>
        )}
        {mollieVideo && (
          <motion.div
            style={{
              width: 1429,
              height: 814,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 9,
              backgroundColor: "#212121",
              borderRadius: 4,
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              scaleY: scale,
              scaleX: scale,
              zIndex: 2,
              boxShadow:
                "inset 0px 1px 3px 0px rgba(255, 255, 255, 0.04), 0px 32px 64px 0px rgba(0,0,0,0.35), 0px 0px 0px 1px rgba(255, 255, 255, 0.04)",
            }}
          >
            <motion.video
              autoPlay
              muted
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                userSelect: "none",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              <source src={src} type="video/mp4" />
            </motion.video>
          </motion.div>
        )}
        {mollieCheckout && (
          <motion.div
            style={{
              width: 1328,
              height: 720,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              borderRadius: 12,
              position: "relative",
              overflow: "hidden",
              marginLeft: "auto",
              marginRight: "auto",
              scaleY: scale,
              scaleX: scale,
              zIndex: 2,
              boxShadow:
                "inset 0px 1px 3px 0px rgba(255, 255, 255, 0.04), 0px 32px 64px 0px rgba(0,0,0,0.35), 0px 0px 0px 1px rgba(255, 255, 255, 0.04)",
            }}
          >
            <motion.img style={{ width: "100%" }} src="/images/Browser.jpg" />
          </motion.div>
        )}
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
            top: 0,
            left: 0,
            position: "absolute",
            backgroundColor: "#fafafa",
            zIndex: 0,
          }}
        ></div>
      </motion.div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          marginTop: copyMarginTop ? copyMarginTop : "-20vh",
          textAlign: "center",
          paddingBottom: "100vh",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 570,
        }}
      >
        <Label>{headline}</Label>
        <Manifesto
          style={{
            color: "#666",
          }}
        >
          {caption}
        </Manifesto>
      </div>
    </div>
  );
}

function Logo() {
  const css = `
  @-webkit-keyframes circular {
    100% {
      transform: rotate(90deg);
    }
}`;
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        src={"/images/gradient-background.png"}
        style={{
          maxWidth: 312,
          position: "absolute",
          top: -6,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          mixBlendMode: "multiply",
          animationName: "circular",
          animationDuration: "12s",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      />
      <style>{css}</style>
      <svg
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M300 60H180C113.725 60 60 113.725 60 180V187.5C60 249.63 110.37 300 172.5 300C234.63 300 285 249.63 285 187.5V120H180C146.865 120 120 146.865 120 180V187.5C120 216.495 143.505 240 172.5 240C201.495 240 225 216.495 225 187.5V180H180"
          stroke="white"
          strokeWidth="30"
          strokeMiterlimit="10"
        />
        <path
          d="M180 165.273C188.134 165.273 194.727 171.866 194.727 180C194.727 188.134 188.134 194.727 180 194.727C171.865 194.727 165.272 188.134 165.272 180C165.272 171.866 171.865 165.273 180 165.273Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
