import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

// FIXME: Find a better spot for these data objects
const Article = ({ id }) => {
  switch (id) {
    case "hello_world":
      return (
        <>
          <p className={styles.body}>
            <time datetime='2021-04-03'>Published April 3, 2021</time>
          </p>
          <p className={styles.body}>
            <strong>Hello world. </strong>As you may or may not be aware, I like
            to tinker with software, and tools,. Ever since I was a young kid, I
            was fascinated with how things worked. Can I remake it differently?
            Would people like that better? The part I hated was actually showing
            my version to people. Go figure.
          </p>
          <p className={styles.body}>
            Strangely enough, the vicious cycle above is ongoing, which I don't
            mind personally. I make things—it makes me feel better. Software,
            websites, food, urban jungles, video's, clothes just as long as its
            useful to me or others.
          </p>
          <p className={styles.body}>
            I design—it's my job. Currently, I design products at Pitch. I
            taught myself the basics by copying other's work until I got stuck
            and needed help. I never liked the idea of learning craft from a
            book or going to school, so the only alternative was to reach out to
            people better than me and ask them to teach me. I'm aware this is
            weird. But it’s the way I am; I've met wonderful people that made me
            a better person and taught me so much. But it's still weird, I know.
          </p>
          <p className={styles.body}>
            Anyway, enough about me—onto the manifesto. From here on out, this
            is my site for my thoughts. If you like them, reach out, or not. If
            you feel it's stupid, that's fine—sometimes the feeling is mutual.
          </p>
          <p className={styles.body}>
            Either way, it's refreshing to have a corner on the web that I can
            call my own. Welcome, everyone.
          </p>
        </>
      );
    case "suntory_toki_review":
      return (
        <>
          <p className={styles.body}>
            <time datetime='2021-04-03'>Published April 3, 2021</time>
          </p>
          <p className={styles.body}>
            <strong>Suntory Toki review.</strong> Suntory is a Whiskey
            Distillery founded in 1923 in Yamasaki, the oldest in the Japan. The
            founder—Shinjiro Torii—dreamt of creating a whiskey that one day
            would earn a rightful place at the Japanese dining table. And so far
            it’s earned a place amongst the best whiskey’s in the world.
          </p>
          <p className={styles.body}>
            Suntory Whisky Toki comes in an elegant bottle made from thick glass
            with a relatively small label. The cap is wrapped in paper that
            feels like crepe, which made it a memorable opening experience.
          </p>
          <p className={styles.body}>
            The liquid gold content is a blend of Hakashu single malt and Chita
            grain whiskey which meld together in harmony. This unique
            composition makes it excellent for a highball, but I like it old
            fashioned.
          </p>
          <p className={styles.body}>
            The aroma is extremely woodliness queued by hints of vanilla and
            ginger. The taste is smooth, tender followed by a fruity spicy ness.
            Once it’s initial alcohol wears off you’re left with a fruity and
            well-balanced spicy ness. Because the taste is so harmonious I
            recommend drinking this one neat.
          </p>
          <p className={styles.body}>
            SunTory Toki is simple and harmonious and a great example of what
            makes Japanese whiskey remarkable. It’s earned a place as one of my
            favorites in the collection.
          </p>
        </>
      );
    default:
      return (
        <>
          <p className={styles.body}>
            <time datetime='2021-04-03'>Published April 3, 2021</time>
          </p>
          <p className={styles.body}>
            <strong>Hello world.</strong> As you may or may not be aware, I like
            to tinker with software, and tools,. Ever since I was a young kid, I
            was fascinated with how things worked. Can I remake it differently?
            Would people like that better? The part I hated was actually showing
            my version to people. Go figure.
          </p>
          <p className={styles.body}>
            Strangely enough, the vicious cycle above is ongoing, which I don't
            mind personally. I make things—it makes me feel better. Software,
            photo's, tree houses, food, urban jungles, video's, clothes just as
            long as its useful to me or others.
          </p>
          <p className={styles.body}>
            I design—it's my job. Currently, I design products at Pitch. I
            taught myself the basics by copying other's work until I got stuck
            and needed help. I never liked the idea of learning craft from a
            book or going to school, so the only alternative was to reach out to
            people better than me and ask them to teach me. I'm aware this is
            weird. But it’s the way I am; I've met wonderful people that made me
            a better person and taught me so much. But it's still weird, I know.
          </p>
          <p className={styles.body}>
            Anyway, enough about me—onto the manifesto. From here on out, this
            is my site for my thoughts. If you like them, reach out, or not. If
            you feel it's stupid, that's fine—sometimes the feeling is mutual.
          </p>
          <p className={styles.body}>
            Either way, it's refreshing to have a corner on the web that I can
            call my own. Welcome, everyone.
          </p>
        </>
      );
  }
};

const Seperator = () => <hr className={styles.articleSeperator} />;

const Footer = () => {
  return (
    <footer className={styles.articleFooter}>
      <Seperator />
      <p className={styles.articleFooterBody}>
        Thoughts or idea’s? Reach out to me via{" "}
        <Link
          href={
            "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B"
          }
        >
          email
        </Link>{" "}
        or <Link href={"https://twitter.com/georgemaine"}>Twitter</Link>.
      </p>
      <div className={styles.articleFooterAuthor}>
        <Image
          src='/images/avatar.png'
          quality={100}
          height={48}
          width={48}
          alt='Georgemaine Lourens'
          className={styles.articleAvatar}
          // FIXME: Image doesn't have padding-right
        />
        <p className={styles.articleFooterBody}>
          Written by{" "}
          <Link href={"https://twitter.com/georgemaine"}>
            Georgemaine Lourens
          </Link>
        </p>
      </div>
    </footer>
  );
};

const Post = ({ id }) => {
  return (
    <>
      <figure
        className={styles.articleArtwork}
        style={{
          backgroundColor: `var(--container)`, // FIXME: Fetch images based on post
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Image placeholder
      </figure>
      <div className={styles.articleContent}>
        <Article id={id} />
        <Footer />
      </div>
    </>
  );
};

export default Post;
