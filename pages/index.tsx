import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { StickyNavigation } from "../components/Navigation";
const menuListItems = [
  "Slide 0",
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4",
  "Slide 5",
];

export default () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  function handleIndexChange(index: number) {
    setActiveMenuItem(index);
  }
  return (
    <Wrapper>
      <StickyNavigation
        name="Georgemaine Lourens"
        role="Product Designer"
        list={menuListItems}
        button="Get in touch"
        active={activeMenuItem}
        onClick={handleIndexChange}
      />
      <Slides active={activeMenuItem} list={menuListItems} />
    </Wrapper>
  );
};

interface SlidesProps {
  list: string[];
  active: number;
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
