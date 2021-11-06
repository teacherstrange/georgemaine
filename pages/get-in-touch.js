import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { Video } from "../components/Media";
import { AnimatedCallout, InlineLink } from "../components/TextTile";
import { ScrollBar } from "../components/ScrollBar";
import { useState } from "react";

export default function GetInTouch() {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
          <div
            className='scroll-container'
            style={{
              position: "absolute",
              overflowY: "scroll",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <ScrollBar />
            <main>
              <Head />
              <GlobalNav />

              <Video
                width={1962}
                height={2160}
                src='media/georgemaine.mp4'
                onPlay={(event) => {
                  setVideoIsLoaded(event);
                }}
              />

              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                As you may or may not be aware, I’ve always been fascinated with
                how things work.
              </AnimatedCallout>

              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                Could I remake it differently? Would people prefer that?
              </AnimatedCallout>
              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                The part I hated was showing my version to people — Go figure.
              </AnimatedCallout>
              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                Currently, I’m an indoor gardener and product designer at{" "}
                <InlineLink href={"https://pitch.io"} text={"Pitch"} />
              </AnimatedCallout>
              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                I love surrounding myself with extraordinary people and plants —
                they teach me so much and make me a better person.
              </AnimatedCallout>
              <AnimatedCallout videoIsLoaded={videoIsLoaded}>
                If you love that too, reach out via{" "}
                <InlineLink
                  href={
                    "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B"
                  }
                  text={"Email"}
                />
                ,
                <InlineLink
                  href={"https://twitter.com/georgemaine"}
                  text={"Twitter"}
                />
                , or{" "}
                <InlineLink
                  href={"https://www.linkedin.com/in/georgemaine"}
                  text={"LinkedIn"}
                />
              </AnimatedCallout>
            </main>
          </div>
        </div>
      </div>
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: var(--globalNavHeight) 0 18vh;
          max-width: 168.8rem;
        }
      `}</style>
    </div>
  );
}
