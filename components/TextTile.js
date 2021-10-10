import { useEffect, useRef } from "react";
import {
  slideOutOnScroll,
  slideInOnScroll,
  useOnScreen,
} from "../components/utils";

export const AnimatedCaption = ({ children, videoIsLoaded }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    const captionRef = ref.current;
    const scrollerRef = document.querySelector(".scroll-container");

    const scrollHandler = () => {
      slideOutOnScroll(captionRef, scrollerRef);
    };

    if (onScreen) {
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
    }
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
          font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: 0;
          margin: calc(2.8rem + 28 * (100vw - 37.5rem) / 375) 0 0;
          opacity: 0;
          transform: translate3d(0rem, -20rem, 0rem);
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            margin: calc(4.2rem + 42 * (100vw - 74rem) / 740) 0 0;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 126rem) / 1260);
            letter-spacing: -0.015rem;
            line-height: 1.05;
            margin: calc(5.6rem + 56 * (100vw - 126rem) / 1260) 0 0;
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
      slideInOnScroll(calloutRef, scrollerRef);
    };
    if (onScreen) {
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
    }
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
          font-size: calc(2.8rem + 28 * (100vw - 37.5rem) / 375);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: calc(2.8rem + 28 * (100vw - 37.5rem) / 375) 0;
          opacity: 0;
          transform: translate3d(0rem, -5rem, 0rem);
        }

        @media (min-width: 73.7rem) {
          p {
            font-size: calc(4.2rem + 42 * (100vw - 74rem) / 740);
            margin: calc(4.2rem + 42 * (100vw - 74rem) / 740) 0;
          }
        }

        @media (min-width: 126rem) {
          p {
            font-size: calc(5.6rem + 56 * (100vw - 126rem) / 1260);
            letter-spacing: -0.015rem;
            line-height: 1.05;
            margin: calc(5.6rem + 56 * (100vw - 126rem) / 1260) 0;
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
      slideInOnScroll(calloutRef, scrollerRef);
    };

    if (onScreen) {
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
    }
  }, [onScreen, videoIsLoaded]);

  return (
    <h1
      ref={ref}
      style={{
        willChange: onScreen ? "opacity, transform" : null,
      }}
    >
      {children}
      <style jsx>{`
        h1 {
          font-size: calc(4.2rem + 42 * (100vw - 37.5rem) / 375);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          margin: calc((4.2rem + 42 * (100vw - 37.5rem) / 375) * 2) 0;
          opacity: 0;
          transform: translate3d(0rem, -5rem, 0rem);
        }

        @media (min-width: 73.7rem) {
          h1 {
            font-size: calc(5.6rem + 56 * (100vw - 74rem) / 740);
            margin: calc((5.6rem + 56 * (100vw - 74rem) / 740) * 2) 0;
          }
        }

        @media screen and (min-width: 177rem) {
          h1 {
            font-size: 18rem;
            margin: 36rem 0;
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
