import Link from "next/link";
import { useRef } from "react";

export const Filters = ({ array, setId }) => (
  <>
    {array.map((object) => {
      const ref = useRef();

      return (
        <button
          ref={ref}
          onClick={() => (
            setId(object.id),
            setTimeout(() => {
              ref.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }, 0)
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
          as={`/blog/${object.url}`}
        >
          <button
            key={object.id}
            ref={ref}
            onClick={() => (
              setId(object.id),
              setTimeout(() => {
                ref.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }, 0)
            )}
          >
            {object.id}
          </button>
        </Link>
      );
    })}
  </>
);
