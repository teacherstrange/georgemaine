import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
  max-width: 177px;
  margin: 60px auto 0;
  z-index: 10;
  overflow: hidden;

  @media only screen and (max-width: 599px) {
    position: absolute;
    margin-top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
  }
`;

export const NavList = styled(motion.ul)`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: var(--spaceXXS) var(--spaceXS);
  margin: 0 auto;
  border-radius: var(--spaceL);
  background-color: #fff;
  transition: background-color 0.15s;

  li {
    list-style: none;
  }
`;
