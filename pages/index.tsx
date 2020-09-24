import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StickyNavigation } from "../components/Navigation";
const Tabs = [
  { name: "About me" },
  { name: "Work" },
  { name: "Icons" },
  { name: "Get in touch" },
];
const Pages = [
  {
    name: "About me",
  },

  { name: "Mollie Mobile" },

  { name: "Mollie Event Video" },

  { name: "Mollie Checkout" },

  { name: "Mollie Apple Pay Video" },

  { name: "Icons" },

  { name: "Get in touch" },
];
export default () => {
  // Create hooks for handling page switches
  const [page, setPage] = useState(0);

  // Wrap pages so that you can always navigate between pages without hitting a dead end
  const pageIndex = wrap(0, Pages.length, page);

  // Nest hook so that it can be passed on to nested components
  function handleIndexChange(index: number) {
    setPage(index);
  }

  // Create helper for keyboard navigation
  function paginate(direction: number) {
    setPage(page + direction);
  }
  const ArrowRightDown = useKeyPress("ArrowRight");
  const ArrowLeftDown = useKeyPress("ArrowLeft");

  // Trigger for keyboard navigation
  useEffect(() => {
    ArrowRightDown && paginate(1);
    ArrowLeftDown && paginate(-1);
  }, [ArrowRightDown, ArrowLeftDown]);
  return (
    <Wrapper>
      <StickyNavigation
        name="Georgemaine Lourens"
        role="Product Designer"
        list={Tabs}
        button="Get in touch"
        active={pageIndex}
        onClick={handleIndexChange}
      />
      <Slides onDragEndHelper={paginate} active={pageIndex} list={Pages} />
      {pageIndex >= 1 && pageIndex <= 4 && (
        <PageList current={pageIndex} pages={Tabs} />
      )}
    </Wrapper>
  );
};

interface SlidesProps {
  list: string[];
  active: number;
  onDragEndHelper: Function;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function useKeyPress(
  targetKey: string,
  onPressDown = () => {},
  onPressUp = () => {}
) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    };

    // Add event listeners
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
}

function PageList({ pages, current }) {
  const convertedActive =
    current === 1
      ? 0
      : current === 2
      ? 1
      : current === 3
      ? 2
      : current === 4
      ? 3
      : current;
  return (
    <ul
      style={{
        position: "fixed",
        display: "flex",
        bottom: 60,
        left: 0,
        right: 0,
        zIndex: 10,
        listStyle: "none",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      {pages.map((Page, index) => {
        return (
          <li
            key={index}
            style={{
              listStyle: "none",
              margin: "6px 9px",
              width: 9,
              height: 9,
              background: "#86868B",
              borderRadius: "50%",
              opacity: index != convertedActive && 0.4,
            }}
          />
        );
      })}
    </ul>
  );
}

function Slides({ list, active, onDragEndHelper }: SlidesProps) {
  return (
    <motion.ul
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      {list.map((listItem, index) => {
        return (
          <motion.li
            animate={{
              opacity: index === active ? 1 : 0,
              x:
                active === index
                  ? `0vw`
                  : index < active
                  ? `-100vw`
                  : index > active
                  ? `calc(${index - active} * 100vw)`
                  : `calc(${index} * 100vw)`,
              scale: index === active ? 1 : 0.8,
            }}
            key={index}
            transition={{
              type: "spring",
              damping: 200,
              stiffness: 300,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                onDragEndHelper(1);
              } else if (swipe > swipeConfidenceThreshold) {
                onDragEndHelper(-1);
              }
            }}
            style={{
              cursor: "grab",
              display: "inline-block",
              position: "fixed",
              top: 168,
              right: 0,
              left: 0,
              bottom: 0,
              textAlign: "center",
              background: "var(--red)",
            }}
          >
            <h1>{listItem.name}</h1>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export const Wrapper = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fafafa;
  color: #111;
`;

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
