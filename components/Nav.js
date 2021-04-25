import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Icon from "./Icon";
import { useState } from "react";

// FIXME: Is this the right position for these objects
const slides = [
  {
    id: "Mollie Mobile",
    caption:
      "Designed apps for iOS, Android and developed the landing page • 2020",
    width: 141,
    x: 0,
  },
  {
    id: "Mollie Video",
    caption:
      "Created an engaging video to help showcase Mollie at events • 2020",
    width: 133,
    x: 141,
  },
  {
    id: "Mollie Checkout",
    caption:
      "Redesigned and developed the Mollie Checkout Web application • 2019",
    width: 164,
    x: 274,
  },
  {
    id: "Mollie Apple Pay",
    caption:
      "Created an engaging promo video for the Mollie Apple Pay launch • 2019",
    width: 164,
    x: 436,
  },
];

const blog = [{ id: "Hello world", url: "hello_world", width: 112, x: 0 }];
const watchlist = [
  {
    title: "Wonder Woman",
    description:
      "Before she was Wonder Woman, she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers… and her true destiny.",
    metadata: {
      genre: "Action",
      date: "2017",
      duration: "2 hr 21 min",
      platform: "Apple TV+",
    },
  },
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
    url: "https://www.linkedin.com/in/georgemaine",
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
  const [expandedContactLinks, setExpandedContactLinks] = useState(false); // FIXME: Clean this up
  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = blog.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  const handleFilters = (hook, id) => {
    hook(id);
    setExpandedContactLinks(false);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.filters} ${
          filterId === "slides" && styles.workFiltersExpanded
        }`}
      >
        {filterId === "blog" || filterId === "watchlist" ? (
          <button
            className={styles.buttonLink}
            onClick={() => (
              router.push("/"), handleFilters(setFilterId, "slides")
            )}
          >
            Portfolio
          </button>
        ) : (
          slides.map((slide, index) => (
            // FIXME: Can we use components here?
            <button
              className={styles.filter}
              onClick={() => handleFilters(setSlideId, slide.id)}
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
              width: slides[selectedSlide].width, // FIXME: Update widths
              transform: `translateX(${slides[selectedSlide].x}px)`,
            }}
          ></div>
        ) : null}
      </nav>

      <nav className={`${styles.filters} `}>
        {filterId === "slides" || filterId === "blog" ? (
          <button
            className={styles.buttonLink}
            onClick={() => (
              router.push("/"), handleFilters(setFilterId, "watchlist")
            )}
          >
            Watch List
          </button>
        ) : (
          watchlist.map((item, index) => (
            // FIXME: Can we use components here?
            <button
              className={styles.filter}
              onClick={() => handleFilters(setSlideId, item.id)}
              key={index}
            >
              Watch List
            </button>
          ))
        )}
        {/* {filterId == "watchlist" ? (
          <div
            className={styles.filterSelection}
            style={{
              width: watchlist[selectedSlide].width, // FIXME: Update widths
              transform: `translateX(${watchlist[selectedSlide].x}px)`,
            }}
          ></div>
        ) : null} */}
      </nav>

      <nav
        className={`${styles.filters} ${
          filterId === "blog" && styles.articleFiltersExpanded
        }`}
      >
        {filterId === "slides" || filterId === "watchlist" ? (
          <button
            className={styles.buttonLink}
            onClick={() => handleFilters(setFilterId, "blog")}
          >
            Get in touch
          </button>
        ) : (
          <>
            {blog.map((post, index) => (
              // FIXME: Use components to create these
              <Link
                key={index}
                href={`/?postId=${post.url}`}
                as={`/blog/${post.url}`}
              >
                <button
                  onClick={() => handleFilters(setPostId, post.id)}
                  className={styles.filter}
                >
                  About me
                </button>
              </Link>
            ))}
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => setExpandedContactLinks(false)}
                  className={styles.button}
                >
                  <Icon string={link.id} />
                </a>
              </Link>
            ))}
          </>
        )}
        {filterId == "blog" ? (
          <div
            className={styles.filterSelection}
            style={{
              width: blog[selectedPost].width,
              transform: `translateX(${blog[selectedPost].x}px)`,
            }}
          ></div>
        ) : null}
      </nav>
    </header>
  );
};

export default Nav;
