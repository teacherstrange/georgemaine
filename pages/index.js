import React from "react";
import styled from "styled-components";
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
  ZoomableArticle,
  ZoomableArticleMobile,
  ArticleText,
} from "../mamba/index.js";
import { HelloWorld, SuntoryTokiReview } from "../data";

const SectionHeadline = styled(Headline)`
  margin-left: auto;
  margin-right: auto;
  width: 960px;

  @media (max-width: 959px) {
    max-width: 414px;
    width: calc(100% - 60px);
  }
`;

export default function Home() {
  return (
    <main
      style={{
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <Header>
        <img
          width={120}
          height={120}
          src='/images/memoji.png'
          alt='Georgemaine Memoji'
        />
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
        <Separator />
        <SectionHeadline>Writing</SectionHeadline>
        <ZoomableArticleMobile {...SuntoryTokiReview}>
          <ArticleText>
            <strong>Suntory Toki review.</strong> Suntory is a Whiskey
            Distillery founded in 1923 in Yamasaki, the oldest in the Japan. The
            founder—Shinjiro Torii—dreamt of creating a whiskey that one day
            would earn a rightful place at the Japanese dining table. And so far
            it’s earned a place amongst the best whiskey’s in the world.
          </ArticleText>
          <ArticleText>
            Suntory Whisky Toki comes in an elegant bottle made from thick glass
            with a relatively small label. The cap is wrapped in paper that
            feels like crepe, which made it a memorable opening experience.
          </ArticleText>
          <ArticleText>
            The liquid gold content is a blend of Hakashu single malt and Chita
            grain whiskey which meld together in harmony. This unique
            composition makes it excellent for a highball, but I like it old
            fashioned.
          </ArticleText>
          <ArticleText>
            The aroma is extremely woodliness queued by hints of vanilla and
            ginger. The taste is smooth, tender followed by a fruity spicy ness.
            Once it’s initial alcohol wears off you’re left with a fruity and
            well-balanced spicy ness. Because the taste is so harmonious I
            recommend drinking this one neat.
          </ArticleText>
          <ArticleText>
            Sun Tory Toki is simple and harmonious and a great example of what
            makes Japanese whiskey remarkable. It’s earned a place as one of my
            favorites in the collection.
          </ArticleText>
        </ZoomableArticleMobile>
        <ZoomableArticle {...SuntoryTokiReview}>
          <ArticleText>
            <strong>Suntory Toki review.</strong> Suntory is a Whiskey
            Distillery founded in 1923 in Yamasaki, the oldest in the Japan. The
            founder—Shinjiro Torii—dreamt of creating a whiskey that one day
            would earn a rightful place at the Japanese dining table. And so far
            it’s earned a place amongst the best whiskey’s in the world.
          </ArticleText>
          <ArticleText>
            Suntory Whisky Toki comes in an elegant bottle made from thick glass
            with a relatively small label. The cap is wrapped in paper that
            feels like crepe, which made it a memorable opening experience.
          </ArticleText>
          <ArticleText>
            The liquid gold content is a blend of Hakashu single malt and Chita
            grain whiskey which meld together in harmony. This unique
            composition makes it excellent for a highball, but I like it old
            fashioned.
          </ArticleText>
          <ArticleText>
            The aroma is extremely woodliness queued by hints of vanilla and
            ginger. The taste is smooth, tender followed by a fruity spicy ness.
            Once it’s initial alcohol wears off you’re left with a fruity and
            well-balanced spicy ness. Because the taste is so harmonious I
            recommend drinking this one neat.
          </ArticleText>
          <ArticleText>
            Sun Tory Toki is simple and harmonious and a great example of what
            makes Japanese whiskey remarkable. It’s earned a place as one of my
            favorites in the collection.
          </ArticleText>
        </ZoomableArticle>
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
        <ZoomableArticle {...HelloWorld}>
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
        </ZoomableArticle>
      </Section>
    </main>
  );
}
