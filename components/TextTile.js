import { useEffect, useRef, useState } from "react";
import { modulate, useOnScreen, fadeInOnScroll } from "./utils";
import { throttle } from "lodash";

export const CaptionWithTransition = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [y, setY] = useState(200);
  const [opacity, setOpacity] = useState(0);
  const textRef = useRef(null);
  const onScreen = useOnScreen(textRef);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const textPosition = textRef.current.getBoundingClientRect().top;
    setScreenHeight(windowHeight);
    setHeight(textPosition);
  }, []);

  useEffect(() => {
    const scrollerRef = document.querySelector(".scroll-container");

    const scrollerHandler = () => {
      const value = scrollerRef.scrollTop;
      const startValue = Math.floor(height - screenHeight + 130);
      const endValue = Math.floor(height - screenHeight + 530);

      if (onScreen) {
        const yProgress = modulate(
          value,
          [startValue, endValue],
          [200, 0],
          true
        );
        const opacityProgress = modulate(
          value,
          [startValue, endValue],
          [0, 1],
          true
        );
        setY(yProgress);
        isNaN(opacityProgress) ? null : setOpacity(opacityProgress);
      }
    };
    let currentRequest;

    scrollerRef.addEventListener("touchmove", function () {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollerHandler);
    }),
      { passive: true };
    window.addEventListener("resize", function () {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollerHandler);
    }),
      { passive: true };
    scrollerRef.addEventListener("scroll", function () {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollerHandler);
    });

    return () => {
      scrollerRef.removeEventListener(
        "touchmove",
        throttle(scrollerHandler, 16)
      ),
        { passive: true };
      window.removeEventListener("resize", function () {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollerHandler);
      }),
        { passive: true };
      window.removeEventListener("scroll", function () {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollerHandler);
      });
      scrollerRef.removeEventListener("scroll", function () {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollerHandler);
      });
    };
  }, [height, onScreen, screenHeight]);

  return (
    <p
      ref={textRef}
      style={{
        transform: `translate3d(0, ${-y}px, 0)`,
        opacity: opacity,
      }}
    >
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 0;
          padding: 2.8rem 0 0;
          opacity: 0;
        }

        @media (max-width: 54rem) {
          p {
            font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
            padding: 6vh 0 0;
          }
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            padding: 9.5rem 0 0;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 126rem) / 1260);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </p>
  );
};

export const AnimatedCallout = ({ children, videoIsLoaded }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    const calloutRef = ref.current;
    const scrollerRef = document.querySelector(".scroll-container");

    const scrollHandler = () => {
      if (onScreen) {
        fadeInOnScroll(calloutRef, scrollerRef);
      }
      return;
    };

    let currentRequest;

    scrollerRef.addEventListener("scroll", () => {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollHandler);
    });
    scrollerRef.addEventListener("touchmove", () => {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollHandler);
    }),
      { passive: true };

    return () => {
      scrollerRef.removeEventListener("scroll", () => {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollHandler);
      });
      scrollerRef.removeEventListener("touchmove", () => {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollHandler);
      }),
        { passive: true };
    };
  }, [onScreen, videoIsLoaded]);

  return (
    <p
      ref={ref}
      style={{
        willChange: onScreen ? "opacity, transform" : null,
      }}
    >
      {children}
      <style jsx>{`
        p {
          font-size: 2.8rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 5rem 0;
          transform: translate3d(0rem, 5rem, 0rem);
        }

        @media (max-width: 54rem) {
          p {
            font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          }
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            margin: calc(5.6rem + 56 * (100vw - 140rem) / 1400) 0 10vh;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 126rem) / 1260);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </p>
  );
};

export const AnimatedSeasonCallout = ({ children, videoIsLoaded }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    const calloutRef = ref.current;
    const scrollerRef = document.querySelector(".scroll-container");

    const scrollHandler = () => {
      if (onScreen) {
        fadeInOnScroll(calloutRef, scrollerRef);
      }
      return;
    };

    let currentRequest;

    scrollerRef.addEventListener("scroll", () => {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollHandler);
    });
    scrollerRef.addEventListener("touchmove", () => {
      cancelAnimationFrame(currentRequest);
      currentRequest = requestAnimationFrame(scrollHandler);
    }),
      { passive: true };

    return () => {
      scrollerRef.removeEventListener("scroll", () => {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollHandler);
      });
      scrollerRef.removeEventListener("touchmove", () => {
        cancelAnimationFrame(currentRequest);
        currentRequest = requestAnimationFrame(scrollHandler);
      }),
        { passive: true };
    };
  }, [onScreen, videoIsLoaded]);

  return (
    <h1 ref={ref}>
      {children}
      <style jsx>{`
        h1 {
          font-size: 4.2rem;
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 18vh 0;
        }

        @media (max-width: 54rem) {
          h1 {
            font-size: calc(4.2rem + 42 * (100vw - 37.5rem) / 375);
          }
        }

        @media (min-width: 73.7rem) {
          h1 {
            font-size: calc(5.6rem + 56 * (100vw - 74rem) / 740);
            flex-shrink: 0;
            margin: 20rem 0;
          }
        }

        @media screen and (min-width: 177rem) {
          h1 {
            font-size: 18rem;
          }
        }
      `}</style>
    </h1>
  );
};

export const InlineLink = ({ href, text }) => {
  return (
    <a href={href} target='blank'>
      {text}
      <style jsx>{`
        a {
          white-space: nowrap;
          color: #07a7f1;
        }
        a:hover {
          transition: 0.2s ease-out;
        }

        a::after {
          display: inline-block;
          content: " ↗";
          position: relative;
          top: 0.03rem;
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        a:hover::after {
          transform: translate3d(0.3rem, -0.3rem, 0);
        }
      `}</style>
    </a>
  );
};
