import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";

// FIXME: Is this the right position for these objects
const slides = [
  {
    id: "Mollie Mobile",
    caption:
      "Designed apps for iOS, Android and developed the landing page • 2020",
    width: 138,
    x: 0,
  },
  {
    id: "Mollie Video",
    caption:
      "Created an engaging video to help showcase Mollie at events • 2020",
    width: 130,
    x: 138,
  },
  {
    id: "Mollie Checkout",
    caption:
      "Redesigned and developed the Mollie Checkout Web application • 2019",
    width: 160,
    x: 268,
  },
  {
    id: "Mollie Apple Pay",
    caption:
      "Created an engaging promo video for the Mollie Apple Pay launch • 2019",
    width: 162,
    x: 427,
  },
];

const posts = [
  { id: "Hello world", url: "hello_world", width: 122, x: 0 },
  { id: "Suntory Toki review", url: "suntory_toki_review", width: 184, x: 122 },
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
    id: "Dribbble",
    url: "https://dribbble.com/georgemaine",
  },
  {
    id: "Github",
    url: "https://github.com/georgemaine",
  },
  {
    id: "LinkedIn",
    url: "www.linkedin.com/in/georgemaine", // FIXME: Broken link
  },
];

const Nav = ({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) => {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a className={styles.buttonLink}>
          <Image
            src='/images/memoji.png'
            quality={100}
            height={36}
            width={36}
            alt='Georgemaine Lourens'
            // FIXME: Image doesn't have padding-right
          />
          {/* <strong>Georgemaine</strong> */}
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
      <button
        className={styles.button}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        Get in touch
      </button>
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
                      <span>{item.id}</span>
                      <Icon string={item.id} />
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
};

export default Nav;
