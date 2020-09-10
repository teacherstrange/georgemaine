import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { StickyNavigation } from "../components/Navigation";

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
        list={["About me", "Work", "Icons"]}
        button="Get in touch"
        active={activeMenuItem}
        onClick={handleIndexChange}
      />
      <Slides />
    </Wrapper>
  );
};

function Slides() {
  return (
    <motion.ul
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <li
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
        <h1>1</h1>
      </li>
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
