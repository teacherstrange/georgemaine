import React from "react";
import {
  Manifesto,
  MorphBox,
  Link,
  Headline,
  Header,
  Section,
  SocialLinks,
} from "../src/Mamba";

function WorkSection() {
  return (
    <Section>
      <Headline>Work</Headline>
      <ul
        style={{
          height: 314,
          position: "relative",
        }}
      >
        <MorphBox
          backgroundImage={"url(/images/mobile.png)"}
          width={1582}
          height={1638}
          captionRightEdge={820}
          caption={[
            <strong>Mollie Apps.</strong>,
            "During the last quarter of 2019 I designed Mollie’s mobile apps to enable people to quickly manage payments and watch their business grow.",
            <br />,
            <br />,
            <strong>Enjoy managing payments on mobile. </strong>,
          ]}
          href={"https://apps.apple.com/us/app/mollie/id1473455257?ls=1"}
          label={"Download Mollie for Mobile ↗"}
          project={"Mollie Apps"}
        />
      </ul>
    </Section>
  );
}

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
