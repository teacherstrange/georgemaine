import Link from "next/link";
import styles from "./styles.module.css";
import { useRef } from "react";

export const Filters = ({ array, setId }) => (
  <>
    {array.map((object) => {
      const ref = useRef();

      return (
        <button
          className={styles.filter}
          ref={ref}
          onClick={() => (
            setId(object.id),
            setTimeout(() => {
              ref.current.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }, 1000)
          )}
          key={object.id}
        >
          {object.id}
        </button>
      );
    })}
  </>
);

export const FilterLinks = ({ array, setId }) => (
  <>
    {array.map((object) => {
      const ref = useRef();

      return (
        <Link
          key={object.id}
          href={`/?postId=${object.url}`}
          as={`/post/${object.url}`}
        >
          <button
            key={object.id}
            ref={ref}
            onClick={() => (
              setId(object.id),
              setTimeout(() => {
                ref.current.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                });
              }, 1000)
            )}
            className={styles.filter}
          >
            {object.id}
          </button>
        </Link>
      );
    })}
  </>
);
