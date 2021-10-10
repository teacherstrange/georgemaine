import GlobalNav from "../components/GlobalNav";
import { StickyMedia } from "../components/Media";
import {
  AnimatedCaption,
  InlineLink,
  AnimatedSeasonCallout,
  AnimatedCallout,
} from "../components/TextTile";
import { ScrollBar } from "../components/ScrollBar";

const hortus1 = "/media/hortus-1.jpeg";
const hortus2 = "/media/hortus-2.jpeg";
const hortus3 = "/media/hortus-3.jpeg";
const plant = "/media/plant.jpeg";
const alwaysSunday = "/media/always-sunday.jpg";
const hibiki = "/media/hibiki.jpg";
const appleWatchMarchChallenge = "/media/apple-watch-march-challenge.jpeg";

export default function Outlet() {
  return (
    // FIXME: Make reuable without inline styles
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
              <GlobalNav />

              <StickyMedia
                src={hortus1}
                alt={"Visited Hortus Botanicus Amsterdam"}
                imgHeight={1450}
                imgWidth={1947}
              />
              <StickyMedia
                src={hortus3}
                alt={"Visited Hortus Botanicus Amsterdam"}
                width={"50%"}
                imgHeight={3024}
                imgWidth={4032}
              />
              <StickyMedia
                src={hortus2}
                alt={"Visited Hortus Botanicus Amsterdam"}
                imgHeight={2851}
                imgWidth={3997}
              />
              <AnimatedCallout marginFactor={3}>
                “No one succeeds alone.”
                <br /> — Lauren Gallo
              </AnimatedCallout>

              <StickyMedia
                src={plant}
                alt={"Bought the extraordinary Phyllanthus Mirabilis"}
                imgWidth={4032}
                imgHeight={3024}
                marginFactor={3}
              >
                <AnimatedCaption>
                  Meet Phyllanthus Mirabilis. During dusk, the leaves fold
                  together in pairs like a butterfly — honestly, I can’t 😍.
                  It’s from{" "}
                  <InlineLink
                    href='https://www.instagram.com/avalonamsterdam/'
                    text=' Avalonamsterdam'
                  />
                  , a cute plants shop.
                </AnimatedCaption>
              </StickyMedia>
              <StickyMedia
                src={alwaysSunday}
                alt={"Always Sunday by Music"}
                width={"50%"}
                imgWidth={1158}
                imgHeight={1158}
                marginFactor={3}
              >
                <AnimatedCaption>
                  Lately, most of my weekends start with playing{" "}
                  <InlineLink
                    href={
                      "https://music.apple.com/nl/playlist/always-sunday/pl.401b996cbcda4861ae8da67b8cd3ff32?l=en"
                    }
                    text={"Always Sunday"}
                  />{" "}
                  in the background. Genuinely enjoying the lovely low-key
                  vibes.
                </AnimatedCaption>
              </StickyMedia>
              <StickyMedia
                src={hibiki}
                alt={"Finally tasted Hibiki by Suntory Toki"}
                imgWidth={4032}
                imgHeight={3024}
              />
              <AnimatedSeasonCallout>Summer</AnimatedSeasonCallout>
              <StickyMedia
                src={appleWatchMarchChallenge}
                alt={"Completed Apple's March Challenge"}
                imgWidth={2875}
                imgHeight={3833}
                marginFactor={3}
              />
              <AnimatedCallout>
                I love tinkering with things — it empowers me to explore my
                ideas.
              </AnimatedCallout>
              <AnimatedCallout>
                Sometimes, I get <i>so caught</i> up in tinkering that nothing
                else really matters — I don’t even realize what time it is 🙈
              </AnimatedCallout>
              <AnimatedCallout>
                During the lockdown, I finally realized why I could spend hours
                tinkering, thinking it’s only a couple of minutes.
              </AnimatedCallout>
              <AnimatedCallout>
                I’m just expressing my emotion, energy, and talent — it’s my
                outlet.
              </AnimatedCallout>
              <AnimatedCallout>
                So, I came up with this page — a real-time feed of some of those
                expressions, posted chronologically.
              </AnimatedCallout>
              <AnimatedCallout>
                Hopefully, one day this page will tell me a story of all the
                times I messed up and kept going while exploring ideas. Haha.
              </AnimatedCallout>
              <AnimatedSeasonCallout>Spring</AnimatedSeasonCallout>
              <AnimatedSeasonCallout>2021</AnimatedSeasonCallout>
            </main>
          </div>
        </div>
      </div>
      <style jsx>{`
        main {
          width: 86vw;
          margin-left: auto;
          margin-right: auto;
          padding: 0 0 18vh;
          max-width: 168.8rem;
        }
      `}</style>
    </div>
  );
}
