import React from "react";
import {
  Manifesto,
  Link,
  Headline,
  Header,
  Section,
  SocialLinks,
  SmallGallery,
  LargeGallery,
  Separator,
  ZoomableArticleMobile,
  ArticleText,
} from "../mamba/index.js";
import { HelloWorld } from "../data";

export default function Home() {
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
      <Section>
        <Headline>Work</Headline>
        <SmallGallery />
        <LargeGallery />
      </Section>
      <Separator />
      <section>
        <Headline
          style={{
            maxWidth: 414,
            width: "calc(100% - 60px)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Writing
        </Headline>
        <ZoomableArticleMobile {...HelloWorld}>
          <ArticleText>
            <strong>Hello world.</strong> As you may or may not be aware, I like
            to tinker with software, and tools,. Ever since I was a young kid, I
            was fascinated with how things worked. Can I remake it differently?
            Would people like that better? The part I hated was actually showing
            my version to people. Go figure.
          </ArticleText>
          <ArticleText>
            Strangely enough, the vicious cycle above is ongoing, which I don't
            mind personally. I make things—it makes me feel better. Software,
            photo's, tree houses, food, urban jungles, video's, clothes just as
            long as its useful to me or others.
          </ArticleText>
          <ArticleText>
            I design—it's my job. Currently, I design products at Pitch. I
            taught myself the basics by copying other's work until I got stuck
            and needed help. I never liked the idea of learning craft from a
            book or going to school, so the only alternative was to reach out to
            people better than me and ask them to teach me. I'm aware this is
            weird. But it’s the way I am; I've met wonderful people that made me
            a better person and taught me so much. But it's still weird, I know.
          </ArticleText>
          <ArticleText>
            Anyway, enough about me—onto the manifesto. From here on out, this
            is my site for my thoughts. If you like them, reach out, or not. If
            you feel it's stupid, that's fine—sometimes the feeling is mutual.
          </ArticleText>
        </ZoomableArticleMobile>
      </section>
    </main>
  );
}
