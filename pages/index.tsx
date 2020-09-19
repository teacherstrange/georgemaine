import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StickyNavigation } from "../components/Navigation";
const Pages = [
  "About me",
  "Mollie Mobile",
  "Mollie Event Video",
  "Mollie Checkout",
  "Mollie Apple Pay Video",
  "Icons",
  "Get in touch",
];
const MenuItems = ["About me", "Work", "Icons", "Get in touch"];
export default () => {
  const [page, setPage] = useState(0);
  const pageIndex = wrap(0, Pages.length, page);
  function handleIndexChange(index: number) {
    setPage(index);
  }

  function paginate(direction: number) {
    setPage(page + direction);
  }
  const ArrowRightDown = useKeyPress("ArrowRight");
  const ArrowLeftDown = useKeyPress("ArrowLeft");
  useEffect(() => {
    ArrowRightDown && paginate(1);
    ArrowLeftDown && paginate(-1);
  }, [ArrowRightDown, ArrowLeftDown]);
  return (
    <Wrapper>
      <StickyNavigation
        name="Georgemaine Lourens"
        role="Product Designer"
        list={MenuItems}
        button="Get in touch"
        active={pageIndex}
        onClick={handleIndexChange}
      />
      <Slides active={pageIndex} list={Pages} />
    </Wrapper>
  );
};

interface SlidesProps {
  list: string[];
  active: number;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function useKeyPress(
  targetKey,
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

function Slides({ list, active }: SlidesProps) {
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
              damping: 74,
              stiffness: 120,
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
            <h1>{listItem}</h1>
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
