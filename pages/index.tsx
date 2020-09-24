import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "../components/Nav";
import { IndicatorList } from "../components/IndicatorList";
const navItems = [
  { name: "About me" },
  { name: "Work" },
  { name: "Icons" },
  { name: "Get in touch" },
];
const slideItems = [
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
  const [slide, setSlide] = useState(0);

  // Wrap pages so that you can always navigate between pages without hitting a dead end
  const slideIndex = wrap(0, slideItems.length, slide);

  // Nest hook so that it can be passed on to nested components
  function handleIndexChange(index: number) {
    setSlide(index);
  }

  // Create helper for keyboard navigation
  function paginate(direction: number) {
    setSlide(slide + direction);
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
      <Nav list={navItems} current={slideIndex} onClick={handleIndexChange} />
      <Slides
        onDragEndHelper={paginate}
        current={slideIndex}
        list={slideItems}
      />
      {slideIndex >= 1 && slideIndex <= 4 && (
        <IndicatorList current={slideIndex} list={navItems} />
      )}
    </Wrapper>
  );
};

type SlideItemProps = {
  name: string;
};

interface SlidesProps {
  list: SlideItemProps[];
  current: number;
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

function Slides({ list, current, onDragEndHelper }: SlidesProps) {
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
              opacity: index === current ? 1 : 0,
              x:
                current === index
                  ? `0vw`
                  : index < current
                  ? `-100vw`
                  : index > current
                  ? `calc(${index - current} * 100vw)`
                  : `calc(${index} * 100vw)`,
              scale: index === current ? 1 : 0.8,
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
