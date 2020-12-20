import styled from "styled-components";
import { motion } from "framer-motion";
import { Nav } from "../components/Nav";
import { Caption, Manifesto } from "../components/Typography";
import { A } from "../components/Link/style";
import { Video } from "../components/Video";
import { Button } from "../components/Button";
const NavItems = [
  { name: "Home", id: "" },
  { name: "Work", id: "work" },
  { name: "Icons", id: "icons" },
];

export default () => {
  return (
    <Wrapper>
      <Nav NavItems={NavItems} />
    </Wrapper>
  );
};

export const Wrapper = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #ebedef;
  color: #111;
`;

export const MemojiImg = styled.img`
  max-height: calc(186px * 0.75);
  height: 100%;
  margin: 68px auto 0;
  pointer-events: none;

  @media only screen and (min-width: 600px) {
    max-height: 186px;
    margin: 30px auto 0;
  }
`;
