/* eslint-disable @next/next/no-img-element */

const Figure = ({ children, width = "100%" }) => {
  return (
    <figure>
      {children}
      <style jsx>{`
        figure {
          width: 100%;
          padding: 0;
          will-change: transform;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          z-index: 1000;
          margin: 0;
        }

        @media (min-width: 73.7rem) {
          figure {
            width: ${width};
          }
        }
      `}</style>
    </figure>
  );
};

const Caption = ({ caption }) => {
  return (
    <figcaption>
      {caption}
      <style jsx>{`
        figcaption {
          position: absolute;
          padding: 3vw;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-size: var(--callout1);
          line-height: 1.08;
          letter-spacing: -0.08rem;
          font-weight: 700;
          border-radius: 1rem;
          color: var(--white);
          background-color: var(--dark-border);
          opacity: 0;
          display: flex;
          transition: opacity 0.2s ease-out;
        }

        figcaption:hover {
          opacity: 1;
        }

        @media (min-width: 73.7rem) {
          figcaption {
            font-size: var(--callout2);
          }
        }

        @media (min-width: 126rem) {
          figcaption {
            font-size: var(--callout3);
            letter-spacing: -0.015rem;
            line-height: 1.05;
          }
        }
      `}</style>
    </figcaption>
  );
};

const Image = ({ src, alt, imgWidth, imgHeight }) => {
  return (
    <>
      <img src={src} alt={alt} width={imgWidth} height={imgHeight} />
      <style jsx>{`
        img {
          width: 100%;
          vertical-align: middle;
          height: auto;
          aspect-ratio: attr(width) / attr(height);
        }
      `}</style>
    </>
  );
};

export const Video = ({ width, height, src, onPlay, marginFactor = 1 }) => {
  return (
    <>
      <video
        autoPlay
        playsInline
        muted
        width={width}
        height={height}
        src={src}
        onPlay={onPlay}
      />
      <style jsx>{`
        video {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          aspect-ratio: attr(width) / attr(height);
          margin: calc(var(--callout1) * ${marginFactor}) 0;
          display: block;
        }

        @media (min-width: 73.7rem) {
          video {
            margin: calc(var(--callout2) * ${marginFactor}) 0;
          }
        }

        @media (min-width: 126rem) {
          video {
            margin: calc(var(--callout3) * ${marginFactor}) 0;
          }
        }
      `}</style>
    </>
  );
};

export const StickyMedia = ({
  alt,
  children,
  src,
  width,
  imgWidth,
  imgHeight,
  marginFactor = 1,
}) => {
  return (
    <div>
      <Figure width={width}>
        <Image src={src} alt={alt} imgWidth={imgWidth} imgHeight={imgHeight} />
        <Caption caption={alt} />
      </Figure>
      {children}
      <style jsx>{`
        div {
          margin: calc(var(--callout1) * ${marginFactor}) 0;
        }

        @media (min-width: 73.7rem) {
          div {
            margin: calc(var(--callout2) * ${marginFactor}) 0;
          }
        }

        @media (min-width: 126rem) {
          div {
            margin: calc(var(--callout3) * ${marginFactor}) 0;
          }
        }
      `}</style>
    </div>
  );
};
