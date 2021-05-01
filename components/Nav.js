import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Icon from "./Icon";

// FIXME: Is this the right position for these objects
const blog = [{ id: "Hello world", url: "hello_world", width: 112, x: 0 }];

const Nav = ({
  filterId,
  portfolio,
  postId,
  setFilterId,
  setPostId,
  setSlideId,
  slideId,
  socialLinks,
}) => {
  const router = useRouter();
  const selectedSlide = portfolio.findIndex((slide) => slide.id === slideId);
  const selectedPost = blog.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.filters} ${
          filterId === "portfolio" && styles.workFiltersExpanded
        }`}
      >
        {filterId === "blog" || filterId === "watchlist" ? (
          <button
            className={styles.buttonLink}
            onClick={() => (router.push("/"), setFilterId("portfolio"))}
          >
            Portfolio
          </button>
        ) : (
          portfolio.map((slide, index) => (
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
        {filterId == "portfolio" ? (
          <div
            className={styles.filterSelection}
            style={{
              width: portfolio[selectedSlide].width, // FIXME: Update widths
              transform: `translateX(${portfolio[selectedSlide].x}px)`,
            }}
          ></div>
        ) : null}
      </nav>

      <nav className={`${styles.filters} `}>
        {filterId === "portfolio" || filterId === "blog" ? (
          <button
            className={styles.buttonLink}
            onClick={() => (router.push("/"), setFilterId("watchlist"))}
          >
            Watch list
          </button>
        ) : (
          <button className={styles.filter}>Watch List</button>
        )}
      </nav>

      <nav
        className={`${styles.filters} ${
          filterId === "blog" && styles.articleFiltersExpanded
        }`}
      >
        {filterId === "portfolio" || filterId === "watchlist" ? (
          <button
            className={styles.buttonLink}
            onClick={() => setFilterId("blog")}
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
                  onClick={() => setPostId(post.id)}
                  className={styles.filter}
                >
                  About me
                </button>
              </Link>
            ))}
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <a target='_blank' rel='noreferrer' className={styles.button}>
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
