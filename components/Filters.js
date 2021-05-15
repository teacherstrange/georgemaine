import { useRef } from "react";

const Filters = ({ array, setId, active }) => (
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
          style={{
            color: object.id === active && "var(--primaryLabelColorLight)",
          }}
        >
          {object.id}
        </button>
      );
    })}
  </>
);

export default Filters;
