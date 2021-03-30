import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import React, { useState } from "react";

// FIXME: Is this the right position for these objects
const slides = [
  { id: "Mollie Mobile", width: 137, x: 0 },
  { id: "Mollie Video", width: 130, x: 137 },
  { id: "Mollie Checkout", width: 160, x: 267 },
  { id: "Mollie Apple Pay", width: 163, x: 427 },
];

const posts = [
  { id: "Hello world", url: "hello_world", width: 122, x: 0 },
  { id: "Suntory Toki review", url: "suntory_toki_review", width: 185, x: 122 },
];

const links = [
  {
    id: "Email",
    url: "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B",
  },
  {
    id: "Twitter",
    url: "https://twitter.com/georgemaine",
  },
  {
    id: "Github",
    url: "https://github.com/georgemaine",
  },
  {
    id: "LinkedIn",
    url: "www.linkedin.com/in/georgemaine",
  },
  {
    id: "Dribbble",
    url: "https://dribbble.com/georgemaine",
  },
];

export default function Nav({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a className={styles.buttonLink}>
          <Image
            className={styles.buttonLinkIcon}
            src='/images/memoji.jpg'
            height={24}
            width={24}
            alt='Georgemaine Lourens'
            // FIXME: Image doesn't have padding-right
          />
          Georgemaine
        </a>
      </Link>
      <div className={styles.filtersContainer}>
        <nav
          className={`${styles.filters} ${
            filterId === "slides" && styles.workFiltersExpanded
          }`}
        >
          {filterId === "posts" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (router.push("/"), setFilterId("slides"))}
            >
              Work
            </button>
          ) : (
            slides.map((slide, index) => (
              // FIXME: Can we use components here?
              <button
                className={styles.filter}
                onClick={() => setSlideId(slide.id)}
                key={index}
              >
                {slide.id}
              </button>
            ))
          )}
          {filterId == "slides" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: slides[selectedSlide].width,
                transform: `translateX(${slides[selectedSlide].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
        <nav
          className={`${styles.filters} ${
            filterId === "posts" && styles.articleFiltersExpanded
          }`}
        >
          {filterId === "slides" ? (
            <button
              className={styles.buttonLink}
              onClick={() => setFilterId("posts")}
            >
              Articles
            </button>
          ) : (
            posts.map((post, index) => (
              // FIXME: Use components to create these
              <Link
                key={index}
                href={`/?postId=${post.url}`}
                as={`/post/${post.url}`}
              >
                <button
                  onClick={() => setPostId(post.id)}
                  className={styles.filter}
                >
                  {post.id}
                </button>
              </Link>
            ))
          )}
          {filterId == "posts" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: posts[selectedPost].width,
                transform: `translateX(${posts[selectedPost].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
      </div>
      <button onClick={() => setMenuVisible(!menuVisible)}>Get in touch</button>
      {!!menuVisible && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
            onClick={() => setMenuVisible(false)}
          />
          <ul className={styles.menu}>
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.url}>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      className={styles.menuItem}
                    >
                      {item.id}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </header>
  );
}
